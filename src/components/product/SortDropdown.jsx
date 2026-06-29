function SortDropdown({
sort,
setSort,
}) {
return (
<select
value={sort}
onChange={(e) =>
setSort(e.target.value)
}
className="bg-white rounded-xl shadow px-5 py-4 outline-none focus:ring-2 focus:ring-green-600"
> <option value="">Urutkan</option> <option value="Murah">Harga Termurah</option> <option value="Mahal">Harga Termahal</option> <option value="Nama">Nama A-Z</option> </select>
);
}

export default SortDropdown;
