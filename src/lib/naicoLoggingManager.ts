import { Platform } from 'react-native'
import _ from 'underscore'
const moment = require('moment')
const RNFS = require('react-native-fs')

const logDateFormat: string = 'YYYY-MMM-DD HH:mm:ss.SSS'
const logFileNameDateFormat: string = 'YYYY-MMM-DD'

class NaicoLogManager {

  private static instance: NaicoLogManager

  constructor() { }

  public static get Instance() {
    // Do you need arguments? Make it a regular method instead.
    return this.instance || (this.instance = new this())
  }

  /**
   * write log in to the file
   */
  writeLog = (logContent: string) => {

    const fileName = `${moment().format(logFileNameDateFormat)}.txt`

    let path = RNFS.DocumentDirectoryPath + `/${fileName}`
    if (Platform.OS === 'android') {
      path = RNFS.ExternalDirectoryPath + `/${fileName}`
    }
    // console.log('Path: ' + path)
    // write the file
    RNFS.appendFile(path, logContent)
      .then((success: any) => {
        // console.log('FILE WRITTEN!')
      })
      .catch((err: any) => {
        console.log(err.message)
      })
  }

  /** Outputs a message */
  log = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> log:: ' + logContent)
    this.writeLog(content)
  }

  /** log at this level about anything that happens in the program. */
  debug = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> debug:: ' + content)
    this.writeLog(logContent)
  }

  /** Outputs an informational message */
  info = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> info:: ' + content)
    this.writeLog(logContent)
  }

  /** Log at this level all the notable event that are not considered an error */
  notice = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> notice:: ' + content)
    this.writeLog(logContent)
  }

  /** Outputs a warning message */
  warn = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> warn:: ' + content)
    this.writeLog(logContent)
  }

  /** Outputs an error message */
  error = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.log('Naico Log -> error:: ' + content)
    this.writeLog(logContent)
  }

  /** Outputs a stack trace */
  trace = (content: any) => {
    const logDate = moment().format(logDateFormat) // February 26th 2019, 6:49:17 pm
    const logContent: string = (_.isObject(content)) ? `${logDate}:: ${JSON.stringify(content)}\n` : `${logDate}:: ${content}\n`

    console.trace('Naico Log -> trace:: ' + content)
    this.writeLog(logContent)
  }
}

export const NLog = NaicoLogManager.Instance
