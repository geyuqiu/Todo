import {useMemo} from 'react';

type Props = {
	column: {
		filterValue: any,
		setFilter: any,
		preFilteredRows: any,
		id: any
	}
}

export const SelectColumnFilter = ({
  column: {filterValue, setFilter, preFilteredRows, id},
}: Props) => {
	const options = useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row: any) => {
			options.add(row.values[id])
		})
		// @ts-ignore
		return [...options.values()]
	}, [id, preFilteredRows])

	return (
		<select
			value={filterValue}
			onChange={e => {
				setFilter(e.target.value || undefined)
			}}
		>
			<option value="">-</option>
			{options.map((option, i) => (
				<option key={i} value={option}>
					{option.toString()}
				</option>
			))}
		</select>
	)
}
