import React, { useState } from "react";

function AllProducts({ authToken }) {
  const [company, setCompany] = useState("AMZ");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [products, setProducts] = useState([]);

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://20.244.56.144/test/companies/${company}/categories/Laptop/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company" className="m-3">Company:</label>
        <select id="company" value={company} onChange={handleCompanyChange}>
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>

        <label htmlFor="minPrice" className="m-3">Minimum Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="bg-blue-500 rounded  p-2 m-2"
        />

        <label htmlFor="maxPrice">Maximum Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="bg-blue-500 rounded  p-2 m-2"

        />

        <button type="submit" className="bg-blue-700 p-3 rounded-md">Search</button>
      </form>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.productName} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
