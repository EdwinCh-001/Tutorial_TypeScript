import { Link } from "react-router-dom";
import { calcularDanio } from "../utils/calcularDanio";

export const Modulo1Page = () => {
    //1. Inferencia vs anotacion de tipos
    let saga: string = "Saiyan Saga"; //Infiere que es un string inicialmente
    let horasEntrenamiento: number = 36; //Infiere que es un number inicialmente, si se declara ya es un valor anotado

    //2. Tipos basicos
    let guerrero: string = "Goku";
    const ki: number = 9001; //los tipos number pueden trabajar tanto para enteros como decimales
    const enCombate: boolean = true;

    //3. Arrays
    const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"];

    //4. Tuplas
    const coordenadas:[number, number, string] = [42, 17, "Hola"];

    //5. Funciones tipadas (parametros + retorno)
    // function calcularDanio(base: number, multiplicador: number): number{
    //     return base*multiplicador;
    // }

    const calcularDanioFlecha =(base: number, multiplicador: number):number =>{
        return base*multiplicador;
    }

    //6. NULL y UNDEFINED
    let transformacion:string | null = null;
    transformacion = "Super Saiyan";

    let estrategia:string | undefined = undefined;
    estrategia = "Transformarse a Ultra Instinto";

    //7. ANY y UNKNOWN
    let variableLibre:any = "Semilla del Ermitanio";
    variableLibre = 1.5;

    let evento:unknown = "refuerzo"
    let eventoMayus: String | null = null;
    if(typeof evento === "string"){
        eventoMayus = evento.toUpperCase();
    }
    return (
        <main className = "min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3xl p-8">
            
            <header className="mb-8 border-b border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md ">
                Volver a home
                </Link>

                <h1 className="text-3xl font-semibold text-blue-500">
                    React + TypeScript - MODULO 1
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: tipos basicos, arrays y tuplas
                </p>
            </header>
            <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Inferencia y basicos
            </h2>
            <div className="grid grid-cols-1 mid:grid-cols-2 gap-2 text-neutral-300">
                <div>
                    Saga: {saga}
                </div>
                <div>
                    Horas de entrenamiento: {horasEntrenamiento}{" "}
                </div>
                <div>
                    Guerrero: {guerrero}
                </div>
                <div>
                    ki: {ki}
                </div>
                <div>
                    En combate: {enCombate?"Si":"No"}
                </div>
            </div>
            </section>
            <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Arrays
            </h2>
            <div>
                Equipo Z: {equipoZ.join(", ")}
            </div>
            <h2 className="text-xl font-medium text-blue-300 mb-2 mt-6">
                Tuplas
            </h2>
            <div>
                Coordenadas [x, y, hola]: x={coordenadas[0]} y={coordenadas[1]} saludo = {coordenadas[2]}
            </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    funciones tipadas
                </h2>
                <div>
                    <p>Daño (base 450 x mult. 2)</p>
                    <span>Daño total: {calcularDanio(450, 2)}</span>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    ANY y UNKNOWN
                </h2>
                <div>
                    Any: {variableLibre}
                </div>
                <div>
                    Evento: {eventoMayus}
                </div>
            </section>
            </div>
        </main>
    );
}