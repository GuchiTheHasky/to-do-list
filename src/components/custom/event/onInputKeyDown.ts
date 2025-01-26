import {KeyboardEvent} from "react";

export const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>, handleFunction: () => void) => {
    if (e.key === "Enter") {
        handleFunction()
    } 

}