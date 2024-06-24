export default function Button({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
}) {
  return (
    <>
      <button className="h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-700 text-primary-foreground hover:bg-yellow-800">
        {children}
      </button>
    </>
  );
}
