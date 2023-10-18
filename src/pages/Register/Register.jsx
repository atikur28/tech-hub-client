import { Link, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [registerError, setRegisterError] = useState("");

  const { createUser, loginInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be in 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError(
        "Your password should have at least one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire("Good job!", "You have been registered..", "success");
        navigate("/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire(
            'You have successfully logged in..',
            'success'
        );
        navigate('/');
      })
      .catch(error => {
        setRegisterError(error.message);
      })
  }

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="md:w-3/5 md:mx-auto my-10 py-10 bg-gray-100 mx-2">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <form onSubmit={handleRegister} className="w-full">
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Your name</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Your name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Photo Url</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Photo link"
              type="text"
              name="photo"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-3">
            <h3 className="text-lg font-semibold mb-1">Password</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-7">
            <button className="bg-gray-700 text-white font-bold md:text-lg w-full rounded py-1.5">
              Register
            </button>
          </div>
        </form>
        {registerError && (
          <p className="text-red-600 font-semibold text-center">
            {registerError}
          </p>
        )}
        <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
          Have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-sky-600 hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="w-max border mx-auto bg-white rounded-full mt-9 hover:bg-slate-100">
          <Link>
            <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]">
              <img
                className="w-5"
                src="https://i.ibb.co/Pj0MgcP/google.png"
                alt=""
              />{" "}
              Create with Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
