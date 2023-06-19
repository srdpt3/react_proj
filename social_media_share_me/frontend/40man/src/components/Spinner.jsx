import React from "react";
import { PropagateLoader } from "react-spinners";

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PropagateLoader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      />
      {/* <PropagateLoader color="#36d7b7" /> */}

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
