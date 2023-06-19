import React from "react";

import { Button } from "./styles";

export default function ButtonProof(props) {
    return(
        <Button>
            <a href={props.link}>{props.nome}</a>
        </Button>
    );
}