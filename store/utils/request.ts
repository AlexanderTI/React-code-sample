import axios from 'axios'

const axiosApiInstance = axios.create()

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export const completedFetch = async (
  url = '',
  options: RequestInit,
): Promise<{ [key: string]: object | string | boolean }> => {
  const setMethodOfReq = options.method.toLowerCase()
  const response = await axiosApiInstance[setMethodOfReq](`${url}`, options.body, options)
  const res =
    response.status === (504 || 404)
      ? { source: '', code: response.status, message: response.statusText }
      : response.data
  const statusText = response.status.toString()
  if (statusText.startsWith('2')) {
    return res || 'success'
  } 
  return Promise.reject({ status: response.status, message: res })
}

export const put = (url: string, body?: any): Promise<any> => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  return completedFetch(url, options)
}
