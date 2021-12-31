import styled from 'styled-components';
import { mediaQuery, colors, fontFamily } from '../../styles/Variable';
import icon_arrow from '../../assets/images/icon_arrow.svg';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand400, slate700, midnight100, midnight400, midnight500, midnight700 } = colors;
const { gilroy } = fontFamily;

export const Faqs = styled.section`
    margin-bottom: 200px;

    .faq-content-item {
        position: relative;

        &.open {
            .faq-depth1-title {
                &::after {
                    transform: translateY(-50%) rotate(0);
                }
            }

            .faq-depth2-list {
                overflow: visible;
                height: auto;
                padding: 32px 0;
                margin: -32px 0;
                transition: height 0.4s, padding 0.4s;
            }

            & + .faq-content-item {
                .faq-depth1-title {
                    border-top: 1px solid ${midnight100};
                }
            }

            &:last-child {
                .faq-depth2-list {
                    padding-bottom: 0;
                    margin-bottom: 0;
                }
            }            
        }
    }

    .faq-content-link {
        position: absolute;
        top: -72px;
        left: 0;
    }

    .faq-depth1-title {
        position: relative;
        display: block;
        width: 100%;
        padding: 29px 0;
        padding-right: 72px;
        border-bottom: 1px solid ${midnight100};
        font-size: 20px;
        color: ${slate700};

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            right: 18px;
            transform: translateY(-50%);
            width: 16px;
            height: 2px;
            border-radius: 1px;
            background: ${midnight700};
            transition: transform 0.3s;
        }

        &::after {
            transform: translateY(-50%) rotate(-90deg);
        }
    }

    .faq-depth2-list {
        overflow: hidden;
        height: 0;
    }

    .faq-depth2-item {
        padding-top: 24px;

        &:first-child {
            padding-top: 32px;
        }

        &:last-child { 
            padding-bottom: 32px;
        }

        &.open {
            margin-top: 24px;
            padding-top: 32px;
            background: #fafafa;

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                padding-bottom: 0;
            }

            .faq-depth2-question {
                font-weight: 700;
                color: ${brand400};

                &::after {
                    transform: translateY(-50%) rotate(-180deg);
                }
            }

            .faq-depth2-answer {
                overflow: visible;
                height: auto;
                padding: 8px 0 32px;
                transition: height 0.4s, padding 0.4s;
            }
        }
    }

    .faq-depth2-question {
        position: relative;
        width: 100%;
        font-weight: 700;
        color: ${midnight400};

        &::before {
            content: 'Q ';
            font-family: ${gilroy};
        }

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            width: 18px;
            height: 18px;
            background: url(${icon_arrow}) center no-repeat;
            transition: transform 0.3s;
        }

        &:hover {
            color: ${brand400};
        }
    }

    .faq-depth2-answer {
        overflow: hidden;
        height: 0;
        color: ${midnight500};

        p {
            color: ${midnight500};
        }
    }

    .faq-answer-button {
        display: inline-block;
        margin-top: 16px;
        padding: 15px 24px;
        border-radius: 8px;
        background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);
        box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
        color: #fff;
    }

    .faq-answer-link {
        text-decoration: underline;
        color: ${brand400};
    }

    ${mediaTablet} {
        margin-bottom: 100px;

        .faq-depth1-title {
            padding: 23px 0;
            padding-right: 56px;
            font-size: 16px;

            &::before, &::after {
                right: 2px;
            }
        }

        .faq-depth2-question {
            padding-right: 24px;
            font-size: 14px;

            &::after {
                display: block;
            }

            &:hover {
                color: ${midnight400};
            }
        }

        .faq-depth2-answer {
            font-size: 14px;
        }
    }

    ${mediaMobile} {
        margin-bottom: 50px;

        .faq-content-link {
            top: -48px;
        }

        .faq-depth1-title {
            padding: 23px 0;
            padding-right: 56px;
            font-size: 16px;

            &::before, &::after {
                width: 14px;
                right: 2px;
            }
        }

        .faq-depth2-item {
            padding-top: 32px;

            &.open {
                margin-top: 32px;
            }
        }

        .faq-depth2-question {
            padding-right: 24px;
            font-size: 14px;

            &::after {
                display: block;
            }

            &:hover {
                color: ${midnight400};
            }            
        }

        .faq-depth2-answer {
            font-size: 14px;
        }

        .faq-answer-button {
            display: block;
            margin-top: 24px;
            text-align: center;
            font-size: 16px;
        }
    }
`;