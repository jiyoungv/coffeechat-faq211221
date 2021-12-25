import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Faqs = styled.section`
    margin-bottom: 270px;

    ${mediaTablet} {
        margin-bottom: 200px;
    }

    ${mediaMobile} {
        margin-bottom: 200px;
    }
`;