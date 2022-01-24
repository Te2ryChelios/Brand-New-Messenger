import './App.css';
import {AiOutlineLine, AiOutlineClose, AiOutlineBorder} from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <div className="center">
        <div className="window">
          <div className="window-header">
            <div className="window-header-text">
              <span className="window-header-title-icon"><img src="/msn.svg" alt="" /></span>
              <h3 className="window-header-title">Messenger</h3>
            </div>
            <div className="window-header-icons">
              <span className="window-header-icon minimize">
                <AiOutlineLine />
              </span>
              <span className="window-header-icon fullscreen">
                <AiOutlineBorder />
              </span>
              <span className="window-header-icon exit">
                <AiOutlineClose />
              </span>
            </div>
          </div>

          <div className="window-menu">
              <ul>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>
            
          <div className="window-body">
            <div className="window-body-chat">
              <div className="window-body-chat-container">
                <div className="window-body-chat-header">
                  To :
                </div>
                <div className="window-body-chat-content">
                test
                </div>
              </div>
            </div>

            <div className="window-body-sidebar">
              <img className="window-body-sidebar-avatar" src="https://picsum.photos/150" alt="" />
              <img  className="window-body-sidebar-avatar"src="https://picsum.photos/150" alt="" />
            </div>

            <div className="window-body-form">
              <div className="window-body-form-container">
                <div className="window-body-form-header">
                  test
                </div>
                <div className="window-body-form-content">
                  <textarea name="" id="" rows="4"></textarea>
                  <button className="window-body-form-submit">Send</button>
                </div>
                <div className="window-body-form-footer">
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
