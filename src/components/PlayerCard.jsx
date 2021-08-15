
import MatchTime from './player/MatchTime';
import PlayerImage from './player/PlayerImage';
import PlayerMatch from './player/PlayerMatch';
import PlayerName from './player/PlayerName';
import PlayerSkill from './player/PlayerSkill';
function PlayerCard({player=[]}) {
    return (
        <>
           <div className="col-palyer-card">
                    <div className="players d-flex-between">
                      <div className="player-info">
                       <PlayerImage imageId={player.Id} />
                        <div className="about-player">
                         <PlayerName name={player.PFName} />
                         <PlayerSkill skill={player.SkillDesc} value={player.Value} />
                          <MatchTime mtime={player.UpComingMatchesList[0].MDate} />
                        </div>
                      </div>
                     <PlayerMatch ccode={player.UpComingMatchesList[0].CCode} vsccode={player.UpComingMatchesList[0].VsCCode} />
                    </div>
                  </div>  
        </>
    )
}

export default PlayerCard
