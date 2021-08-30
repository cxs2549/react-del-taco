import { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { GiKnifeFork, GiTacos } from 'react-icons/gi'
import { FaLocationArrow } from 'react-icons/fa'
import { WiWindy } from 'react-icons/wi'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
const StyledHeader = styled.div`
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	#wrapper {
		height: 66px;
		background-color: white;
		color: #333;
		display: flex;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		@media (min-width: 1280px) {
			padding: 0 2rem;
			justify-content: flex-start;
			gap: 2rem;
		}
		svg {
			font-size: 2.2rem;
			color: black;
		}
		> div {
			display: flex;
			align-items: center;
			height: 100%;
		}
		#burger {
			margin-right: -1rem;
			margin-left: -.9rem;
			#menu {
				position: absolute;
				right: 0;
				left: 0;
				top: ${(props) => (props.open ? '66px' : '-100%')};
				border-bottom: 1px solid gray;
				transition: top 250ms;
				background-color: #fff;
				z-index: -1;
			}
		}
		#ahead {
			height: 100%;
			text-align: center;
			text-transform: uppercase;
			font-size: 80%;
			font-weight: bold;

			padding: 3px;
			background-color: red;
			color: white;

			display: flex;
			align-items: center;
			cursor: pointer;
			max-width: 90px;
			@media (min-width: 768px) {
				display: none;
			}
		}
		#logo {
			background-image: url(${logo});
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center center;
			height: 100%;
			width: 110px;
		}

		> div:last-of-type {
			justify-self: flex-end;
			gap: 1rem;
			#knife,
			#location {
				svg {
					font-size: 1.5rem;
				}
			}
		}
	}
	#orderAhead {
		background-color: #e82833;
		color: white;
		padding: .5rem;
		svg {
			font-size: 2rem;
		}
	}
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		document.getElementById('nav-icon1').classList.toggle('open')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		setIsOpen(false)
	}
	const topLinks = [ 'gift cards', 'contact us', 'COVID safety' ]
	const bottomLinks = [
		'menu',
		'e-Club',
		'specials',
		'careers',
		'franchising',
		'webstore',
		'locations'
	]
	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)
	return (
		<StyledHeader open={isOpen}>
			<div id="wrapper">
				<div id="logo" />
				<div className="xl:w-full">
					<div className="hidden  w-full md:grid xl:flex items-center xl:justify-between uppercase text-sm lg:text-base xl:text-lg">
						<ul className="flex gap-5 justify-end capitalize text-brandRed font-medium text-sm xl:order-2">
							{topLinks.map((link, i) => <li key={i}>{link}</li>)}
						</ul>
						<ul className="flex gap-5 xl:gap-8 font-bold">
							{bottomLinks.map((link, i) => (
								<li key={i} className="tracking-wide opacity-90">
									{link}
								</li>
							))}
						</ul>
					</div>
					<div id="ahead">order ahead or delivery</div>
					<div id="knife" className="md:hidden">
						<GiKnifeFork />
					</div>
					<div id="location" className="md:hidden">
						<FaLocationArrow />
					</div>
					<div id="burger" className="md:hidden" ref={menuRef}>
						
						<div id="nav-icon1" onClick={handleOpen}>
							<span />
							<span />
							<span />
						</div>

						<div id="menu" className="pt-8 pb-4 px-12">
							<ul className="flex flex-col items-center justify-center uppercase font-bold gap-4">
								{bottomLinks.map((link, i) => <li key={i}>{link}</li>)}
							</ul>
							<ul className="flex items-center justify-between capitalize text-brandRed font-medium text-sm mt-6">
								{topLinks.map((link, i) => <li key={i}>{link}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div id="orderAhead" className="hidden md:flex justify-center gap-2">
				<div className="flex">
					<WiWindy />
					<GiTacos />
				</div>
				<div className="bg-white rounded flex items-center text-brandRed font-bold px-4 uppercase">
					<span>order ahead or delivery</span>
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
