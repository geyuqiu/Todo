import {render} from "@testing-library/react";
import React from "react";

import {TableRow} from "./TableRow";
import {TableCell} from './TableCell';

describe("TableRow", () => {
	it("should render with border", () => {
		const {asFragment} = render(
			<table>
				<tbody>
					<TableRow border={true}>
						<TableCell>
							something
						</TableCell>
					</TableRow>
				</tbody>
			</table>,
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it("should render without border", () => {
		const {asFragment} = render(
			<table>
				<tbody>
					<TableRow border={false} >
						<TableCell>
							something
						</TableCell>
					</TableRow>
				</tbody>
			</table>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
