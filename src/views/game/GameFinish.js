import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GamePage.css'
import './GameInfo.css'
import './Gamehome.css'
import UseGAEventsTracker from '../../useGAEventsTracker';

function GameFinish(props) {

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("이스케이프게임");
    useEffect(() => {
        GAEventsTracker();
    }, []);

    return (
        <div >
            <div className="_background" >
                <div className='gameheader'>
                    <div className='header-box'>
                        <Link to='/main'>
                            <img id='logo' src='img/logo_main.png' alt='logo main'></img>
                        </Link>
                        <Link to="/main">
                            <img src='img/game/exit.png' className="backBtn" alt="나가기" />
                        </Link>
                    </div>
                </div>
            </div>

            <img src='img/game/background.png' className="background" alt="배경" />
            <img src='img/game/openDoor.png' className="open" alt="성공" />
            <span className='lasttext'>와!! 탈출성공</span>
            <Link to="/gamehome" onClick={GAEventsTracker("게임성공다시하기")}>
                <img src='img/game/replay.png' className="replay" alt="다시하기" />
            </Link>
        </div>
    )
}

export default GameFinish;