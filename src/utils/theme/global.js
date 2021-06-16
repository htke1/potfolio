import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  
@media  screen and (max-width: 400px) {
  main{
      height: 60vh;
  }
  
}

  main {
    align-items: center;
    background: ${({ theme }) => theme.body};
    background-repeat: no-repeat;
    background-size: contain;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  nav{
    background: ${({ theme }) => theme.navbar};
    text-color:  ${({ theme }) => theme.navtext};

  }

  #project-div{
    background: ${({ theme }) => theme.bodyPro};
    
  }

.card{
  
}
  
  `