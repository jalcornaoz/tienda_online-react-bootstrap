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
      // const categories = data.map((product) => product.masterCategory);
      // uniqueCategories = [...new Set(categories)];
      uniqueCategories = data.reduce((acc, product) => {
        const { masterCategory: category, id } = product;
        const categoryExists = acc.find((item) => item.name === category);
        if (!categoryExists) {
          acc.push({ name: category, id });
        }
        return acc;
      }, []);
      setProducts(data);
    });
    //.catch((error)=>)
  }, []);

  if (!products) {
    return <div>Cargando...</div>;
  }

  const selectCategory = (e) => {
    const category = e.target.innerText || e.target.alt;
    navigate(`/products/${category}`);
  };
  const selectSubcategory = (e) => {
    const subCategory = e.target.innerText || e.target.alt;
    subCategory === "Volver"
      ? navigate(`/products/`)
      : navigate(`/products/${category}/${subCategory}`);
  };

  const loadProduct = (e) => navigate(`/product/${e.target.id}`);

  const uniqueSubcategories = products
    .filter((product) => product.masterCategory === category)
    .reduce((acc, product) => {
      const { subCategory, id } = product;
      const subCategoryExists = acc.find((item) => item.name === subCategory);
      if (!subCategoryExists) {
        acc.push({ name: subCategory, id });
      }
      return acc;
    }, []);

  const filterProducts = products
    .filter((product) => product.masterCategory === category)
    .filter((product) => product.subCategory === subcategory)
    .map(({ productDisplayName: name, id, price }) => ({ name, id, price }));
  return (
    <>
      <h1>Productos</h1>

      {!category && (
        <>
          <h5>Selecciona alguna categoría para ver nuestros productos:</h5>
          <OptionGrid
            items={uniqueCategories}
            onClick={selectCategory}
            goUp={false}
          />
        </>
      )}
      {category && (
        <>
          <h3>Categoría: {category}</h3>
          <h5>Selecciona alguna subcategoría para ver nuestros productos:</h5>
          <OptionGrid
            items={uniqueSubcategories}
            itemDefault={subcategory}
            onClick={selectSubcategory}
            goUp={true}
          />
        </>
      )}

      {/* {category && subcategory && <ProductTable products={filterProducts} />} */}
      {category && subcategory && (
        <>
          <h3>Subcategoría: {subcategory}</h3>
          <h5>Elige el producto:</h5>
          <OptionGrid
            items={filterProducts}
            onClick={loadProduct}
            goUp={false}
          />
        </>
      )}
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
