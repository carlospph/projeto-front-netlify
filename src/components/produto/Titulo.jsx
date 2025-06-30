import React from 'react';
import styled from 'styled-components';

const Title = styled.h5`
    font-size: 14px;
    text-align:left;
    padding:0;
    margin:0;
`;

export function Titulo({labelTitle}){

    return(
        <Title>
            {labelTitle}
        </Title>
    )
}