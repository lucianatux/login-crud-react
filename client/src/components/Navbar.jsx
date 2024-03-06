import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li>Welcome {user.username}</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-task"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
                >Add a new task</Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-indigo-500 px-4 py-1 rounded-sm"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
                >Login</Link>
              </li>
              <li>
                <Link to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
                >Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
