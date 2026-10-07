import { useState } from "react";
type ContadorProps = {
    initial?:number;
    step?: number;
}


export const Modulo2Page = ({initial = 0, step = 1}: ContadorProps) => {
    
    const [count, setCount] = useState<number>(initial)
    const inc = () => setCount((c)=>c+step)
    const dec = () => setCount((c)=>c-step)
    
    //INFERIDO 
    const [tazas, setTazas] = useState<number> (1);
    
    type Ingredientes = "agua" | "cafe" | "azucar";
    type RecetaCafe = {
        agua: number;
        cafe: number;
        azucar: number;
    }

    type CafePreparado={
        mensaje: string;
        intensidad: "suave" | "media" | "fuerte";
    }
    //explicito - union literal 
    const [intesidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]> ("suave")
    //explicito - valores nulos 
    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null> (null);
    //valores que pueden ser undifined
    const[azucarIn, setAzucarIn] = useState<number | undefined> (undefined)




    //Interface
    //Padre
    interface recetaBase{
        agua: number;
        cafe: number;
    }
    //HIJO
    interface recetaAzucar extends recetaBase{ //Extiende del Padre (recetaBase) hacia el Hijo(recetaAzucar)
        azucar: number;
    }

    interface maquinaCafe{
        modelo: string;
    }

    interface maquinaCafe{
        aguaMax?: number;
    }

    const maquina : maquinaCafe = {modelo: "kame-500", aguaMax: 2000}

    function prepararCafe(receta: RecetaCafe): CafePreparado{
        const intensidad = receta.cafe > 10 ?"fuerte": "suave";
        return{
            mensaje: `Cafe preparado con ${receta.agua}ml de agua y ${receta.cafe}g de cafe`
            + (receta.azucar ? `+ ${receta.azucar}g de azucar`: ""),
            intensidad,
        }
    }

    interface CafePreparadoI{
        mensaje: string;
        intensidad: "suave"|"fuerte";
    }

    function prepararCafeI(receta: recetaAzucar): CafePreparadoI{
        const intensidad: CafePreparadoI["intensidad"] = receta.cafe>10?"fuerte":"suave";
        return {
            mensaje: `Cafe listo (INT) con ${receta.agua}ml de agua y 
            ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`, intensidad
        }
    }

    const OnCafe = () => {
        const resultado = prepararCafe({agua: 200, cafe: 15, azucar: 5});
        alert(resultado.mensaje + " con intensidad " + resultado.intensidad);

    }

    const OnCafeInterface = () =>{
        const resultado =  prepararCafeI({agua: 200, cafe: 5, azucar: 5});
        alert(resultado.mensaje + " con intensidad " + resultado.intensidad);
    }

    //Intersecciones 
    type A = {nombre: string}
    type B = {edad: number}
    type C = {state: boolean}
    type Persona = A & B & C
    const JuanObject: Persona = {nombre: "Juan", edad: 30, state: true}

    return(
        <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col p-4 gap-4">
            <span>Modulo 2</span>
            <span>TYPE</span>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md" 
            onClick={OnCafe}>
                Preparar Cafe
            </button>
            <span>INTERFACE</span>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md" 
            onClick={OnCafeInterface}>
                Preparar Cafe I
            </button>
            <span>state tipados</span>
            {intesidadUI}
            <button onClick={()=>setIntensidadUI("fuerte")}>cambiar state</button>

            <span>Contador</span>
            <button className = "rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-500" onClick={inc}>Incrementar</button>
            <span className="min-w-[3ch] text-center text-2xl font-semibold">{count}</span>
            <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-500" onClick={dec}>decrementar</button>
            <h2>Intersecciones(&)</h2>
            {JuanObject.nombre} " - " {JuanObject.edad}
            <pre>
                {JSON.stringify(JuanObject, null, 2)}
            </pre>
        </div>
    );
};

