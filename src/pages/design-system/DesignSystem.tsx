import MockFormulatedTableContainer from '@/components/design-system/mock-formulated-table-container/MockFormulatedTableContainer';
import MockTableContainer from '@/components/design-system/mock-table-container/MockTableContainer';
import { mockApiResponse } from '@/utils/mock-api-response';

export default function DesignSystem() {
  const fetchedData = mockApiResponse;

  return (
    <div className="flex h-full w-screen flex-col overflow-y-auto bg-grey-5 dark:bg-gocn-grey-primary dark:text-white">
      <div className="flex w-screen bg-white p-4 shadow-sm shadow-transparent-black dark:bg-grey-80">
        <div>
          <h1 className="text-2xl font-bold">Design System</h1>
          <h2 className="text-xl dark:text-grey-20">
            This page displays TSX components and its sources.
          </h2>
        </div>
      </div>
      <div className="flex h-auto min-h-max w-screen flex-col items-start justify-start gap-2 px-4 py-20">
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
