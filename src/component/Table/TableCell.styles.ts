import tw from "twin.macro";

const baseStyle = tw`flex items-center p-5 my-1 transition-colors duration-100`;

const getHeight = () => tw`sm:h-6 h-24`;

const getVariant = (variant: "start" | "middle" | "end"): any => {
	if (variant === "start") {
		return tw`pl-4 -ml-4 rounded-l-lg`;
	}

	if (variant === "end") {
		return tw`pr-4 -mr-4 rounded-r-lg`;
	}
};

export const getStyles = ({ variant }: any) => [baseStyle, getHeight(), getVariant(variant)];
