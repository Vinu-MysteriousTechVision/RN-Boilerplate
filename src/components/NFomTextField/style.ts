import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: 'transparent',
    maxHeight: 90,
  },
  fieldTitle: {
    fontSize: 10, paddingLeft: 0
  },
  fieldInput: {
    // flex: 1,
    minHeight: 24,
    fontSize: 12,
    lineHeight: 20,
    paddingHorizontal: 5,
    marginVertical: 5
  },
  errorField: {
    color: 'red', height: 14, fontSize: 14, marginVertical: 5
  },
  separator: {
    height: 1, backgroundColor: '#c4c4c4'
  }
})
