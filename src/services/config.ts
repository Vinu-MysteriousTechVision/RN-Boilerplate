import { HttpMethod } from '../lib'

export interface IApi {
  method: HttpMethod
  url: string
}

export const APP_BASE_URL = 'https://facebook.github.io'

export const GET_MOVIES: IApi = {
  method: HttpMethod.GET,
  url: APP_BASE_URL + '/react-native/movies.json'
}
