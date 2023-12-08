import Surveys from '../../pages/Surveys/Surveys'
import {  Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import { cssDefault } from '../../moks/css';
import { json } from '../../moks/json';
import Footer from '../Footer/Footer';
export default function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={
          <Surveys 
          css={cssDefault} 
          json={json}
          onComplete={(sender) => {
            console.log(JSON.stringify(sender.data, null, 3));
        }}/>
        }/>
        {/* <Route path='' element={
          <Surveys/>
        }/>
        <Route path='' element={
          <Surveys/>
        }/>
        <Route path='' element={
          <Surveys/>
        }/> */}
      </Routes>
      <Footer/>
    </div>
  )
}
