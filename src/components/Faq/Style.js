import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand400, slate700, midnight200, midnight400, midnight500, midnight700 } = colors;

export const Faqs = styled.section`
    margin-bottom: 270px;

    .faq-nav {
        position: absolute;
        top: -60px;
        left: 0;
        transform: translateY(-100%);
        width: 100%;
    }

    .faq-nav-list {
        display: flex;
        flex-wrap: wrap;
    }

    .faq-nav-item {
        margin-right: 32px;

        &:last-child {
            margin-right: 0;
        }

        > a {
            font-size: 18px;
            color: ${midnight400};
        }

        &.active {
            > a {
                color: ${midnight700};
            }
        }
    }

    .faq-content {
        padding-top: 46px;
    }

    .faq-content-list{
    }

    .faq-content-item {

        &.active {
            .faq-depth1-title {
                &::after {
                    transform: translateY(-50%) rotate(90deg);
                }
            }
        }
    }

    .faq-depth1-title {
        position: relative;
        width: 100%;
        padding: 21.5px 0;
        padding-right: 72px;
        border-bottom: 1px solid ${midnight200};
        font-size: 22px;
        color: ${slate700};

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            right: 14px;
            transform: translateY(-50%);
            border-radius: 1px;
            background: ${midnight700};
            transition: transform 0.3s;
        }

        &::before {
            width: 18px;
            height: 2px;
        }

        &::after {
            right: 22px;
            width: 2px;
            height: 18px;
        }
    }

    .faq-depth2-list {
    }

    .faq-depth2-item {

        &.active {
            background: #fafafa;

            .faq-depth2-question {
                font-weight: 700;
                color: ${brand400};
            }
        }
    }

    .faq-depth2-question {
        font-weight: 400;
        color: ${midnight500};

        &::before {
            content: 'Q ';
        }
    }

    .faq-depth2-answer {
        color: ${midnight500};
    }

    .faq-link {

    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
    }
`;