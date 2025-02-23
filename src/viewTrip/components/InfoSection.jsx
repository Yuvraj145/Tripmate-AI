import { Button } from "@/components/ui/button";
import { getPlaceDetails } from "@/service/globalApi";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { PHOTO_REF_URL } from "@/service/globalApi";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && getPlacePhoto();
  }, [trip]);
  const getPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await getPlaceDetails(data).then((res) => {
      console.log("photos", res.data);
      console.log("plcaes info", res.data.places[0].photos[5].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[5].name
      );
      setPhotoUrl(PhotoUrl);
      
    });
  };
  return (
    <div>
      <img
        src={photoUrl?photoUrl:'/image.jpg'}
        className="w-full object-cover rounded-xl h-[340px]"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          {trip?.userSelection?.location?.label}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              🗓️ {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              💰{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              🧑🏻‍🤝‍🧑🏽 {trip?.userSelection?.traveler} are Travelers
            </h2>
          </div>
          {/* <Button>
            <IoIosSend color="black" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
