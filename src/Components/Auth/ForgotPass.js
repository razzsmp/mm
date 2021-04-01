import React, { useState } from "react";
import { Link } from "react-router-dom";

const forgotpass = props => {
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = event => {
		event.preventDefault();
		if (isValid()) {
			props.register(email);
		} else {
		}
	};

	const isValid = () => {
		const emailRegex = /[a-zA-Z0-9]{4,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{1,10}/gi;
		const errors = [];
		if (!emailRegex.exec(email)) errors.push("email");
		setErrors(errors);
		return errors.length === 0;
	};

	return (
		<div className="forgotpassword">
			<h2>Forgot Password</h2>
			<form onSubmit={handleSubmit}>
				<label
					style={{ color: errors.includes("email") ? "#d72323" : "white" }}
				>
					EMAIL
				</label>
				<input
					type="email"
					autoComplete="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					style={{
						borderColor: errors.includes("email")
							? "#d72323"
							: "rgba(0,0,0,0.2)"
					}}
				/>


				<button type="submit">Continue</button>
			</form>
			{props.error ? <div className="error">{props.error.message}</div> : ""}
			<Link to="/login">Already have an account?</Link>
		</div>
	);
};

export default forgotpass;
