import { Alert } from 'react-native'
import _ from 'underscore'
import { LocalizedString } from '../i18n'

const showConfirmDialog = (title: string, dialogueMsg: string, onPressCallback: () => void) => {
  if (dialogueMsg !== '' && dialogueMsg !== undefined) {
    Alert.alert(
      title,
      dialogueMsg,
      [
        { text: LocalizedString.showDialogue.Button.Cancel, onPress: () => { }, style: 'cancel' },
        { text: LocalizedString.showDialogue.Button.OK, onPress: onPressCallback }
      ],
      { cancelable: false }
    )
  }
}

export const showDialog = (title: string, dialogueMsg: string, onPressCallback: () => void) => {
  if (dialogueMsg !== '' && dialogueMsg !== undefined) {
    setTimeout(() => {
      Alert.alert(
        title,
        dialogueMsg,
        [
          { text: LocalizedString.showDialogue.Button.OK, onPress: onPressCallback }
        ],
        { cancelable: false }
      )
    }, 100)
  }
}

export const isValidValue = (value: any) => {
  if (!_.isUndefined(value) && !_.isNull(value) && !_.isEmpty(value)) {
    return true
  }
  return false
}
