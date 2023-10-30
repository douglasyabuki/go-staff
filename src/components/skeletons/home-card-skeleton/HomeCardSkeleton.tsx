export default function HomeCardSkeleton() {
  return (
    <div className="flex h-56 w-96 scale-95 animate-pulse flex-col items-center gap-2 rounded-md bg-white px-6 py-3 shadow-sm shadow-transparent-black dark:bg-grey-80">
      <div className="my-4 h-8 w-[50%] place-self-start rounded-md bg-grey-20 dark:bg-gocn-grey-primary"></div>
      <div className="h-8 w-full rounded-md bg-grey-20 dark:bg-gocn-grey-primary"></div>
      <div className="h-8 w-full rounded-md bg-grey-20 dark:bg-gocn-grey-primary"></div>
      <div className="h-8 w-full rounded-md bg-grey-20 dark:bg-gocn-grey-primary"></div>
    </div>
  );
}
