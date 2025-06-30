import React from "react";
import { Card } from "../components/card/Card";
import "./Filter.css";
import { ItemFilter } from "../components/itemFilter/ItemFilter";

export const Filter = () => {
  return (
    <div className="container-all-filter">
      <div className="container-filter-cards">

        <button className="btn-filter--icone">
          <i className="fa-solid fa-filter"></i>
        </button>

        <div className="sidebar">
          <h4>Pesquisar por: </h4>

          <h5>Marca</h5>
          <ItemFilter label={"Nike"} nameCategory={"Tênis"} />
          <ItemFilter label={"Olimpikus"} nameCategory={"Tênis"} />
          <ItemFilter label={"Mizuno"} nameCategory={"Tênis"} />
          <ItemFilter label={"Newbalance"} nameCategory={"Tênis"} />

          <h5>Categoria</h5>
          <ItemFilter label={"Calçados"} nameCategory={"tipoCategoria"} />
          <ItemFilter label={"Roupas"} nameCategory={"tipoCategoria"} />
          <ItemFilter label={"Acessórios"} nameCategory={"tipoCategoria"} />

          <h5>Cores</h5>
          <ItemFilter label={"Branco"} nameCategory={"tipoModelo"} />
          <ItemFilter label={"Escuras"} nameCategory={"tipoModelo"} />
          <ItemFilter label={"Coloridos"} nameCategory={"tipoModelo"} />

        </div>

        <div className="container-cards-products">
          <Card />
        </div>
      </div>
    </div>
  );
};
