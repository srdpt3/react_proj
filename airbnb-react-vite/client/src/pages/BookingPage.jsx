import React from "react";
import { useParams } from "react-router-dom";
import AccountNav from "../AccountNav";

const BookingPage = () => {
  const { id } = useParams();

  return (
    <div>
      <AccountNav />
    </div>
  );
};

export default BookingPage;
