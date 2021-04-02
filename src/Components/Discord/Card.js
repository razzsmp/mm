import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="grp">
        <h2>{props.header}</h2>
        <div
         <label
          style={{ color: errors.includes("password") ? "#d72323" : "white" }}
        >
          PASSWORD
        </label>
        <input
          type="password"
          autoComplete="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            borderColor: errors.includes("password")
              ? "#d72323"
              : "rgba(0,0,0,0.2)"
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Card;
