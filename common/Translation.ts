export type ServerTrans = {
  UA: string
  EN: string
  RU: string
}

export enum NewsLangs {
  RU = 'RU',
  UA = 'UA',
}

export type VocabularyTrans = {
  key: string
}

export type WithoutTrans = string

export type ServerTransWithKey = {
  key: string
  title: ServerTrans
}

export type ServerTransMap = {
  [key in string]: ServerTransWithKey
}
