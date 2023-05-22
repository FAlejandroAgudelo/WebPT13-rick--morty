import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "../Detail/Detail.module.css"


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
            } else {
            window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
        }, [id]);

        // console.log(character);


    return(
        <>
        <h1>Detail</h1>
        <Link to="/home">
        <button>Go Back</button>
        </Link>
        <div className={styles.detalle}>
            <div className={styles.detalleInfo}>
                <h2>{character.name}</h2>
                <h3>{`SPECIE | ${character.species}`}</h3>
                <h3>{`GENDER | ${character.gender}`}</h3>
                <h3>{`STATUS | ${character.status}`}</h3>
                {character.origin && <h3>{`ORIGIN | ${character.origin.name}`}</h3>}
            </div>
            <div className={styles.img}>
                <img src={character.image} alt={character.name} />
            </div>
        </div>
        </>
    )
}

export default Detail