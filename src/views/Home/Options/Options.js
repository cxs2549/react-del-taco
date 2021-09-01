import styled from 'styled-components'
import iphone from '../../../assets/options/iphone.png'
import bag from '../../../assets/options/taco-bag.png'
import drive from '../../../assets/options/drive-thru.png'
import check from '../../../assets/options/check.png'
const StyledOptions = styled.div`
	background-color: #fff;
	padding: 1rem .5rem;
	max-width: var(--maxWidth);
	margin: 0 auto;
	position: relative;
	z-index: -1;
	@media (min-width: 768px) {
		padding: 1rem 2rem;
	}
	@media (min-width: 1280px) {
		padding: 1rem 0;
	}
	h1 {
		font-size: 210%;
		line-height: 1;
		text-transform: uppercase;
		font-weight: 900;
		margin-bottom: 1rem;
		@media (min-width: 768px) {
			font-size: 220%;
			br {
				display: none;
			}
		}
		@media (min-width: 1280px) {
			font-size: 260%;
		}
	}
	#table {
		grid-template-columns: 1fr auto auto;
		gap: 2px;
		margin: 0 auto;
		@media (min-width: 768px) {
			/* max-width: 80%; */
		}
		@media (min-width: 1024px) {
			max-width: 85%;
		}
		@media (min-width: 1280px) {
			max-width: 840px;
		}
		> div {
			background-color: #dfdfdf;
		}
		.row {
			@media (min-width: 768px) {
				gap: 2px;
				grid-template-columns: auto 1fr;
			}
			@media (min-width: 1024px) {
				grid-template-columns: 240px 1fr;
			}
		}
		.row2 {
			@media (min-width: 768px) {
				gap: 2px;
				grid-template-columns: auto 1fr;
			}
		}
	}
`
const Options = () => {
	return (
		<StyledOptions className="text-gray-800">
			<h1 className="text-gray-700   mx-auto">
				limited contact & <br className="xl:hidden " /> payment options
			</h1>
			<div className="grid text-xs" id="table">
				<div />
				<div className="font-bold uppercase leading-4 py-2 px-1 md:px-3 text-gray-700 md:text-lg">
					ordering
				</div>
				<div className="font-bold uppercase leading-4 py-2 px-1 md:px-3 text-gray-700 md:text-lg">
					payment
				</div>
				<div className="flex md:grid row  gap-2 items-center justify-between p-1 py-3">
					<div className="hidden md:block text-3xl font-extrabold text-brandRed uppercase leading-7 mx-4 ">
						del taco <br /> mobile <br /> app*
					</div>
					<div className="flex items-center gap-3">
						<img src={iphone} className="w-16 sm:w-24" alt="" />
						<div>
							<ul className="text-xs md:text-base font-bold">
								<li>Order & Pay Online</li>
								<li>Order & Pay Delivery</li>
							</ul>
							<button className="uppercase font-bold bg-brandRed text-white px-3 py-2 rounded my-2 whitespace-nowrap">
								download app
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center py-3">
					<img src={check} className="w-12 md:w-16" alt="" />
				</div>
				<div className="flex items-center justify-center">
					<img src={check} className="w-12 md:w-16" alt="" />
				</div>
				<div className="flex  gap-2 md:grid row items-center p-1 justify-center">
					<div className="hidden md:block text-3xl font-extrabold text-brandRed uppercase leading-7 mx-4 ">
						del taco <br /> delivery <br /> partners*
					</div>
					<div className="flex items-center gap-4 ">
						<img src={bag} className="w-16 sm:w-24" alt="" />
						<div>
							<p className="uppercase text-xs md:text-base font-bold">
								Limited contact delivery now available. Our delivery packaging is
								sealed and double checked.
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<img src={check} className="w-12 md:w-16" alt="" />
				</div>
				<div className="flex items-center justify-center">
					<img src={check} className="w-12 md:w-16" alt="" />
				</div>
				<div className="flex items-center overflow-hidden md:grid row2">
					<div className="hidden md:block text-3xl font-extrabold text-brandRed uppercase leading-7 mx-4 whitespace-nowrap mr-10">
						del taco <br />drive-thru*
					</div>
					<img src={drive} className="object-center object-cover w-full" alt="" />
				</div>

				<div className="flex items-center justify-center">
					<img src={check} className="w-12 md:w-16" alt="" />
				</div>
				<div />
			</div>
		</StyledOptions>
	)
}
export default Options
