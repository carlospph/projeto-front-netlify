import React from "react";

import styled from "styled-components";
import { Card } from "../card/Card";
import { Produtos } from "../../pages/Produtos";
import { Filter } from "../../pages/Filter";
import { Cartoes } from "../Cartoes/Cartoes";

const Container = styled.div`
  border: 2px solid blue;
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Campo = styled.div`
  border: 2px solid red;
  padding: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

export function BarSearch() {
  return (
    <Container>
      <Campo>
        <input type="text" name="fieldSearch" placeholder="Buscar dados" />
      </Campo>
      <Cartoes />
    </Container>
  );
}
