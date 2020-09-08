import {clone} from '@core/utils';
import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {}, // {'0:1', 'sfsfasf'}
  stylesState: {}, // {'1', 'fontWidth'}
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
