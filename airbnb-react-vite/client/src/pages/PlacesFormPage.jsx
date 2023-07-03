import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";
import PhotoUoloader from "../PhotoUoloader";

const PlacesFormPage = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [extraInfo, setExtraInfo] = useState("");
  const [perks, setPerks] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuets] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-sm text-gray-500">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };
    await axios.post("/places", placeData);
  }
  return (
    <>
      <div>
        <form onSubmit={addNewPlace}>
          {preInput(
            "Title",
            "title for your place, should be short and catchy as in advertisement"
          )}
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            placeholder="title, for example,: my lovely apt"
          ></input>
          {preInput("Address", "Address to this place")}
          <input
            type="text"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            placeholder="address"
          ></input>
          {preInput("Photos", "more = better")}

          <PhotoUoloader
            addedPhotos={addedPhotos}
            onChange={setAddedPhotos}
          ></PhotoUoloader>

          {preInput("Description", "Description of the place")}
          <textarea
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          {preInput("Perks", "Select all the perks of your places")}

          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <Perks selected={perks} onChange={setPerks} />
          </div>

          {preInput("Extra info", "house rules, etc")}
          <textarea
            value={extraInfo}
            onChange={(ev) => setExtraInfo(ev.target.value)}
          />

          {preInput(
            "Check in&out times",
            "add chec in adn out times, remember to have some time windows for learning the room between guests"
          )}
          <div className="grid gap-2 sm:grid-cols-3">
            <div>
              <h3 className="mt-2 -mb-1">Check in times</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(ev) => setCheckIn(ev.target.value)}
                placeholder="14:00 PM"
              ></input>
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out times</h3>
              <input
                type="text"
                value={checkOut}
                onChange={(ev) => setCheckOut(ev.target.value)}
                placeholder="11:00 AM"
              ></input>
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input
                type="number"
                value={maxGuests}
                onChange={(ev) => setMaxGuets(ev.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <button className="primary my-4">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PlacesFormPage;
