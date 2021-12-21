import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand500, slate700 } = colors;

export const Heros = styled.section`
    height: 630px;
    padding-top: 72px;
    background: #F5F7FD;

    .hero-link {
        text-align: right;

        a {
            font-size: 18px;
            color: ${brand500};
        }
    }

    .hero-title {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        h1 {
            margin-bottom: 10px;
            font-size: 32px;
            color: ${slate700};
        }

        figure {
            max-width: 400px;
        }
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
    }
`;