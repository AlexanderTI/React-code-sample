import { put } from '../utils/request'
import { UserPerson } from '../types'

export const editMyUserProfileApi = async (url: string, payload: UserPerson): Promise<void> =>
  await put(url, payload)

