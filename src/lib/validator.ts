'use strict'

import _ from 'underscore'
const maxLimit = 30
const maxPhoneLimit = 14
const maxPostalLimit = 10
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// const passwordFormat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const passwordFormat = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/
const macAddressFormat = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
// const versionFormat = /^[v](\d+\.)?(\d+\.)?(\*|\d+)$/
const versionFormat = /^v(\d+)?(\.\d+)?(\.\d+)?/
//

export const validateUserName = (value: string) => {

  const userIdRegexFormat = /^[a-zA-Z\-_]+$/
  return (!_.isUndefined(value) && value.length > 0 && userIdRegexFormat.test(value))
}

export function validateEmail(email: string) {
  return (!_.isUndefined(email) && email.length > 0 && mailFormat.test(email))
}

export function validateMacAddress(macID: string) {
  return (!_.isUndefined(macID) && macID.length > 0 && macAddressFormat.test(macID))
}

export function validateVersion(version: string) {
  return (!_.isUndefined(version) && version.length > 0 && versionFormat.test(version))
}

export function validatePassword(password: string) {
  return (!_.isUndefined(password) && password.length > 0 && passwordFormat.test(password))
}

/*
 * Check the value is undefined, null or Empty
 */
export const isHaveValue = (value: any): boolean => {
  if (!_.isUndefined(value) && !_.isNull(value)) {
    if (_.isObject(value) && _.isEmpty(value)) {
      return false
    }
    return true
  }
  return false
}
/*
 * Check the value is undefined, null or Empty
 */
export const isEmptyText = (value: any): boolean => {
  if (value === '') {
    return true
  }
  return false
}

/*
 * Check the value is undefined, null or Empty
 */
export const isMaxLimit = (value: any): boolean => {
  return value.length > maxLimit
}

/*
 * Check the value is undefined, null or Empty
 */
export const isMaxPhone = (value: any): boolean => {
  if (value.length > maxPhoneLimit) {
    return true
  }
  return false
}

export const isValidPhoneNumberLimit = (value: string): boolean => {
  return value.length === maxPhoneLimit || value === ''
}

/*
 * Check the value is undefined, null or Empty
 */
export const isMaxPostalLimit = (value: any): boolean => {
  return value.length > maxPostalLimit
}

export const containValue = (value: any): boolean => {
  if (_.isUndefined(value) || _.isNull(value)) {
    return false
  }
  return true
}
