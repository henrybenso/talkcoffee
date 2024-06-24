import Button from '@/components/ui/button';
import Link from 'next/link';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    // <div className="sticky flex space-x-4">
    // <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
    //   </div>
    //   </div>
    <header>
      <div className="flex justify-between items-center h-16 max-w-full px-4 sm:px-6">
        {children}
      </div>
    </header>
  );
}
