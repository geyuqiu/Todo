type Props = {
	column: {
		filterValue: any,
		preFilteredRows: any,
		setFilter: any
	}
}

export const DefaultColumnFilter = ({
   column: {filterValue, preFilteredRows, setFilter},
 }: Props) => {
	return (
		<input
			value={filterValue || ''}
			onChange={e => {
				setFilter(e.target.value || undefined)
			}}
			placeholder={'keyword...'}
		/>
	)
}
