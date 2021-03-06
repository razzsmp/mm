import React, { useState } from "react";
import firebase from "../../../firebase";

const UserSettings = props => {
	const [file, setFile] = useState(null);

	const handleSubmit = () => {
		if (file && !props.uploading) props.updateProfile(file);
	};

	const handleClose = e => {
		if (e.target.classList.contains("user-settings-bg")) props.close();
	};
	
	const logout = () => {
		firebase.signOut();
	};

	return (
		<div className="user-settings-bg" onClick={handleClose}>
			<div className="user-settings">
				<h2>Change Profile Picutre</h2>
				<input
					type="file"
					id="file-prev"
					onChange={e => {
						if (e.target.files[0]) setFile(e.target.files[0]);
					}}
					style={{ display: "none" }}
				/>
				<label
					htmlFor="file-prev"
					className="file-prev"
					style={{
						backgroundImage: `url(${
							file ? URL.createObjectURL(file) : props.photo
						})`
					}}
				></label>
				<div className="update-btn" onClick={handleSubmit}>
					{props.uploading ? "Updating" : "Update"}
				</div>
                                <div className="logout" onClick={logout}>
				</div>
			</div>
		</div>
	);
};

export default UserSettings;
