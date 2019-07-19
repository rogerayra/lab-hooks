import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");

	const decrement = () => {
		if (count === 0) return;
		setCount(count - 1);
	};
	const increment = () => {
		setCount(count + 1);
	};

	const handleChange = e => {
		e.persist();
		const { name, value } = e.target;
		switch (name) {
			case "name":
				setName(value);
				break;
			case "surname":
				setSurname(value);
				break;
			case "age":
				setAge(value);
				break;
			default:
		}
	};

	return (
		<div className="App">
			<Counter count={count} decrement={decrement} increment={increment} />
			<Form name={name} surname={surname} age={age} handleChange={handleChange} />
		</div>
	);
}

export default App;
