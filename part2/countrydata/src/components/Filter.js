const Filter = ({searchQuery, searchQueryChange}) => {
    return (
        <>
            <span>
                Find countries : 
            </span>
            <span>
            <input value={searchQuery} onChange={searchQueryChange}/>
            </span>
        </>
    );
}

export default Filter;
