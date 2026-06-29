import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
return ( <div className="relative">

```
  <FaSearch
    className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
  />

  <input
    type="text"
    placeholder="Cari alat camping..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full bg-white rounded-xl shadow px-12 py-4 outline-none focus:ring-2 focus:ring-green-600"
  />

</div>


);
}

export default SearchBar;
