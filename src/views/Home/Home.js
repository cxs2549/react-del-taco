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

const StyledHome = styled.div`
	background-color: #fff;
	position: relative;
	z-index: 0;
	.react-slideshow-container + ul.indicators {
		margin-top: -16px;
		position: relative;
		z-index: 100;
	}
`

const Home = () => {
	return (
		<StyledHome>
			<Fade indicators>
				<Hero bg={cheeseBg}>
					<img className="max-w-xs lg:max-w-md xl:max-w-lg " src={queso} alt="" />
					<img className="max-w-md lg:max-w-full md:pb-4" src={cheesetacos} alt="" />
				</Hero>
				<Hero bg={caramelBg}>
					<img className="max-w-md md:max-w-xl xl:max-w-3xl " src={sweets} alt="" />
					<img className="max-w-sm lg:max-w-md xl:max-w-xl " src={caramelText} alt="" />
				</Hero>
			</Fade>
			<Options />
		</StyledHome>
	)
}
export default Home
