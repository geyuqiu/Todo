import {render} from "@testing-library/react";
import React from "react";

import {Todos} from "./Todos";

describe("WalletView", () => {
	it("should match snapshot", () => {
		const { container } = render(<Todos />);
		expect(container).toMatchSnapshot();
	});
});
