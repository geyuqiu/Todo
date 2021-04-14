import {render} from "@testing-library/react";
import React from "react";

import {Table} from "./Table";
import {tableColumns} from '../Row/TableColumns';
import {todos} from '../TodoTable/TodoTable.test';

describe("Table", () => {
	it("should render", () => {
		const {asFragment} = render(
			<Table columns={tableColumns} data={todos}>
				{() => (
					<tr>
						<td>1</td>
						<td>2</td>
					</tr>
				)}
			</Table>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it("should render empty rows if template not provided", () => {
		const {container} = render(<Table columns={tableColumns} data={todos}/>);
		expect(container).toMatchSnapshot();
	});
});
