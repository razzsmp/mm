import React from "react";
import Server, { Switch, Add } from "./Server";
import uuidv4 from "uuid/v4";

class SidePannel extends React.Component {
	state = {
		showModal: false,
		percentage: 0,
		createStatus: ""
	};

	serverRef = this.props.firebase.database().ref("servers");
	storage = this.props.firebase.storage().ref("serversIcon");


	//added created server to user data
	addServer = id => {
		this.props.firebase
			.database()
			.ref("users")
			.child(`${this.props.user.uid}/servers/${id}`)
			.set({
				id
			})
			.then(() => {
				this.setState({
					createStatus: "",
					showModal: false
				});
			});
	};


	render() {
		const { selectedServer, joinedServers } = this.props;
		return (
			<div className="sidepannel">
				<Switch
					active={selectedServer === null}
					url="https://i.imgur.com/qMgJs45.png"
					onClick={() => {
						this.props.changeCurrentSelected({
							server: null
						});
					}}
				/>
				<div className="underline"></div>

				{/* display joined servers */}
				{joinedServers ? this.displayServers(joinedServers) : null}

				<Add
					onClick={() => this.setState({ showModal: true })}
					url="https://cdn3.iconfinder.com/data/icons/stroke/53/Button-512.png"
				/>
				{this.state.showModal ? (
					<AddModal
						create="Server"
						show={this.setState.showModal}
						onClick={this.handleCreateServer}
						handleClose={() => this.setState({ showModal: false })}
						status={this.state.createStatus}
						percentage={this.state.percentage}
					/>
				) : null}
			</div>
		);
	}
}

export default SidePannel;
