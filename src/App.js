import { Component } from "react";
import BookCards from "./components/BookCards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageNavs from "./components/PageNavs";
class App extends Component {
  render() {
    return (
      <div className="h-full bg-orange-50 p-16">
        <div className="bg-white rounded-2xl pb-10">
          <Navbar />
          <PageNavs />
          <Header />
          <BookCards />
        </div>
      </div>
    );
  }
}

export default App;
