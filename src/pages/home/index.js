import React from 'react';

import { Container, HomeInfo, HomeAbout, IctalkInfo, IctalkAbout, WhiteBlue, WhoTalk, 
          BlueWhite, SignUp, SignupCards, Card, Speakers, Speaker, Footer } from './styles';
import header_logo from '../../assets/header_logo.png'
import home_info_img from '../../assets/home_info_img.png'
import orange_dialog from '../../assets/orange_dialog.png'
import ictalk_about from '../../assets/ictalk_about.png'
import blue_dialog from '../../assets/blue_dialog.png'
import white_to_blue_dialogs from '../../assets/white_to_blue_dialogs.svg'
import blue_to_white_dialogs from '../../assets/blue_to_white_dialogs.svg'
import speaker_avatar from '../../assets/speaker_avatar.png'
import participant from '../../assets/participant.png'
import speaker_1 from '../../assets/speaker_1.png'
import speaker_2 from '../../assets/speaker_2.png'
import ictalk_footer from '../../assets/ictalk_footer.png'
import logo_icts from '../../assets/logo_icts.png'
import footer from '../../assets/footer.png'


export default function Home() {
  //const [hoverCard, setHoverCard] = useState(false)

  return (
    <Container >
      <HomeInfo>
        <div>
          <header>
            <img src={header_logo} alt='header-logo' />
            <h3>O ICTALK</h3>
            <div></div>
          </header>
          <div>
            <IctalkInfo>
              
              <h3>EDIÇÃO</h3>
              <h1>FEV 2020</h1>
              <p>Automação . Software . Produção</p>
              <h2>21.Fev 09:00h às 10:00h</h2>
              
              <a href='#signup'>
              <button>
                Inscrições
              </button>
              </a>
              <a href='#about'>
              <div>
                <h3>
                  Ver mais 
                </h3>
                <i className="material-icons">
                  arrow_forward
                </i>
              </div>
              </a>
            </IctalkInfo>
            <div>
              <img src={home_info_img} alt='Home Info' />
            </div>
          </div>
        </div>
      </HomeInfo>
      <HomeAbout>
        <div id='orange-balloon'>
          <img src={orange_dialog} alt='Orange Balloon' />
        </div>
        <IctalkAbout>
          <div id='about'>
            <h1>ICTALK?</h1>
            <p>
                &emsp;Acreditamos que falar de tecnologia é essencial para o <br /> desenvolvimento da comunidade
                e de nossa empresa. Por <br /> isso, criamos o ICTALK, um <i>meetup</i> mensal, onde
                falaremos <br /> de tecnologia e outras modinhas.<br />
            </p>
          </div>
          <img src={ictalk_about} alt='ICTALK About' />
          <footer>
            <h1>Quem Vamos?</h1>
            <p>Todos do ICTS podem participar, até a mucurinha vem. Você não vai ficar de fora, né?</p>
          </footer>
        </IctalkAbout>
        <div id='blue-balloon'>
          <img src={blue_dialog} alt='Blue Balloon' />
        </div>
      </HomeAbout>
      <WhiteBlue>
        <img src={white_to_blue_dialogs} alt='White to blue dialogs' />
      </WhiteBlue>
      <WhoTalk>
        <div>
          <h1>Posso Palestrar?</h1>
          <h2>Mas claro!</h2>
          <p>Separa um tema bem legal do seu conhecimento técnico e vem palestrar.</p>
        </div>
      </WhoTalk>
      <BlueWhite>
        <img src={blue_to_white_dialogs} alt='Blue to white dialogs' />
      </BlueWhite>
      <SignUp>
        <h1 id='signup'>Inscrições <span>FEV 2020</span></h1>
        <SignupCards>
          <Card>
            <div >
              <img src={participant} alt='participant' /> 
            </div>
            <button>
              Participante
            </button>
          </Card>
          <Card speaker>
            <div>
              <img src={speaker_avatar} alt='Speaker' /> 
            </div>
            <button>
              Palestrante
            </button>
          </Card>
        </SignupCards>
      </SignUp>
      <Speakers>
        <h1>Palestras Edição FEV 2020</h1>
        <div>
          <Speaker>
            <img src={speaker_1} alt='Speaker' />  
            <h3>Vitória Leite</h3>
            <h4>Firmware na Automação Industrial</h4>
          </Speaker>
          <Speaker>
            <img src={speaker_2} alt='Speaker' />  
            <h3>Leonan Matos</h3>
            <h4>Visão Computacional: Conceitos e Aplicações em Projetos</h4>
          </Speaker>
          <Speaker>
            <img src={speaker_avatar} alt='Speaker' />  
            <h3>John Doe</h3>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </Speaker>
        </div>
      </Speakers>
      <Footer>
        <div>
          <img src={ictalk_footer} alt='ICTALK Logo' /> 
          <img src={logo_icts} alt='ICTS Logo' /> 
        </div>
        <img src={footer} alt='Footer' /> 
      </Footer>
      </Container>
  );
}
