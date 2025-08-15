import React from "react";
import { useState } from "react";

function CartaoUsuario(props) {
    return(
        <div>
            <p>seu email é {props.email}</p>
            <p>seu cargo é {props.cargo}</p>
            <p>seu nome é {props.nome}</p>
        </div>
    )
}

export default CartaoUsuario;