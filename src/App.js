import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import TopBar from './Pages/Header/TopBar/TopBar';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import ServiceInfo from './Pages/Services/ServiceInfo/ServiceInfo';
import Team from './Pages/Team/Team';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopBar />
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/home">
            <TopBar />
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Header />
            <LogIn />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
          <PrivateRoute exact path="/service/:id">
            <Header />
            <ServiceInfo />
            <Footer />
          </PrivateRoute>
          <Route exact path="/team">
            <Header />
            <Team />
            <Footer />
          </Route>
          <PrivateRoute exact path="/appointment/:id">
            <Header />
            <Appointment />
            <Footer />
          </PrivateRoute>
          <Route path="/review">
            <Header />
            <Review />
            <Footer />
          </Route>
          <Route exact path="/blogs">
            <Header />
            <Blogs />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
