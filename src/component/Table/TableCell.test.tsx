import {render} from "@testing-library/react";
import React from "react";

import {TableCell} from './TableCell';

describe("TableRow", () => {
	it("should render with border", () => {
		const { asFragment } = render(
			<table>
				<tbody>
					<tr>
						<TableCell>1</TableCell>
					</tr>
				</tbody>
			</table>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
