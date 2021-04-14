import {render} from "@testing-library/react";
import React from "react";

import {Filters} from "./Filters";

describe("Filters", () => {
	it("NoResults should match snapshot", () => {
		const {asFragment} = render(<Filters/>);
		expect(asFragment()).toMatchSnapshot();
	});
});
