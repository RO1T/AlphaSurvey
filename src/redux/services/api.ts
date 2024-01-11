import axios, { AxiosInstance } from 'axios'
import { getToken } from './token'

const BASE_URL = 'http://127.0.0.1:3000/'
const TIMEOUT = 1000

export const createApi = (): AxiosInstance => {
	const api = axios.create({
		baseURL: BASE_URL,
		timeout: TIMEOUT,
	})

	api.interceptors.request.use(
		(config) => {
			const token = getToken()
			if (token && config.headers) {
				config.headers['Authorization'] = `Bearer ${token}`
			}
			return config
		},)

	//   api.interceptors.response.use(
	//     (response) => response,
	//     (error: AxiosError<DetailMessageType>) => {
	//       if (error.response && error.response.status === 404) {
	//         browserHistory.push(AppRoute.NotFound);
	//       } else if (error.response && shouldDisplayError(error.response)) {
	//         const detailMessage = error.response.data;

	//         toast.warn(detailMessage.message);
	//       }

	//       throw error;
	//     }
	//   );

	return api
}
