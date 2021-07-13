import { InjectedIntl } from 'react-intl'
import * as Yup from 'yup'
import { ObjectSchema, Shape } from 'yup'

import { EXTRA_LARGE_ARTICLE_LENGTH_LIMIT } from '...'

export const editUserSchema = (intl: InjectedIntl): ObjectSchema<Shape<object, {}>> =>
  Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .required(intl.formatMessage({ id: 'form.required.error' }))
      .matches(
        /^[A-zА-яЁёЇїІіЄєҐґ'-]+$/,
        intl.formatMessage({ id: 'common.validate.error.onlyLetters' }),
      ),

    lastName: Yup.string()
      .trim()
      .required(intl.formatMessage({ id: 'form.required.error' }))
      .matches(
        /^[A-zА-яЁёЇїІіЄєҐґ'-]+$/,
        intl.formatMessage({ id: 'common.validate.error.onlyLetters' }),
      ),

    bio: Yup.string().max(
      EXTRA_LARGE_ARTICLE_LENGTH_LIMIT,
      intl.formatMessage({ id: 'editUserProfilePage.error.bio.max-length' }),
    ),
  })
