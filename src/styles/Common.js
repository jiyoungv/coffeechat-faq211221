import styled from 'styled-components';
import { mediaQuery } from './Variable';
import { clearFix } from './Mixin';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Inners = styled.div`
    position: relative;
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    // outline: 1px solid orange;

    ${clearFix}

    ${mediaTablet} {
        margin: 0 48px;
        ${props => props.tabletType2 
            && "max-width: calc(680px + 48px * 2);margin: 0 auto;padding: 0 48px;"
        }
    }

    ${mediaMobile} {
        margin: 0 24px;
        ${props => props.mobileType2 
            && "margin: 0;"
        }
    }
`;