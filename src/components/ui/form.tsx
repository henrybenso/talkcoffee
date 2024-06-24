export function InputField({
  children,
  name,
  value,
  label,
  placeholder,
  onChange,
  subtext,
  errors,
}: {
  children?: React.ReactNode;
  name: string;
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subtext?: string;
  errors?: any;
}) {
  return (
    <>
      <div className="grow space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <input
          name={name}
          className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
        {children}
      </div>
    </>
  );
}

export function FileFormField({
  children,
  label,
  id,
  name,
  multiple,
  onChange,
  subtext,
}: {
  children?: React.ReactNode;
  label: string;
  id: string;
  name: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subtext: string;
}) {
  return (
    <div className="inset-y-0 right-0 space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <input
        className="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:bg-transparent
hover:file:bg-violet-100"
        id={id}
        type="file"
        multiple={multiple}
        accept=".jpg, .png, .jpeg"
        // disabled={fileLimit}
        name={name}
        onChange={onChange}
      />
      {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      {children}
    </div>
  );
}

export function RatingField({
  children,
  value,
  label,
  onChange,
}: {
  children?: React.ReactNode;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <select
        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        name="rating"
        value={value}
        onChange={onChange}
      >
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      {children}
    </div>
  );
}

export function DineFormField({
  children,
  name,
  value,
  onChange,
  label,
  labelValue,
}: {
  children?: React.ReactNode;
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelValue: string;
}) {
  return (
    <>
      <input
        name={name}
        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="checkbox"
        id={label}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={label}>{labelValue}</label>
      {children}
    </>
  );
}
