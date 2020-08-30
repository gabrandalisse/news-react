import React from 'react';
import useSelect from "../hooks/useSelect";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

const Form = ({ updateCountry, updateCategory }) => {

    const OPTIONS = [
        { value: "general", label: "General" },
        { value: "business", label: "Negocios" },
        { value: "entertainment", label: "Entretenimiento" },
        { value: "health", label: "Salud" },
        { value: "science", label: "Ciencia" },
        { value: "sports", label: "Deportes" },
        { value: "technology", label: "Tecnología" }
    ];

    // Custom hooks
    const [ category, SelectNews ] = useSelect("general", OPTIONS);

    // On submit send category to the App.js
    const searchNew = e => {
        e.preventDefault();

        updateCategory(category);
    }

    return (  
        <div className={`${styles.browser} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNew}
                >
                    
                    <h2 className={styles.heading}>Encuentra Noticias por Categorías</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles["btn-block"]} btn-large amber darken-2`} // Can´t acces like 'styles.bnt-block'
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Form.propTypes = {
    updateCategory: PropTypes.func.isRequired
};
 
export default Form;