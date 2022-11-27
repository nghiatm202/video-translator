import axios from "axios"

export const postData = async (params, url, data) => {
  try {
    const response = await params({
      method: "POST",
      url: url,
      data: data,
    })
    return { data: response.data, detail: response, status: 200 }
  } catch (error) {
    console.error(error)
    return { status: "fail", because: error }
  }
}

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

  createNewBaseURL(url) {
    try {
      const instance = axios.create({
        baseURL: url,
      })

      return { instance: instance, status: 200 }
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }

  async getInstance(url) {
    try {
      const instance = this.createNewBaseURL()

      if (instance.status !== "fail") {
        const response = await instance.get(url)
        return { data: response.data, detail: response, status: 200 }
      }
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }

  async postInstance(params, url, { token: token, data: data }) {
    try {
      // const instance = this.createNewBaseURL();
      // console.log(instance);
      console.log(params)

      if (params.status !== "fail") {
        const response = await params.post(url, { data: data })

        if (token !== "") {
          instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
          instance.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded"
        }

        return { data: response.data, detail: response, status: 200 }
      }
    } catch (error) {
      console.error(error)
      return { status: "fail", because: error }
    }
  }

  async request(url) {
    try {
      const response = await axios.request(url)
      return { data: response.data, detail: response }
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

  put() {}
  delete() {}
}

const call = new CallApi()
export default call
