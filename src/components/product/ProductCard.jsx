import { FaHeart, FaStar } from "react-icons/fa";

function ProductCard({ product }) {
return ( <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

```
  <div className="relative">

    <img
      src={product.image}
      alt={product.name}
      className="w-full h-60 object-cover"
    />

    <button
      className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition"
    >
      <FaHeart />
    </button>

    <span className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
      Best Seller
    </span>

  </div>

  <div className="p-6">

    <div className="flex items-center text-yellow-500 mb-2">
      <FaStar />
      <span className="ml-2">{product.rating}</span>
    </div>

    <h2 className="text-xl font-bold">
      {product.name}
    </h2>

    <p className="text-gray-500 mt-2">
      {product.category}
    </p>

    <h3 className="text-green-700 font-bold text-2xl mt-4">
      Rp {product.price.toLocaleString("id-ID")}
      <span className="text-sm text-gray-500 font-normal">
        {" "} / hari
      </span>
    </h3>

    <button
      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl mt-6 transition"
    >
      Sewa Sekarang
    </button>

  </div>

</div>


);
}

export default ProductCard;
