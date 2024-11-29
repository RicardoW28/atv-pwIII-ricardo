import React, { useEffect, useState } from 'react';
import AnimeList from './AnimeList';

const AnimeListPage = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('URL_DA_SUA_API'); // Substitua pela URL da sua API
        if (!response.ok) {
          throw new Error('Erro ao buscar os animes');
        }
        const data = await response.json();
        setAnimes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      alert('Bem-vindo à sua lista de animes!'); // Mensagem de boas-vindas
    }
  }, [loading, error]); // Executa quando o carregamento termina e não há erro

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Animes</h1>
      <AnimeList animes={animes} />
    </div>
  );
};

export default AnimeListPage;