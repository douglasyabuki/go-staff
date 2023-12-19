import { MockAPIResponse } from '@/utils/mock-api-response';
import MockFormulatedTableCell from './mock-formulated-table-cell/MockFormulatedTableCell';

export interface MockFormulatedTableRowProps {
  rowId: number;
  rowData: MockAPIResponse;
  tableLength: number;
}

export default function MockFormulatedTableRow({
  rowId,
  rowData,
  tableLength,
}: MockFormulatedTableRowProps) {
  return (
    <tr
      className={`${rowId % 2 === 0 ? `bg-grey-5` : `bg-white`} ${
        rowId + 1 === tableLength &&
        `[&>*:first-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg`
      } h-12 overflow-hidden hover:bg-grey-20`}
    >
      {Object.entries(rowData).map(([fieldHeader, fieldValue], fieldValueId) => (
        <MockFormulatedTableCell
          key={fieldValueId}
          fieldHeader={fieldHeader}
          fieldValue={fieldValue}
        ></MockFormulatedTableCell>
      ))}
    </tr>
  );
}
