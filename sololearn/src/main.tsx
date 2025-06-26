import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Discuss from './components/DiscussP';  
import TeamsPage from './components/TeamsPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CoursePage from './components/CoursePage';
import Discuss1 from './components/Discuss1';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Suspense } from 'react';
import LeaderApp from './components/LeaderboardP';
import Courses from './components/CoursesP';
import DiscussP from './components/DiscussP';
import EnhancedBlogPage from './components/BlogPageP';
import CodeBit from './components/codebits_src/CodeBit';
import HtmlCourse from './components/HtmlCourse';
import CssCourse from './components/CssCourse';
import Login from './components/Login';
import SQLCoures from './components/SqlCourse';
import GenAICourse from './components/GenAICourse';
import JavaCourse from './components/JavaCourse';
import JavaScriptCourse from './components/JavaScriptCourse';
import PythonCourse from './components/PythonCourse';
import CCourse from './components/CCourse';
import CSharpCoursePage from './components/CSharpCourse';
import CompilerPage from './components/CodeBits';
import HtmlCssJsEditor from './components/HtmlcssjsEditor';

// import { useLocation } from 'react-router-dom';




import './index.css';
import Profile from './Profile';


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <GoogleOAuthProvider clientId="131627701651-ekhqctviuu5vhmhia27ome44r2qb4hsr.apps.googleusercontent.com">
      <BrowserRouter>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile/>}/>
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/teamsPage" element={<TeamsPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CoursePage" element={<CoursePage />} />
          <Route path="/discuss1" element={<Discuss1 />} />
          <Route path="/leaderboard" element={<LeaderApp />} />
           <Route path="/Codebits" element={<CompilerPage  /> }/> 
          <Route path="/courses" element={<Courses />} />
          <Route path="/discussp" element={<DiscussP />} />
          <Route path="/blog" element={<EnhancedBlogPage />} />
          <Route path="/HtmlCourse" element={<HtmlCourse />} />
          <Route path="/CssCourse" element={<CssCourse />} />
          <Route path="/SqlCourse" element={<SQLCoures />} />
          <Route path="/GenAICourse" element={<GenAICourse />} />
          <Route path="/JavaCourse" element={<JavaCourse />} />
          <Route path="/JavaScriptCourse" element={<JavaScriptCourse />} />
          <Route path="/PythonCourse" element={<PythonCourse />} />
          <Route path="/CCourse" element={<CCourse />} />
          <Route path="/CSharpCourse" element={<CSharpCoursePage />} />
          <Route path="/HtmlCssJsEditor" element={<HtmlCssJsEditor />} />

          
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);