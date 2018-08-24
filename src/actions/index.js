import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=6162736f6c7574656c79756e697175656b6579';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}
