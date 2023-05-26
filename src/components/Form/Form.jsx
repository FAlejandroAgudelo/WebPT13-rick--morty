import styles from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";

const Form = (props) => {

    const [userData, setUserData] = useState ({
        username: "",
        password: "",
     });

    const [errors, setErrors] = useState ({
        username:"",
        password:"",
    });

        const  handleChange = (e) => {
            const {name, value} = e.target;
            setUserData({
                ...userData,
                [name]: value
            })
            setErrors(
                validation({
                    ...userData,
                    [name]: value
                })
            )
            console.log(errors);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            props.login(userData);
        }

    return (
    <div className={styles.centrar}>
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
            />
            <p className={styles.error}>
                {errors.username && errors.username}
            </p>
            <br />
            <label>Password</label>
            <input 
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            <p className={styles.error}>
                {errors.password && errors.password}
            </p>
            <hr />
            <button>Login</button>
        </form>
    </div>
    </div>

    )
}

export default Form;