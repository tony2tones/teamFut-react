import { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom"; // Correct import

import ErrorBoundary from "./features/ErrorBoundary";
import "./App.css";

const Home = lazy(() => import("./features/Home"));
const SignUp = lazy(() => import("./features/SignUp"));
const CreateGame = lazy(() => import("./features/CreateGame"));

function App() {
  return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="sign-up">Create a game</Link>
            </li>
            <li>
              <Link to="create-game">Join a game</Link>
            </li>
          </ul>
        </nav>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="create-game" element={<CreateGame />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
  );
}

export default App;
