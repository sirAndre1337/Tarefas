interface ListaBotaoProps {
    selecionado?: boolean;
    className?: boolean;
    children: any;
    onClick: (evento: any) => void
}

export default function ListaBotao(props: ListaBotaoProps) {

    const bordaSelecionada = props.selecionado ? 'border-purple-400' : ''
    return (
        <button
            onClick={props.onClick}
            className={`text-gray-500 font-bold hover:text-black focus:outline-none border-b-4 ${bordaSelecionada}  ${props.className}`}>
            {props.children}
        </button>
    )
}