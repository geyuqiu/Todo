import React from "react";

type TableProps = {
	title: string,
	completed: string,
	setTitle: Function,
	setCompleted: Function
}

export const Filters = ({title, completed, setTitle, setCompleted}: TableProps) => (
	<div>
		<input value={title} placeholder={'keyword...'}
		       onChange={(e: any) => {
			       setTitle(e.target.value || undefined);
		       }}
		/>
		<select
			value={completed}
			onChange={(e: any) => {
				setCompleted(e.target.value || undefined)
			}}
		>
			<option value="">-</option>
			{['yes', 'no'].map((option: string, i: number) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
)
