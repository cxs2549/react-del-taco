import styled from 'styled-components'
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineTwitter,
	AiOutlineYoutube
} from 'react-icons/ai'
import logo from '../../assets/logo.png'

const StyledFooter = styled.footer`
	color: var(--icon);
	padding: 2rem 1rem;
	background-color: #fff;
	border-top: 2px solid lightgray;
	@media (min-width: 1316px) {
		padding: 2rem 0;
	}
	svg {
		font-size: 2.2rem;
	}
	li {
		margin-bottom: .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 84%;
		&:hover {
			color: red;
		}
	}
	#wrapper {
		max-width: var(--maxWidth);
		margin: 0 auto;
	}
	p {
		color: var(--icon);
	}
	#links {
        @media (min-width: 1280px) {
            grid-template-columns: auto repeat(4, 1fr);
            gap: 1.75rem;
        }
		#logo {
			background-image: url(${logo});
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center center;
			height: 100%;
			width: 110px;
			margin-top: -2rem;
			@media (min-width: 1280px) {
				width: 130px;
			}
		}
	}
`
const Footer = () => {
	const socials = [
		<AiOutlineInstagram />,
		<AiOutlineFacebook />,
		<AiOutlineTwitter />,
		<AiOutlineYoutube />
	]
	const links1 = [ 'menu', 'connect', 'specials', 'locations' ]
	const links2 = [ 'buy gift card', 'check gift card balance', 'webstore' ]
	const links3 = [ 'history', 'news', 'careers', 'franchising' ]
	const links4 = [ 'franchising intranet', 'investors' ]
	return (
		<StyledFooter className="text-sm md:text-base">
			<div id="wrapper">
				<div id="links" className="grid grid-cols-2 md:grid-cols-4  gap-6">
					<div id="logo" className="hidden xl:block" />
					<ul>{links1.map((link, i) => <li key={i}>{link}</li>)}</ul>
					<ul>{links2.map((link, i) => <li key={i}>{link}</li>)}</ul>
					<ul>{links3.map((link, i) => <li key={i}>{link}</li>)}</ul>
					<ul>{links4.map((link, i) => <li key={i}>{link}</li>)}</ul>
				</div>
				<div className="flex justify-between px-4 xl:px-0 xl:justify-center py-12 max-w-lg xl:max-w-full xl:gap-16">
					{socials.map((social, i) => (
						<div
							key={i}
							className="h-16 w-16 flex items-center justify-center rounded-full text-white bg-brandRed  lg:scale-110 transform"
						>
							{social}
						</div>
					))}
				</div>
				<div>
					<ul className="flex whitespace-nowrap flex-wrap grid-cols-2 px-12 gap-x-3 xl:gap-x-6 justify-center">
						<li>terms of use</li>
						<li>privacy policy</li>
						<li>don't sell my info</li>
					</ul>
				</div>
				<p className="pt-8 text-xs text-center">
					&copy; 2021 SuperVision Design for Del Taco Inc.
				</p>
			</div>
		</StyledFooter>
	)
}
export default Footer
