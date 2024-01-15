import React from "react";
import Robot from "../images/robot.png";

function Protect() {
  return (
    <div className="bg-gray-100 py-5" id="protect">
      <div className="bg-blue-100 mx-5 h-auto flex items-center flex-col rounded-lg">
        <h1 className="text-[40px] text-center pb-5 font-bold font-victor">
          Protect More
        </h1>
        <p className="text-center pb-5 px-5 font-victor">
          Trust us to protect your devices against incoming virus, malware,
          trojans and more! With advanced packages including VPN and password
          protection. We have the products to protect your homes from invasion!
        </p>
        <img className="h-[75%]" src={Robot} alt="Robot" />
        <button className="bg-yellow-200 font-victor hover:bg-yellow-200 text-black border border-black my-5 font-bold py-2 px-4 rounded-full w-[60%]">
          See Pricing Plans
        </button>
      </div>
    </div>
  );
}

export default Protect;
