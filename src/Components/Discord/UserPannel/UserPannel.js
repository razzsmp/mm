import React from "react";
import "./UserPannel.scss";
import DmUser from "./DmUser";

class UserPannel extends React.Component {
	changeSelected = to => {
		this.props.changeCurrentSelected({
			dm: to
		});
	};

	displayDms = dms => {
		if (!dms) return null;
		const keys = Object.keys(dms);
		return keys.map(key => {
			const otherUser =
				this.props.userUid === dms[key].user1.uid
					? dms[key].user2
					: dms[key].user1;
			return (
				<DmUser
					key={key}
					name={otherUser.name}
					photo={otherUser.photo}
					active={this.props.selectedDM === key}
					onClick={() => this.changeSelected(key)}
				/>
			);
		});
	};

	render() {
		return (
			<div className="userpannel">
				<div
					className={
						this.props.selectedDM === "totalServers" ? "active item" : "item"
					}
					onClick={() => this.changeSelected("totalServers")}
				>
					<span className="server-icon"></span>Join-Server
				</div>
		);
	}

export default UserPannel;
