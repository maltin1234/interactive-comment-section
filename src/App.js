import "./App.css";
import reply from "./images/icon-reply.svg";
import avatar from "./images/avatars/image-amyrobson.webp";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="left-button">left button</div>
            <div className="profile-pic">
              <img alt="" src={avatar} />{" "}
              <div className="profile">
                <p>Lorum ipsum dolore. Lorum ip dolor sign seebre</p>
              </div>
            </div>
            <div className="author-name">author</div>
            <div className="date">date</div>

            <div className="reply">
              {" "}
              <img alt="" src={reply} />
            </div>
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
