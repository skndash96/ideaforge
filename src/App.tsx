import "./globals.css";
import { Switch, Route } from "wouter";
import About from "./pages/about";
import Home from "./pages";
import SubmitIdea from "./pages/submit";
import NotFound from "./pages/404";
import Header from "./components/Header";
import InternalServerError from "./pages/500";

function App() {
    return (
        <div className="min-h-[100dvh] flex flex-col items-stretch">
            <Header />

            <Switch>
                <Route path="/about" component={About} />
                <Route path="/submit" component={SubmitIdea} />
                <Route path="/" component={Home} />

                <Route path="/500" component={InternalServerError} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
