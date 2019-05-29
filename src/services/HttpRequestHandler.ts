import axios from 'axios'

import { APP_BASE_URL, IApi } from './config'

export interface IConfig {
  api: IApi,
  parameter: {}
  success: (response: any) => void
  error: (error: any) => void
}

export const fetchServiceData = (config: IConfig) => {
  try {
    const headers = {}

    const instance = axios.create({
      baseURL: APP_BASE_URL,
      timeout: 60000,
      headers
    })

    let axiosConfig: any = {}
    axiosConfig = {
      url: config.api.url,
      method: config.api.method
    }

    let status: any
    let resHeaders: any
    let data: any

    const apiSuccessResponse = (response: any) => {
      console.log('response:' + JSON.stringify(response))
      status = response.status
      resHeaders = response.headers
      data = response.data

      if (status === 200 || status === 204) {
        config.success(data)
        return
      }
    }

    const apiErrorResponse = (error: any) => {
      console.log('error:' + JSON.stringify(error))
      config.error(error)

      const response = error.response

      status = error.response.status
      resHeaders = error.response.headers
      data = error.response.data
    }

    instance(axiosConfig)
      .then(apiSuccessResponse)
      .catch(apiErrorResponse)

  } catch (error) {
    config.error(error)
  }
}
