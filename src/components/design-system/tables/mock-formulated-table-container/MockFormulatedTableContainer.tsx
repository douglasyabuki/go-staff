import { useMemo, useState } from 'react';
import { MockAPIResponse } from '@/utils/mock-api-response';
import { ArrowDownIcon } from '@/utils/Icons';
import MockFormulatedTableHeader from './mock-formulated-table/mock-formulated-table-header/MockFormulatedTableHeader';
import MockFormulatedTableRow from './mock-formulated-table/mock-formulated-table-row/MockFormulatedTableRow';
import { calculatedIMC, getIMCClassification, getObesityDegree } from '@/utils/imc';

export interface MockFormulatedTableContainerProps {
  tableData: MockAPIResponse[];
}

interface FormulatedTableData extends MockAPIResponse {
  imc: number;
  classification: string;
  obesityDegree: number;
}

export default function MockFormulatedTableContainer({
  tableData,
}: MockFormulatedTableContainerProps) {
  const [toggle, setToggle] = useState(false);

  const filledTable: FormulatedTableData[] = useMemo(() => {
    return tableData.map((itemData) => {
      const imc = calculatedIMC(itemData.height, itemData.weight);
      const classification = getIMCClassification(imc);
      const obesityDegree = getObesityDegree(imc);
      return { ...itemData, imc, classification, obesityDegree };
    });
  }, [tableData]);

  const headerFields = useMemo(() => {
    if (filledTable?.length > 0) {
      return Object.keys(filledTable[0]);
    }
    return [];
  }, [filledTable]);

  return (
    <div
      className={`${
        toggle ? `` : `max-h-12 cursor-pointer hover:bg-blue-10 dark:hover:bg-grey-60`
      } flex h-auto w-full select-none flex-col rounded-md bg-white shadow-sm shadow-transparent-black transition-colors duration-200 dark:bg-gocn-grey-secondary `}
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
            <MockFormulatedTableHeader headerFields={headerFields}></MockFormulatedTableHeader>
            <tbody className="">
              {filledTable?.length > 0 &&
                filledTable.map((singleRow, rowId) => (
                  <MockFormulatedTableRow
                    rowData={singleRow}
                    tableLength={filledTable.length}
                    rowId={rowId}
                    key={rowId}
                  ></MockFormulatedTableRow>
                ))}
            </tbody>
          </table>
        </span>
      )}
    </div>
  );
}
