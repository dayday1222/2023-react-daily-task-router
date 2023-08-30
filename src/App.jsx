import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate, useParams, Outlet  } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  return <><button onClick={() => {
    navigate('/login')
  }}>Logout</button></>
}

const Todo = () => {
  return (<>
    <p>這是 Todo 頁面</p>
    <Logout />
  </>)
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const PostPage = () => {
  return <div>
    <p>Post頁面</p>
    <Outlet />
  </div>
}
const PostID = () => {
  let params = useParams();
  console.log(params)
  return <p>Post ID: {params.postID}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/userInfo">
            <p>個人資訊頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
          <Route path='/post' element={<PostPage />}>
            <Route path=':postID' element={<PostID />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
