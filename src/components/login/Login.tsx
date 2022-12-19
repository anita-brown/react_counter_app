import { Formik } from "formik";
import React, { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import { schema } from "../../utils/Utils";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth"))
    navigate("/", { replace: true });
},[])
  return (
    <div className="h-screen dark:bg-gray-900 flex">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-md py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Log in 🔐</h1>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: any) => {
            navigate("/", { replace: true });
            localStorage.setItem("auth", "true");
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                  id="email"
                  placeholder="Your Email"
                />
                <p className="text-red-400 text-xs">{errors.email && touched.email && errors.email}</p>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                  id="password"
                  placeholder="Your Password"
                />
                <p className="text-red-400 text-xs">{errors.password && touched.password && errors.password}</p>
              </div>

              <div className="flex justify-center items-center mt-6">
                <button type="submit" className="bg-gray-600 py-2 px-4 text-sm text-white rounded border border-gray-300 focus:outline-none font-semibold focus:border-gray-dark">
                  Login
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;

