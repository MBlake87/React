import React from "react";
import Junk from "../images/junk.png";
import Users from "../images/people.png";
import Shield from "../images/shield.png";
import Computer from "../images/computer.png";

function Features() {
  return (
    <div className="py-5 bg-gray-100" id="features">
      <div className="min-h-[75vh] mx-5 rounded-lg flex flex-wrap flex-col bg-yellow-100">
        <div className="flex justify-around">
          <img
            className="h-[100px] my-10 pl-5 w-[125px]"
            src={Computer}
            alt="Computer"
          />
          <p className="w-[50%] mt-10 font-semibold font-victor">
            Easy to download and install across multiple platforms.
          </p>
        </div>
        <div className="flex justify-around">
          <img
            className="h-[100px] my-10 pl-5 w-[125px]"
            src={Shield}
            alt="Protect"
          />
          <p className="w-[50%] mt-10 font-semibold font-victor">
            Protect your devices against threats and malware.
          </p>
        </div>
        <div className="flex justify-around">
          <img
            className="h-[100px] my-10 pl-5 w-[125px]"
            src={Junk}
            alt="Junk"
          />
          <p className="w-[50%] mt-10 font-semibold font-victor">
            Remove all that unwanted junk and speed up your device.
          </p>
        </div>
        <div className="flex justify-around">
          <img
            className="h-[100px] my-10 pl-5 w-[125px]"
            src={Users}
            alt="Users"
          />
          <p className="w-[50%] mt-10 font-semibold font-victor">
            Trusted by millions of users worldwide!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
