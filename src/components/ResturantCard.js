

import CDN_URL from "../utils/constants";


const ResturantCard = (props) => {
    const {resData} = props;

    //destructure data
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,

    } = resData?.info ;


    return (
        <div className="resto-card" style={{backgroundColor: "grey"}}>
            <img 
                className = "rest-logo"
                alt="rest-logo"
                src={  CDN_URL + cloudinaryImageId }
            />
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.deliveryTime} Minutes</h5>
        </div>
    );
}


export default ResturantCard;