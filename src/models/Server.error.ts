import { ErrorCodes } from '../lib'
import { IAppServerError } from './entity.type'

export const getAppServerError = (message: string, code: ErrorCodes): IAppServerError => {
  return {
    message,
    code,
  }
}
