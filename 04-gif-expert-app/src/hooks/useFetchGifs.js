import { useState } from "react";

export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    return state;

}
