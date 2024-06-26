import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import { prisma } from "../../../db"
import { schemaStoreBackend } from "@/app/validation"

import moment from "../../../utils/moment-timezone"

// cloudinary.config(process.env.CLOUDINARY_URL || '');

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


interface Days {
  sunday: "SUN",
  monday: "MON",
  tuesday: "TUE",
  wednesday: "WED",
  thursday: "TR",
  friday: "FRI",
  saturday: "SAT",
}

export const Days = {
  sunday: "SUN",
  monday: "MON",
  tuesday: "TUE",
  wednesday: "WED",
  thursday: "TR",
  friday: "FRI",
  saturday: "SAT",
}

export const DineTypes: {
  CAFE: "CAFE";
  BAR: "BAR";
} = {
  CAFE: "CAFE",
  BAR: "BAR",
};

export type DineTypes = (typeof DineTypes)[keyof typeof DineTypes];

// type SitInType = {
//   value: DineTypes
//   label: string
// };

// type OutDineType = {
//   value: boolean
//   label: string
// }

type HoursType = {
  open: string
  close: string
}

// type ServiceTypesType = {
//   sitIn: SitInType[];
//   takeOut: OutDineType;
//   delivery: OutDineType
//   curbsidePickup: OutDineType;
// };

type ServiceHoursType = {
  sunday: HoursType
  monday: HoursType
  tuesday: HoursType
  wednesday: HoursType
  thursday: HoursType
  friday: HoursType
  saturday: HoursType
}

// type FileType = {
//   name: string
//   lastModified: string
//   lastModifiedDate: Date
// }

// type StoreType = {
//   name: string;
//   rating: string;
//   phoneNumber: string;
//   instagramHandle: string;
//   avatar: FileType;
//   // images: [ImagesType]
//   serviceTypes: ServiceTypesType;
//   serviceHours: ServiceHoursType;
//   timezone: string;
// };

// type ImagesType = {
//   publicId: string;
//   format: string;
//   version: string;
// };

// export async function GET() {
//   const result = await prisma.store.findMany();
//   return NextResponse.json({ result });
// }

