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
	h1 {
		font-size: 210%;
		line-height: 1;
		text-transform: uppercase;
		font-weight: 900;
		margin-bottom: 1rem;
	}
	#table {
		grid-template-columns: 1fr auto auto;
		gap: 2px;
		> div {
			background-color: #dfdfdf;
		}
	}
`
const Options = () => {
	return (
		<StyledOptions>
			<h1>
				limited contact & <br /> payment options
			</h1>
			<div className="grid text-xs" id="table">
				<div />
				<div className="font-bold uppercase leading-4 py-2 px-1">
					 ordering
				</div>
				<div className="font-bold uppercase leading-4 py-2 px-1">
					 payment
				</div>
				<div className="flex gap-2 items-center p-1">
					<img src={iphone} className="w-16" alt="" />
					<div>
						<ul className="text-xs font-bold">
							<li>Order & Pay Online</li>
							<li>Order & Pay Delivery</li>
						</ul>
						<button className="uppercase font-bold bg-brandRed text-white px-3 py-2 rounded my-2 whitespace-nowrap">
							download app
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<img src={check} className="w-12" alt="" />
				</div>
				<div className="flex items-center justify-center">
					<img src={check} className="w-12" alt="" />
				</div>
				<div className="flex gap-2 items-center p-1">
					<img src={bag} className="w-16" alt="" />
					<div>
						<p className="uppercase text-xs font-bold">
							Limited contact delivery now available. Our delivery packaging is sealed
							and double checked.
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<img src={check} className="w-12" alt="" />
				</div>
				<div className="flex items-center justify-center">
					<img src={check} className="w-12" alt="" />
				</div>
				<div>
					<img src={drive} alt="" />
				</div>

				<div className="flex items-center justify-center">
					<img src={check} className="w-12" alt="" />
				</div>
                <div></div>
			</div>
		</StyledOptions>
	)
}
export default Options
