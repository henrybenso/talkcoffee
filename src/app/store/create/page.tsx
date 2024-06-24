'use client';

import Link from 'next/link';
import Button from '@/components/ui/button';
import Form from './form';

export default function Page() {
  return (
    <>
      <div className="flex place-content-center items-center h-16 px-4 sm:px-6">
        <div className="shrink-0">
          Are you a <b>business owner</b>? If so,
          <Link className="ml-2" href="/store/create-by-owner">
            <Button>Click Here!</Button>
          </Link>
        </div>
      </div>
      <div className="min-w-80 p-8">
        <section>
          <h1 className="px-8 text-5xl font-bold text-black">add a store ☕</h1>
        </section>
        <Form />
      </div>
    </>
  );
}
