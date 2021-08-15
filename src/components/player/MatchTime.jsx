import Moment from 'moment';
function MatchTime({mdate=""}) {
    return (
        <>
            {
                mdate ?
                    <div className="match-time d-flex-between">
                        <div className="date">
                            {Moment(mdate).format('DD-MM-YYYY hh:mm:ss a').split(" ")[0]}
                        </div>
                        <div className="time">
                            {Moment(mdate).format('DD-MM-YYYY hh:mm:ss a').split(" ")[1]}{" "} {Moment(mdate).format('DD-MM-YYYY hh:mm:ss a').split(" ")[2]}
                        </div>
                    </div> : ""
            }
        </>
    )
}

export default MatchTime
