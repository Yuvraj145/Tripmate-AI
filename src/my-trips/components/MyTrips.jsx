import { db } from "@/service/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./UserTripCardItem";

const MyTrips = () => {
  const user =JSON.parse(localStorage.getItem("user"));
  const [userTrips, setUserTrips] = useState([]);
  const navigate = useNavigate();
  const getUserTrips = async () => {
    if (!user) {
      navigate("/");
      return;
    }
    const queryText = query(
      collection(db, "AITrip"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(queryText);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, "=>", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

  useEffect(() => {
    getUserTrips();
  });
  return(
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">MyTrips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
      {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem
                trip={trip}
                key={index}
                className="object-cover rounded-xl"
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => {
              <div
                key={index}
                className="h-[220px] w-full bg-slate-500 animate-pulse rounded-xl"
              ></div>;
            })}
      </div>
      </div>
  )
};

export default MyTrips;
