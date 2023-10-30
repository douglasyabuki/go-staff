import HomeCard from '@/components/cards/HomeCard';
import HomeCardSkeleton from '@/components/skeletons/home-card-skeleton/HomeCardSkeleton';
import { SearchIcon } from '@/utils/Icons';

interface RouteItem {
  key: number;
  path: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

const routeList: RouteItem[] = [
  {
    key: 0,
    path: '',
    label: 'Staff Search',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita voluptatum, omnis harum ducimus, accusamus eum nam facere velit consequuntur quidem erum! Nostrum, velit dolorum quasi voluptatibus voluptatum in amet.',
    icon: <SearchIcon />,
  },
  {
    key: 1,
    path: '',
    label: '',
    description: '',
  },
  {
    key: 2,
    path: '',
    label: '',
    description: '',
  },
  {
    key: 4,
    path: '',
    label: '',
    description: '',
  },
  {
    key: 5,
    path: '',
    label: '',
    description: '',
  },
  {
    key: 6,
    path: '',
    label: '',
    description: '',
  },
];

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
          {routeList.map((item) =>
            item.label !== '' ? (
              <HomeCard path={item.path} label={item.label} icon={<SearchIcon />} key={item.key}>
                {item.description}
              </HomeCard>
            ) : (
              <HomeCardSkeleton key={item.key} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
