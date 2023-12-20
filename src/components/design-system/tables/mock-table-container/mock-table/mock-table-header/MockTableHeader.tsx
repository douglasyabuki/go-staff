export interface MockTableHeaderProps {
  headerFields: string[];
}

export default function MockTableHeader({ headerFields }: MockTableHeaderProps) {
  return (
    <thead className="text-sm font-bold">
      <tr className="h-12 bg-blue-20 dark:bg-gocn-grey-primary [&>*:first-child]:rounded-tl-lg [&>*:last-child]:rounded-tr-lg">
        {headerFields?.length > 0 &&
          headerFields.map((headerField, headerFieldId) => (
            <th className="w-28" key={headerFieldId}>
              {headerField}
            </th>
          ))}
      </tr>
    </thead>
  );
}
