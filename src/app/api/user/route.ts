import * as argon2 from "argon2";
import { NextResponse } from "next/server";
import { prisma } from "../../../../db";
import saltAndHashPassword from "@/utils/hash";

export async function GET(req: Request) {
    const cred: { email: string, password: string, passHash: string } = await req.json();
    const userEmail = cred.email;
    // const requestHeaders: HeadersInit = new Headers();
    // requestHeaders.set("Content-Type", "API-Key");
    // const res = await fetch("", {
    //   // headers: requestHeaders,
    // });
    const result = await prisma.user.findUnique({
        where: {
            email: userEmail,

        },
    });

    if (!result?.email) {
        return NextResponse.json({ error: "User not found" });
    }

    const verfiyPasswordHash = await saltAndHashPassword(cred.password);


    // try {
    //     if (await argon2.verify(verfiyPasswordHash, cred.password)) {

    // }
    if (result.passwordHash !== cred.passHash || result.passwordHash !== verfiyPasswordHash) {
        return NextResponse.json({ error: "Incorrect password" });
    }

    return NextResponse.json({ result });
}

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