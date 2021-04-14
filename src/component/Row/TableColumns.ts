import {SelectColumnFilter} from '../Table/filter/SelectColumnFilter';

export const tableColumns = [
	{
		Header: '#',
		accessor: 'id',
		disableFilters: true
	},
	{
		Header: 'Title',
		accessor: 'title',
		className: "text-right"
	},
	{
		Header: 'Completed',
		accessor: 'completed',
		Filter: SelectColumnFilter,
	}
];
