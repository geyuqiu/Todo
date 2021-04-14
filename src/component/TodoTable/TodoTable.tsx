import React, {ChangeEvent, useState} from "react";

import {tableColumns} from '../Row/TableColumns';
import {Row} from '../Row/Row';
import {Table} from '../Table/Table';
import {Todo} from '../Row/model';

type TableProps = {
	todos: Todo[];
	isLoading: boolean;
}

export const TodoTable = ({todos, isLoading}: TableProps) => {
	const [title, setTitle] = useState<string>("");
	const [completed, setCompleted] = useState<string>("");
	return (
		<div className="ml-6 mr-3 sm:mx-8 pt-12">
			<h1 className="font-bold mb-3">Todos</h1>
			<div>
				<input value={title} placeholder={'keyword...'}
					onChange={(e: any) => {
						setTitle(e.target.value || undefined);
					}}
				/>
				<select
					value={completed}
					onChange={(e: any) => {
						setCompleted(e.target.value || undefined)
					}}
				>
					<option value="">-</option>
					{['yes', 'no'].map((option: string, i: number) => (
						<option key={i} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
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
	<p data-testid="Table__No_Results" className="bg-error p-4">No result for the given
	search parameters!</p>
