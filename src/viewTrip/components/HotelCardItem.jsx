import React ,{useState,useEffect} from "react";
import { PHOTO_REF_URL, getPlaceDetails } from "@/service/globalApi";
import { Link } from "react-router-dom";

const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && getPlacePhoto();
  }, [hotel]);
  const getPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.HotelName || hotel.hotelName,
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
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-110 shadow-lg">
        <img
          src={photoUrl?photoUrl:'/image.jpg'}
          //   src={hotel.hotelImageUrl}
          className="rounded-xl h-[180px] w-full object-cover"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">
            {hotel?.HotelName || hotel?.hotelName}
          </h2>
          <h2 className="text-xs text-gray-500">
            📍 {hotel?.HotelAddress || hotel?.hotelAddress}
          </h2>
          <h2 className="text-sm ">💰{hotel?.Price || hotel?.price}</h2>
          <h2 className="text-sm ">⭐{hotel?.rating || hotel?.Rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