export async function POST(request: NextRequest) {

  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  })

  const formData = await request.formData()
  const storeFlat = formData.get("store")
  const storeObj = JSON.parse(String(storeFlat))

  const file = formData.get("avatar")
  const fileName = (file as File).name;
  const fileBlob = file as Blob
  const filePath = `public/images/uploads/${fileName}`

  const imageOne = formData.get("imageOne"); const imageTwo = formData.get("imageTwo"); const imageThree = formData.get("imageThree"); const imageFour = formData.get("imageFour"); const imageFive = formData.get("imageFive")

  const imagesArr = [
    imageOne, imageTwo, imageThree, imageFour, imageFive
  ]

  const parse = schemaStoreBackend.safeParse({
    name: storeObj["name"],
    rating: storeObj["rating"],
    phoneNumber: storeObj["phoneNumber"],
    instagramHandle: storeObj["instagramHandle"],
    avatar: storeObj["avatar"],
    serviceTypes: storeObj["serviceTypes"],
    serviceHours: storeObj["serviceHours"]
  });

  if (!parse.success) {
    return NextResponse.json({ error: 'Failed to create Store' }, { status: 500 })
  }

  if (!file) {
    return NextResponse.json(
      { error: "Avatar File blob is required." },
      { status: 400 }
    );
  }

  if (!imageOne || !imageTwo || !imageThree || !imageFour || !imageFive) {
    return NextResponse.json(
      { error: "Images File blob is required." },
      { status: 400 }
    )
  }


  const buffer = Buffer.from(await fileBlob.arrayBuffer());
  const storeData = parse.data
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const averageRating = parseInt(storeData.rating)
  const ratingCount = 1
  const sitIn = storeData.serviceTypes.sitIn
  const sitInArr: DineTypes[] = []
  // let date = new Date()
  // let dateToText = date.toISOString()
  // let currentDate: string = dateToText.slice(0, 10)

  sitIn.map((obj) => {
    sitInArr.push(obj.value)
  })

  // ! Don't allow blanks as default fields
  const arr = Object.keys(storeData.serviceHours).forEach((key) => {
    if (storeData.serviceHours[key].open === "" || storeData.serviceHours[key].close === "") {
      // delete storeData.serviceHours[key]
      return NextResponse.json(
        { error: "Open and/or Close fields cannot be blank" },
        { status: 400 }
      )
    }
  })

  const keys = Object.keys(storeData.serviceHours)

  const serviceHoursPromise = await Promise.all(keys.map(async (key) => {
    let currentDay = storeData.serviceHours[key as keyof ServiceHoursType]
    currentDay.day = (Days as Days)[key]
    // let formattedCloseDate = currentDate.concat(" ", currentDay.close)
    // let convertedCloseDate = await moment.tz(formattedCloseDate, timezone)
    // currentDay.close = convertedCloseDate.utc().format()
    // let formattedOpenDate = currentDate.concat(" ", currentDay.open)
    // let convertedOpenDate = await moment.tz(formattedOpenDate, timezone)
    // currentDay.open = convertedOpenDate.utc().format()

    return currentDay
  }))

  fs.writeFileSync(filePath, buffer)
  const imageData = await cloudinary.uploader.upload(filePath)
  fs.unlinkSync(filePath)


  // 413, 415, 422
  const imagesPromise = await Promise.all(
    imagesArr.map(async (image) => {
      const imageFileName = (image as File).name;
      const imageFileBlob = image as Blob
      const imageFilePath = `public/images/uploads/${imageFileName}`
      const imageBuffer = Buffer.from(await imageFileBlob.arrayBuffer());
      fs.writeFileSync(imageFilePath, imageBuffer)
      const imagesImageData = await cloudinary.uploader.upload(imageFilePath)
      fs.unlinkSync(imageFilePath)
      return { "publicId": imagesImageData.public_id, "format": imagesImageData.format, "version": imagesImageData.version.toString() }
    })
  )

  const store = {
    name: storeData.name,
    averageRating: averageRating,
    ratingCount: ratingCount,
    phoneNumber: storeData.phoneNumber,
    instagramHandle: storeData.instagramHandle,
    avatar: {
      publicId: imageData.public_id,
      format: imageData.format,
      version: imageData.version.toString(),
    },
    images: imagesPromise,
    serviceTypes: {
      sitIn: sitInArr,
      takeOut: storeData.serviceTypes.takeOut.value,
      delivery: storeData.serviceTypes.delivery.value,
      curbsidePickup: storeData.serviceTypes.curbsidePickup.value
    },
    serviceHours: serviceHoursPromise
  }

  const name = store.name, phoneNumber = store.phoneNumber, instagramHandle = store.instagramHandle, avatarPublicId = store.avatar.publicId, avatarFormat = store.avatar.format, avatarVersion = store.avatar.version, images = store.images, serviceTypesSitIn = store.serviceTypes.sitIn, serviceTypesTakeOut = store.serviceTypes.takeOut, serviceTypesDelivery = store.serviceTypes.delivery, serviceTypesCurbsidePickup = store.serviceTypes.curbsidePickup, serviceHours = store.serviceHours
  const result = await prisma.store.create({
    data: {
      name,
      averageRating,
      ratingCount,
      phoneNumber,
      instagramHandle,
      avatar: {
        create: {
          publicId: avatarPublicId,
          format: avatarFormat,
          version: avatarVersion
        }
      },
      images: {
        createMany: {
          data:
            images

        }
      },
      serviceTypes: {
        create: {
          sitIn: serviceTypesSitIn,
          takeOut: serviceTypesTakeOut,
          delivery: serviceTypesDelivery,
          curbsidePickup: serviceTypesCurbsidePickup
        }
      },
      serviceHours: {
        createMany: {
          data:
            serviceHours

        }
      }
    }
  })

  return Response.json({
    result,
  });
}
