import styled from 'styled-components'
import Hero from './Hero/Hero'
import cheeseBg from '../../assets/cheese.png'
import queso from '../../assets/queso.png'
import cheesetacos from '../../assets/cheesetacos.png'

import caramelBg from '../../assets/caramel.jpg'
import caramelText from '../../assets/caramelText.png'
import sweets from '../../assets/sweets.png'

import Options from './Options/Options'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

const StyledHome = styled.div`
	background-color: #fff;
	position: relative;
	z-index: 0;
	.react-slideshow-container + ul.indicators {
		margin-top: -16px;
		position: relative;
		z-index: 100;
	}

	.react-slideshow-container .nav {
		svg {
			color: red;
		}
	}

	
`

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	prevArrow: (
		<div style={{ fontSize: '50px', marginRight: '-50px' }}>
			<GrFormPrevious />
		</div>
	),
	nextArrow: (
		<div style={{ fontSize: '50px', marginLeft: '-50px' }}>
			<GrFormNext />
		</div>
	)
}

const Home = () => {
	return (
		<StyledHome>
			<Fade indicators {...properties}>
				<Hero bg={cheeseBg}>
					<img className=" max-w-xs lg:max-w-md xl:max-w-lg " src={queso} alt="" />
					<img className=" max-w-xs  lg:max-w-full md:pb-4" src={cheesetacos} alt="" />
				</Hero>
				<Hero bg={caramelBg}>
					<img className="  max-w-xs lg:max-w-md xl:max-w-xl" src={caramelText} alt="" />
					<div className="mt-8">
						<img className="  md:max-w-xl xl:max-w-3xl" src={sweets} alt="" />
					</div>
				</Hero>
			</Fade>
			<Options />
		</StyledHome>
	)
}
export default Home
