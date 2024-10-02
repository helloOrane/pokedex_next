import Image from "next/image";

type IProps = {
    type: string;
}
export default function TypeIcon(props: IProps) {
    
    const typeFormated = props.type == 'Fly'? 'FLYING': props.type.toUpperCase();

    return (
        <div className="w-12 h-12">
            <Image
                src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${typeFormated}_BORDERED.png`}
                alt={props.type}
                width={48}
                height={48}
                className="h-12 w-12"
            />
            <p className="text-center">{props.type}</p>
        </div>
    )
}