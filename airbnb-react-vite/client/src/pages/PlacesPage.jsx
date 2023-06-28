import React from "react";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-sm text-gray-500">
              title for your place, should be short and catchy as in
              advertisement
            </p>
            <input
              type="text"
              placeholder="title, for example,: my lovely apt"
            ></input>
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-sm text-gray-500">Address to this place</p>
            <input type="text" placeholder="address"></input>
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-sm text-gray-500">more = better</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="{'Add using a link ...jpg'}"
              ></input>
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>

            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                Upload from your device
              </button>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-sm text-gray-500">Description of the place</p>
            <textarea />
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-sm text-gray-500">
              select all the perks of your places
            </p>
          </form>
          >
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
