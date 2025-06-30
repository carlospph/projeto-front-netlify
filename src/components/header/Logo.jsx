 import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/">
			<div className="logo">
				<i className="fa-solid fa-terminal"></i>
				<span>Digital Store</span>
			</div>
		</Link>
	)
}