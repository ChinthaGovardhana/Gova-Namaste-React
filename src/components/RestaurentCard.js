import { CDN_URL } from "../utils/constants";


const RestaurentCard = (props) => {
	const { resData } = props
	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		deliveryTime
	} = resData?.info;
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img alt="images" className="res-logo" src={CDN_URL + cloudinaryImageId} />
			<h3>{name}</h3>
			<h3>{cuisines.join(',')}</h3>
			<h3>{avgRating} star</h3>
			<h3>${costForTwo}</h3>
			<h3>{deliveryTime} minutes </h3>

		</div>
	)
}

export default RestaurentCard;