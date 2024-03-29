import { BrowserView, MobileView } from "react-device-detect";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Escape.css';
import Header from "../Header";
import UseGAEventsTracker from "../../useGAEventsTracker";

function Escape() {
    const [dropDownView, setDropDownView] = useState(false);
    const clickDropDown = () => {
        setDropDownView(!dropDownView);
    }

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("이스케이프게임이벤트페이지)");

    return (
        <div>
            <MobileView>
                <div className="mobileEscapeBg">
                    <Header />
                    <div className="mobileEscapeWrapper">
                        <div className="mobileBackToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="mobileBackToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="mobileEscapeContent">
                            <img alt="escapeGameExplanation" className="mobileDetailEscape" src={process.env.PUBLIC_URL + '/img/event/mobileDetailEscape.png'}></img>
                            <Link to="/gamehome" onClick={GAEventsTracker("게임하러가기")}><img alt="FormBtn" className="mobileEscapeBtn" src={process.env.PUBLIC_URL + '/img/event/mobileEscapeBtn.png'}></img></Link>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="EscapeBg">
                    <Header />
                    <div className="escapeWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="escapeContent">
                            <img alt="escapeGameExplanation" className="detailEscape" src={process.env.PUBLIC_URL + '/img/event/detailEscape.png'}></img>
                            <Link to="/gamehome"><img alt="FormBtn" className="escapeBtn" src={process.env.PUBLIC_URL + '/img/event/detailEscapeBtn.png'}></img></Link>
                        </div>
                    </div>
                </div>
            </BrowserView>
        </div>
    );
}
export default Escape;