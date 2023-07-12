import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "./AccountNav";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }
  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
      <div className="flex bg-gray-200 p-6 my-6 rounded-2xl mb-4 items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Your booking information:</h2>
          <BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
        </div>

        <div className="bg-primary p-3 text-white rounded-2xl">
          <div>Total Price</div>
          <div className="text-2xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place}></PlaceGallery>
    </div>
  );
};

export default BookingPage;
