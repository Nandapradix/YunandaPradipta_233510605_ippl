function CategoryFilter({
category,
setCategory,
}) {
return (
<select
value={category}
onChange={(e) =>
setCategory(e.target.value)
}
className="bg-white rounded-xl shadow px-5 py-4 outline-none focus:ring-2 focus:ring-green-600"
> <option>Semua</option> <option>Tenda</option> <option>Tas</option> <option>Sleeping Bag</option> <option>Kompor</option> <option>Matras</option> </select>
);
}

export default CategoryFilter;
