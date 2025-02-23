import React ,{useState,useEffect} from "react";
import { PHOTO_REF_URL, getPlaceDetails } from "@/service/globalApi";
import { Link } from "react-router-dom";

const PlaceCardItem = ({ plans }) => {
  const [photoUrl, setPhotoUrl] = useState();
  // console.log(plans)
    useEffect(() => {
      plans && getPlacePhoto();
    }, [plans]);
    const getPlacePhoto = async () => {
      const data = {
        textQuery: plans?.placeName || plans.PlaceName
      };
      const result = await getPlaceDetails(data).then((res) => {
        // console.log("photos", res.data);
        // console.log("plcaes info", res.data.places[0].photos[5].name);
        const PhotoUrl = PHOTO_REF_URL.replace(
          "{NAME}",
          res.data.places[0].photos[5].name
        );
        setPhotoUrl(PhotoUrl);
      });
     
    };
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" + plans.placeName ||
        plans.PlaceName
      }
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all shadow-md cursor-pointer">
        <img src={photoUrl?photoUrl:'/image.jpg'} className="w-[130px] h-[130px] rounded-xl" />
        <div>
          <h2 className="font-bold text-lg ">
            {plans.placeName || plans.PlaceName}
          </h2>
          <p className="text-sm text-gray-500">
            {plans.placeDetails || plans.PlaceDetails}
          </p>
          <h2 className="mt-2">🕚 {plans.timeTravel || plans.travelTime || 30 } </h2>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
