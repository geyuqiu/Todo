import {render} from "@testing-library/react";
import React from "react";

import {Table} from "./Table";

const data = [
	{
		col1: "column 1",
		col2: "column 2",
		col3: "column 3",
	},
];

const columns = [
	{
		Header: "Header 1",
		accessor: "col1",
		minimumWidth: true,
		className: "flex-row-reverse",
	},
	{
		Header: "Header 2",
		accessor: "col2",
		className: "no-border",
	},
	{
		Header: "Header 3",
		accessor: "col3",
		className: "justify-end",
	}
];

describe("Table", () => {
	it("should render", () => {
		const {asFragment} = render(
			<Table columns={columns} data={data}>
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
		const {container} = render(<Table columns={columns} data={data}/>);
		expect(container).toMatchSnapshot();
	});
});
