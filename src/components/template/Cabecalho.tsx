

export default function Cabecalho(props) {
    return (
        <div className="flex h-1/3 bg-tarefas bg-no-repeat bg-cover">
            <div className="flex flex-1 h-full bg-gradient-to-r from-purple-600 via-transparent to-blue-600">
                {props.children}
            </div>
        </div>
    )
}