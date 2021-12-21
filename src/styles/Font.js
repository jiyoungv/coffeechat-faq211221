import { css } from 'styled-components'
import noto_sans_kr_v13_latin_korean_300_woff2 from '../assets/fonts/noto-sans-kr-v13-latin_korean-300.woff2';
import noto_sans_kr_v13_latin_korean_300_woff from '../assets/fonts/noto-sans-kr-v13-latin_korean-300.woff';
import noto_sans_kr_v13_latin_korean_regular_woff2 from '../assets/fonts/noto-sans-kr-v13-latin_korean-regular.woff2';
import noto_sans_kr_v13_latin_korean_regular_woff from '../assets/fonts/noto-sans-kr-v13-latin_korean-regular.woff';
import noto_sans_kr_v13_latin_korean_500_woff2 from '../assets/fonts/noto-sans-kr-v13-latin_korean-500.woff2';
import noto_sans_kr_v13_latin_korean_500_woff from '../assets/fonts/noto-sans-kr-v13-latin_korean-500.woff';
import noto_sans_kr_v13_latin_korean_700_woff2 from '../assets/fonts/noto-sans-kr-v13-latin_korean-700.woff2';
import noto_sans_kr_v13_latin_korean_700_woff from '../assets/fonts/noto-sans-kr-v13-latin_korean-700.woff';
import noto_sans_kr_v13_latin_korean_900_woff2 from '../assets/fonts/noto-sans-kr-v13-latin_korean-900.woff2';
import noto_sans_kr_v13_latin_korean_900_woff from '../assets/fonts/noto-sans-kr-v13-latin_korean-900.woff';

// 이 방식으로 폰트 적용이 안되서 보류
const Font = css`
    /* noto-sans-kr-300 - latin_korean */
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 300;
        src: local('Noto Sans KR-300'),
            url(${noto_sans_kr_v13_latin_korean_300_woff2}) format('woff2'), /* Super Modern Browsers */
            url(${noto_sans_kr_v13_latin_korean_300_woff}) format('woff'), /* Modern Browsers */
    }
    /* noto-sans-kr-regular - latin_korean */
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        src: local('Noto Sans KR-regular'),
            url(${noto_sans_kr_v13_latin_korean_regular_woff2}) format('woff2'), /* Super Modern Browsers */
            url(${noto_sans_kr_v13_latin_korean_regular_woff}) format('woff'), /* Modern Browsers */
    }
    /* noto-sans-kr-500 - latin_korean */
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        src: local('Noto Sans KR-500'),
            url(${noto_sans_kr_v13_latin_korean_500_woff2}) format('woff2'), /* Super Modern Browsers */
            url(${noto_sans_kr_v13_latin_korean_500_woff}) format('woff'), /* Modern Browsers */
    }
    /* noto-sans-kr-700 - latin_korean */
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        src: local('Noto Sans KR-700'),
            url(${noto_sans_kr_v13_latin_korean_700_woff2}) format('woff2'), /* Super Modern Browsers */
            url(${noto_sans_kr_v13_latin_korean_700_woff}) format('woff'), /* Modern Browsers */
    }
    /* noto-sans-kr-900 - latin_korean */
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        src: local('Noto Sans KR-900'),
            url(${noto_sans_kr_v13_latin_korean_900_woff2}) format('woff2'), /* Super Modern Browsers */
            url(${noto_sans_kr_v13_latin_korean_900_woff}) format('woff'), /* Modern Browsers */
    }
`;

export default Font;