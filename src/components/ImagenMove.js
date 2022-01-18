import React, { useState } from 'react';
import styled from 'styled-components';

const ImagenMove = () => {
  const [Color, setColor] = useState('red');

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background-color: ${Color};
  `;
  const Imagen = styled.img`
    width: 50%;
    height: 50%;
  `;
  const cambioColor = () => {
    Color === 'red' ? setColor('green') : setColor('red');
  };
  return (
    <>
      <Container></Container>
      <Imagen
        src="https://picsum.photos/600/300"
        alt="imagen"
        onClick={cambioColor}
      />
      <button type="button" onClick={() => cambioColor}>
        Cambiar color
      </button>
    </>
  );
};

export default ImagenMove;
