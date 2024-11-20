import { useState } from 'react';
import Modal from 'react-modal';
import './styles3.css';
import { useNavigate } from 'react-router-dom';


Modal.setAppElement("#root");

function Tela3() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  return (
    <>
      <div className="container-3">
        
        <div className='title-3'>
          <img 
            src="src/fotos/simbinclude.png" 
            alt="include" 
            style={{ width: '55px', height: 'auto' }}
          />
          <h1>
            Conheça a Include</h1>
        </div>

        <div className="caixa1-3">
          {/* Botão 1 */}
          <button className="botão1-3" onClick={() => setIsModalOpen1(true)}>
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
            O que é a Include?
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
          </button>
          
          {/* Botão 2 */}
          <button className="botão2-3" onClick={() => setIsModalOpen2(true)}>
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
            O que fazemos?
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
          </button>
          
          {/* Botão 3 */}
          <button className="botão3-3" onClick={() => setIsModalOpen3(true)}>
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
            O que é uma Empresa Júnior?
            <img 
              src="src/fotos/morcegopng1.png" 
              alt="morcego" 
              style={{ width: '15px', height: 'auto' }}
            />
          </button>
        </div>

        {/* Modais */}
        <Modal isOpen={isModalOpen1} onRequestClose={() => setIsModalOpen1(false)} className="modal-3" overlayClassName="modal-3over">
          <h2>A Include Engenharia representa uma iniciativa estudantil vinculada aos cursos de Ciências
             e Tecnologia, Engenharia de Computação, Mecatrônica e Telecomunicações na UFRN. Fundada em 
             agosto de 2015, originou-se do anseio de um conjunto de estudantes por vivenciar uma experiência
              profissional integral e voluntária. Essencialmente, a Include Engenharia surge como uma solução
               para a carência recorrente nos cursos de engenharia, que é a ausência de formação em áreas como
                gestão, empreendedorismo e liderança. Dessa maneira, comprometemo-nos a proporcionar uma formação 
                prática nas áreas de computação, mecatrônica e telecomunicações, proporcionando oportunidades de 
                aprendizado para os futuros engenheiros formados por nossa instituição de ensino.</h2>
          <button onClick={() => setIsModalOpen1(false)}>Fechar</button>
        </Modal>

        <Modal isOpen={isModalOpen2} onRequestClose={() => setIsModalOpen2(false)} className="modal-3" overlayClassName="modal-3over">
          <h2>Desenvolvimento de Aplicativos Móveis: Criamos apps móveis para ampliar a presença da sua empresa, 
            dando destaque à sua inovação e/ou resolvendo desafios dos usuários de maneira ágil, conveniente e móvel. 
            Desenvolvemos aplicativos personalizados com design para as plataformas iOS e Android. Aprimoramento de
             Conectividade Sem Fio: Conduzimos uma análise da rede Wi-Fi por meio de uma consultoria minuciosa. Nossos
              serviços incluem identificação e mapeamento de problemas na conexão à internet, além da criação de mapas
               de calor e gráficos de interferência. Esses elementos oferecem insights valiosos para aprimorar sua rede,
                melhorando a experiência de navegação e ampliando sua cobertura. Automatização Residencial: Com o intuito
                 de otimizar o tempo e proporcionar conforto e segurança aos nossos clientes, concebemos e implementamos
                  soluções que automatizam tarefas cotidianas, como a irrigação de jardins, o travamento de portas e o
                   controle de iluminação. Esses serviços fazem uso da tecnologia sensorial, incorporando atuadores e
                    microcontroladores.</h2>
          <button onClick={() => setIsModalOpen2(false)}>Fechar</button>
        </Modal>

        <Modal isOpen={isModalOpen3} onRequestClose={() => setIsModalOpen3(false)} className="modal-3" overlayClassName="modal-3over">
          <h2>Segundo o Sebrae "a empresa júnior contribui ativamente para o desenvolvimento da sociedade a qual 
            está inserida, oferecendo serviços de baixo custo para a comunidade local.".</h2>
          <button onClick={() => setIsModalOpen3(false)}>Fechar</button>
        </Modal>

        {/* Rodapé */}
        <div className="rodape-3">
          <h1 className="criador-3">

            <img src="src/fotos/caveira1.png" alt="morcego" 
            style={{ width: '20px', height: 'auto' }} />

            Feito por João Pedro Câmara Fernandes

            <img src="src/fotos/caveira1.png" alt="morcego" 
            style={{ width: '20px', height: 'auto' }} />

          </h1>
          <h2 className="contato-3">
            <a href="https://www.instagram.com/jpedrofernandess/" 
            target="_blank" 
            rel="noopener noreferrer">
              @joaopedrofernandess 
            </a>
          </h2>
          <h3 className="contato2-3">
            <a href="https://api.whatsapp.com/send/?phone=5584996062966&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer">
              (84) 9 96062966
            </a>
          </h3>

          
        </div>

        <div className="musica">
     
           <audio controls className="controleaudio">

            <source src="/src/audios/musica2.m4a"  type="audio/aac" />

           </audio>

         </div>

      </div>
    </>
  );
}

export default Tela3;
