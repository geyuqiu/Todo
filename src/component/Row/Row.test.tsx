import {render} from "@testing-library/react";
import React from "react";

import {Row} from "./Row";
import {Todo} from './model';

describe("Row", () => {
	it("should match snapshot", () => {
		const todo = {
			id: 1,
			title: "delectus aut autem",
			completed: false
		} as Todo;

		const { container } = render(
				<Row todo={todo}/>
		);

		expect(container).toMatchSnapshot();
	});
});
