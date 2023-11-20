import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    // css 초기값 정의
    ${reset}

    *{
        box-sizing:border-box;
    }
`;

export default GlobalStyle;
