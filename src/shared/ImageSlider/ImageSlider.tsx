import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
const ImageSlider: FunctionComponent = (props: PropsWithChildren<{}>): ReactElement => {
  return <>{React.Children.toArray(props.children)[0]}</>;
};

export default ImageSlider;
