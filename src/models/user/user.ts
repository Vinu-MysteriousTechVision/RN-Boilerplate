import _ from 'underscore'
import { IUser } from './user.type'

const isValidValue = (value: any) => {
  if (!_.isUndefined(value) && !_.isNull(value)) {
    return true
  }
}

export const getUserData = (user: any): IUser => {

  let userId: string | null = null
  let userName: string | null = null
  let firstName: string | null = null
  let lastName: string | null = null
  let email: string | null = null

  try {

    userId = isValidValue(user.userId) ? user.userId : ''
    firstName = isValidValue(user.firstName) ? user.firstName : ''
    lastName = isValidValue(user.lastName) ? user.lastName : ''
    userName = firstName! + lastName!
    email = isValidValue(user.email) ? user.email : ''

    return {
      userId: userId!,
      userName: userName!,
      firstName: firstName!,
      lastName: lastName!,
      email: email!
    }
  } catch (error) {
    return {
      userId: '',
      userName: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  }
}
