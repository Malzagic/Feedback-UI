import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackFrom from "./components/FeedbackFrom";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {
   return (
    <FeedbackProvider>
      <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={
                <>
                  <FeedbackFrom />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }></Route>
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
          <>
            <AboutIconLink />
          </>
      </Router>
    </FeedbackProvider>
  );
};

export default App;