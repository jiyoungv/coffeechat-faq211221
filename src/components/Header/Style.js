import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Headers = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    transition: background 0.3s, box-shadow 0.3s;

    .header-logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    &.on {
        background: #fff;
        box-shadow: 0 4px 6px rgb(0 0 0 / 10%)
    }

    ${mediaTablet} {
    }
    
    ${mediaMobile} {
        height: 48px;
    }
`;