import React, {useEffect} from "react";
import Header from "../Header";
import Footer from "./mainFooter.js";
import Main from "./main.js"
import { Link } from "react-router-dom";
import './mainLayout.css';
import UseGAEventsTracker from "../../useGAEventsTracker";

function MainLayout() {

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("메인");
  useEffect(() => {
    GAEventsTracker();
  }, []);

  return (
    <div>

      <Header />
      <Main />
      <Footer />
      <div className="floatingBtn2"><Link to="/gamehome" onClick={GAEventsTracker("게임바로가기고정버튼")}><img src="../img/goToPlayGame.png" alt="" /></Link></div>
      <div className="floatingBtn3"><Link to="/characterInfo" onClick={GAEventsTracker("카툰다시보기고정버튼")}><img src="../img/main_floatingBtn.png" alt="" /></Link></div>

    </div>
  );
}

export default MainLayout;