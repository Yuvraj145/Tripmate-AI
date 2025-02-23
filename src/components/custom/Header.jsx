import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = async (tokenInfo) => {
    console.log("Hello");
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
      });
    // window.location.reload();
    console.log("end");
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  // useEffect(() =>{
  //   console.log("users",users)
  // },[])
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <a className="flex justify-center items-center text-2xl" href="/">
        <img className="w-10 m-2" src="/logo.svg" />
        <h2 className="font-bold">TripMate AI</h2>
      </a>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button className="rounded-full" variant="outline">
                MY Trips
              </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent className="w-[10rem] flex justify-center">
                <Button
                  className="bg-black text-white cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    // navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div>
            <Button
              className="bg-black text-white"
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              {" "}
              Sign In
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
              <DialogContent className="bg-gray-900 text-white">
                <DialogHeader>
                  <DialogTitle className="flex justify-center items-center">
                    <img
                      src="/logo.svg"
                      alt="Tripmate AI Logo"
                      className="item-center"
                    />{" "}
                    <p className="text-xl font-semibold">Tripmate Ai</p>
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    <h2 className="font-bold text-lg mt-7">
                      Sign In With Google
                    </h2>
                    <p className="text-gray-300 font-semibold">
                      Sign in to the App with Google authentication securely
                    </p>

                    <Button
                      onClick={login}
                      className="w-full mt-5 bg-violet-700 hover:bg-violet-900 text-white font-semibold h-14 text-xl flex gap-4 items-center justify-center border border-gray-900"
                    >
                      <FcGoogle fontSize={45} className="font-semibold" /> Sign
                      In With Google
                    </Button>

                    <Button
                      onClick={handleClose}
                      className="font-bold text-xl w-full h-14 mt-5 bg-gray-700 text-white hover:bg-red-700"
                    >
                      Close
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
