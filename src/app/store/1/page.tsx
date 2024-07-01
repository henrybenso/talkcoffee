import { Suspense } from "react";
import { Instagram } from "lucide-react";

import AvatarImage from "./avatarImage";
import ImageGallery from "./imageGallery";

enum Days {
  SUN = "Sunday",
  MON = "Monday",
  TUE = "Tuesday",
  WED = "Wednesday",
  TR = "Thursday",
  FRI = "Friday",
  SAT = "Saturday",
}

const store = {
  name: "Blue Bottle Coffee",
  averageRating: 4.5,
  phoneNumber: "415-495-3394",
  serviceTypes: {
    sitIn: ["Indoor", "Outdoor"],
    takeOut: true,
    delivery: false,
    curbsidePickup: true,
  },
  serviceHours: [
    {
      day: "MON",
      open: "",
      close: "5:00 PM",
    },
    {
      day: "TUE",
      open: "12:00 PM",
      close: "5:00 PM",
    },
    {
      day: "WED",
      open: "8:00 AM",
      close: "5:00 PM",
    },
    {
      day: "TR",
      open: "8:00 AM",
      close: "5:00 PM",
    },
    {
      day: "FRI",
      open: "8:00 AM",
      close: "5:00 PM",
    },
    {
      day: "SAT",
      open: "8:00 AM",
      close: "5:00 PM",
    },
    {
      day: "SUN",
      open: "8:00 AM",
      close: "5:00 PM",
    },
  ],
  instagramHandle: "bluebottle",
  avatar: {
    publicId: "/statics/logo/Blue_Bottle_Coffee_logo.svg.png",
  },
  images: [
    {
      id: "1",
      publicId: "/statics/gallery/1.jpg",
      format: "jpg",
      version: "1",
      storeId: "1",
    },
    {
      id: "2",
      publicId: "/statics/gallery/2.jpg",
      format: "jpg",
      version: "1",
      storeId: "1",
    },
    {
      id: "3",
      publicId: "/statics/gallery/3.jpg",
      format: "jpg",
      version: "1",
      storeId: "1",
    },
    {
      id: "4",
      publicId: "/statics/gallery/4.jpg",
      format: "jpg",
      version: "1",
      storeId: "1",
    },
    {
      id: "4",
      publicId: "/statics/gallery/5.jpg",
      format: "jpg",
      version: "1",
      storeId: "1",
    },
  ],
};

const instagramUrl = `https://www.instagram.com/${store.instagramHandle}`;

function Header() {
  return (
    <div className="flex items-center">
      <Suspense fallback={<p>Loading avatar image...</p>}>
        <AvatarImage
          params={{
            avatarId: store.avatar.publicId,
          }}
        />
      </Suspense>
      <div className="">
        <div className="flex py-2 text-7xl font-bold font-sans">
          {store.name}
        </div>
        <div className="flex py-2 font-semibold font-sans text-xl">
          {/* <Instagram /> */}
          <a className="flex" href={instagramUrl} target="_blank">
            @
            <p className="underline underline-offset-2">
              {store.instagramHandle}
            </p>
          </a>
        </div>
        <div>
          Rating: <b>{store.averageRating}</b>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  let storeHours = store.serviceHours.map((serviceHour, index) => (
    <li
      key={index}
      className="grid grid-cols-2 gap-4 place-content-start w-80 p-2"
    >
      <div className="">{Days[serviceHour.day]}:</div>

      {serviceHour.open ? (
        <div className="">
          <div>Open: {serviceHour.open}</div>
          <div>Close: {serviceHour.close}</div>
        </div>
      ) : (
        "Closed"
      )}
    </li>
  ));

  return (
    <>
      <div>
        <div className="border-solid border-1 border-sky-500">
          <Suspense fallback={<p>Loading image gallery...</p>}>
            <ImageGallery params={store.images} />
          </Suspense>
        </div>
        {/* <div className="px-3 flex font-bold font-sans text-5xl">Gallery</div> */}
      </div>
      <div className="grid grid-cols-2 p-6">
        <Header />

        <section className="font-semibold">
          <div className="text-3xl p-3 underline">Store Details</div>
          <div className="p-2">Phone: {store.phoneNumber}</div>
          <div className="p-2">
            Seating Type:
            {store.serviceTypes.sitIn.map((type, index) => (
              <div key={index} className="">
                {type}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 w-80 p-3">
            <div>Take out Options:</div>
            <div className="">
              <div>{store.serviceTypes.takeOut && <div>Order Pickup</div>}</div>
              <div>{store.serviceTypes.delivery && <div>Delivery</div>}</div>
              <div>
                {store.serviceTypes.curbsidePickup && (
                  <div>Curbside Pickup</div>
                )}
              </div>
            </div>
          </div>

          <div className="p-3 font-semibold">
            <div>Hours:</div>
            <ol className="grid grid-cols-2 w-40">
              <div>{storeHours}</div>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
