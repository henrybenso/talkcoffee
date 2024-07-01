"use client";

export default function AvatarImage({
  params,
}: {
  params: { avatarId: string };
}) {
  return (
    <>
      <div className="">
        <div className="flex mx-auto overflow-hidden">
          <div className="p-6">
            <img
              className="rounded-full"
              src={params.avatarId}
              width="400"
              height="400"
              sizes="100vw"
              alt="image of store"
            />
          </div>
        </div>
      </div>
    </>
  );
}
