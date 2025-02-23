import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  const getTripData = async () => {
    const docRef = doc(db, "AITrip", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("document found", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast.error("No Trip found");
    }
  };

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
        {/* information section */}
        <InfoSection trip={trip}/>
        {/* hotel section */}
        <Hotels trip={trip}/>
        {/* daily plan */}
        <PlacesToVisit trip={trip}/>
        <Footer/>
    </div>
  );
};

export default ViewTrip;
