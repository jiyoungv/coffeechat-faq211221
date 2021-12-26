import styled from 'styled-components';
import { mediaQuery, colors, fontFamily } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { brand400, slate700, midnight200, midnight500, midnight700 } = colors;
const { gilroy } = fontFamily;

export const FaqContents = styled.article`
    padding-top: 46px;

    .faq-content-list{
    }

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
                padding: 20px 0;
                margin-top: -20px;
                transition: height 0.4s, padding 0.4s;
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
            width: 18px;
            height: 2px;
            border-radius: 1px;
            background: ${midnight700};
            transition: transform 0.4s;
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
        padding-top: 20px;

        &.open {
            margin-top: 20px;
            background: #fafafa;
            transition: background 0.4s;

            &:first-child {
                margin-top: 0;
            }

            .faq-depth2-question {
                font-weight: 700;
                color: ${brand400};
            }

            .faq-depth2-answer {
                overflow: visible;
                height: auto;
                padding: 20px 0;
                transition: height 0.4s, padding 0.4s;
            }
        }
    }

    .faq-depth2-question {
        height: 40px;
        padding: 7px 0;
        font-weight: 400;
        color: ${midnight500};

        &::before {
            content: 'Q';
            margin-right: 7px;
            font-family: '${gilroy}';
        }

        &:hover {
            font-weight: 700;
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
        margin-top: 20px;
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
        padding-top: 40px;

        .faq-depth2-question {

            &:hover {
                font-weight: 400;
                color: ${midnight500};
            }
        }        
    }

    ${mediaMobile} {
        padding-top: 20px;

        .faq-content-link {
            top: -48px;
        }

        .faq-depth1-title {
            padding-right: 52px;
            font-size: 16px;

            &::before, &::after {
                width: 14px;
            }
        }

        .faq-depth2-item {
            padding-top: 10px;

            &.open {
                margin-top: 10px;

                .faq-depth2-answer {
                    padding: 10px 0;
                }
            }            
        }

        .faq-depth2-question {
            padding: 4.5px 0;
            font-size: 13px;

            &:hover {
                font-weight: 400;
                color: ${midnight500};
            }
        }

        .faq-depth2-answer {
            font-size: 13px;
        }

    }
`;