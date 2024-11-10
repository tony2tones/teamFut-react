import { lazy, Suspense } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom"; // Correct import

import ErrorBoundary from "./features/ErrorBoundary";
import CreateProfile from "./features/CreateProfile/CreateProfile";
import "./App.css";

const Home = lazy(() => import("./features/Home"));
const SignUp = lazy(() => import("./features/signUp/SignUp"));
const CreateGame = lazy(() => import("./features/createGame/CreateGame"));

function App() {
  const location = useLocation();
  const hideNav = ['/'];
  return (
      <div className="container">
        {!hideNav.includes(location.pathname) && (
        <nav>
          <ul>
            <li>
              <Link to="create-game">Create a game</Link>
            </li>
            <li>
              <Link to="sign-up">Join a game</Link>
            </li>
          </ul>
        </nav>
)}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="create-game" element={<CreateGame />} />
              <Route path="create-profile" element={<CreateProfile />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
  );
}

export default App;
