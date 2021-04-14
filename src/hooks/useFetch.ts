import {useEffect, useState} from "react";

import {httpClient} from "../services/HttpClient";
import {Todo} from '../component/Row/model';

const todosBaseUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';

export const useFetch = (setLoading: Function) => {

	const [todos, setTodos] = useState<Todo[]>([]);
	useEffect(() => {
		const fetchTodos = async () => {
			setLoading(true);
			const response: Todo[] = await httpClient.get(`${todosBaseUrl}`);
			if (response) {
				response.forEach(res => res.completed = res.completed ? 'yes' : 'no');
				setTodos(response);
			}
			setLoading(false);
		};
		fetchTodos();
	}, []);

	return {todos: todos};
};
