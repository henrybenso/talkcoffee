'use client';

import Form from './form';

export default function Page() {
  return (
    <>
      <div className="min-w-80 p-8">
        <section>
          <h1 className="px-8 text-5xl font-bold text-black">
            add your store ☕
          </h1>
        </section>
        <Form />
      </div>
    </>
  );
}
