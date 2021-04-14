import React from "react";

import {TableRow} from '../Table/TableRow';
import {TableCell} from '../Table/TableCell';
import {Todo} from './model';

type RowProps = {
	todo: Todo
};

export const Row = ({todo: todo}: RowProps) => {
	return (
		<TableRow className="text-base" border>

			<TableCell>
				{todo.id}
			</TableCell>

			<TableCell>
				{todo.title}
			</TableCell>

			<TableCell>
				{String(todo.completed)}
			</TableCell>

		</TableRow>
	);
}
