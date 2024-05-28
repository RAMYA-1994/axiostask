import './App.css';
import Create from './components/create/Create.jsx';
import Read from './components/read/Read.jsx';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Update from './components/update/Update.jsx';

function  App() {
  return(
  //   <h1>welcome</h1>
  // )
    <Router>
      <Routes >
      {/* <div className="main">
        <div>
          <h3>React Crud Operations</h3>
        </div> */}

        {/* <div> */}
          <Route exact path='/' element={<Create />}/>
        {/* </div> */}

        {/* <div style={{ marginTop: 20 }}> */}
          <Route exact path='/read' element={<Read/>} />
        {/* </div> */}

        <Route path='/update' element={<Update/>} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;