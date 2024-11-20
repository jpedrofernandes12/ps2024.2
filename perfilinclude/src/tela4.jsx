import { useState } from 'react';
import './styles4.css';

function Tela4() {
  const [caixas, setCaixas] = useState([]); // Estado para armazenar as caixas
  const [titulo, setTitulo] = useState(""); // Estado para o título
  const [conteudo, setConteudo] = useState(""); // Estado para o conteúdo

  // Função para adicionar uma nova caixa
  const adicionarCaixa = () => {
    if (titulo.trim() !== "" && conteudo.trim() !== "") {
      setCaixas([...caixas, { titulo, conteudo }]); // Adiciona um objeto com título e conteúdo
      setTitulo(""); // Limpa o campo do título
      setConteudo(""); // Limpa o campo do conteúdo
    } else {
      alert("Por favor, preencha tanto o título quanto o conteúdo.");
    }
  };

  // Função para remover uma caixa
  const removerCaixa = (index) => {
    setCaixas(caixas.filter((_, i) => i !== index)); // Filtra a lista excluindo o item pelo índice
  };

  return (
    <>
      <div className="container-4">
        <div className="title-4">
          <img
            src="src/fotos/morcegopng1.png"
            alt="morcego"
            style={{ width: '50px', height: 'auto' }}
          />
          <h1>Realizações</h1>
          <img
            src="src/fotos/morcegopng1.png"
            alt="morcego"
            style={{ width: '50px', height: 'auto' }}
          />
        </div>

        {/* Área das caixas */}
        <div className="caixa1-4">
          {caixas.map((caixa, index) => (
            <div key={index} className="caixa-item">
              <h3 className="tituloc">{caixa.titulo}</h3>
              <p className="conteudoc">{caixa.conteudo}
              <button
                onClick={() => removerCaixa(index)}
                className="botao-excluir"
              >
                X
              </button>
              </p>
              {/* Botão de excluir */}
            
            </div>
          ))}

          <div>
            <h4 className="tituloc2">Monitoria</h4>
            <p className="conteudoc2">Monitoria de lógica de programação 2024.2</p>

            <h5 className="tituloc3">PS 2024.1</h5>
            <p className="conteudoc3">Processo seletivo Include 2024.1</p>

            <h6 className="tituloc4">PS 2023.2</h6>
            <p className="conteudoc4">Processo seletivo Include 2023.2</p>
          </div>
        </div>

        {/* Campos de entrada para título e conteúdo */}
        <div className="caixa-controls">
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título..."
            className="titulot"
          />
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            placeholder="Digite o conteúdo..."
            className="conteudot"
          />
          <button onClick={adicionarCaixa} className="botão1-4">Adicionar</button>
        </div>

        <div className="rodape-4">
          <h1 className="criador-4">
            <img
              src="src/fotos/teia.webp"
              alt="teia"
              style={{ width: '25px', height: 'auto' }}
            />
            Feito por João Pedro Câmara Fernandes
          </h1>
          <h2 className="contato-4">
            <a
              href="https://www.instagram.com/jpedrofernandess/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @joaopedrofernandess
            </a>
          </h2>
          <h3 className="contato2-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5584996062966&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              (84) 9 96062966
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Tela4;
