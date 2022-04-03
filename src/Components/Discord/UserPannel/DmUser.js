import { React, lazy} from "react";

const DmUser = props => {
  lazy( return (
    <div
      className={props.active ? "active user" : "user"}
      onClick={props.onClick}
    >
      <div
        className="photo"
        style={{ backgroundImage: `url(${props.photo})` }}
      ></div>
      <div className="name">{props.name}</div>
      <div className="tag">#{props.tag}</div>
    </div>
  );
};
);

export default DmUser;
