import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand400, slate700, midnight200, midnight500, midnight700 } = colors;

export const FaqContents = styled.article`
    padding-top: 46px;

    .faq-content-list{
    }

    .faq-content-item {
        position: relative;

        &.open {
            .faq-depth1-title {
                &::after {
                    transform: translateY(-50%) rotate(-90deg);
                }
            }

            .faq-depth2-list {
                overflow: visible;
                max-height: 100vh;
                padding: 20px 0;
            }
        }
    }

    .faq-link {
        position: absolute;
        left: 0;
        top: -72px;
        display: block;
        width: 10px;
        height: 2px;
        background: red;
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
        overflow: hidden;
        max-height: 0;
        transition: all 0.3s;
    }

    .faq-depth2-item {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }

        &.open {
            background: #fafafa;

            .faq-depth2-question {
                font-weight: 700;
                color: ${brand400};
            }

            .faq-depth2-answer {
                overflow: visible;
                max-height: 100vh;
                padding-top: 20px;
            }
        }
    }

    .faq-depth2-question {
        padding: 7px 0;
        font-weight: 400;
        color: ${midnight500};

        &::before {
            content: 'Q ';
        }

        &:hover {
            font-weight: 700;
            color: ${brand400};
        }
    }

    .faq-depth2-answer {
        overflow: hidden;
        max-height: 0;
        color: ${midnight500};
        transition: all 0.3s;
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
    }
`;