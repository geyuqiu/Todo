import React, {useState} from "react";

import {TodoTable} from './TodoTable/TodoTable';
import {useFetch} from '../hooks/useFetch';

export const Todos = () => {
	const [isLoading, setLoading] = useState(true);

	const {todos} = useFetch(setLoading);

	return (
		<>
			<TodoTable todos={todos} isLoading={isLoading}/>
		</>
	);
};
