export const tableStyle = `
	table {
		margin: 0;
		padding: 0;
		width: 100%;
		border-color: gray;
		border-bottom-width: 1px;

		thead {
			th.hasBorder:not(:last-child):after {
				content: "";
		    height: 50%;
		    position: absolute;
		    right: 0;
		    top: 25%;
			}
		}
	}
`;
