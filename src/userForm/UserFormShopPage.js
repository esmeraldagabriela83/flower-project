import React , { useState } from "react";
import "./formInput.css";
import FormInput from "./FormInput";

const UserFormShopPage = () => {
    const [values, setValues] = useState({
        name: "",
        surname:"",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 1,
            name: "surname",
            type: "text",
            placeholder: "Surname",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Surname",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 4,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const data=new FormData(e.target) ;
        console.log(Object.fromEntries(data.entries())) ;
        console.log(inputs);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>

                <hr className="hrMobile"></hr>

                <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                    <h1 className="hrScreenFlower leftFlower">
                        <ion-icon name="flower-sharp"></ion-icon>
                    </h1>
                    <div className="hrScreen"></div>
                    <h1 className="hrScreenFlower rightFlower">
                        <ion-icon name="flower-sharp"></ion-icon>
                    </h1>
                </div>

                <h3>Register</h3>

                    <div className="section ul-ion-icon-com">
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UserFormShopPage;