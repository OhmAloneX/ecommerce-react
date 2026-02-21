import CardList from "./components/cardlist";

export default function Homepage(){
    return(
        <div>
            <h1 style={{textAlign: "center", marginTop: "20px",}}>
                Favorite Anime
            </h1>

            <CardList/>

        </div>
    )
}