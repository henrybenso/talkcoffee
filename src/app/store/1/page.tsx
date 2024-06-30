import { Suspense } from 'react';
import { Instagram } from 'lucide-react';

import AvatarImage from './avatarImage';
import ImageGallery from './imageGallery';

enum Days {
  SUN = 'Sunday',
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  TR = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
}

const store = {
  name: 'Blue Bottle Coffee',
  averageRating: 4.5,
  phoneNumber: '415-495-3394',
  serviceTypes: {
    sitIn: ['Indoor', 'Outdoor'],
    takeOut: true,
    delivery: false,
    curbsidePickup: true,
  },
  serviceHours: [
    {
      day: 'MON',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'TUE',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'WED',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'TR',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'FRI',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'SAT',
      open: '8:00 AM',
      close: '5:00 PM',
    },
    {
      day: 'SUN',
      open: '8:00 AM',
      close: '5:00 PM',
    },
  ],
  instagramHandle: 'bluebottle',
  avatar: {
    publicId: '/statics/logo/Blue_Bottle_Coffee_logo.svg.png',
  },
  images: [
    {
      id: '1',
      publicId: '/statics/gallery/1.jpg',
      format: 'jpg',
      version: '1',
      storeId: '1',
    },
    {
      id: '2',
      publicId: '/statics/gallery/2.jpg',
      format: 'jpg',
      version: '1',
      storeId: '1',
    },
    {
      id: '3',
      publicId: '/statics/gallery/3.jpg',
      format: 'jpg',
      version: '1',
      storeId: '1',
    },
    {
      id: '4',
      publicId: '/statics/gallery/4.jpg',
      format: 'jpg',
      version: '1',
      storeId: '1',
    },
    {
      id: '4',
      publicId: '/statics/gallery/5.jpg',
      format: 'jpg',
      version: '1',
      storeId: '1',
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
          <a className="" href={instagramUrl} target="_blank">
            {store.instagramHandle}
          </a>
        </div>
        <div>Rating: {store.averageRating}</div>
      </div>
    </div>
  );
}

export default function Page() {
  let storeHours = store.serviceHours.map((serviceHour, index) => (
    <li key={index} className="pl-5">
      <div>
        <div className="pr-2">{Days[serviceHour.day]}:</div>
        <div className="pl-5">
          <div>Open: {serviceHour.open}</div>
          <div>Close: {serviceHour.close}</div>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <div className="p-6">
        <Header />

        <section className="font-semibold">
          <div className="p-3">
            <div>Phone: {store.phoneNumber}</div>
          </div>
          <br />
          <div className="p-3">
            Seating Type:
            {store.serviceTypes.sitIn.map((type, index) => (
              <div key={index} className="pl-5">
                {type}
              </div>
            ))}
          </div>
          <br />
          <div className="p-3">
            <div>Take out Options:</div>
            <div className="pl-5">
              <div>{store.serviceTypes.takeOut && <div>Order Pickup</div>}</div>
              <div>{store.serviceTypes.delivery && <div>Delivery</div>}</div>
              <div>
                {store.serviceTypes.curbsidePickup && (
                  <div>Curbside Pickup</div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="p-3">
            <ol className="font-semibold">
              Hours:
              {storeHours}
            </ol>
          </div>
        </section>

        <div>
          <div className="p-3 flex font-bold font-sans text-5xl">Gallery</div>
          <div className="">
            <Suspense fallback={<p>Loading image gallery...</p>}>
              <ImageGallery params={store.images} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
