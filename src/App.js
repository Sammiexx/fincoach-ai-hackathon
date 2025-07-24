import { useState } from 'react';
import './App.css';
import bot from './bot1.jpg';

function App() {
  const [messages, setMessages] = useState([
    { text: 'Hi, how can I help you today?', sender: 'bot' },
  ]);
  const [searchInput, setSearchInput] = useState('');

  const suggestions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
  ];

  const handleSuggestionClick = (text) => {
    setSearchInput(text);
  };

  const handleSend = () => {
    const trimmed = searchInput.trim();
    if (trimmed === '') return;

    const newMessages = [...messages, { text: trimmed, sender: 'user' }];
    setMessages(newMessages);
    setSearchInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `You said: "${trimmed}"`, sender: 'bot' },
      ]);
    }, 800);
  };

  return (
    <div className="App" style = {{backgroundImage: 'url(${bg})', background: 'linear-gradient(to right, #4facfe, #b9df31ff)', height: '100vh', marginTop: '-3vh'}}>
      
      <h3>Fraud Detection Bot</h3>
      <h4>Questions</h4>


      <center>
        <div
          style={{
            backgroundColor: '#f0f0f0',
            width: '90vh',
            height: '70vh',
            marginBottom: '5vh',
            borderRadius: '2vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2vh',
          }}
        >
          {/* Chat messages */}
          <div
            style={{
              overflowY: 'auto',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '1vh',
              paddingRight: '1vh',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#d1e7dd' : '#e2e3e5',
                  padding: '1vh 2vh',
                  borderRadius: '2vh',
                  maxWidth: '60%',
                  textAlign: 'left',
                }}
              >
                {msg.text}
              </div>
            ))}
            
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '2vh' }}>
            <input
              style={{
                width: '100%',
                height: '6vh',
                borderRadius: '3vh',
                border: '1px solid black',
                paddingLeft: '2vh',
              }}
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="What do you need help with?"
              aria-label="Search"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <svg
              onClick={handleSend}
              style={{ marginLeft: '1vh', cursor: 'pointer' }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="black"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
            <div><img style = {{width: '40vh', marginLeft: '-230vh', borderRadius: '50vh'}} src = {bot} alt = "hey" /></div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1vh',
              marginTop: '2vh',
              justifyContent: 'center',
            }}
          >
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(item)}
                style={{
                  padding: '0.8vh 2vh',
                  borderRadius: '2vh',
                  border: 'none',
                  backgroundColor: '#d9d9d9',
                  cursor: 'pointer',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
