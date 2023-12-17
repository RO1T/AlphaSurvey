import { Routes, Route } from "react-router-dom";
import { cssDefault } from "../../moks/css";
import Surveys from "../../pages/Surveys/Surveys";
import SurveyCreatorWidget from "../CreateSurvey/CreateSurvey";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import { surveysMocks } from "../../moks/surveys";
import { json } from "../../moks/json";
import Survey from "../Survey/Survey";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import BProfile from "../../pages/BProfile/BProfile";

export default function App() {
  return (
    <main className='app'>
      <Header/>
      <Routes>
      <Route path='/' element={
          <Surveys surveys={surveysMocks}/>
        }/>
        <Route path='/survey' element={
          <Survey 
          css={cssDefault} 
          json={json}
          onComplete={(sender) => {
            console.log(JSON.stringify(sender.data, null, 3));
        }}/>
        }/>
        <Route path='/create' element={
          <SurveyCreatorWidget/>
        }/>
        <Route path='/login' element={
          <Login/>
        }/>
        <Route path='/register' element={
          <Register/>
        }/>
        <Route path='/profile' element={
          <Profile/>
        }/>
        <Route path='/b/profile' element={
          <BProfile/>
        }/>
        <Route path='*' element={
          <NotFound/>
        }/>
      </Routes>
      <Footer/>
    </main>
  )
}
