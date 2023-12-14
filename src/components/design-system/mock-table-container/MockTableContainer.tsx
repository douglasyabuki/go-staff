import { useMemo, useState } from 'react';
import { MockAPIResponse } from '@/utils/mock-api-response';
import { ArrowDownIcon } from '@/utils/Icons';

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
        toggle ? `` : `max-h-12 cursor-pointer hover:bg-blue-10`
      } flex h-auto w-full select-none flex-col rounded-md bg-white shadow-sm shadow-transparent-black transition-colors duration-200 `}
      onClick={() => {
        !toggle && setToggle(true);
      }}
    >
      <div className="flex h-12 w-full items-center justify-between px-4">
        <h4 className="text-sm font-bold text-dark-blue-80">
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
        <span className={`flex w-full flex-col items-center justify-start p-4`}>
          <table
            className={`relative w-full min-w-max transform-gpu text-center transition-transform duration-200 xl:table-fixed`}
          >
            <thead className="text-sm font-bold">
              <tr className="h-12 bg-blue-20 [&>*:first-child]:rounded-tl-lg [&>*:last-child]:rounded-tr-lg">
                {headerFields?.length > 0 &&
                  headerFields.map((headerField, headerFieldId) => (
                    <th className="w-28" key={headerFieldId}>
                      {headerField}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="">
              {tableData?.length > 0 &&
                tableData.map((singleRow, singleRowId) => (
                  <tr
                    className={`${singleRowId % 2 === 0 ? `bg-grey-5` : `bg-white`} ${
                      singleRowId + 1 === tableData.length &&
                      `[&>*:first-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg`
                    } h-12 overflow-hidden hover:bg-grey-20`}
                    key={singleRowId}
                  >
                    {Object.values(singleRow).map((fieldValue, fieldValueId) => (
                      <td key={fieldValueId}>{fieldValue}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </span>
      )}
    </div>
  );
}
