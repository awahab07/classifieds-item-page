import { useMediaQuery, useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import fullScreenApi from 'fscreen';
import { useEffect } from 'react';

const mobileBreakpoint: Breakpoint =
  (process?.env?.REACT_APP_LAYOUT_MOBILE_BREAKPOINT as Breakpoint) ?? 'sm';

export const useIsMobile = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(mobileBreakpoint));
};

export const useFullScreenListener = (listener: (isFullScreen: boolean) => void) => {
  useEffect(() => {
    if (fullscreenEnabled()) {
      fullScreenApi.addEventListener('fullscreenchange', fullScreenChangeListener);

      return () => {
        fullScreenApi.removeEventListener('fullscreenchange', fullScreenChangeListener);
      };
    }
  }, []);

  const fullScreenChangeListener = (e?: Event) => {
    listener(isFullScreen());
  };
};

export const isFullScreen = (): boolean => fullScreenApi.fullscreenElement !== null;

export const fullscreenEnabled = (): boolean => fullScreenApi.fullscreenEnabled;

export const requestFullscreen = (element: Element) => fullScreenApi.requestFullscreen(element);

export const exitFullscreen = () => fullScreenApi.exitFullscreen();

export const isVisibleElement = (element: any): element is Element =>
  element !== null &&
  element !== undefined &&
  !isNaN(element.clientHeight) &&
  element.clientHeight > 0;
