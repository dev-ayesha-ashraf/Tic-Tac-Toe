export default function Square(props) {
    return (
        <div className="h-[12vh] w-[8vw] text-yellow-400 rounded-md shadow shadow-cyan-800 font-black text-6xl bg-cyan-800 m-4 max-[450px]:px-3 max-[450px]:m-2"
            onClick={props.onClick}
        >

            {/* <h5 className="px-8 py-5 text-cyan-400 rounded-md shadow shadow-cyan-800 font-black text-6xl bg-cyan-800 m-4 max-[450px]:px-3 max-[450px]:m-2">X</h5> */}
            <h5 >{props.value}</h5>
        </div>
    )
}