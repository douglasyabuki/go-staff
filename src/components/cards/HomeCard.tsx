import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeCardProps {
  label: string;
  path: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function HomeCard({ path, label, children, icon }: HomeCardProps) {
  return (
    <Link
      className="flex h-56 w-96 scale-95 transform-gpu cursor-pointer flex-col items-center gap-2 rounded-md bg-white px-6 py-3 shadow-sm shadow-transparent-black transition-transform duration-200 hover:scale-100 dark:bg-grey-80"
      to={path}
    >
      <div className="my-4 flex h-8 w-full items-center justify-between rounded-md text-dark-blue-80 dark:text-white">
        <h3 className="text-xl font-bold">{label}</h3>
        <div className="rounded-md p-2 shadow-inner shadow-transparent-black dark:bg-gocn-grey-primary dark:shadow-gocn-grey-secondary">
          {icon}
        </div>
      </div>
      <div className="h-28 w-full rounded-md">
        <p className="line-clamp-4 text-lg text-grey-80 dark:text-grey-20">{children}</p>
      </div>
    </Link>
  );
}
