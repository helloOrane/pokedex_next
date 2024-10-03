import Image from "next/image";

type IProps = {
    type: string;
}
export default function TypeIcon(props: IProps) {
    
    const typeFormated = props.type == 'Fly'? 'FLYING': props.type.toUpperCase();

    return (
        <div className="w-10 h-10">
            <Image
                src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${typeFormated}_BORDERED.png`}
                alt={props.type}
                width={48}
                height={48}
                className="h-8 w-8 m-auto"
            />
            <p className="text-center text-xs">{props.type}</p>
        </div>
    )
}