import Home from "./page/homepage/Home"

import './App.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import LoginPage from "./page/authpage/LoginPage";
import SignupPage from "./page/authpage/SignupPage";
import CartPage from "./page/cartpage/CartPage";
import Checkout from "./page/checkoutpage/CheckoutPage";
import ProductDetail from "./feature/product-List/ProductDetails";
import ProductDetailPage from "./page/productdetailspage/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>
  },
  {
    path: '/checkout',
    element: <Checkout></Checkout>
  },
  {
    path: '/product-details',
    element: <ProductDetailPage></ProductDetailPage>
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <RouterProvider router={router} />
    </div>
  );
}


export default App;