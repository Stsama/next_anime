"use server";

import AnimeCard, {AnimeProp} from "@/components/AnimeCard";

// export const fetchAnime = async (page: number, timeout = 20000): Promise<any> => {
//   const controller = new AbortController();
//   const signal = controller.signal;

//   // Définir un timeout pour annuler la requête si elle prend trop de temps
//   const timeoutId = setTimeout(() => controller.abort(), timeout);

//   try {
//     const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`, {
//       signal,
//     });

//     clearTimeout(timeoutId); // Si la réponse est reçue à temps, annulez le timeout

//     if (!response.ok) {
//       throw new Error(`Erreur HTTP : ${response.status}`);
//     }

//     const data = await response.json();
//     return data.map((item: AnimeProp, index: number) => (
//       <AnimeCard key={item.id} anime={item} index={index} />
//     ));
//   } catch (error) {
//     if ((error as Error).name === 'AbortError') {
//       throw new Error('La requête a expiré (timeout)');
//     }
//     if (error instanceof Error) {
//       throw new Error(`Erreur de récupération des données : ${error.message}`);
//     } else {
//       throw new Error('Erreur de récupération des données inconnue');
//     }
//   }
// };

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`); 

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));


}


