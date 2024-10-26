import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/sign-in/SignInPage"
import IndexPage from "./pages/index/IndexPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin">
          <Route path="reservation"/>
          <Route path="timetable"/>
        </Route>
        <Route path="auth">
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="sign-up"/>
        </Route>
        <Route path="reservation"/>
        <Route path="" element={<IndexPage/>} />
      </Routes>
    </BrowserRouter>
  )
}