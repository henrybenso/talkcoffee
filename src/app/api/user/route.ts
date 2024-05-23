import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../db";
import { createAvatar } from "@dicebear/core";
import { avataaarsNeutral } from "@dicebear/collection";

// export async function GET(req: Request) {
//   const cred = req.credentials;
//   // const requestHeaders: HeadersInit = new Headers();
//   // requestHeaders.set("Content-Type", "API-Key");
//   // const res = await fetch("", {
//   //   // headers: requestHeaders,
//   // });
//   const result = await prisma.user.findUnique({
//     where: {
//       email: userEmail,
//     },
//   });
//   const data = await result.json();

//   return NextResponse.json({ data });
// }

// export const RoleTypes: {
//   BASIC: "BASIC";
//   PREMIUM: "PREMIUM";
//   ADMIN: "ADMIN";
// } = {
//   BASIC: "BASIC",
//   PREMIUM: "PREMIUM",
//   ADMIN: "ADMIN",
// };

// export type RoleTypes = (typeof RoleTypes)[keyof typeof RoleTypes];

// type UserType = {
//   email: string;
//   username: string;
//   beans: number;
//   passwordHash: string;
//   avatar: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   age: number | null;
//   role: RoleTypes;
//   birthDate: Date;
// };

// export async function POST(request: Request) {
//   const res = await request.json();
//   console.log("res: ", res);

//   const {
//     email,
//     username,
//     passwordHash,
//     avatar,
//     firstName,
//     lastName,
//     age,
//     role,
//     birthDate,
//   }: UserType = res;

//   const result = await prisma.user.create({
//     data: {
//       email,
//       username,
//       passwordHash,
//       avatar,
//       firstName,
//       lastName,
//       age,
//       role,
//       birthDate,
//     },
//   });

//   return NextResponse.json({ result });
// }

// export async function PATCH(request: Request) {
//   const res = await request.json();

//   const {
//     email,
//     username,
//     avatar,
//     firstName,
//     lastName,
//     age,
//     birthDate,
//   }: UserType = res;

//   const result = prisma.user.update({
//     where: {
//       email: email,
//     },
//     data: {
//       username: username,
//       avatar: avatar != null ? avatar : undefined,
//       firstName: firstName != null ? firstName : undefined,
//       lastName: lastName != null ? lastName : undefined,
//       age: age != null ? age : undefined,
//       birthDate: birthDate != null ? birthDate : undefined,
//     },
//   });

//   return NextResponse.json({ result });
// }

// export async function DELETE(req: Request) {
//   const res = await req.json();

//   const { email }: { email: string } = res;

//   const result = prisma.user.delete({
//     where: {
//       email: email,
//     },
//   });

//   return NextResponse.json({ result });
// }

type TempUserType = {
    username: string;
    password: string;
    avatar: string;
};

export async function POST(request: NextRequest) {
    const res = await request.json();
    // const resjson = JSON.parse(res);

    console.log("res: ", res);

    const username = res.User._username;
    const password = res.User._password;
    let avatar = res.User?._avatar;

    if (!avatar) {
        const avatarObj = createAvatar(avataaarsNeutral, {
            backgroundColor: ["614335", "ae5d29", "b6e3f4", "c0aede", "d08b5b", "d1d4f9", "edb98a", "f8d25c", "fd9841", "ffd5dc", "ffdbb4", "ffdfbf"],
            eyes: ["closed", "default", "eyeRoll", "happy", "side", "squint", "surprised", "wink", "winkWacky"],
            mouth: ["concerned", "default", "eating", "grimace", "screamOpen", "serious", "smile", "twinkle"],
            eyebrows: ["angryNatural",
                "defaultNatural",
                "flatNatural",
                "frownNatural",
                "raisedExcitedNatural",
                "sadConcernedNatural",
                "upDownNatural",
                "angry",
                "default",
                "raisedExcited",
                "sadConcerned",
                "upDown"],
            randomizeIds: true,
        })
        avatar = avatarObj.toString()
    }

    const result = await prisma.tempUser.create({
        data: {
            username,
            password,
            avatar,
        },
    });

    return NextResponse.json({ result });
}