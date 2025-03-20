import axios from "axios";
import { GET_VIDEOS, VIDEOS_LOADING, GET_ERRORS } from "./types";

// Get videos with pagination
export const getVideos =
	(page = 1, limit = 6) =>
	(dispatch) => {
		dispatch(setVideosLoading());
		axios
			.get(`/api/videos?page=${page}&limit=${limit}`)
			.then((res) =>
				dispatch({
					type: GET_VIDEOS,
					payload: res.data,
				}),
			)
			.catch((err) =>
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data,
				}),
			);
	};

// Set loading state
export const setVideosLoading = () => {
	return {
		type: VIDEOS_LOADING,
	};
};
