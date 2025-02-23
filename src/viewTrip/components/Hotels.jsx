import React from "react";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  console.log("trip hotels", trip);
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl mb-5">Hotel Recommendation</h2>
      <div className="w-[60rem] grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {trip?.tripData?.travelPlan?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
