import Navbar from "../../feature/navbar/Navbar";
import ProductList from "../../feature/product-List/ProductList";

const Home =()=>{
    return(
        <>
          <Navbar>
            <ProductList ></ProductList>
          </Navbar>
        </>
    )
}

export default Home;