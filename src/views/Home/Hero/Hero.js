import styled from 'styled-components'
import bg from '../../../assets/cheese.png'
const StyledHero = styled.div`
    height: calc(100vh - 72px);
    width: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    display: grid;
    padding: 1rem;
    @media (min-width: 768px) {
        height: calc(100vh - 120px);
        padding: 1rem 2rem;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    img {
        object-fit: cover;
    }
`
const Hero = (props) => {
return (
<StyledHero>
    {props.children}
</StyledHero>
)
}
export default Hero