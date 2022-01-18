import React from 'react';
import styled from 'styled-components';

const Navbar = ({ compra }) => {
  const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    background-color: #5bc3eb;
  `;
  const Carro = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > p {
      margin: 0 0 0 0.5rem;
    }
  `;
  return (
    <Menu>
      <p>Logo</p>
      <h3>menu</h3>
      <Carro>
        <p>Carrito</p>
        <p>{compra}</p>
      </Carro>
    </Menu>
  );
};

export default Navbar;
