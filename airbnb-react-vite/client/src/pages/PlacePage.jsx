import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlacePage = () => {
  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      return;
    }
  }, [id]);
  return (
    <div className="mt-8">
      <h1></h1>
    </div>
  );
};

export default PlacePage;
