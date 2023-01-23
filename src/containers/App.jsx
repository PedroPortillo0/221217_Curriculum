import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Heder from '../pages/Landing';
import NotFound from '../pages/NotFound';

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Heder/>} />
        <Route path='/*' element={<NotFound/>} />
    </Routes>
</BrowserRouter>  
   );
}

export default App;
