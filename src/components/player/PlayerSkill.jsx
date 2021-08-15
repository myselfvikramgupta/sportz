function PlayerSkill({skill="",value="",}) {
    return (
        <>
            <div className="player-skill d-flex-between">
                <div className="skill">
                    <span>
                        {skill}
                    </span>
                </div>
                <div className="value">
                    <span>
                        ${value}
                    </span>
                </div>
            </div>
        </>
    )
}

export default PlayerSkill
