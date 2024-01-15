import { Carousel } from "@material-tailwind/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { useState } from "react";

function Pricing() {
  const [freePlan, setFreePlan] = useState(true);

  return (
    <>
      <div className="bg-gray-100 py-5 " id="pricing">
        <Carousel
          className="rounded-lg max-h-[75vh] max-w-[90%] mx-5"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="h-full text-center bg-yellow-100 rounded-lg">
            <h1 className="text-[32px] font-bold font-victor pt-5 underline">
              Free
            </h1>
            <div className="grid grid-cols-3 gap-1 my-5 ">
              <p className="col-span-2 font-victor text-[12px] text-left pl-5 my-1">
                Number of Devices:
              </p>
              <p className="justify-center my-1 text-[12px] font-bold">1</p>
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Real Time Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="w-[100%] my-1"
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Virus, Malware, Spyware Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Password Manager
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Firewall
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                VPN
              </p>
              <IoClose
                size={20}
                style={{ color: "red" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Parental Controls
              </p>
              <IoClose
                size={20}
                style={{ color: "red" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Social Media Monitoring
              </p>
              <IoClose
                size={20}
                style={{ color: "red" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Cloud Backup
              </p>
              <p className="text-[12px] font-victor my-1 justify-center font-bold pl-5">
                1GB
              </p>
            </div>
            <div className="grid grid-cols-3 pb-8">
              <div className="mt-3">
                <label className="relative ml-5 inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    onClick={() => {
                      setFreePlan(!freePlan);
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-victor font-medium text-black text-[14px] pr-5 dark:text-black">
                    {freePlan ? "Monthly" : "Annual"}
                  </span>
                </label>
              </div>
              <h2 className="col-span-2  font-victor font-semibold">
                {freePlan ? (
                  <p className="text-[32px] text-black">
                    £19.99<span className="text-[12px] text-black">p/m</span>
                  </p>
                ) : (
                  <p className="text-[32px] text-black">
                    £179.99
                    <span className="text-[12px] text-black">yearly</span>
                  </p>
                )}
              </h2>
            </div>
          </div>
          {/* second element */}
          <div className="h-full text-center bg-blue-100 rounded-lg">
            <h1 className="text-[32px] font-bold font-victor pt-5 underline">
              Professional
            </h1>
            <div className="grid grid-cols-3 gap-1 my-5 ">
              <p className="col-span-2 font-victor text-[12px] text-left pl-5 my-1">
                Number of Devices:
              </p>
              <p className="justify-center my-1 text-[12px] font-bold">5</p>
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Real Time Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="w-[100%] my-1"
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Virus, Malware, Spyware Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Password Manager
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Firewall
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                VPN
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Parental Controls
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Social Media Monitoring
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Cloud Backup
              </p>
              <p className="text-[12px] font-victor my-1 justify-center font-bold pl-5">
                5GB
              </p>
            </div>
            <div className="grid grid-cols-3 pb-8">
              <div className="mt-3">
                <label className="relative ml-5 inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    onClick={() => {
                      setFreePlan(!freePlan);
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-victor font-medium text-black text-[14px] pr-5 dark:text-black">
                    {freePlan ? "Monthly" : "Annual"}
                  </span>
                </label>
              </div>
              <h2 className="col-span-2  font-victor font-semibold">
                {freePlan ? (
                  <p className="text-[32px] text-black">
                    £29.99<span className="text-[12px] text-black">p/m</span>
                  </p>
                ) : (
                  <p className="text-[32px] text-black">
                    £299.99
                    <span className="text-[12px] text-black">yearly</span>
                  </p>
                )}
              </h2>
            </div>
          </div>
          {/* third element */}
          <div className="h-full text-center bg-yellow-100 rounded-lg">
            <h1 className="text-[32px] font-bold font-victor pt-5 underline">
              Business
            </h1>
            <div className="grid grid-cols-3 gap-1 my-5 ">
              <p className="col-span-2 font-victor text-[12px] text-left pl-5 my-1">
                Number of Devices:
              </p>
              <p className="justify-center my-1 text-[12px] font-bold">30+</p>
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Real Time Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="w-[100%] my-1"
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Virus, Malware, Spyware Protection
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Password Manager
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Firewall
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                VPN
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Parental Controls
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Social Media Monitoring
              </p>
              <TiTickOutline
                size={20}
                style={{ color: "green" }}
                className="my-1 w-[100%] "
              />
              <p className="text-[12px] font-victor col-span-2 my-1 text-left pl-5">
                Cloud Backup
              </p>
              <p className="text-[12px] font-victor my-1 justify-center font-bold pl-5">
                30GB
              </p>
            </div>
            <div className="grid grid-cols-3 pb-8">
              <div className="mt-3">
                <label className="relative ml-5 inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    onClick={() => {
                      setFreePlan(!freePlan);
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-victor font-medium text-black text-[14px] pr-5 dark:text-black">
                    {freePlan ? "Monthly" : "Annual"}
                  </span>
                </label>
              </div>
              <h2 className="col-span-2  font-victor font-semibold">
                {freePlan ? (
                  <p className="text-[32px] text-black">
                    £49.99<span className="text-[12px] text-black">p/m</span>
                  </p>
                ) : (
                  <p className="text-[32px] text-black">
                    £499.99
                    <span className="text-[12px] text-black">yearly</span>
                  </p>
                )}
              </h2>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Pricing;
