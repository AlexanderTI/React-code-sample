import { ResponseEntity } from './ResponseEntity'

export interface LoadableState {
  hasError: boolean
  isLoading: boolean
  response?: ResponseEntity
}

export const initialLoadableState: LoadableState = Object.freeze({
  hasError: false,
  isLoading: false,
})
