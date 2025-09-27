

function SearchBar({query, setQuery}){

    return (
        <>
            <input 
                className="search"
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

        </>
    )

}

export default SearchBar