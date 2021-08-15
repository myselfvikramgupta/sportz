function PlayerName({ name = "" }) {
    return (
        <>
            <div className="player-name">
                <span>{name}</span>
            </div>
        </>
    )
}

export default PlayerName
