import InputForm from "../Elements/input";
import Button from "../Elements/Button";


const FormRegister = () => {
    return (
        <form action="">
            {/* For FullName */}
            <InputForm label="Full Name" type="text" placeholder="Insert your name here..." name="fullname"/>

            {/* For Email */}
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>

            {/* For Password input */}
            <InputForm label="Password" type="password" placeholder="********" name="password"/>

            {/* For Confirm Password input */}
            <InputForm label="Confirm Password" type="password" placeholder="********" name="confirmPassword"/>

            {/* Button for Login */}
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;