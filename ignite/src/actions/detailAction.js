import axios from "axios";
import { gameDetailsURL } from "../api";

const params = {
  params: {
    key: "202be6fa437944b39806ffab9199ac8b",
  },
};

export const loadDetail = (id) => async (dispatch) => {
  //   dispatch({
  //     type: "LOADING_DETAIL",
  //   });

  const detailData = await axios.get(gameDetailsURL(id), params);
  //   const screenShotData = await axios.get(gameScreenshotURL(id));
  console.log(detailData.data);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
