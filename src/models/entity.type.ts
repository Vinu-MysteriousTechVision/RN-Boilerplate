import { ErrorCodes } from '../lib'

export interface IAppServerError {
  message: string
  code: ErrorCodes
}
