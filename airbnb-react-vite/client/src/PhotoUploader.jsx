import React, { useState } from "react";
import axios from "axios";
const PhotoUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  async function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((resp) => {
        const { data: filenames } = resp;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder="{'Add using a link ...jpg'}"
        ></input>
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos &&
          addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex" key={link}>
              <img
                className="rounded-2xl w-full object-cover"
                src={"http://localhost:4000/uploads/" + link}
              ></img>
            </div>
          ))}
        <label className="h-32 cursor-pointer items-center flex border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
          <input
            type="file"
            className="hidden"
            multiple
            onChange={uploadPhoto}
          ></input>
          Upload from your device
        </label>
      </div>
    </>
  );
};

export default PhotoUploader;
