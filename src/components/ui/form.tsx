export function InputField({
  children,
  name,
  value,
  placeholder,
  onChange,
  subtext,
}: {
  children?: React.ReactNode;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subtext?: string;
  errors?: any;
}) {
  return (
    <>
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
    </>
  );
}

export function FileField({
  children,
  id,
  name,
  multiple,
  onChange,
  subtext,
}: {
  children?: React.ReactNode;
  id: string;
  name: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subtext: string;
}) {
  return (
    <>
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
    </>
  );
}

export function RatingField({
  children,
  value,
  onChange,
}: {
  children?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <select
        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        name="rating"
        value={value}
        onChange={onChange}
      >
        <option disabled value=""></option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      {children}
    </>
  );
}

export function DineField({
  name,
  value,
  onChange,
  label,
  labelValue,
}: {
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelValue: string;
}) {
  return (
    <div className="flex flex-row gap-4 items-center p-4">
      <input
        name={name}
        // "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        className="peer h-6 w-6 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="checkbox"
        id={label}
        checked={value}
        onChange={onChange}
      />
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={label}
      >
        {labelValue}
      </label>
    </div>
  );
}

export function TimeField({
  label,
  name,
  onChange,
  children,
}: {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-2 min-w-80 items-center">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <input
          className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="time"
          name={name}
          onChange={onChange}
        />
        {children}
      </div>
    </>
  );
}

export function TimeFieldTest({
  label,
  name,
  onChange,
  children,
}: {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div>
        <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <input
          className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="time"
          name={name}
          onChange={onChange}
        />
        {children}
      </div>
    </>
  );
}
