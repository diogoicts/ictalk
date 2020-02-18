import styled from 'styled-components';
import { darken } from 'polished';
import blue_background from '../../assets/blue_background.svg'
import who_talk from '../../assets/who_talk.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  
`;

export const HomeInfo = styled.div`
  background: transparent url(${blue_background}) 0% 0% no-repeat padding-box;
  max-height: 100rem;

  img {
    width: 128.1rem;
    height: 124.6rem;
  }

  > div {
    > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  }
  

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5.7rem 6.6rem 0rem 6.9rem;
    margin-bottom: 13.6rem;

    h3 {
      font-size: 2.4rem;
      letter-spacing: 1.44px;
      color: #ffffff;
      font-weight: 400;
      height: 6rem;
      padding-top: 2rem;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid #E6881A;
      }
    }

    img {
      width: 17.3rem;
      height: 7.3rem;
      cursor: pointer;
    }
  }

  
`;

export const IctalkInfo = styled.div`
  margin: 10rem 0rem 0rem 16.8rem;

  h3 {
    font-size: 2.4rem;
    letter-spacing: 1.44px;
    color: #ffffff;
    font-weight: 300;
  }

  h1 {
    font-size: 6.2rem;
    color: #E6881A;
    letter-spacing: 3.72px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2.4rem;
    letter-spacing: 0.48px;
    color: #ffffff;
    font-weight: 100;
    font-style: italic;
    margin-bottom: 0.8rem;
    
  }

  h2 {
    font-size: 3.8rem;
    letter-spacing: 0.76px;
    color: #ffffff;
    font-weight: 400;
  }

  button {
    height: 7.5rem;
    width: 24.3rem;
    border: 3px solid #E6881A;
    background-color: transparent;
    border-radius: 38px;
    font-size: 3.2rem;
    font-weight: 400;
    letter-spacing: 0.64px;
    color: #ffffff;
    font-weight: 300;
    margin: 7.1rem 0rem 6.5rem 0rem;
    transition: background 0.2s;

    &:hover {
      color: #ffffff;
      background-color: #E6881A;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    h3 {
      margin: 0rem 1.5rem 0rem 4.3rem;
    }
    i {
      font-size: 4rem;
      color: #E6881A;
    }
  }
`;


export const HomeAbout = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  > #orange-balloon img {
    width: 21.4rem;
    height: 21.4rem;
    margin-left: -6.6rem;
    margin-top: 20.3rem;
  }

  > #blue-balloon img {
    width: 30rem;
    height: 30rem;
    margin-right: -6.6rem;
    margin-top: 91.1rem;
  }


`;

export const IctalkAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 59rem;
  width: 100%;

  div {
    margin-left: 6.1rem;
    h1 {
      font-size: 6.2rem;
      color: #E6881A;
      letter-spacing: 3.72px;
      margin-bottom: 2.2rem;
    }
    P {
      font-size: 3.2rem;
      color: #284C61;
    }
  }

  img {
      margin: 21rem 0rem 5.5rem 0rem; 
      width: 103.1rem;
      height: 66.5rem;
      align-self: center;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #284C61;
      margin-bottom: 16.58rem;

      h1 {
        font-size: 4.6rem;
      }
      p {
        font-size: 3.2rem;
      }
    }

`;

export const WhiteBlue = styled.div`
  margin-bottom: -5rem;

  img {
    height: 18.98rem;
    width: 100%;
  }
`;

export const WhoTalk = styled.div`
  background: transparent url(${who_talk}) 0% 0% no-repeat padding-box;
  background-color:  #284C61;
  background-size: 100%; 
  height: 86.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 54rem;

    h1 {
      color: #E6881A;
      font-size: 5.4rem;
      letter-spacing: 1.62px;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }

    h2 {
      font-size: 5.4rem;
      color: #ffffff;
      margin-bottom: 2.8rem;
      font-weight: 400;
    }

    p {
      font-size: 3.2rem;
      color: #ffffff;
      text-align: center;
      font-weight: 100;
    }
  }
`;

export const BlueWhite = styled.div`
  margin-top: -12rem;

  img {
    height: 18.98rem;
    width: 100%;
  }
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32.5rem;

  h1 {
    font-size: 5.4rem;
    font-weight: 300;
    color: #284C61;
    margin-bottom: 7.8rem;
    span {
      font-weight: bold;
      color: #E6881A;
    }
  }
`;

export const SignupCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 120.2rem;
  justify-content: space-between;

  
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      font-size: 4.4rem;
      border: none;
      border-radius: 5.3rem;
      width: 35.9rem;
      height: 10.5rem;
      color: #FFFFFF;
      margin-top: -5.25rem;
       
      background-color: ${props => (props.speaker ? '#284C61' : '#E6881A')};
      box-shadow: 0px 2px 8px ${props => (props.speaker ? '#284C61' : '#E6881A')};;
      transition: background 0.5s;
    }



  div {

  width: 53.7rem;
  height: 64.2rem;
  border-radius: 3.2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s;

  img {
    width: 41rem;
    height: 41rem;
  }
  }

  &:hover {
    div {
      box-shadow: 0px 10px 35px #284C6159;
    }
    button {
        background-color: ${props => darken(0.1,  (props.speaker ? '#284C61' : '#E6881A'))};
    }
  }
`;

export const Speakers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28rem;

  h1 {
    margin-bottom: 10.5rem;
    color: #284C61;
    font-size: 4.2rem;
    font-weight: 400;
    letter-spacing: 0rem;
  }

  > div {
    width: 120rem;
    display: grid;
    grid-gap: 12rem;
    grid-template-columns: repeat(3, 1fr)
  }
`;

export const Speaker = styled.div`
  img {
    width: 30.892rem;
    height: 30.82rem;
    margin-bottom: 5.48rem;
  }  

  h3 {
    font-size: 3.2rem;
    color: #E6881A;
    padding: 0rem 0.5rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h4 {
    font-size: 2.8rem;
    color: #284C61;
    padding: 0rem 1rem;
    font-weight: normal;
    text-align: center;
  }
`;

export const Footer = styled.div`
  div {
    width: 70.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 3.5rem;

    img {
      height: 10.7rem;
    }
  }

  > img {
    width: 100%;
  }
`;
