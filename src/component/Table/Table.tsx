import React, {useMemo} from "react";
import {TableOptions, useTable} from "react-table";
import {styled} from "twin.macro";

import {tableStyle} from "./Table.styles";

type TableProps = {
	children?: any;
	className?: string;
	data: any[];
	columns: any[];
	initialState?: Record<string, any>;
};

const TableWrapper = styled.div`
	${tableStyle}
`;

export const Table = ({children, data, columns, className, initialState}: TableProps) => {
	const tableData = useMemo(() => data, [data]);
	const tableColumns = useMemo(() => columns, [columns]);

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(
		{
			data: tableData,
			columns: tableColumns,
			initialState,
		} as TableOptions<any>
	);

	const renderChildNode = (data: any, index: number) => {
		if (typeof children === "function") {
			return children(data, index);
		}
		return <tr/>;
	};

	return (
		<TableWrapper {...getTableProps({className})} className="w-full max-w-screen-xl">
			<table cellPadding={0} className="table-auto">
				<thead>
					{headerGroups.map((headerGroup: any, index: number) => (
						<tr className="border" key={index} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column: any, thIndex: number) => (
								<th key={thIndex}
									className="group border border-gray-lightest bg-gray-dark text-base text-left select-none m-0 p-3 md:px-5 font-semibold"
									{...column.getHeaderProps()}
									data-testid={`table__th--${thIndex}`}
								>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row: any) => {
						prepareRow(row);
						return {...renderChildNode(row.original, row.index), ...row.getRowProps()};
					})}
				</tbody>
			</table>
		</TableWrapper>
	);
};

Table.defaultProps = {
	data: [],
	columns: []
};
