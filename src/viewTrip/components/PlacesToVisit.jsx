import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  console.log("trip", trip);
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">Places to Visit</h2>
      <div>
        {trip?.tripData?.travelPlan?.itinerary &&
          Object.keys(trip.tripData.travelPlan.itinerary)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((day, dayIndex) => (
              <div key={dayIndex} className="mt-5">
                <h2 className="text-lg font-semibold mt-3">
                  {day.toUpperCase()} :
                </h2>

                {/* Grid layout for at least 2 cards in a row */}
                <div className="grid sm:grid-col md:grid-cols-2 gap-5">
                  {trip.tripData.travelPlan.itinerary[day].map(
                    (plans, index) => (
                      <div key={index}>
                        {/* Time on the left */}
                        <h2 className="w-24 font-medium text-xl text-orange-500 ">
                          {plans.time}
                        </h2>
                        {/* Card Component */}
                        <PlaceCardItem plans={plans} />
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
