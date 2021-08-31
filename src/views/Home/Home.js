import styled from 'styled-components'
import Hero from './Hero/Hero'
import queso from '../../assets/queso.png'
import cheesetacos from '../../assets/cheesetacos.png'
import Options from './Options/Options'

const StyledHome = styled.div`
    background-color: #fff;
`

const Home = () => {
return (
<StyledHome>
    <Hero>
        <img className=" mx-auto max-w-xs md:max-w-xs lg:max-w-md xl:max-w-lg" src={queso} alt="" />
        <img className=" mx-auto max-w-sm lg:max-w-full" src={cheesetacos} alt="" />
    </Hero>
    <Options />
    
</StyledHome>
)
}
export default Home