import { useEffect, React } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

export function Home() {

    const handleWindowSizeChange = () => {
        if (window.screen.width < 768) {
            enableBodyScroll(document)
        } else {
            disableBodyScroll(document)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        if (window.screen.width > 768) { disableBodyScroll(document) } else { enableBodyScroll(document) }
        return () => {

            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <>
            <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black h-screen w-full">
                <div className="flex flex-col w-[100vw] h-[75vh] items-center justify-center">
                    <h1 className="text-white leading-[1] text-[5rem] xl:text-[20rem]  text-center font-Roboto">Mark Blake</h1>
                    <p className="text-white  text-[1rem] tracking-[1rem] text-center p-10 xl:text-[2rem] xl:tracking-[2rem]">Front End Developer</p>
                </div>
            </div>

        </>

    )
}

