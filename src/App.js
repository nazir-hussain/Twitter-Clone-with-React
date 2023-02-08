import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  // BEM
  return (
    <div className="app">

      {/* {Sidebar} */}
      <Sidebar />

      {/* {Feed} */}
      <Feed />

      {/* {Widegets(right section)} */}
      <Widgets />
    </div>
  );
}

export default App;
