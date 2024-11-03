import React, { useContext, useState } from 'react';
import { DataContext } from '..';

function FormHandling(props) {
    const data = useContext(DataContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [formData, setFormData] = useState(null);

    const handleFirstName = (event) => {
        let { value } = event.target;
        setFirstName(value);
    }
    const handleLastName = (event) => {
        let { value } = event.target;
        setLastName(value);
    }

    const handleChange = (e) => {
        let { value, name } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    // setFormData("hello")




    return (
        <div className='container'>
            <h2>{data}</h2>
            <input type="text" placeholder='First Name' onChange={handleFirstName} />
            <input type="text" placeholder='Last Name' onChange={handleLastName} />
            <p>{firstName}</p>


            <form>
                <input type="text" placeholder='username' name='username' onChange={handleChange} />
                <input type="email" placeholder='email' name='email' onChange={handleChange} />
                <input type="password" placeholder='password' name='password' onChange={handleChange} />
                <input type="text" placeholder='contact' name='contact' onChange={handleChange} />
                <select name="city" onChange={handleChange}>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="patiala">Patiala</option>
                    <option value="mohali">Mohali</option>
                </select>

                <button onClick={handleSubmit}>Add User</button>
            </form>
        </div>
    );
}

export default FormHandling;


// { [username]: "vipin", email:"test@email.com", password:"abc", contact:"8054004224" }