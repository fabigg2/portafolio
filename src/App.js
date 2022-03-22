import React, { useReducer, useState } from "react";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";
import { AnimationPack } from "./components/ui/Circles/AnimationPack";
import contentReducer from "./context/contenteReducer";
import { MainRouter } from "./router/MainRouter";
import content from './utils/content';
import Context from "./context/context";



function App() {

  const reducer = useReducer(contentReducer, content[0])

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(show => !show)
  }


  return (
    <Context.Provider value={reducer} >
      <div className="w-full bg-base-100 min-h-screen flex" >
        <AnimationPack cant={100} />
        <Header showMenu={handleMenu} />
        <Sider show={showMenu} setShow={handleMenu} />
        <div className="w-full pt-14 md:pt-0 md:pl-36">
          <MainRouter />
        </div>

      </div>
    </Context.Provider>
  );
}

export default App;
