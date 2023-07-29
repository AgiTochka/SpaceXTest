
import {useGetShipsByIdQuery} from "./api/spaceXApi";

export const SpaceXShips = ({shipsID}) =>{
    const {data: ships, isLoading, error} = useGetShipsByIdQuery(shipsID);
    console.log(ships);
    return (
        <>{error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : ships ? (
                <img src={ships.flickr_images[0]} alt={ships.name} width={350}/>
        ) : null}
        </>
    );
}