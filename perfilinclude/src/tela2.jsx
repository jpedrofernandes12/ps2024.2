import { useState } from 'react';
import Modal from 'react-modal';
import './styles2.css';
import { useNavigate } from 'react-router-dom';


Modal.setAppElement("#root");

function Tela2() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  return (
    <>
      <div className="container-2">
      <img src="/fotos/fotoperfil.png" alt="perfil" style={{ width: '80px', height: 'auto' }}/>
        <div className='title-2'>
          <img src="/fotos/morcegopng1.png" alt="morcego" style={{ width: '50px', height: 'auto' }}/>
          <h1>Meu Perfil</h1>
          <img src="/fotos/morcegopng1.png" alt="morcego" style={{ width: '50px', height: 'auto' }}/>
        </div>

        <div className="caixa1-2">
          <button className="botão1-2" onClick={() => setIsModalOpen1(true)}>
            Perfil acadêmico e técnico
            <img src="/fotos/aboborapng2.png" alt="abobora" style={{ width: '15px', height: 'auto' }}/>
          </button>
          
          <button className="botão2-2" onClick={() => setIsModalOpen2(true)}>
            Curiosidades
            <img src="/fotos/lapide1.png" alt="lapide" style={{ width: '15px', height: 'auto' }}/>
          </button>
          
          <button className="botão3-2" onClick={() => setIsModalOpen3(true)}>
            Porquê devo entrar na Include
            <img src="/fotos/simbinclude.png" alt="include" style={{ width: '15px', height: 'auto' }}/>
          </button>
        </div>

        {/* Modais */}
        <Modal isOpen={isModalOpen1} onRequestClose={() => setIsModalOpen1(false)} className="modal-2" overlayClassName="moldal-2over">
          <h2>Formado no ensino médio pelo Educandário Nossa Senhora das Vitórias, atualmente estou cursando o terceiro
             período do curso de Engenharia de Computação na Universidade Federal do Rio Grande do Norte. Tenho alguma
              experiência breve em desenvolvimento web e lógica de programação, porém, tenho aptidão e disponibilidade para
               aprender e trabalhar na área.</h2>
               <img src="/fotos/aboborapng2.png" 
               alt="abobora" 
               style={{ width: '55px', height: 'auto' }}
               className='fotomodal'/>
          <button onClick={() => setIsModalOpen1(false)}>Fechar</button>
        </Modal>

        <Modal isOpen={isModalOpen2} onRequestClose={() => setIsModalOpen2(false)} className="modal-2" overlayClassName="moldal-2over">
          <h2>Ex-atleta de judô, pratiquei também jiu-jitsu e futsal. Tenho grande interesse na área automobilística e passo 
            meu tempo livre assistindo filmes e documentários, principalmente os de cunho histórico.</h2>
            <img 
             src="/fotos/lapide1.png" 
             alt="lapide" 
             style={{ width: '55px', height: 'auto' }}
             className='fotomodal'/>
          <button onClick={() => setIsModalOpen2(false)}>Fechar</button>
        </Modal>

        <Modal isOpen={isModalOpen3} onRequestClose={() => setIsModalOpen3(false)} className="modal-2" overlayClassName="moldal-2over">
          <h2>Devo entrar na Include Engenharia porque estou totalmente comprometido em vivenciar o movimento empresa júnior e
             absorver todos os seus valores e experiências. Sou uma pessoa comunicativa e que se adapta facilmente a novos ambientes. 
             Embora eu precise de prática na área de trabalho, estou empenhado em contribuir para a Include deixando uma melhoria para
              os futuros membros, garantindo assim a continuidade e a conexão dos alunos da UFRN, dos cursos que a empresa engloba, com 
              o mercado de trabalho e com o movimento empresa júnior.</h2>
              <img src="/fotos/simbinclude.png" 
              alt="include"
               style={{ width: '55px', height: 'auto' }}
               className='fotomodal'/>
          <button onClick={() => setIsModalOpen3(false)}>Fechar</button>
        </Modal>

        <div className="rodape-2">
          <h1 className="criador-2">Feito por João Pedro Câmara Fernandes</h1>
          <h2 className="contato-2">
            <a href="https://www.instagram.com/jpedrofernandess/" 
            target="_blank" 
            rel="noopener noreferrer">
              @joaopedrofernandess</a>
          </h2>

          <h3 className="contato2-2">
            <a href="https://api.whatsapp.com/send/?phone=5584996062966&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer">
              (84) 9 96062966
            </a>
          </h3>

        </div>
      </div>
    </>
  );
}

export default Tela2;

