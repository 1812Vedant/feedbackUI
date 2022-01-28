import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
function Post() {
  const navigate = useNavigate();

  const onClick = () => {
    console.log("hello world");
    navigate("/about");
  };
  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
