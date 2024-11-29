// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Se você estiver usando o Realtime Database

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  databaseURL: "SUA_DATABASE_URL",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Inicializa o Realtime Database

export { app, database };
import React, { useEffect, useState } from 'react';
import { database } from './firebase'; // Importa a configuração do Firebase
import { ref, get } from 'firebase/database'; // Importa funções necessárias

const AnimeListPage = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await get(ref(database, 'caminho/para/seus/dados')); // Substitua pelo caminho correto
      if (snapshot.exists()) {
        setAnimes(snapshot.val());
      } else {
        console.log("Nenhum dado disponível");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Animes</h1>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeListPage;