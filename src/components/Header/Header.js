import { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { GiKnifeFork, GiTacos } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'
import { WiWindy } from 'react-icons/wi'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'

const StyledHeader = styled.div`
	height: 72px;
	/* position: fixed; */
	top: 0;
	left: 0;
	/* z-index: 100; */
	/* border-bottom: 1px solid lightgray; */
	background-color: #fff;
	width: 100%;
	transition: transform .5s;
	@media (min-width: 768px) {
		height: 120px;
	}
	#wrapper {
		height: 72px;
		background-color: white;
		color: #333;
		display: flex;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		gap: 1rem;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		max-width: var(--maxWidth);
		@media (min-width: 1280px) {
			/* padding: 0 2rem; */
			justify-content: flex-start;
			gap: 2rem;
			left: 50%;
			transform: translateX(-50%);
		}
		@media (min-width: 1316px) {
			padding: 0;
		}
		svg {
			font-size: 2.2rem;
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
				position: fixed;
				width: 100%;
				top: 72px;
				right: ${(props) => (props.open ? '0' : '-100%')};
				max-width: 100%;
				border-bottom: 1px solid gray;
				transition: right .25s;
				transition-delay: .25s;
				background-color: #fff;
				z-index: -10;
				color: var(--muted);
				overflow-y: scroll;
				height: min-content;
				border-bottom: 1px solid lightgray;
				.listItem {
					/* opacity: .9; */
					/* border: 2px solid red; */
					width: 100%;
					text-align: center;
					padding: 1rem;
					border-radius: 4px;
					&:hover {
						background-color: var(--brandRed);
						color: white;
					}
				}
			}
			#overlay {
				position: fixed;
				top: 72px;
				left: ${(props) => (props.open ? '0' : '-100%')};
				width: 100%;
				height: 100vh;
				background-color: rgba(0, 0, 0, .6);
				z-index: -100;
				opacity: ${(props) => (props.open ? 1 : 0)};
				transition: opacity .25s;
			}
		}
		#ahead {
			height: 100%;
			text-align: center;
			text-transform: uppercase;
			font-size: 80%;
			font-weight: 800;

			padding: 3px;
			/* background-color: red; */
			color: white;
			line-height: 1.4;
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
			@media (min-width: 1280px) {
				width: 130px;
			}
		}

		> div:last-of-type {
			justify-self: flex-end;
			gap: 1rem;
			#knife,
			#location {
				svg {
					font-size: 1.7rem;
					color: var(--icon);
					opacity: .9;
				}
			}
		}
	}
	#orderAhead {
		background-color: #e82833;
		color: white;
		padding: .5rem;
		width: 100%;
		position: fixed;
		top: 72px;
		z-index: 200;
		/* margin-top: 72px; */
		svg {
			font-size: 2rem;
		}
	}
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		document.getElementById('nav-icon1').classList.toggle('open')
		document.body.classList.toggle('modal-open')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('modal-open')
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

	const headerRef = useRef()
	const handlePin = () => {
		headerRef.current.style.transform = 'translateY(0%)'
	}
	const handleUnpin = () => {
		headerRef.current.style.transform = 'translateY(-100%)'
	}
	return (
		<Headroom onPin={handlePin} onUnpin={handleUnpin}>
			<StyledHeader open={isOpen} ref={headerRef}>
				<div id="wrapper">
					<div id="logo" />
					<div className="xl:w-full">
						<div className="hidden  w-full md:grid xl:flex items-center xl:justify-between uppercase text-sm lg:text-base xl:text-base xl:gap-4">
							<ul className="flex gap-5 justify-end capitalize text-brandRed font-medium text-sm xl:order-2">
								{topLinks.map((link, i) => (
									<li key={i} className="whitespace-nowrap hover:underline">
										{link}
									</li>
								))}
							</ul>
							<ul className="flex gap-5 xl:gap-8 font-bold">
								{bottomLinks.map((link, i) => (
									<li
										key={i}
										className="tracking-wide opacity-90 hover:text-brandRed"
									>
										{link}
									</li>
								))}
							</ul>
						</div>
						<div id="ahead" className="bg-brandRed">
							order ahead or delivery
						</div>
						<div id="knife" className="md:hidden">
							<GiKnifeFork />
						</div>
						<div id="location" className="md:hidden">
							<IoLocationSharp />
						</div>
						<div id="burger" className="md:hidden" ref={menuRef}>
							<div id="nav-icon1" onClick={handleOpen}>
								<span />
								<span />
								<span />
							</div>
							<div id="menu" className="pt-6 pb-5 px-12">
								<ul className="flex flex-col items-center justify-center uppercase font-bold">
									{bottomLinks.map((link, i) => (
										<li key={i} className="listItem">
											{link}
										</li>
									))}
								</ul>
								<ul className="flex items-center justify-between capitalize  mx-6 text-brandRed font-medium text-sm mt-6">
									{topLinks.map((link, i) => (
										<li key={i} className="hover:underline">
											{link}
										</li>
									))}
								</ul>
							</div>
							<div id="overlay" onClick={handleClose} />
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
		</Headroom>
	)
}
export default Header
