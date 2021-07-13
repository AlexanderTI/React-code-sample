import { createStyles, makeStyles } from '@material-ui/core'

import { GREY_50 } from '../../../../constants/basic-colors'

export const useStyles = makeStyles(theme =>
  createStyles({
    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
    },
    infoRow: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      margin: '15px 0 25px',
      flexWrap: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
      },
    },
    contactData: {
      margin: '15px 0 25px',
    },
    buttonBlock: {
      margin: '0 0 25px 0',
      justifyContent: 'space-around',
    },
    infoFormBlock: {
      [theme.breakpoints.down('sm')]: {
        minHeight: 205,
      },
    },
    profileDataContainer: {
      display: 'flex',
    },
    subTitle: {
      fontWeight: 700,
      marginBottom: 5,
      fontSize: 16,
    },
    text: {
      color: GREY_50,
      fontSize: 15,
    },
    labelDialog: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      textDecoration: 'underline',
      cursor: 'pointer',
      transition: '.3s color',
      [theme.breakpoints.down('xs')]: {
        marginBottom: 14,
      },
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
    changeLabel: {
      marginRight: 5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    notConfirmedIcon: {
      cursor: 'pointer',
      color: theme.palette.error.main,
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
    disabledIcon: {
      cursor: 'pointer',
      color: theme.palette.grey[300],
    },
    emptyField: {
      width: '100%',
    },
    buttonsBlock: {
      display: 'flex',
      margin: '15px 0 20px',
      [theme.breakpoints.down('xs')]: {
        flexWrap: 'wrap',
      },
    },
    cancelButton: {
      margin: '15px 20px 40px 0',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: '15px 0 0',
      },
    },
    saveButton: {
      margin: '15px 0 40px',
      transition: '.5s all',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    whereRow: {
      '& > div:nth-child(2)': {
        [theme.breakpoints.down('sm')]: {
          marginTop: 40,
        },
      },
    },
    bioField: {
      marginTop: 20,
    },
    email: {
      [theme.breakpoints.down('xs')]: {
        order: 1,
      },
    },
    emailTimer: {
      [theme.breakpoints.down('xs')]: {
        order: 2,
      },
    },
    phone: {
      [theme.breakpoints.down('xs')]: {
        order: 3,
      },
    },
    phoneTimer: {
      [theme.breakpoints.down('xs')]: {
        order: 4,
      },
    },
  }),
)
