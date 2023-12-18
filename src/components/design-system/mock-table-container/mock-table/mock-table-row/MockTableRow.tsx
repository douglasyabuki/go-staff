import { MockAPIResponse } from '@/utils/mock-api-response';
import MockTableCell from './mock-table-cell/MockTableCell';

export interface MockTableRowProps {
  rowId: number;
  rowData: MockAPIResponse;
  tableLength: number;
}

export default function MockTableRow({ rowId, rowData, tableLength }: MockTableRowProps) {
  return (
    <tr
      className={`${rowId % 2 === 0 ? `bg-grey-5` : `bg-white`} ${
        rowId + 1 === tableLength &&
        `[&>*:first-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg`
      } h-12 overflow-hidden hover:bg-grey-20`}
    >
      {Object.values(rowData).map((fieldValue, fieldValueId) => (
        <MockTableCell key={fieldValueId} fieldValue={fieldValue}></MockTableCell>
      ))}
    </tr>
  );
}
