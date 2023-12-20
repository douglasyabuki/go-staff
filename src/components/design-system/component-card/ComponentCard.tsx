export interface ComponentCardProps {
  placeholder: string;
}

export default function ComponentCard({ placeholder }: ComponentCardProps) {
  return (
    <div className="group flex h-32 w-52 transform-gpu cursor-pointer flex-col items-center justify-center gap-0 rounded-md bg-white px-4 py-3 text-center shadow-sm shadow-transparent-black duration-200 hover:-translate-y-1 hover:gap-2 dark:bg-gocn-grey-secondary">
      <h3 className="text-lg font-bold">{placeholder}</h3>
      <div className="h-[1px] w-16 scale-0 transform-gpu animate-pulse items-center bg-black duration-200 group-hover:scale-100 dark:bg-grey-5"></div>
    </div>
  );
}
