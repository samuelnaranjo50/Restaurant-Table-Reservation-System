import { useState, useEffect } from "react";

export default function useWindowSize(width) {
  //This creates a state to store the nav type

  const mobileWidth = width;

  const [isWindowMobile, setWindowMobile] = useState(false);

  //Defining if the window size should be for mobile or desktop
  useEffect(() => {
    window.innerWidth < mobileWidth
      ? setWindowMobile(true)
      : setWindowMobile(false);
  }, []);


  // The next lines listen to the window width, this way I can define when to render mobile nav or desktop nav, However every time this is render I need to clean up for rerender
  useEffect(() => {
    // 1. The Setup: Create the function -> Handling the window resize
    const handleResize = () => {
      setWindowMobile(window.innerWidth < mobileWidth);
    };

    // 2. The Subscription: Start listening
    window.addEventListener("resize", handleResize);

    // 3. THE CLEANUP FUNCTION: Stop listening
    // React runs this specific line when the component dies (unmounts)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isWindowMobile; //When using the hook, it will update it if anything happens
}
