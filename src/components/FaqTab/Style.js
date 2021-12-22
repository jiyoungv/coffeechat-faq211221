import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { midnight400, midnight700 } = colors;

export const FaqTabs = styled.nav`
    position: absolute;
    top: -60px;
    left: 0;
    transform: translateY(-100%);
    width: 100%;

    .faq-tab-list {
        display: flex;
        flex-wrap: wrap;
    }

    .faq-tab-item {
        margin-right: 32px;

        &:last-child {
            margin-right: 0;
        }

        > a {
            font-size: 18px;
            color: ${midnight400};
            transition: color 0.3s;

            :hover {
                color: ${midnight700};
            }
        }

        &.active {
            > a {
                color: ${midnight700};
            }
        }
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
    }
`;