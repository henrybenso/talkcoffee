export default function Errors(props: { errors?: string[] }) {
  if (!props.errors?.length) return null;
  return (
    <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {props.errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
}
