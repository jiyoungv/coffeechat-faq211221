import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand500, slate700 } = colors;

export const Heros = styled.section`
    padding: 72px 0 20px;
    background: #F5F7FD;

    .hero-link {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;

        a {
            font-size: 18px;
            color: ${brand500};
        }
    }

    .hero-title {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
        padding-top: 30px;

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
        .hero-title {
            display: block;
            padding-top: 14px;
            text-align: center;

            figure {
                margin: 0 auto;
            }
        }
    }

    ${mediaMobile} {
        padding-top: 48px;
        
        .hero-link {
            top: 4.5px;

            a {
                font-size: 12px;
            }
        }

        .hero-title {
            display: block;
            padding-top: 4px;
            text-align: center;

            h1 {
                margin-bottom: 0;
            }

            figure {
                max-width: 160px;
                margin: 0 auto 2px;
            }
        }        
    }
`;