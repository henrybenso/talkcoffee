import { z } from 'zod'

const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const TIME_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
export const VALUES = ["CAFE", "BAR"] as const;
const MAX_FILE_SIZE = 500000;

export const dineOptions = [
    { value: z.enum(VALUES), label: "sit in" },
    { value: z.enum(VALUES), label: "bar" },
];


export const schemaStoreUser = z.object({
    name: z.string().min(1),
    rating: z.string().transform((val, ctx) => {
        const parsed = parseInt(val);
        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Not a number",
            });
            return z.NEVER;
        }
        if (parsed < 1 || parsed > 5) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please input a valid number",
            });
            return z.NEVER;
        }
        return parsed;
    }),
    instagramHandle: z.string().optional(),
    dine: z.object({
        table: z.boolean(),
        bar: z.boolean(),
    }),
    avatar: z.any().refine((files) => files?.length == 1, "An image is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`),
    images: z.any().refine((files) => files?.length >= 3, "Minimum of 3 images required.")
        .refine((files) => files?.length <= 5, "Maximum of 5 images allowed.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)

});

const hoursSchema = z.object({
    open: z.string().regex(TIME_REGEX),
    close: z.string().regex(TIME_REGEX),
}).refine((data) => data.open !== data.close, {
    message: "Times cannot be the same value!",
});
const emptyHours = z.object({
    open: z.string().length(0),
    close: z.string().length(0),
});

const hoursBothOrNeither = hoursSchema.or(emptyHours);

export const schemaStore = z.object({
    name: z.string().min(1, { message: "Required" }),
    rating: z.string(),
    phoneNumber: z.string().regex(PHONE_NUMBER_REGEX, "Invalid phone number"),
    instagramHandle: z.string(),
    avatar: z.any().refine((files) => files?.length == 1, "An image is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`),
    images: z.any().refine((files) => files?.length == 5, "5 images required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`),
    serviceTypes: z.object({
        dine: z.object({
            table: z.boolean(),
            bar: z.boolean(),
        }),
        takeout: z.boolean(),
        delivery: z.boolean(),
        curbsidePickup: z.boolean(),
    }),
    hours: z.object({
        SUN: hoursBothOrNeither,
        // .refine(
        //   (data) =>
        //     data.open !== "" && data.close !== "" && data.open === data.close,
        //   {
        //     message: "Times cannot be the same value!",
        //     path: ["sunday"],
        //     params: { open: "Times cannot be the same value!" },
        //   }
        // ),
        MON: hoursBothOrNeither,
        TUE: hoursBothOrNeither,
        WED: hoursBothOrNeither,
        TR: hoursBothOrNeither,
        FRI: hoursBothOrNeither,
        SAT: hoursBothOrNeither,
    }),
});