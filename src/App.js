

import Header from './components/Header/Header';
import Test from './components/Header/test.js';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Page from './components/Header/Page';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
    
    <Routes>
        <Route exact path='/' element={<Banner/>}/>
         <Route exact path='/contact' element={<Test/>}/>
         <Route exact path='/Page' element={<Page/>}/>
         </Routes>
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
