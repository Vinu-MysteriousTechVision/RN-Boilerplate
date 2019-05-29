import _ from 'underscore'
import { LocalizedString } from '../i18n'
import { ErrorCodes, isValidValue } from '../lib'
import { IAppServerError } from '../models/entity.type'
import { getAppServerError } from '../models/Server.error'

const getServerError = (errorResponse: any): IAppServerError => {

  try {
    if (isValidValue(errorResponse) && isValidValue(errorResponse.code)) {
      const error = errorResponse.message
      if (errorResponse.code === 400 || errorResponse.code === 500) {
        if (isValidValue(errorResponse)) {
          return getAppServerError(error, ErrorCodes.UnHandledError)
        }
        return getAppServerError(LocalizedString.error.UnHandledError, ErrorCodes.UnHandledError)
      }
      return getAppServerError(LocalizedString.error.UnHandledError, ErrorCodes.UnHandledError)
    }
    return getAppServerError(LocalizedString.error.UnHandledError, ErrorCodes.UnHandledError)
  } catch (e) {
    return getAppServerError(LocalizedString.error.UnHandledError, ErrorCodes.UnHandledError)
  }
}

export const getNetworkError = (): IAppServerError => {

  return getAppServerError(LocalizedString.error.NetworkError, ErrorCodes.UnHandledError)
}

const getUnHandledError = (): IAppServerError => {

  return getAppServerError(LocalizedString.error.UnHandledError, ErrorCodes.UnHandledError)
}
