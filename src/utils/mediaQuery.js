import { useMediaQuery } from 'react-responsive'
import { breakPoints } from '../styles/Variable';

export const IsDesktop = () => useMediaQuery({ minWidth: breakPoints.tablet + 1 });
export const IsTablet = () => useMediaQuery({ maxWidth: breakPoints.tablet, minWidth: breakPoints.mobile + 1 });
export const IsMobile = () => useMediaQuery({ maxWidth: breakPoints.mobile });