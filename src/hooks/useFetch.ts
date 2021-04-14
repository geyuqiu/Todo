import {useEffect, useState} from "react";

import {httpClient} from "../services/HttpClient";
import {Todo} from '../component/Row/model';

const todosBaseUrl = 'https://jsonplaceholder.typicode.com/todos';

export const useFetch = (setLoading: Function) => {

	const [todos, setTodos] = useState<Todo[]>([]);
	useEffect(() => {
		const fetchTodos = async () => {
			setLoading(true);
			const response = await httpClient.get(`${todosBaseUrl}`);
			if (response) {
				setTodos(response);
			}
			setLoading(false);
		};
		fetchTodos();
	}, []);

	return {todos: todos};
};
