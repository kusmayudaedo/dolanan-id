import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b125d405f6e74db28019479a01db9c5f',
	},
});
