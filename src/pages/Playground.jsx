import React, { useState, useEffect } from "react";
import { Spinner } from "../components";
import Spline from "@splinetool/react-spline";

const Playground = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full">
          {/* Abishek Text with BoX interation*?
          /* <Spline scene="https://prod.spline.design/G6sKKNlePFNpWdQ5/scene.splinecode" /> */}
          {/* Abishek Text with Objects*/}
          <Spline scene="https://prod.spline.design/eUKbozLDn9Pvm7mf/scene.splinecode" /> 
        </div>
      )}
    </div>
  );
};

export default Playground;
