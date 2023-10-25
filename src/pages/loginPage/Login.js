import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            <center>
              You are already Logged in! <br />
              <button
                onClick={() => {
                  localStorage.removeItem("loggedIn");
                  navigate("/");
                }}
                style={{ background: "red", cursor: "pointer" }}
              >
                Logout
              </button>
            </center>
          </>
        ) : (
          <>
            {" "}
            <h2>Welcome to To-Do list</h2>
            <br />
            <Link to="/login/showInfo">
              <h3>Show Information </h3>
            </Link>{" "}
            <br />
            <button
              onClick={() => {
                alert("You are Logged In");
                navigate("/", { replace: true });
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login!!
            </button>
            <Routes>
              <Route
                path="/showInfo"
                element={
                  <div>
                    <br /> <br />
                    This is Dummy Login!!!
                    <br /> This Project is Created By Afshal Maharjan
                  </div>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};
export default Login;
