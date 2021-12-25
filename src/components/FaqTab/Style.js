import styled from 'styled-components';
import { mediaQuery, colors } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { midnight400, midnight700 } = colors;

export const FaqTabs = styled.nav`
    padding-bottom: 60px;
    background: #F5F7FD;

    .faq-tab-list {
        margin: 0 -15px;
        text-align: center;
    }

    .faq-tab-item {
        display: inline-block;
        margin: 0 15px;

        > a {
            display: inline-block;
            padding: 5.5px 0;
            font-size: 18px;
            color: ${midnight400};
            transition: color 0.3s;

            &:hover {
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
        .faq-tab-list {
            margin: 0 -12px;
        }

        .faq-tab-item {
            margin: 0 12px;
        }
    }

    ${mediaMobile} {
        padding-bottom: 30px;
        
        // .faq-tab-list {
        //     margin: 0;

        //     .swiper-slide {
        //         width: auto;

        //         &:first-child {
        //             margin-left: 24px;
        //         }
        //     }
        // }

        .faq-tab-list {
            margin: 0;
            overflow: auto;
            white-space: nowrap;
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .faq-tab-item {
            // margin: 0;
            // margin-right: 28px;
            margin: 0 12px;

            &:first-child {
                margin-left: 24px;
            }

            &:last-child {
                margin-right: 24px;
            }

            > a {
                padding: 4px 0;
                font-size: 14px;
            }

            &:not(.active) > a:hover {
                color: ${midnight400};
            }
        }
    }
`;