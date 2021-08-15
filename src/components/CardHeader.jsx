function CardHeader({handleSearch}) {
    return (
        <>
            <div className="card-header row">
                <div className="col-header-left">
                    <h4>Players List</h4>
                </div>
                <div className="col-header-right">
                    <div className="search-box d-flex-between">
                        <input type="text" className="search-input" placeholder="Team name,Players Name" onChange={handleSearch} />
                        <img src="search.png" alt="search icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHeader
