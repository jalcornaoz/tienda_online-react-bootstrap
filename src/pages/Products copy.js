import { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import ProductTable from "../components/ProductTable";
//import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

let uniqueCategories;

export default function Products() {
  //let location = useLocation();
  let { category: defaultCategory, subCategory: defaultSubCategory = "" } =
    useParams();
  //const defaultCategory = location?.state?.category || "";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(defaultCategory);
  const [subCategory, setSubCategory] = useState(defaultSubCategory);

  useEffect(() => {
    axios.get("http://localhost:3006/products").then(({ data }) => {
      const categories = data.map((product) => product.masterCategory);
      uniqueCategories = [...new Set(categories)];
      setProducts(data);
    });
    //.catch((error)=>)
  }, []);

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }

  const selectCategory = (e) => setCategory(e.target.innerText);
  const filterProducts = products.filter(
    (product) => product.masterCategory === category
  );

  return (
    <>
      <h1>Productos</h1>
      <p>Elija una categoría para ver sus productos:</p>
      <ListGroup>
        {uniqueCategories.map((itemCategory) => (
          <ListGroup.Item
            key={itemCategory}
            active={itemCategory === category}
            onClick={selectCategory}
          >
            {itemCategory}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ProductTable products={products && filterProducts} />
    </>
  );
}
