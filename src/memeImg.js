import React from "react"
import MemeData from "./memesData.js"

export default function MemeImg(props) {
	console.log(props.url);
	return (
		<div>
			<img
				src={props.url}
			/>
		</div>
)}