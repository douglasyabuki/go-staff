export default function Home() {
  return (
    <div className="flex h-full w-screen flex-col overflow-y-auto bg-grey-5 dark:bg-gocn-grey-primary dark:text-white">
      <div className="flex w-screen bg-white p-4 shadow-sm shadow-transparent-black dark:bg-grey-80">
        <div>
          <h1 className="text-2xl font-bold">Home Page</h1>
          <h2 className="text-xl dark:text-grey-20">
            This page is a mere prototype of a portal to present a company's resources.
          </h2>
        </div>
      </div>
      <div className="flex h-full w-screen items-start justify-center px-4 py-20">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
          <div className="h-56 w-96 rounded-md bg-white shadow-sm shadow-transparent-black dark:bg-grey-80"></div>
        </div>
      </div>
    </div>
  );
}
