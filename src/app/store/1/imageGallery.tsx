"use client";

export default function ImageGallery({
  params,
}: {
  params: {
    id: string;
    publicId: string;
    format: string;
    version: string;
    storeId: string;
  }[];
}) {
  return (
    <>
      <div className="snap-x overflow-x-auto flex h-96 w-full overflow-hidden">
        {params.map((image, index) => (
          <div className="snap-center flex-none grid content-center">
            {/* <CldImage
              key={image.id}
              src={image.publicId}
              width="600"
              height="600"
              sizes="100vw"
              alt="image of store"
            /> */}
            <img
              key={image.id}
              src={image.publicId}
              width="600"
              height="600"
              sizes="100vw"
              alt="image of store"
            />
          </div>
        ))}
      </div>
      <br />
    </>
  );
}
