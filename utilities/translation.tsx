import { parseCookies } from 'nookies'

import {
  ServerTransWithKey
} from '../common/Translation'

export const getCustomTranslationByKey = (
  targetObject: Array<ServerTransWithKey>,
  key: string,
): string => {
  const cookies = parseCookies()
  const lang = cookies.lang === 'ru-RU' ? 'RU' : 'UA'

  const targetObjectItem = targetObject.find(item => item.key === key)
  return targetObjectItem ? targetObjectItem.title[lang] : ''
}

export const findServerTransByLangKey = (
  targetObject: Array<ServerTransWithKey>,
  key: string,
): ServerTransWithKey => {
  const cookies = parseCookies()
  const lang = cookies.lang === 'ru-RU' ? 'RU' : 'UA'

  return targetObject.find(item => item.title[lang] === key) as ServerTransWithKey
}
