export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari lokasi..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}