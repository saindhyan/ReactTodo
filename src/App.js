import logo from './logo.svg';
import './App.css';
import LoginComponent from './component/LoginComponent';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import TodosComponent from './component/TodosComponent';
import AuthProvider, { useAuth } from './component/AuthContext';
import TodoComponent from './component/TodoComponent';
function AuthRoute({children}){
  const authContext=useAuth();
  return children;
//   if(authContext.isAuthenticated){
//   return children;
//  }else{

//  return <Navigate to="/"/>
//  }
}
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/login'element={<LoginComponent/>}></Route>
        <Route path='/home' element={
               <AuthRoute>
               <HomeComponent/>
               </AuthRoute>
              }></Route>
        <Route path='/todos' element={
                 <AuthRoute>

        <TodosComponent/>
        </AuthRoute>}>
        </Route>

        <Route path='/todo/:id' element={
                 <AuthRoute>
        <TodoComponent/>
        </AuthRoute>}></Route>
        

        <Route path='/'element={<LoginComponent/>}></Route>

        <Route path='*'element={<LoginComponent/>}></Route>

        </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}



export default App;
