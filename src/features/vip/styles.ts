import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  thumbnail: {
    maxWidth: 100,
    '&.selected': {
      border: `${theme.spacing(0.3)}px solid ${theme.palette.grey['400']}`
    },
    '&:hover:before': {
      background: theme.palette.warning.dark,
      content: 'before',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }
  },
}));
