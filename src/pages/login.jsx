import AuthLayout from "../components/Layouts/AuthLayouts";
import Formlogin from "../components/Fragments/FormLogin"
const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <Formlogin/> 
        </AuthLayout>
    )
}

export default LoginPage;