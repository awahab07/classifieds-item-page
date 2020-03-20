import { MobileStepper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { IStepperProps } from './interfaces';

const MobileDotsStepper: FunctionComponent<IStepperProps> = (props: IStepperProps) => {
  const { thumbnails, activeIndex } = props;

  return (
    <MobileStepper
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
