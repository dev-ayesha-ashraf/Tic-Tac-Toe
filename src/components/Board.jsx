import Square from "./Square";
import { useState } from "react";
export default function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return false;
    }
    const isWinner = winner();
    const playAgain = () => {
        setState(Array(9).fill(null))
    }
    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn)
    }

    const isBoardFull = state.every((square) => square !== null);

    return (
        <div className="p-0 m-0 w-full h-screen border-2 flex flex-col justify-center align-center text-center m-auto bg-cyan-950">
            <h1 className="text-white font-black text-5xl mb-5 max-[450px]:font-bold max-[450px]:text-3xl">Tic Tac Toe</h1>
            {isWinner ? (
                <>
                    <p className="text-cyan-400 text-3xl font-bold"> {isWinner} Won The Game</p>
                    <button
                        onClick={playAgain}
                        className="w-[20vw] text-xl mx-auto bg-yellow-500 text-white font-bold py-3 px-6 m-4 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Play Again
                    </button>
                </>
            ) : isBoardFull ? (
                <>
                    <p className="text-cyan-400 text-3xl font-bold">No One Won</p>
                    <button
                        onClick={playAgain}
                        className="w-[20vw] text-xl mx-auto bg-yellow-500 text-white font-bold py-3 px-6 m-4 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Play Again
                    </button>
                </>
            ) : (<>
                <h4 className="text-cyan-400 text-3xl font-bold">Player {isXTurn ? "x" : "0"} turn</h4>
                <div className="flex justify-center">
                    <Square onClick={() => handleClick(0)} value={state[0]} />
                    <Square onClick={() => handleClick(1)} value={state[1]} />
                    <Square onClick={() => handleClick(2)} value={state[2]} />
                </div>
                <div className="flex justify-center">
                    <Square onClick={() => handleClick(3)} value={state[3]} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} />
                </div>
                <div className="flex justify-center">
                    <Square onClick={() => handleClick(6)} value={state[6]} />
                    <Square onClick={() => handleClick(7)} value={state[7]} />
                    <Square onClick={() => handleClick(8)} value={state[8]} />
                </div>
            </>)
            }
        </div>
    )
}