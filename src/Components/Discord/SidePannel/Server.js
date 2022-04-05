import styled from "styled-components";

const Server = styled.div`
        background: #45494e;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
	position: relative;
	transition: border-radius 128ms, background 128ms, color 128ms;
	display: flex;
	justify-content: center;
	align-items: center;
	:hover {
		border-radius: 25%;
	}
	&:before {
		content: '';
		width: 100%;
		height: 100%;
		background: #ffffff;
		position: absolute;
		border-radius: 5px;
		top: 50%;
		transform: translate(-100%, -50%) scale(0);
		transition: transform 180ms;
	}
`;

export const Switch = styled(Server)`
  border:${props => (props.active ? "2px solid #fff" : "none")}
  &:hover{
    border: 2px solid #fff
  }
`;
export const Add = styled(Server)`
	transition: all 0.2s ease-out;
	opacity: 0.7;
	:hover {
		transform: rotate(90deg);
	}
`;

export default Server;
