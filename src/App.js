import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando Routes em vez de Switch
import './App.css'; // Importando o CSS do aplicativo
import Auth from './components/Auth'; // Importando o componente de autenticação
import AnimeList from './components/AnimeList'; // Importando o componente da lista de animes

// Importando os GIFs
import myImage from './assets/cd.gif';
import anotherGif from './assets/mugi.gif';
import dolaresGif from './assets/dolares.gif';
import torresGif from './assets/torres.gif';
import nokiaGif from './assets/nokia.gif';
import pesiGif from './assets/pepsi.gif';
import gmbGif from './assets/gmb.gif';
import itachiGif from './assets/Itachi.gif';
import konataDanceGif from './assets/KonataDance.gif';
import nesGif from './assets/NES.gif';
import pcaestheticGif from './assets/PCaesthetic.gif';
import ps3FatGif from './assets/ps3FAT.gif';
import sakuraGif from './assets/Sakura.gif';
import tamagochiGif from './assets/tamagochi.gif';
import yesGif from './assets/yes.gif';
import yukiNagatoGif from './assets/yukiNagato.gif';
import yusukeGif from './assets/yusuke.gif';
import anilloDeSonicGif from './assets/anilloDeSonic.gif';
import hatsuneMikuGif from './assets/hatsuneMiku.gif';
import osakaGif from './assets/osaka.gif';
import orihimeGif from './assets/orihime.gif';
import ramenGif from './assets/ramen.gif';

const App = () => {
  const watchedAnimes = [
    { id: 1, title: 'Naruto', author: 'Masashi Kishimoto' },
    { id: 2, title: 'Death Note', author: 'Tsugumi Ohba' },
    { id: 3, title: 'Cowboy Bebop', author: 'Shinichirō Watanabe' },
  ];

  const toWatchAnimes = [
    { id: 4, title: 'Spy x Family', author: 'Tatsuya Endo' },
    { id: 5, title: 'Azumanga Daioh', author: 'Tatsuo Sato' },
    { id: 6, title: 'Serial Experiments Lain', author: 'Chiaki Konaka' },
  ];

  useEffect(() => {
    // Alert de boas-vindas ao acessar a lista de animes
    const handleWelcomeAlert = () => {
      alert('Bem-vindo à sua lista de animes!');
    };

    handleWelcomeAlert();
  }, []); // Executa uma vez quando o componente é montado

  return (
    <Router>
      <Routes>
        {/* Rota para a tela de autenticação */}
        <Route path="/" element={<Auth />} />
        
        {/* Rota para a tela da lista de animes */}
        <Route path="/anime-list" element={
          <div className="body">
            <div className="banner">
              <div className="gifs-left">
                <img className="gif-image" src={nokiaGif} alt="GIF Nokia" />
                <img className="gif-image" src={dolaresGif} alt="GIF Dólares" />
              </div>
              <h1 className="title">My Anime List</h1>
              <div className="gifs-right">
                <img className="gif-image" src={pesiGif} alt="GIF Pesi" />
                <img className="gif-image" src={myImage} alt="Descrição do GIF CD" />
              </div>
            </div>
            {/* Seção de Animes que já assisti */}
            <div className="watched-animes">
              <h2 className="subtitle">Animes que já assisti</h2>
              <ul>
                {watchedAnimes.map((anime) => (
                  <li key={anime.id} className="anime-box">
                    <strong>{anime.title}</strong> - Autor(a): {anime.author}
                  </li>
                ))}
              </ul>
              <div className="button-container">
                <button className="action-button">Adicionar</button>
                <button className="action-button">Excluir</button>
                <button className="action-button">Editar</button>
              </div>
            </div>

            {/* Seção de Animes por assistir */}
            <div className="to-watch-animes">
              <h2 className="subtitle">Animes que vou assistir</h2>
              <ul>
                {toWatchAnimes.map((anime) => (
                  <li key={anime.id} className="anime-box">
                    <strong>{anime.title}</strong> - Autor(a): {anime.author}
                  </li>
                ))}
              </ul>
              <div className="button-container-right">
                <button className="action-button">Adicionar</button>
                <button className="action-button">Excluir</button>
                <button className="action-button">Editar</button>
              </div>
            </div>

            {/* Seção para os novos GIFs */}
            <div className="gif-gallery">
              {/* Adicionando os novos GIFs */}
              <img src={gmbGif} alt="GIF Game Boy" className="gallery-gif" />
              <img src={itachiGif} alt="GIF Itachi" className="gallery-gif" />
              <img src={konataDanceGif} alt="Konata Dance" className="gallery-gif" />
              {/* Adicionando mais GIFs */}
              <img src={torresGif} alt="GIF Torres" className="gallery-gif" />
              <img src={nesGif} alt="GIF NES" className="gallery-gif" />
              <img src={pcaestheticGif} alt="GIF PC Aesthetic" className="gallery-gif" />
              <img src={ps3FatGif} alt="GIF PS3 Fat" className="gallery-gif" />
              <img src={sakuraGif} alt="GIF Sakura" className="gallery-gif" />
              <img src={tamagochiGif} alt="GIF Tamagochi" className="gallery-gif" />
              <img src={yesGif} alt="GIF Yes" className="gallery-gif" />
              <img src={yukiNagatoGif} alt="GIF Yuki Nagato" className="gallery-gif" />
              <img src={yusukeGif} alt="GIF Yusuke" className="gallery-gif" />
              <img src={anilloDeSonicGif} alt="GIF Anillo de Sonic" className="gallery-gif" />
              <img src={hatsuneMikuGif} alt="GIF Hatsune Miku" className="gallery-gif" />
              <img src={osakaGif} alt="GIF Osaka" className="gallery-gif" />
              <img src={orihimeGif} alt="GIF Orihime" className="gallery-gif" />
              <img src={ramenGif} alt="GIF Ramen" className="gallery-gif" />
            </div>

            {/* GIF da Mugi na parte inferior */}
            <div className="gif-section">
              <img src={anotherGif} alt="GIF Mugi" className="anime-gif mugi-gif"/>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;