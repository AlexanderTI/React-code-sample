import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEvent, FormEvent } from 'react'
import { AnyAction } from 'redux'

import { RegionsAndDistricts } from '../common/RegionsNDistrictsWithLangs'
import { Gender, GendersArray } from '../common/Gender'

import { UserPerson } from '../store/types'

export interface StoreProps {}

export interface ActionProps {
  confirmMyEmail: () => AnyAction
  confirmMyPhone: () => AnyAction
  loadMyProfile: () => AnyAction
}

export interface FormValues {
  firstName: string
  lastName: string
  addressRegion: string
  addressDistrictOrTown: string
  birthdayAt: string | null
  gender: string
  bio: string
}

export interface EditUserDataProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => void
  values: FormValues
  touched: FormikTouched<FormValues>
  errors: FormikErrors<FormValues>
  isSubmitting: boolean
  setFieldValue: (field: string, value: string | RegionsAndDistricts | undefined) => void
  userPerson: UserPerson
}

export const genderList: Array<Gender> = [Gender.UNSET, ...GendersArray]
