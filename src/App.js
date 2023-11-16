import './App.css';
import React, {useState, useRef, useEffect} from "react";

function App()
{
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    //const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     const storedMessages = JSON.parse(localStorage.getItem("messages"));
    //     if (storedMessages) {
    //         setMessages(storedMessages);
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("messages", JSON.stringify(messages));
    // }, [messages]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };
    // Handle the form submit event
    const handleSubmit = (event) => {
        //setMessages([...messages, {input}]);
        event.preventDefault();
        messages.push({input});
        setInput("");
        console.log(messages);
    }


    // function handleCounter(){
    //         let counter = 0;
    //         if(counter)
    //     return counter;
    // }
    // ----------------------HOW TO ADD COUNTER TO MESSAGES???------
    // let counter = 0;
    // counter += 1;

    return (
        <div className="Chat">
            <h1>Dummy chat</h1>
            <div className="chatArea">
                <ol>
                    {messages.map((arg, index) => {
                        return (<li key={arg.id}>1. {arg.input}</li>);
                    })}
                </ol>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="chatInput">
                    Casual input:
                    <br/>
                    <input
                    type="text"
                    value={input}
                    name="chatInput"
                    placeholder="Write something"
                    maxLength="228"
                    onChange={handleChange}
                    minLength="1"
                    required
                />
                </label>
                <button type="submit"
                        disabled={input.length === 0}>
                    Send message
                </button>
            </form>
        </div>
    );
}

export default App;





//-------------------- NOTICE! chatGpt code below:-----------------------------
/*
import React, { useState, useEffect } from "react";
function Chat() {
  // Use state hooks to store the messages and the input value
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Use effect hook to poll the server for new messages
  useEffect(() => {
    // Define a function to fetch the messages from the server
    const fetchMessages = async () => {
      try {
        // Send a GET request to the server and get the response
        const response = await fetch("http://localhost:3000/messages");
        // Check if the response is ok
        if (response.ok) {
          // Parse the response as JSON and update the messages state
          const data = await response.json();
          setMessages(data);
        } else {
          // Throw an error if the response is not ok
          throw new Error(`HTTP error ${response.status}`);
        }
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    // Call the fetchMessages function every second
    const interval = setInterval(fetchMessages, 1000);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Handle the input change event
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Handle the form submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the input value as a POST request to the server
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
    // Clear the input value
    setInput("");
  };

  // Render the chat UI
  return (
      <div className="chat">
        <h1>React Chat</h1>
        <ul className="messages">
          {messages.map((message, index) => (
              <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Type a message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
  );
}

export default Chat;

 */