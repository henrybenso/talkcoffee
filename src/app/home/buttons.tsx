// "use client";
// import Image from "next/image";
// import { PrismaStoreType } from "../types";
// // import { CldImage } from "next-cloudinary";
// import { GetCldImageUrl, getCldImageUrl } from "next-cloudinary";

// const Result = ({ store }: { store: PrismaStoreType }) => {
//   console.log(store);

//   const url = getCldImageUrl({
//     width: 960,
//     height: 600,
//     src: store.avatar.publicId,
//   });
//   return (
//     <div className="grid text-sm pl-5 p-3 border black-black">
//       {/* <h1>Your Search Results: for {stores.query}</h1> */}
//       <div className="">
//         {/* <CldImage
//           src={store.avatar.publicId}
//           width="100"
//           height="100"
//           sizes="100vw"
//           alt="store avatar image"
//         /> */}
//         {/* <Image src={url} width={500} height={500} alt="store avatar image" /> */}
//       </div>
//       <h1 className="text-2xl font-bold content-center">{store.name}</h1>
//       <h2 className="text-1xl font-bold">Rating: {store.averageRating}</h2>
//     </div>
//   );
// };

// export default Result;

export default function Buttons() {
  return (
    <div>
      <ol className="pb-2 flex">
        <li className="pr-2">
          <button className="inline-text items-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full">
            Nearby
          </button>
        </li>
        <li className="pr-2">
          <button className="inline-text items-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full">
            {" "}
            A-Z
          </button>
        </li>
        <li className="pr-2">
          <button className="inline-text items-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full">
            Rating
          </button>
        </li>
      </ol>
    </div>
  );
}
