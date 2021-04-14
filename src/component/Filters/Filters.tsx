import React from "react";

type TableProps = {
	title: string,
	completed: string,
	setTitle: Function,
	setCompleted: Function
}

export const Filters = ({title, completed, setTitle, setCompleted}: TableProps) => (
	<div className="flex justify-between sm:flex-row flex-col mb-6">
		<div className="flex justify-between mb-3 items-center">
			<label>Search: </label>
			<input value={title} placeholder={'keyword...'} className="w-full ml-3 p-2 border-gray-dark border"
			       onChange={(e: any) => {
				       setTitle(e.target.value || undefined);
			       }}
			/>
		</div>
		<div className="flex justify-between items-center">
			<label>Completed: </label>
			<select className="w-full ml-3 p-2 border-gray-dark bg-white border"
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
	</div>
)
