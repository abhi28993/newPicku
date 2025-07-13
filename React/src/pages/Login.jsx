import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImg from "../assets/images/login1.mp4";
import { Link } from "react-router";

const Login = () => {

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            alert('Login Successful');
        } catch (err) {
            alert(err.response.data.message);
        }
    };










    const [data, setData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            alert('Login Successful');
        } catch (err) {
            alert(err.response.data.message);
        }
        console.log(data);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-amber-500 p-4 rounded-3xl shadow-2xl shadow-orange-600">
            <div className="flex md:flex-row bg-white/70 backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(8,112,184,0.3)] overflow-hidden max-w-4xl w-full transition-all duration-300">
                {/* Left side - form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form className="grid gap-6 ml-2 px-3" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 items-start">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="bg-blue-50 p-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-4 items-start">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password:
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your password"
                                    className="bg-blue-50 p-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 w-full pr-10"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition w-full"
                        >
                            Login
                        </button>
                    </form>

                    {/* OR Divider */}
                    <div className="flex flex-col items-center justify-center">
                        <hr className="mt-6 border-t border-gray-400 w-full" />
                        <span className="text-sm text-gray-600 my-2">OR</span>
                        <hr className="mb-4 border-t border-gray-400 w-full" />
                    </div>

                    {/* Forgot password */}
                    <div className="w-full">
                        <p className="text-left mt-10 ml-2 text-sm text-blue-800 cursor-pointer hover:underline">
                            Forgot Password?
                        </p>
                        <hr className="mt-4 border-t border-gray-400 w-full" />
                    </div>

                    {/* Register section */}
                    <div className="flex flex-row mt-10 justify-around items-center">
                        <p className="text-left text-sm">
                            If you don't have an account...
                        </p>
                        <Link
                            type="button"
                            className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition p-2"
                            to="/register"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                {/* Right side - image */}
                <div className="md:w-1/2 hidden md:block">
                    <video
                        className="w-full h-full object-cover"
                        src={LoginImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default Login;
