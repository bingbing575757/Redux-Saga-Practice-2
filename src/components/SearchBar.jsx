import useSearch from "../hooks/useSearch";

export default function SearchBar() {
  const { input, onChange, onSubmit } = useSearch();

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={onChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
}
