import React from "react";

export default function Counter({ count, decrement, increment }) {
	return (
		<div>
			<h2>Counter</h2>
			<h2>{count}</h2>
			<button
				style={{
					width: "30px",
					height: "30px"
				}}
				onClick={decrement}
			>
				-
			</button>
			<button
				style={{
					width: "30px",
					height: "30px"
				}}
				onClick={increment}
			>
				+
			</button>
		</div>
	);
}
