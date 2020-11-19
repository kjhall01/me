import './App.css';
import './bg.css';
import Menu from './menu.js';
import head from './assets/background.jpeg';

import { ReactSmartScroller } from "react-smart-scroller";


function App() {
  return (
		<div className="App">

				<Menu />
				<ReactSmartScroller style={{height: "400px"}}>

				</ReactSmartScroller>
				<ReactSmartScroller style={{height: "400px"}}>

				</ReactSmartScroller>
				<ReactSmartScroller style={{height: "400px"}}>

				</ReactSmartScroller>
		</div>

  );
}

export default App;
