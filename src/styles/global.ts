import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --green-dark: #015f43;
    --green: #00875f;
    --green-light: #00b37e;

    --red-dark: #aa2834;
    --red: #f75a68;

    --gray1: #121214;
    --gray2: #202024;
    --gray3: #29292e;
    --gray4: #323238;
    --gray5: #7c7c8a;
    --gray6: #c4c4cc;
    --gray7: #e1e1e6;

    --white: #FFFFFF;
  }
  
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--gray2);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  strong, h1, h2, h3, h4, h5, h6{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


`