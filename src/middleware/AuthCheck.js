import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  const navigate = useNavigate();
  // if (localStorage.getItem("loggedIn")) {
  // } else {
  //   history.replace("/login");
  // }
  !localStorage.getItem("loggedIn") && navigate("/login", { replace: true });
};
export default AuthCheck;
