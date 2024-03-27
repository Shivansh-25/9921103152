import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login } from "./Services/authService";
import AllProducts from "./Pages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  const [authToken, setAuthToken] = React.useState(null);

  React.useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const authToken = await login();
        setAuthToken(authToken);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthToken();
  }, []);

  return (
    <Router>
      <div>
        <nav className="flex ">
          <ul className="flex h-[10vh] w-[100vw] justify-center items-center">
            <li>
              <a href="/" className="m-10 p-5 bg-blue-300 rounded">All Products</a>
            </li>
            <li>
              <a href="/products/1" className="m-10 p-5 bg-blue-300 rounded">Product Details</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            exact
            path="/"
            element={<AllProducts authToken={authToken} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetails authToken={authToken} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
