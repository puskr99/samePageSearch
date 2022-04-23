import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';
import HomePage from './HomePage';


function App() {
  return (<Router>
    <div className='app'>
          </div>
           <Routes>
       <Route exact path="/" element={<HomePage/>}/> 
            </Routes>
     </Router> 
  );
}

export default App;



