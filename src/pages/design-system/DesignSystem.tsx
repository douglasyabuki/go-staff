import ComponentCard from '@/components/design-system/component-card/ComponentCard';
import SearchTool from '@/components/design-system/search-tool/SearchTool';
import MockFormulatedTableContainer from '@/components/design-system/tables/mock-formulated-table-container/MockFormulatedTableContainer';
import MockTableContainer from '@/components/design-system/tables/mock-table-container/MockTableContainer';
import { FilterListIcon, XIcon } from '@/utils/Icons';
import { mockApiResponse } from '@/utils/mock-api-response';
import { useState } from 'react';

const fetchedData = mockApiResponse;

export default function DesignSystem() {
  const [toggleSearch, setToggleSearch] = useState(false);

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
        <ComponentCard placeholder="Button"></ComponentCard>
        <ComponentCard placeholder="Dropdown"></ComponentCard>
        <ComponentCard placeholder="Switch"></ComponentCard>
        <ComponentCard placeholder="Radio"></ComponentCard>
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
