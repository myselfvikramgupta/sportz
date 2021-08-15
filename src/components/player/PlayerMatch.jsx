function PlayerMatch({ccode="" ,vsccode=""}) {
    return (
        <>
            <div className="player-match">
                {
                    ccode
                        ? <div className="match">
                            <h5>{ccode}</h5>
                            <h6>VS</h6>
                            <h5>{vsccode}</h5>
                        </div> : ""
                }
            </div>
        </>
    )
}

export default PlayerMatch
