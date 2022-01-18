import React from 'react';
import styled from 'styled-components';

const Items = ({ id, image, name, type, _callback }) => {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    border: 1px solid black;
    border-radius: 10px;
    padding: 1rem;
    width: 15rem;
    box-shadow: 5px 5px 10px black;
  `;
  const Imagen = styled.img`
    width: 200px;
    height: 200px;
  `;
  const Descripcion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  `;
  return (
    <Card>
      <Imagen src={image} alt={name} />
      <Descripcion>
        <h3>{name}</h3>
        <small>Tipo Pokemon: {type}</small>
      </Descripcion>
    </Card>
  );
};

export default Items;
