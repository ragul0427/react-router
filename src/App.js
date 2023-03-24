// import logo from './logo.svg';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import Rootlayouts from './layouts/rootlayouts';
import Home from './screens/home'
import About from './screens/about'
// import Contact from './screens/contact';
import Contactlayout from './layouts/contactlayout';
import Mailus from './screens/mail';
import Phone from './screens/phone';
import Pagenotfound from './screens/pagenotfound';
import Careerslayout from './layouts/careerslayout';
import Careers from './screens/careers';



function App() {

const router = createBrowserRouter(createRoutesFromElements (
<Route path='/'
element={<Rootlayouts/>}>
<Route index
element={<Home/>}/>
<Route path='about'
element={<About/>}/>
<Route path='contactus'
element={<Contactlayout/>}>
<Route path='mail'
element={<Mailus/>}/>
<Route path='phone'
element={<Phone/>}/>
</Route>
      <Route path='careers' element={<Careerslayout/>}>
       <Route index
element={<Careers/>}/>
        </Route>
      <Route path='*' element={<Pagenotfound/>}/>
</Route>
))
return (
<RouterProvider router={router}/>

);
}

export default App;

