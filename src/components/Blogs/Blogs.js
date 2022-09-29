import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2>There is some common questions and answers</h2>
      <div className="blogs">
        <h2>How Does React Work?</h2>
        <p>
          React implements a virtual DOM that is basically a DOM tree
          representation in JavaScript. So when it needs to read or write to the
          DOM, it will use the virtual representation of it. Then the virtual
          DOM will try to find the most efficient way to update the browser's
          DOM.React DOM takes care of updating the DOM to match the React
          elements.Although React was conceived to be used in the browser,
          because of its design it can also be used in the server with Node.js.
        </p>
      </div>
      <div className="blogs">
        <h2>Difference Between props and state?</h2>
        <p>
          Props is passed from one component to another.On the otherhand state
          is passed within the component only.Props is Immutable.State is
          mutable.Props can be used with state and functional components.The
          state is a local data storage that is local to the component only and
          cannot be passed to other components.
        </p>
      </div>
      <div className="blogs">
        <h2>What does useEffect do except fetching an API?</h2>
        <p>
          By using this Hook, you tell React that your component needs to do
          something after render. React will remember the function you passed
          (we'll refer to it as our “effect”), and call it later after
          performing the DOM updates. In this effect, we set the document title.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
