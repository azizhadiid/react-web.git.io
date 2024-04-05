import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";


const Formlogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        // localStorage.setItem('email', e.target.email.value);
        // localStorage.setItem('password', e.target.password.value);
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem('token', res);
                window.location.href="/products";
            } else {
                setLoginFailed(res.response.data);
            }
        });
    };

    const usernameRef = useRef(null);

    useEffect (() => {
        usernameRef.current.focus();
    }, []);
    return (
        <form onSubmit={handleLogin}>
            {/* For Email */}
            <InputForm 
                label="Username" 
                type="text" 
                placeholder="Jhone doe" 
                name="username"
                ref={usernameRef}
            />
            {/* For Password input */}
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="********" 
                name="password"
            />
            {/* Button for Login */}
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    );
};

export default Formlogin;