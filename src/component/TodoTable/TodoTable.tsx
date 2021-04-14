import React from "react";

import {tableColumns} from '../Row/TableColumns';
import {Row} from '../Row/Row';
import {Table} from '../Table/Table';
import {Todo} from '../Row/model';

type TableProps = {
	todos: Todo[];
	isLoading: boolean;
}

export const TodoTable = ({todos, isLoading}: TableProps) => (
	<div className="ml-6 mr-3 sm:mx-8 pt-12">
		{(isLoading) && <p data-testid="Table__Loading">Loading ...</p>}
		{!isLoading && !todos?.length &&
		<NoResults/>
		}
		{!isLoading && todos?.length > 0 &&
		<Table columns={tableColumns} data={todos}>
			{(todo: Todo) => (
				<Row todo={todo}/>
			)}
		</Table>
		}
	</div>
);

export const NoResults = () =>
	<p data-testid="Table__No_Results" className="bg-error p-4">No result for the given
	search parameters!</p>
