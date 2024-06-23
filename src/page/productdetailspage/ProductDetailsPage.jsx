
// import NavBar from "../features/navbar/Navbar";

import Navbar from "../../feature/navbar/Navbar";
import ProductDetail from "../../feature/product-List/ProductDetails";

// import ProductDetail from "../features/product-list/components/ProductDetail";
function ProductDetailPage() {
    return ( 
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
     );
}

export default ProductDetailPage;