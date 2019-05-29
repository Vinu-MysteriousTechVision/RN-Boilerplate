import React from 'react'
import {loginValidator} from '../../src/screens/login'

import renderer from 'react-test-renderer'

jest.mock('../../src/i18n', () => ({
  doSomething: jest.fn()
}))

jest.mock('@react-native-community/netinfo', () => ({
  doSomething: jest.fn()
}))

jest.mock('react-native-fs', () => ({
  doSomething: jest.fn()
}))

jest.mock('../../src/res', () => ({
  doSomething: jest.fn()
}))

test('loginValidator', () => {
  expect(loginValidator(1, 2)).toBe(3)
})
