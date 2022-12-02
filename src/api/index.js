import axios from "axios"

class CallApi {
  constructor() {}

  init({ baseURL: url, timeout: timeout }) {
    try {
      // global call axios defaults
      axios.defaults.baseURL = url
      axios.defaults.timeout = timeout || 0
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded"
    } catch (error) {
      console.error(error)
      return { error: "fail", because: error }
    }
  }

  createNewBaseURL(url, timeout) {
    try {
      const instance = axios.create({
        baseURL: url,
        timeout: timeout || 0,
      })

      instance.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded"

      return instance
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }

  async get(url) {
    try {
      const response = await axios.get(url)
      return { data: response.data, detail: response }
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }

  async post(url, { token: token, data: data }) {
    try {
      const response = await axios.post(url, { data: data || "" })

      if (token && token.trim() !== "")
        axios.defaults.headers.post["Authorization"] = `Bearer ${token}`
      return { data: response.data, detail: response }
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }
}

const call = new CallApi()
export default call
