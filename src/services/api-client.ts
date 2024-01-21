import axios from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b125d405f6 e74db28019479a01db9c5f',
	},
});
