import { Button, Typography } from '@material-ui/core'
import classNames from 'classnames'
import moment from 'moment'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { FormikProps, withFormik } from 'formik'


import { AddressRegion } from '../common/AddressRegion'
import {
  City,
  District,
  regionsAndDistricts,
  unknown,
} from '../common/RegionsNDistrictsWithLangs'
import { editMyUserPerson } from '../store/actions'
import { ControlledAutoComplete } from '...'
import { ControlledDatePicker } from '...'
import { ControlledSelect } from '...'
import { ControlledTextField } from '...'
import {
  findServerTransByLangKey,
  getCustomTranslationByKey,
} from '../utilities/translation'
import { useStyles } from './EditUserData.styles'
import { ActionProps, EditUserDataProps, StoreProps, genderList, FormValues } from './EditUserData.types'
import PermissionsGuard from '../security/PermissionsGuard/PermissionsGuard'
import { initialValues, setPersonResponse } from '...'
import { editUserSchema } from './EditUserData.validation'


const EditUserData = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isSubmitting,
  setFieldValue,
  intl,
}: EditUserDataProps & InjectedIntlProps & StoreProps & ActionProps & FormikProps): ReactElement => {
  const classes = useStyles()

  const handleChangeValues = (name: string, value: string): void => {
    setFieldValue(name, value)
  }

  const handleChangeRegion = (name: string, value: string): void => {
    setFieldValue(name, value)
    setFieldValue(
      'addressDistrictOrTown',
      getCustomTranslationByKey([unknown], AddressRegion.UNKNOWN),
    )
  }

  const regionObj = findServerTransByLangKey(
    [unknown, ...regionsAndDistricts],
    values.addressRegion,
  ).key as AddressRegion

  const selectedCitiesAndDistricts = (selectedRegionKey: AddressRegion): Array<City | District> => {
    const selectedRegion = regionsAndDistricts.find(el => el.key === selectedRegionKey) || {
      cities: [],
      districts: [],
    }
    return [unknown, ...selectedRegion.cities, ...selectedRegion.districts]
  }

  return (
    <PermissionsGuard permissions={['get_user_profile', 'update_user_profile']} isPage>
      <div className={classes.infoBlock}>
            <Typography variant="body2" className={classes.subTitle}>
              <FormattedMessage id="editUserProfilePage.fullName" />
            </Typography>
            <div className={classes.infoRow}>
              <Typography variant="body2" className={classes.text}>
                <FormattedMessage id="editUserProfilePage.fullNameInfo" />
              </Typography>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classNames(classes.infoRow, classes.infoFormBlock)}>
                <ControlledTextField
                  label="editUserProfilePage.field.lastName"
                  name="lastName"
                  value={values.lastName}
                  error={errors.lastName}
                  touch={touched.lastName}
                  handleChange={handleChange}
                  disabled={isSubmitting}
                />
                <ControlledTextField
                  label="editUserProfilePage.field.firstName"
                  name="firstName"
                  value={values.firstName}
                  error={errors.firstName}
                  touch={touched.firstName}
                  handleChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <Typography variant="body2" className={classes.subTitle}>
                <FormattedMessage id="editUserProfilePage.userInfo" />
              </Typography>
              <div className={classNames(classes.infoRow, classes.infoFormBlock)}>
                <ControlledDatePicker
                  name="birthdayAt"
                  value={values.birthdayAt}
                  error={errors.birthdayAt}
                  touch={touched.birthdayAt}
                  handleChange={handleChangeValues}
                  minDate={moment([moment().format('YYYY'), 0, 1]).subtract(100, 'years')}
                  maxDate={moment().subtract(18, 'years')}
                  openTo="year"
                  disabled={isSubmitting}
                  label={<FormattedMessage id="editUserProfilePage.field.birthdayAt" />}
                />
                <ControlledSelect
                  name="gender"
                  value={values.gender}
                  error={errors.gender}
                  touch={touched.gender}
                  handleChange={handleChange}
                  dataList={genderList}
                  disabled={isSubmitting}
                  label={intl.formatMessage({ id: 'editUserModal.gender.label' })}
                />
              </div>

              <Typography variant="body2" className={classes.subTitle}>
                <FormattedMessage id="editUserProfilePage.whereAreYouFrom" />
              </Typography>
              <div className={classNames(classes.infoRow, classes.whereRow)}>
                <ControlledAutoComplete
                  name="addressRegion"
                  value={values.addressRegion}
                  error={errors.addressRegion}
                  touch={touched.addressRegion}
                  handleChange={handleChangeRegion}
                  dataObjectList={[unknown, ...regionsAndDistricts]}
                  disabled={isSubmitting}
                  label="editUserModal.addressRegion.PRIVATE.label"
                />
                {regionObj !== AddressRegion.UNKNOWN ? (
                  <ControlledAutoComplete
                    name="addressDistrictOrTown"
                    value={values.addressDistrictOrTown}
                    error={errors.addressDistrictOrTown}
                    touch={touched.addressDistrictOrTown}
                    handleChange={handleChangeValues}
                    dataObjectList={selectedCitiesAndDistricts(regionObj)}
                    disabled={isSubmitting}
                    label="editUserModal.addressDistrictOrTown.PRIVATE.label"
                  />
                ) : (
                  <div className={classes.emptyField} />
                )}
              </div>
              <ControlledTextField
                label="editUserModal.bio"
                name="bio"
                value={values.bio}
                error={errors.bio}
                touch={touched.bio}
                handleChange={handleChange}
                rows={10}
                disabled={isSubmitting}
              />

              <div className={classes.buttonsBlock}>
                <Button
                  variant="contained"
                  className={classes.cancelButton}
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <FormattedMessage id="editUserProfilePage.save" />
                </Button>
                <Link href="/app/my-profile">
                  <Button
                    variant="contained"
                    className={classes.cancelButton}
                    disabled={isSubmitting}
                  >
                    <FormattedMessage id="editUserProfilePage.cancel" />
                  </Button>
                </Link>
              </div>
            </form>
      </div>
    </PermissionsGuard>
  )
}

const EditUserProfileForm = withFormik<InjectedIntlProps & StoreProps & ActionProps, FormValues>({
  mapPropsToValues: ({ profile }) => initialValues(profile),
  validationSchema: ({ intl }: InjectedIntlProps) => editUserSchema(intl),
  handleSubmit: (values, { props }) => {
    const { profile, editMyUserPerson } = props

    editMyUserPerson(setPersonResponse(profile, values))
  },
  displayName: 'Edit My User Profile Form',
})(EditUserData)

const mapStateToProps = (): StoreProps => ({})

const withConnect = connect(
  mapStateToProps,
  {
    editMyUserPerson
  },
)(EditUserProfileForm)

export default injectIntl(withConnect)
