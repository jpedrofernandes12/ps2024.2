import {} from 'react-icons/ri';
import './styles.css';
import { RiCrossLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { RiCrossFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


function Tela1() {

  const navigate = useNavigate();
  return (
    <>


    <div className="fundo">

      <div className="container">
        
       <h1 className="title"><RiCrossFill />El muerto ala seputura y el vivo la travessura<RiCrossFill /> </h1>

       <div className="fantasma">

       <img 
  src="/fotos/fantasma1.webp" 
  alt="fantasma" 
  style={{ width: '100px', height: 'auto' }}/>

       </div>

       <div className="fantasma2">

       <img 
  src="/fotos/fantasma2.webp" 
  alt="fantasma" 
  style={{ width: '100px', height: 'auto' }}/>

       </div>
       
      
<div className="caixabotão">




  <main className="centro">

   

  <div className="caixa1">
         <button className="botão1"  onClick={() => navigate('/tela2.jsx')}>
          Conheça meu perfil
         </button>
         <button className="botão2"  onClick={() => navigate('/tela3.jsx')}>
          Conheça a Include
         <img 
            src="/fotos/simbinclude.png" 
            alt="include" 
            style={{ width: '15px', height: 'auto' }}/>
         </button>
         <button className="botão3"  onClick={() => navigate('/tela4.jsx')}>
          realizações
         </button>
       </div>

  </main>



</div>

<div className="abobora">
  <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img"/>


  <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img2"/>

 <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img"/>

 <img 
  src="/fotos/lapide1.png" 
  alt="lapide" 
  className="responsive-img3"/>

  <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img"/>

  <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img2"/>

  <img 
  src="/fotos/aboborapng2.png" 
  alt="abobora" 
  className="responsive-img"/>
  
</div>


      </div>

      <div className="container2">

      <div className="morcegos1">
       
      <img 
  src="/fotos/morcegopng1.png" 
  alt="morcego" 
  style={{ width: '50px', height: 'auto' }}/>

<img 
  src="/fotos/morcegopng1.png" 
  alt="morcego" 
  style={{ width: '25px', height: 'auto' }}/>

<img 
  src="/fotos/morcegopng1.png" 
  alt="morcego" 
  style={{ width: '40px', height: 'auto' }}/>

      </div>

      
  

      <div className="rodape">
<h1 className="criador">Feito por João Pedro Câmara Fernandes</h1>
<h2 className="contato"> <RiInstagramLine /> 
<a href="https://www.instagram.com/jpedrofernandess/" 
target="_blank" 
rel="noopener noreferrer">
    @joaopedrofernandess 
    </a>
</h2>
<h3 className="contato2"> <RiCrossLine />
<a href="https://api.whatsapp.com/send/?phone=558
4996062966&text&type=phone_number&app_absent=0" 
target="_blank" 
rel="noopener noreferrer">
  (84) 9 96062966
    </a>
<RiCrossLine /></h3>


</div>

    <div className="musica">
     
      <audio controls className="controleaudio">

        <source src="/audios/musica.m4a"  type="audio/aac" />

      </audio>

    </div>

  </div>

</div>
    
    </>
  )
}

export default Tela1;

