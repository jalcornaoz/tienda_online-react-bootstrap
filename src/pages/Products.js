import { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";
//import { useLocation } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import OptionGrid from "../components/OptionGrid";

let uniqueCategories;

export default function Products() {
  let { category, subcategory } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3006/products").then(({ data }) => {
      const categories = data.map((product) => product.masterCategory);
      uniqueCategories = [...new Set(categories)];
      setProducts(data);
    });
    //.catch((error)=>)
  }, []);

  if (!products) {
    return <div>Cargando...</div>;
  }

  const selectCategory = (e) => {
    navigate(`/products/${e.target.innerText}`);
  };
  const selectSubcategory = (e) => {
    navigate(`/products/${category}/${e.target.innerText}`);
  };

  const uniqueSubcategories = [
    ...new Set(
      products
        .filter((product) => product.masterCategory === category)
        .map((product) => product.subCategory)
    ),
  ];

  const filterProducts = products
    .filter((product) => product.masterCategory === category)
    .filter((product) => product.subCategory === subcategory);
  return (
    <>
      <h1>Productos</h1>
      <p>Selecciona alguna categoría para ver nuestros productos:</p>
      {!category && (
        <OptionGrid
          items={uniqueCategories}
          defaultItem={category}
          onClick={selectCategory}
        />
      )}
      {category && (
        <>
          <p>Selecciona alguna subcategoría para ver nuestros productos:</p>
          <OptionGrid
            items={uniqueSubcategories}
            defaultItem={subcategory}
            onClick={selectSubcategory}
          />
        </>
      )}

      {category && subcategory && <ProductTable products={filterProducts} />}
    </>
    // <>
    //   <h1>Productos</h1>
    //   <p>Elija una categoría para ver las subcategorías:</p>
    //   <OptionList
    //     title="Categoría"
    //     items={uniqueCategories}
    //     onClick={selectCategory}
    //   />
    //   <h2>{category}</h2>
    //   {category && (
    //     <div>
    //       <p>Elija una subcategoría para ver los productos:</p>
    //       <OptionList
    //         title="Subcategoría"
    //         items={uniqueSubcategories}
    //         onClick={selectSubcategory}
    //       />
    //       <h2>{subcategory}</h2>
    //     </div>
    //   )}
    //   {subcategory && <ProductTable products={products && filterProducts} />}
    // </>
  );
}
