import { SearchIcon } from '@/utils/Icons';

export interface SearchToolProps {
  isToggled: boolean;
}

export default function SearchTool({ isToggled }: SearchToolProps) {
  return (
    <div
      className={`${
        isToggled ? `max-h-full py-3` : `max-h-0 py-0`
      } flex h-auto w-screen transform-gpu items-center justify-start bg-white px-4 shadow-sm shadow-transparent-black duration-200 dark:bg-grey-80`}
    >
      <div
        className={`${
          isToggled ? `h-auto translate-y-0` : `h-0 -translate-y-[20px] scale-0 overflow-hidden`
        } group relative flex transform-gpu select-none items-center duration-200`}
      >
        <div className="absolute left-2 h-6 w-6 self-center">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="min-w-44 h-12 w-auto rounded-md border-[1.5px] bg-grey-5 py-3 pl-12 pr-8 outline-none outline-offset-0 dark:border-black dark:bg-gocn-grey-secondary"
        />
      </div>
    </div>
  );
}
