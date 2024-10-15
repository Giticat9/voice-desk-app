import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api',
});

export interface ApiRequestMethod {
	Get: <R>(url: string, options?: AxiosRequestConfig) => Promise<R>;
	Post: <R>(url: string, data?: any, options?: AxiosRequestConfig) => Promise<R>;
	Put: <R>(url: string, data?: any, options?: AxiosRequestConfig) => Promise<R>;
	Delete: <R>(url: string, options?: AxiosRequestConfig) => Promise<R>;
}

export const ApiRequest: ApiRequestMethod = {
	Get: <R = any>(url: string, options?: AxiosRequestConfig) =>
		new Promise<R>((resolve, reject) => {
			axiosInstance
				.get<R>(url, {
					...options,
					withCredentials: true,
				})
				.then(response => resolve(response.data))
				.catch(reject);
		}),
	Post: <R = any>(url: string, data?: any, options?: AxiosRequestConfig) =>
		new Promise<R>((resolve, reject) => {
			axiosInstance
				.post(url, data, {
					...options,
					withCredentials: true,
				})
				.then(response => resolve(response.data))
				.catch(reject);
		}),
	Put: <R = any>(url: string, data?: any, options?: AxiosRequestConfig) =>
		new Promise<R>((resolve, reject) => {
			axiosInstance
				.put(url, data, {
					...options,
					withCredentials: true,
				})
				.then(response => resolve(response.data))
				.catch(reject);
		}),
	Delete: <R = any>(url: string, options?: AxiosRequestConfig) =>
		new Promise<R>((resolve, reject) => {
			axiosInstance
				.delete(url, {
					...options,
					withCredentials: true,
				})
				.then(response => resolve(response.data))
				.catch(reject);
		}),
};
