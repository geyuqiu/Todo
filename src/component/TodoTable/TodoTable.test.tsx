import {render} from "@testing-library/react";
import React from "react";

import {NoResults, TodoTable} from "./TodoTable";

describe("TodoTable", () => {
	it("NoResults should match snapshot", () => {
		const {getAllByTestId, asFragment} = render(<NoResults/>);
		expect(getAllByTestId("Table__No_Results")).toHaveLength(1);
		expect(asFragment()).toMatchSnapshot();
	});

	it("isLoading should match snapshot", () => {
		const {getAllByTestId, asFragment} = render(<TodoTable isLoading/>);
		expect(getAllByTestId("Table__Loading")).toHaveLength(1);
		expect(asFragment()).toMatchSnapshot();
	});

	it("todos empty for selected address should match snapshot", () => {
		const {getAllByTestId, asFragment} = render(<TodoTable
			todos={[]} isLoading={false}/>);

		expect(getAllByTestId("Table__No_Results")).toHaveLength(1);
		expect(asFragment()).toMatchSnapshot();
	});

	it("display n todos should match snapshot", () => {
		const todos = [
			{
				id: 1,
				title: "title 1",
				completed: true
			},
			{
				id: 2,
				title: "title 2",
				completed: false
			},
			{
				id: 3,
				title: "title 3",
				completed: true
			},
			{
				id: 4,
				title: "delectus aut autem",
				completed: false
			}
		];
		const {getAllByTestId, asFragment} = render(<TodoTable
			todos={todos} isLoading={false}
		/>);

		expect(getAllByTestId("TableRow")).toHaveLength(4);
		expect(asFragment()).toMatchSnapshot();
	});
});
