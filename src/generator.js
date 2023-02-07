import React from "react"
import styles from "./styles.css"
import spoderman from "./spoderman.png"
import memesData from "./memesData.js"
import MemeImg from "./memeImg.js"

export default function Generator() {

	const memeList = memesData.data.memes;

	function getMemeImage() {

		const randomNumber = Math.floor(Math.random() * (memeList.length))
		console.log(randomNumber);
		setMemeImage(memeList[randomNumber].url)
	}

	const [memeImage, setMemeImage] = React.useState("");

	return (
		<div className="generator">
			<div className="generator-input-case">
				<input 
					type="text" 
					placeholder="Top text"
				/>
				<input 
					type="text" 
					placeholder="Bottom text"
				/>
			</div>

			<div className="submit-button-case">
				<button 
					onClick={getMemeImage}
					className="generator-submit-button">
					Get a new meme image 🖼️
				</button>
			</div>
		<MemeImg
			url={memeImage}
		/>
		</div>
)}