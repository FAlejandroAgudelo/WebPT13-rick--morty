    import background from "../../img/Alx.jpg"
    import styles from "../About/About.module.css"
    import React from 'react'
    
    export const About = () => {
      return (
            <>
                <h1>Sobre mi</h1>
        
                <div className={styles.sobreMi}>
                <p>
                Soy Alejandro Agudelo Ingeniero en sistemas de la Corporación Universitaria Remington, actualmente estudiante de desarrollo Web en Henry, soy una persona muy tranquila, me gustan las cosas sencillas como salir a conocer pueblos en mi moto, caminar y jugar Video juegos.
                Trabajo en una empresa de sistemas como soporte informático, llevo 6 años en dicha empresa y vivo en Pereira Risaralda, Colombia.
                </p>
                <div className={styles.imgSobreMi}>
                    <img src={background} alt="img sobre mi" />
                </div>
                </div>
                </>
      )
    }
    

// const About = () => {
//     return(
//         <>
//         <h1>Sobre mi</h1>

//         <div className="sobreMi">
//         <p>
//         Soy Alejandro Agudelo Ingeniero en sistemas de la Corporación Universitaria Remington, actualmente estudiante de desarrollo Web en Henry, soy una persona muy tranquila, me gustan las cosas sencillas como salir a conocer pueblos en mi moto, caminar y jugar Video juegos.
//         Trabajo en una empresa de sistemas como soporte informático, llevo 6 años en dicha empresa y vivo en Pereira Risaralda, Colombia.
//         </p>
//         <div className="imgSobreMi">
//             <img src={background} alt="img sobre mi" />
//         </div>
//         </div>
//         </>
//     )
    
    
// };

export default About