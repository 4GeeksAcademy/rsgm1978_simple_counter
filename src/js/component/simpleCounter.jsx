import React, { useEffect, useState } from "react";//1.

//5 y 2
export const SimpleCounter = () =>{
//3. codigo de js
 const [counter, setCounter] = useState(0)

 useEffect(() => {
    const newInterval = setInterval(() => setCounter((counter) => counter + 1), 1000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(newInterval);
}, []);
//4.retornamos un solo elemento HTML
    return (
    <div className="container" >
        
        <h1 className="text-center">Simple Counter</h1>
        <h2 className={"text-danger"}>Clock</h2>
        <div className="big-counter">
            <div>{<i class="fas fa-clock"></i>}</div> 
            <div>{Math.floor(counter / 100000000 % 10)}</div>
            <div>{Math.floor(counter / 10000000 % 10)}</div>
            <div>{Math.floor(counter / 1000000 % 10)}</div>
            <div>{Math.floor(counter / 100000 % 10)}</div>
            <div>{Math.floor(counter / 10000 % 10)}</div>
            <div>{Math.floor(counter / 1000 % 10)}</div>
            <div>{Math.floor(counter / 100 % 10)}</div>
            <div>{Math.floor(counter / 10 % 10)}</div>
            <div>{Math.floor(counter % 10)}</div>
        </div>           
    </div>
    )
}






//7 y 6