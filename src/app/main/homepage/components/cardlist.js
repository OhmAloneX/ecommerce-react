import React from "react";
import ImageCard from "../../../../components/ui/card";

export default function CardList(){
    return(
        <div style={containerStyle}>
            <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/9/98/SaitamaWikipediapage.png"
                title="Saitama"
                description="HE IS STRONG AS HELL!"
            />

            <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/9/98/SaitamaWikipediapage.png"
                title="Saitama"
                description="HE IS BALD GUY!"
            />

            <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/9/98/SaitamaWikipediapage.png"
                title="Saitama"
                description="HE IS BALD GUY!"
            />
        </div>
    );
}

const containerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px",
};