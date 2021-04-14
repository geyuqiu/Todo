import React, {useState} from "react";

import {tableColumns} from '../Row/TableColumns';
import {Row} from '../Row/Row';
import {Table} from '../Table/Table';
import {Todo} from '../Row/model';
import {Filters} from '../Filters/Filters';

type TableProps = {
	todos: Todo[];
	isLoading: boolean;
}

export const TodoTable = ({todos, isLoading}: TableProps) => {
	const [title, setTitle] = useState<string>("");
	const [completed, setCompleted] = useState<string>("");
	return (
		<div className="ml-6 mr-3 sm:mx-8 pt-12">
			<h1 className="font-black mb-4 text-3xl">Todos</h1>
			<Filters title={title} completed={completed} setTitle={setTitle} setCompleted={setCompleted}/>
			{(isLoading) && <p data-testid="Table__Loading">Loading ...</p>}
			{!isLoading && !todos?.length &&
			<NoResults/>
			}
			{!isLoading && todos?.length > 0 &&
			<Table columns={tableColumns} data={todos}
						 titleOutside={title} completedOutside={completed}
			>
				{(todo: Todo) => (
					<Row todo={todo}/>
				)}
			</Table>
			}
		</div>
	);
}

export const NoResults = () =>
	<p data-testid="Table__No_Results" className="bg-error p-4 text-white">No result for the given
	search parameters!</p>
