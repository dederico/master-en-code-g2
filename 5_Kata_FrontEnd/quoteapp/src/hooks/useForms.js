// Reglas para crear mis propios hooks
// 1. Se deben llamar useAlgo ejemplo: useForm
// 2. Siempre tenemos que crear hooks que sean funciones
// 3. Tenemos que anidar a los hooks nativos de react (omitir loops, condiciones o funciones anidadas)
// los hooks deben de ser universales!!!
import { useState } from "react";

export default function useForm(defaults) {
    const [inputs, setInputs] = useState(defaults);

    const handleInputs = (event) => {
        console.log('Event', event.target.value);
        console.log("Event", event.target.id);
        setInputs({ ...inputs, [event.target.id]: event.target.value });
    }


    return {
        inputs, handleInputs
    }
}