import React from "react";
import {styled} from "twin.macro";

import {getStyles} from "./TableRow.styles";

export type TableRowFunction = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;

type TableRowProps = {
	border?: boolean;
	children: React.ReactNode;
	onClick?: TableRowFunction;
	onMouseEnter?: TableRowFunction;
	onMouseLeave?: TableRowFunction;
} & React.HTMLProps<any>;

const TableRowStyled = styled.tr<TableRowProps>(getStyles);

export const TableRow = ({ border, children, onClick, onMouseEnter, onMouseLeave }: TableRowProps) => (
	<TableRowStyled
		data-testid="TableRow"
		border={border}
		onClick={onClick}
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
	>
		{children}
	</TableRowStyled>
);

TableRow.defaultProps = {
	border: true,
};
