import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="h-screen w-max flex flex-col justify-center mx-auto">
      <div className="flex flex-col p-10 items-center w-[500px] bg-white border border-2 border-solid rounded-lg  drop-shadow-xl">
        <div className="text-dark text-3xl font-bold mb-10">
          <h1>LOGIN</h1>
        </div>
        <form className="w-3/4 mb-6">
          <div className="flex flex-col mb-5">
            <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>
          <div className="flex flex-col mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>
          <div className="mb-5">
            <p className="text-sm">Belum punya akun? <Link to={"/register"} className={"text-blue-500 font-medium"}>Daftar di sini</Link> </p>
          </div>
          <button className="border border-2 rounded-xl py-1 px-5 bg-[#B9D6F2] hover:bg-blue-400">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;