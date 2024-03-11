// SearchBar.tsx

import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'; // Importa los componentes necesarios de Chakra UI
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de búsqueda
import { db } from "../firebase"; // Importa la instancia de Firestore desde tu archivo de configuración
import { collection } from 'firebase/firestore';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const querySnapshot = collection(db,'juegos')
const juego = querySnapshot.docs.map(doc => doc.data());
      
      if (!querySnapshot.empty) {
        console.log('El juego existe:', querySnapshot.docs[0].data().titulo);
      } else {
        console.log('El juego no existe.');
      }
    } catch (error) {
      console.error('Error al buscar el juego:', error.message);
    }
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FaSearch color="#CBD5E0" size="20px" /> {/* Ícono de búsqueda */}
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Buscar título de juego"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
