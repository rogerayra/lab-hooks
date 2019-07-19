import React from "react";

export default function Form({ name, surname, age, handleChange }) {
	return (
		<div
			style={{
				marginTop: "300px"
			}}
		>
			<h2>Form</h2>
			<form
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly"
				}}
			>
				<div>
					<input type="text" name="name" onChange={handleChange} value={name}/>
					<p>{name}</p>
				</div>
				<div>
					<input type="text" name="surname" onChange={handleChange} value={surname}/>
					<p>{surname}</p>
				</div>
				<div>
					<input type="text" name="age" onChange={handleChange} value={age}/>
					<p>{age}</p>
				</div>
			</form>
		</div>
	);
}
