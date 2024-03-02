import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector(state => state.user)
  return <div className="  p-3 max-w-lg mx-auto gap-4">
    <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
    <form className="flex flex-col gap-4">
      <img className=" rounded-full h-24 w-24 self-center mt-3 cursor-pointer" src={currentUser.avatar} alt="profile pic" />
      <input
        type="text"
        placeholder="username"
        className="border p-3 rounded-lg"
        id="email"
      />
      <input
        type="email"
        placeholder="email"
        className="border p-3 rounded-lg"
        id="email"
      />
      <input
        type="text"
        placeholder="password"
        className="border p-3 rounded-lg"
        id="password"
      />
      <button 
      className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        Update
      </button>
      <button 
      className="bg-green-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        create listing
      </button>

    </form>
    <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete account</span>
      <span className="text-red-700 cursor-pointer">sign out</span>

    </div>
  </div>;
}
