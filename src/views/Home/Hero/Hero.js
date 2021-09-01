import styled from 'styled-components'

const StyledHero = styled.div`
	height: calc(100vh - 72px);
	width: 100%;
	background-image: url(${(props) => props.bg});
	background-size: cover;
	background-position: center center;
	display: flex;
	flex-flow: column;
	gap: 2.5rem;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	position: relative;
	@media (min-width: 768px) {
		height: calc(100vh - 120px);
	}
	@media (min-width: 1024px) {
		height: calc(90vh - 120px);
		padding: 1rem 2rem;
		display: grid;
		gap: 0;
		grid-template-columns: 1fr 1fr;
	}
	img {
		object-fit: cover;
		padding: 0 1rem;
		margin: 0 auto;
	}
`
const Hero = (props) => {
	return <StyledHero bg={props.bg}>{props.children}</StyledHero>
}
export default Hero
