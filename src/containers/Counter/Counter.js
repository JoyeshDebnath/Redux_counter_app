import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import DeleteIcon from "@material-ui/icons/Delete";
import * as ActionTypes from "../../store/actions";

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}

	counterChangedHandler = (action, value) => {
		switch (action) {
			case "inc":
				this.setState((prevState) => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case "dec":
				this.setState((prevState) => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case "add":
				this.setState((prevState) => {
					return { counter: prevState.counter + value };
				});
				break;
			case "sub":
				this.setState((prevState) => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl
					label="Increment"
					clicked={this.props.onIncrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.onDecrementCounter}
				/>
				<CounterControl label="Add 5" clicked={this.props.onAddCounter} />
				<CounterControl
					label="Subtract 5"
					clicked={this.props.onSubtractCounter}
				/>
				<hr />
				<Button
					color="primary"
					variant="contained"
					onClick={() => this.props.onStoreResults(this.props.ctr)}
				>
					Store Results <SaveIcon />
				</Button>

				<ul>
					{this.props.storedResults.map((res) => {
						return (
							<li
								style={{
									styleItems: "none",
									backgroundColor: "#D8DBE2",
									cursor: "pointer",
								}}
								key={res.id}
								onClick={() => this.props.onDeleteResults(res.id)}
							>
								{res.val} <DeleteIcon color="secondary" />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: ActionTypes.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: ActionTypes.DECREMENT }),
		onAddCounter: () => dispatch({ type: ActionTypes.ADD, val: 5 }),
		onSubtractCounter: () => dispatch({ type: ActionTypes.SUBTRACT, val: 5 }),
		onStoreResults: (res) =>
			dispatch({ type: ActionTypes.STORE_RES, result: res }),
		onDeleteResults: (id) =>
			dispatch({ type: ActionTypes.DELETE_RES, res_id: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
