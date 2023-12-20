import { useMemo, useState } from 'react';
import { MockAPIResponse } from '@/utils/mock-api-response';
import { ArrowDownIcon } from '@/utils/Icons';
import MockTableRow from './mock-table/mock-table-row/MockTableRow';
import MockTableHeader from './mock-table/mock-table-header/MockTableHeader';
export interface MockTableContainerProps {
  tableData: MockAPIResponse[];
}

export default function MockTableContainer({ tableData }: MockTableContainerProps) {
  const [toggle, setToggle] = useState(false);

  const headerFields = useMemo(() => {
    if (tableData?.length > 0) {
      return Object.keys(tableData[0]);
    }
    return [];
  }, [tableData]);

  return (
    <div
      className={`${
        toggle ? `` : `max-h-12 cursor-pointer hover:bg-blue-10 dark:hover:bg-grey-60`
      } flex h-auto w-full select-none flex-col rounded-md bg-white shadow-sm shadow-transparent-black transition-colors duration-200 dark:bg-gocn-grey-secondary`}
      onClick={() => {
        !toggle && setToggle(true);
      }}
    >
      <div className="flex h-12 w-full items-center justify-between px-4">
        <h4 className="text-sm font-bold text-dark-blue-80 dark:text-grey-5">
          {toggle ? `Hi! I'm an open table!` : `Hi! I'm a closed table`}
        </h4>
        <div
          className={`${toggle ? `rotate-180` : ``} group transform-gpu duration-200`}
          onClick={() => setToggle(!toggle)}
        >
          <ArrowDownIcon />
        </div>
      </div>
      {toggle && (
        <span className={`flex w-full flex-col items-start justify-center overflow-auto p-4`}>
          <table
            className={`relative w-full min-w-max transform-gpu text-center transition-transform duration-200 lg:table-fixed`}
          >
            <MockTableHeader headerFields={headerFields}></MockTableHeader>
            <tbody className="">
              {tableData?.length > 0 &&
                tableData.map((singleRow, rowId) => (
                  <MockTableRow
                    rowData={singleRow}
                    tableLength={tableData.length}
                    rowId={rowId}
                    key={rowId}
                  ></MockTableRow>
                ))}
            </tbody>
          </table>
        </span>
      )}
    </div>
  );
}
