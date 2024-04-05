import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DartkMode";

const ProductsPage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <Fragment>
            <Navbar/>
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-3/5 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id}/>
                                <CardProduct.Body name={product.title}>
                                {product.description}
                                </CardProduct.Body>
                            <CardProduct.Footer price={product.price}
                            id={product.id}/>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/5">
                     <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
                     <TableCart products={products}/>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;