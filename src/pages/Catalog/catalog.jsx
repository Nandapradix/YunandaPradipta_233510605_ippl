import { useEffect, useState } from "react";
import api from "../../services/api";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ProductCard from "../../components/product/ProductCard";
import SearchBar from "../../components/product/SearchBar";
import CategoryFilter from "../../components/product/CategoryFilter";
import SortDropdown from "../../components/product/SortDropdown";

function Catalog() {

const [products, setProducts] = useState([]);

const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");

const [category, setCategory] = useState("Semua");

const [sort, setSort] = useState("");

useEffect(() => {

```
getProducts();
```

}, []);

async function getProducts() {

```
try {

  const response = await api.get("/products");

  setProducts(response.data);

} catch (error) {

  console.log(error);

}

setLoading(false);
```

}

const filteredProducts = products

```
.filter((item) =>

  item.name.toLowerCase().includes(search.toLowerCase())

)

.filter((item) =>

  category === "Semua"

    ? true

    : item.category === category

)

.sort((a, b) => {

  if (sort === "Murah")

    return a.price - b.price;

  if (sort === "Mahal")

    return b.price - a.price;

  if (sort === "Nama")

    return a.name.localeCompare(b.name);

  return 0;

});
```

return (

```
<>

  <Navbar />

  <section className="pt-32 pb-20 bg-gray-100 min-h-screen">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold">

          Katalog Alat Camping

        </h1>

        <p className="text-gray-500 mt-3">

          Temukan perlengkapan camping terbaik.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-5 mb-10">

        <SearchBar

          search={search}

          setSearch={setSearch}

        />

        <CategoryFilter

          category={category}

          setCategory={setCategory}

        />

        <SortDropdown

          sort={sort}

          setSort={setSort}

        />

      </div>

      {loading ? (

        <h1 className="text-center">

          Loading...

        </h1>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (

            <ProductCard

              key={product.id}

              product={product}

            />

          ))}

        </div>

      )}

    </div>

  </section>

  <Footer />

</>
```

);

}

export default Catalog;
