import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="left-button">left button</div>
            <div className="profile-pic">profile</div>
            <div className="author-name">author</div>
            <div className="reply">reply</div>
            <div className="main">main-content</div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
