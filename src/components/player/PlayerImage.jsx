function PlayerImage({imageId=''}) {
    return (
        <>
         <div className="player-image">
             <img src={`/player-images/${imageId}.jpg`} alt="Player" />
         </div>    
        </>
    )
}

export default PlayerImage
