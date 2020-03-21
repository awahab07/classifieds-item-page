import { MobileStepper, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { isFullScreen } from '../utils/screen';
import { IStepperProps } from './interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'none',
  },
  dotActive: {
    backgroundColor: theme.palette.grey['50'],
  },
}));

const MobileDotsStepper: FunctionComponent<IStepperProps> = (props: IStepperProps) => {
  const classes = useStyles(props);
  const isOnFullScreen = isFullScreen();
  const { thumbnails, activeIndex } = props;

  const stepperClasses = isOnFullScreen ? classes : { root: classes.root };

  return (
    <MobileStepper
      classes={stepperClasses}
      variant="dots"
      steps={thumbnails.length}
      position="static"
      activeStep={activeIndex}
      nextButton={null}
      backButton={null}
    />
  );
};

export default MobileDotsStepper;
