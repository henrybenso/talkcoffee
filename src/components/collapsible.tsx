export default function Collapsible({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  if (isOpen) return ()
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 hover:bg-gray-300"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  )
}