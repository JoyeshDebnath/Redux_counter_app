import React, { useState } from "react";
import "./input.css";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useDispatch from "react-redux";
import saveTodos from "../features/TodoSlice";
// import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const InputTodo = () => {
	const classes = useStyles();
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodo = () => {
		console.log("Adding todo..", input);
		dispatch(
			saveTodos({
				item: input,
				done: false,
				id: Date.now(),
			})
		);
	};

	return (
		<div className="input">
			<Input
				type="text"
				value={input}
				placeholder="Enter Todo"
				onChange={(event) => setInput(event.target.value)}
			/>

			<Button
				onClick={addTodo}
				style={{ cursor: "pointer" }}
				variant="contained"
				color="primary"
				size="large"
				className={classes.button}
			>
				Add 🚀
			</Button>
		</div>
	);
};

export default InputTodo;
