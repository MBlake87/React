import { React } from "react";

export function Home() {
  return (
    <>
      <div
        id="home"
        className="flex w-[100vw] flex-col items-center justify-center xl:h-[75vh] xl:flex-row"
      >
        <h1 className=" mt-[5rem] text-[5rem] leading-[1]  text-text xl:text-[15rem]">
          Mark Blake
        </h1>
      </div>
      <p className="mb-10 py-10 text-center text-[1rem] tracking-[1rem] text-text xl:p-10 xl:text-[2rem] xl:tracking-[2rem]">
        Front End Developer
      </p>
    </>
  );
}
