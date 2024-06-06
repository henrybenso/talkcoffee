export default function FormField(params: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  handleChangeFunc: any;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {params.label}
      </label>
      <input
        onChange={params.handleChangeFunc}
        type={params.type}
        name={params.name}
        id={params.name}
        placeholder={params.placeholder ?? ""}
        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {/* <p className="text-sm text-muted-foreground">
        It's not required, but we recommend you include it!
      </p> */}
      {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {errors.instagramHandle?.message && (
          <p>{errors.instagramHandle?.message}</p>
        )}
      </div> */}
    </div>
  );
}
