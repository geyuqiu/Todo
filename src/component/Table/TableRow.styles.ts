import tw from "twin.macro";

import {TableRowFunction} from "./TableRow";

const baseStyle = tw`transition-colors duration-100`;

const getCursorStyles = (onClick?: TableRowFunction): any => (onClick ? tw`cursor-pointer` : "");

const getBorderStyles = (border?: boolean): any =>
	border ? tw`border border-solid border-gray-lightest` : "";

export const getStyles = ({ onClick, border }: any) => {
	const styles = [baseStyle, getBorderStyles(border), getCursorStyles(onClick)];

	return styles;
};
