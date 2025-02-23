import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PHOTO_REF_URL, getPlaceDetails } from "@/service/globalApi";

const UserTripCardItem = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && getPlacePhoto();
  }, [trip]);
  const getPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await getPlaceDetails(data).then((res) => {
    //   console.log("photos", res.data);
    //   console.log("plcaes info", res.data.places[0].photos[5].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[5].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all shadow-sm">
        <img src={photoUrl?photoUrl:'/image.jpg'} className="object-cover rounded-xl h-[220px]" />
      </div>
      <div>
        <h2 className="font-bold text-lg">
          {trip?.userSelection?.location?.label}
        </h2>
        <h2 className="text-sm text-gray-500 ">
          {trip?.userSelection?.noOfDays} Days trip with{" "}
          {trip?.userSelection?.budget} budget
        </h2>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
