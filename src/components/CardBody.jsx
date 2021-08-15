
import PlayerCard from './PlayerCard';
function CardBody({data=[]}) {
    return (
        <>
        <div className="card-body">
          <div className="row">
            {
              data.length > 0 ? data.map((result, i) => <PlayerCard player={result} key={i} />) : null
            }
          </div>
        </div>
        </>
    )
}

export default CardBody
