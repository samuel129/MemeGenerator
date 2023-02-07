import React from 'react'
import styles from './styles.css'
import spoderman from './spoderman.png'

export default function Header() {
	return (
		<div className="header-case">
			<div className="title-case">
				<img className="spoderman-img" src={spoderman}></img>
				<h3>Meme Generator</h3>
			</div>

			<h5>React Course - Project 3</h5>
		</div>
)}