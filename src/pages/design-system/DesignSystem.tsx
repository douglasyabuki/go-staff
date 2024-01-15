import SearchTool from '@/components/design-system/search-tool/SearchTool';
import MockFormulatedTableContainer from '@/components/design-system/tables/mock-formulated-table-container/MockFormulatedTableContainer';
import MockTableContainer from '@/components/design-system/tables/mock-table-container/MockTableContainer';
import Dropdown from '@/components/dropdown/Dropdown';
import { FilterListIcon, XIcon } from '@/utils/Icons';
import { mockApiResponse } from '@/utils/mock-api-response';
import { useRef, useState } from 'react';

const fetchedData = mockApiResponse;

const marginType = [
  'Crush Margin - FULL CRUSH MIX (WITHOUT origin cost)',
  'Crush Margin - FULL CRUSH MIX (WITH origin cost)',
  'Crush Margin - FULL CRUSH MIX - WITH PIS/COFINS (WITHOUT origin cost)',
  'Crush Margin - FULL CRUSH MIX - WITH PIS/COFINS (WITH origin cost)',
];

export default function DesignSystem() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onItemSelect = (item: string) => {
    const copy = [...selectedItems];
    const filtered = [...selectedItems].filter((selectedItem) => selectedItem !== item);
    setSelectedItems(() => {
      return filtered.length < copy.length ? [...filtered] : [...filtered, item];
    });
  };

  const buttonRef = useRef(null);

  return (
    <div className="flex h-full w-screen flex-col divide-y-[1px] divide-grey-5 overflow-y-auto bg-grey-5 dark:divide-grey-60 dark:bg-gocn-grey-primary dark:text-white">
      <div className="flex w-screen justify-between bg-white p-4 shadow-sm shadow-transparent-black dark:bg-grey-80">
        <div>
          <h1 className="text-2xl font-bold">Design System</h1>
          <h2 className="text-xl dark:text-grey-20">
            This page displays TSX components and its sources.
          </h2>
        </div>
        <button className="flex self-end" onClick={() => setToggleSearch(!toggleSearch)}>
          {toggleSearch ? <XIcon /> : <FilterListIcon />}
        </button>
      </div>
      <SearchTool isToggled={toggleSearch}></SearchTool>
      <div className="flex h-auto min-h-max w-screen flex-wrap items-center justify-center gap-4 px-4 py-20">
        <div className="flex h-auto w-full flex-col items-center justify-start gap-2 py-2">
          <h3>This is a Dropdown.</h3>

          <p>{JSON.stringify(selectedItems)}</p>
          <button
            ref={buttonRef}
            onClick={() => setToggleDropdown(!toggleDropdown)}
            className="rounded-md border-[1px] border-black bg-white px-4 py-3"
          >
            {toggleDropdown ? 'Click me to untoggle dropdown' : 'Click me to toggle dropdown'}
          </button>
          {toggleDropdown && (
            <Dropdown
              buttonRef={buttonRef}
              spaceX={-132}
              spaceY={2}
              zIndex={50}
              onClose={() => setToggleDropdown(false)}
              toggle={toggleDropdown}
            >
              <div className="flex flex-col gap-2 rounded-sm bg-white py-3 shadow-lg shadow-transparent-black">
                {marginType?.length > 0 &&
                  marginType.map((item) => (
                    <div
                      key={item}
                      onClick={() => onItemSelect(item)}
                      className={`${
                        selectedItems.includes(item) ? `bg-blue-20` : `bg-white`
                      } px-1 py-3`}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </Dropdown>
          )}
        </div>
        <div className="flex h-auto w-full flex-col items-center justify-start gap-2 py-2">
          <h3>This is a table generated dynamically from a mockAPIResponse.</h3>
          {fetchedData && <MockTableContainer tableData={fetchedData}></MockTableContainer>}
        </div>
        <div className="flex h-auto w-full flex-col items-center justify-start gap-2 py-2">
          <h3>This is a formulated table</h3>
          {fetchedData && (
            <MockFormulatedTableContainer tableData={fetchedData}></MockFormulatedTableContainer>
          )}
        </div>
      </div>
    </div>
  );
}
