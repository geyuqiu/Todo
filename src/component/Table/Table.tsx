import React, {useMemo} from "react";
import {TableOptions, useFilters, useTable} from "react-table";
import {styled} from "twin.macro";

import {tableStyle} from "./Table.styles";
import {DefaultColumnFilter} from './filter/DefaultColumnFilter';
import {NoResults} from '../TodoTable/TodoTable';

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
	const filterTypes = React.useMemo(() => ({
		text: (rows: any, id: any, filterValue: any) => {
			return rows.filter((row: any) => {
				const rowValue = row.values[id]
				return rowValue !== undefined
					? String(rowValue)
						.toLowerCase()
						.startsWith(String(filterValue).toLowerCase())
					: true
			})
		},
	}), [])

	const defaultColumn = React.useMemo(() => ({Filter: DefaultColumnFilter,}), [])

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(
		{
			data: useMemo(() => data, [data]),
			columns: useMemo(() => columns, [columns]),
			initialState,
			defaultColumn, // Be sure to pass the defaultColumn option
			filterTypes
		} as TableOptions<any>, useFilters
	);

	const renderChildNode = (data: any, index: number) => {
		if (typeof children === "function") {
			return children(data, index);
		}
		return <tr/>;
	};

	return (
		<>
			{!rows.length && <NoResults/>}
			{rows.length ?
				<TableWrapper {...getTableProps({className})} className="w-full max-w-screen-xl">
					<table cellPadding={0} className="table-auto">
						<thead>
						{headerGroups.map((headerGroup: any, index: number) => (
							<tr className="border" key={index} {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column: any, thIndex: number) => (
									<th key={thIndex}
									    className="group border border-gray-lightest bg-gray-dark text-base text-center select-none m-0 p-3 md:px-5 font-semibold"
									    {...column.getHeaderProps()}
									    data-testid={`table__th--${thIndex}`}
									>{column.render("Header")}
										{/* Render the columns filter UI */}
										<div>{column.canFilter ? column.render('Filter') : null}</div>
									</th>
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
				</TableWrapper> : <div/>}
		</>
	);
};

Table.defaultProps = {
	data: [],
	columns: []
};
