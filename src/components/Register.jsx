import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../store/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [loadImage, setLoadImage] = useState("");

  const inputHangle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const fileHangle = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });

      const reader = new FileReader();

      reader.onload = () => {
        setLoadImage(reader.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const register = (e) => {
    e.preventDefault();

    const { userName, email, password, image, confirmPassword } = state;

    const formData = new FormData();

    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);

    dispatch(userRegister(formData));
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>

        <div className="card-body">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                onChange={inputHangle}
                type="text"
                className="form-control"
                placeholder="user namne"
                id="username"
                name="userName"
                value={state.userName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHangle}
                type="email"
                className="form-control"
                placeholder="email"
                id="email"
                name="email"
                value={state.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHangle}
                type="password"
                className="form-control"
                placeholder="password"
                id="password"
                name="password"
                value={state.password}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={inputHangle}
                type="password"
                className="form-control"
                placeholder="confirm password"
                id="confirmPassword"
                name="confirmPassword"
                value={state.confirmPassword}
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? <img src={loadImage}></img> : ""}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    onChange={fileHangle}
                    type="file"
                    name="image"
                    className="form-control"
                    id="image"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value={"Register"} className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/login">Login our account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
