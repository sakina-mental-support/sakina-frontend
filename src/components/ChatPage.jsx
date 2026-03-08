import React, { useState, useRef, useEffect } from 'react';
import BottomNavbar from "./BottomNavbar";

const ChatPage = () => {
  // State for messages list
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! Welcome to Sakina Support. How are you feeling today?",
      isSent: false,
      options: [
        { emoji: "😊", label: "Happy" },
        { emoji: "😢", label: "Sad" },
        { emoji: "😰", label: "Anxious" },
        { emoji: "😴", label: "Tired" }
      ]
    },
  ]);

  // State for the text input field
  const [inputValue, setInputValue] = useState("");
  // State for voice recognition
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState("");

  // Refs
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Helper function to handle scrolling
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Speech Recognition on component mount
  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError("");
      };

      recognition.onresult = (event) => {
        let currentTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        // Update input field with what's being said
        setInputValue(currentTranscript);
      };

      recognition.onerror = (event) => {
        setIsListening(false);
        setSpeechError("Error: " + event.error);

        // Add a system error message to chat
        const errorMsg = {
          id: Date.now(),
          text: `Voice input failed (${event.error}). Please try typing instead.`,
          isSent: false,
          isSystem: true
        };
        setMessages(prev => [...prev, errorMsg]);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setSpeechError("Speech recognition not supported in this browser.");
    }

    // Cleanup
    return () => {
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Voice Recording Toggle
  const toggleVoiceRecording = () => {
    if (speechError && !recognitionRef.current) {
      // Browser doesn't support it, add error message
      const errorMsg = {
        id: Date.now(),
        text: "Your browser doesn't support voice recording. Please use text input or try Chrome/Safari.",
        isSent: false,
        isSystem: true
      };
      setMessages(prev => [...prev, errorMsg]);
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setInputValue(""); // Clear existing text before listening
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Speech recognition error:", e);
      }
    }
  };

  // Handle submitting a new text or voice message
  const handleSend = (e) => {
    if (e) e.preventDefault();

    // Stop recording if active when sending
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const trimmedInput = inputValue.trim();
    if (trimmedInput === "") return;

    // Add user's sent message to the chat
    const newMsg = { id: Date.now(), text: trimmedInput, isSent: true };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Simulate a response from the support bot
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: "Thanks for sharing. We're here to listen.", isSent: false }
      ]);
    }, 1200);
  };

  // Handle clicking on a mood emoji option
  const handleOptionClick = (option) => {
    const newMsg = { id: Date.now(), text: `I am feeling ${option.label.toLowerCase()} ${option.emoji}`, isSent: true };
    setMessages(prev => [...prev, newMsg]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: `Thank you for sharing that you feel ${option.label.toLowerCase()}.`, isSent: false }
      ]);
    }, 1000);
  };

  // --- Inline Styles Setup to Avoid External CSS files ---

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6', // Contrast with phone UI
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    // The Mobile Simulation Frame
    phoneFrame: {
      width: '390px',
      height: '844px',
      borderRadius: '40px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    },
    // Top Header
    header: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f3f4f6',
      padding: '40px 24px 16px 24px', // Extra top padding for 'notch' illusion
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexShrink: 0,
      zIndex: 10
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#71BCFF',
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      flexShrink: 0
    },
    headerTitle: {
      margin: 0,
      color: '#111827',
      fontSize: '16px',
      fontWeight: '600'
    },
    headerSubtitle: {
      margin: 0,
      color: '#9ca3af',
      fontSize: '12px',
      fontWeight: '500'
    },
    // Scrollable Chat Area
    chatArea: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      backgroundColor: '#f9fafb' // Subtle grey separating messages from header/footer
    },
    messageRow: (isSent) => ({
      display: 'flex',
      justifyContent: isSent ? 'flex-end' : 'flex-start',
      alignItems: 'flex-end',
      gap: '8px'
    }),
    botAvatar: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      border: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      flexShrink: 0
    },
    messageBubble: (isSent, isSystem) => ({
      maxWidth: '75%',
      padding: '12px 16px',
      fontSize: '15px',
      lineHeight: '1.4',
      wordBreak: 'break-word',
      backgroundColor: isSystem ? '#fee2e2' : (isSent ? '#71BCFF' : '#ffffff'), // Sent: Blue, Received: White/Grey
      color: isSystem ? '#991b1b' : (isSent ? '#ffffff' : '#1f2937'),
      border: isSent ? 'none' : '1px solid #e5e7eb',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      // Appropriate tail corners
      borderRadius: '20px',
      borderBottomRightRadius: isSystem ? '20px' : (isSent ? '4px' : '20px'),
      borderBottomLeftRadius: isSystem ? '20px' : (!isSent ? '4px' : '20px'),
      textAlign: isSystem ? 'center' : 'left'
    }),
    optionsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
      marginTop: '12px'
    },
    optionButton: {
      backgroundColor: '#fff',
      border: '1px solid #71BCFF',
      borderRadius: '16px',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontSize: '14px',
      color: '#71BCFF',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    // Input Bar
    inputBar: {
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e5e7eb',
      padding: '12px 16px',
      flexShrink: 0
    },
    inputForm: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    inputFieldContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #e5e7eb',
      backgroundColor: '#f9fafb',
      borderRadius: '24px',
      padding: '4px 8px',
    },
    textField: {
      flex: 1,
      border: 'none',
      backgroundColor: 'transparent',
      color: '#1f2937',
      padding: '8px',
      fontSize: '15px',
      outline: 'none',
    },
    sendButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: 'none',
      flexShrink: 0,
      backgroundColor: inputValue.trim() ? '#71BCFF' : '#e5e7eb',
      color: '#fff',
      cursor: inputValue.trim() ? 'pointer' : 'default',
      transition: 'background-color 0.2s',
    },
    voiceButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: 'none',
      flexShrink: 0,
      backgroundColor: isListening ? '#ef4444' : 'transparent', // Red when recording
      color: isListening ? '#fff' : '#71BCFF',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginLeft: '4px'
    },
    // Bottom Navigation Bar
    bottomNav: {
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e5e7eb',
      padding: '12px 24px 24px 24px', // Extra bottom pad for iOS Home Indicator space
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0
    },
    navTab: (isActive) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      color: isActive ? '#71BCFF' : '#9ca3af',
      fontSize: '10px',
      fontWeight: isActive ? '600' : '500',
      cursor: 'pointer'
    })
  };

  return (
    <div style={styles.pageContainer}>

      {/* Mobile Frame Simulation */}
      <div style={styles.phoneFrame}>

        {/* Header */}
        <div style={styles.header}>
          {/* <button style={styles.backButton}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          <div style={styles.avatar}>🪴</div>

          <div style={{ flex: 1 }}>
            <h2 style={styles.headerTitle}>Sakina Support</h2>
            <p style={styles.headerSubtitle}>Online</p>
          </div>

          <button style={{ ...styles.backButton, color: '#111827' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Scrollable Message List */}
        <div style={styles.chatArea}>
          {messages.map((msg) => (
            <div key={msg.id} style={styles.messageRow(msg.isSent)}>

              {!msg.isSent && !msg.isSystem && (
                <div style={styles.botAvatar}>🪴</div>
              )}

              <div style={styles.messageBubble(msg.isSent, msg.isSystem)}>
                {msg.text}

                {/* Render interactive mood options if they exist in this message */}
                {msg.options && (
                  <div style={styles.optionsContainer}>
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        style={styles.optionButton}
                        onClick={() => handleOptionClick(opt)}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                      >
                        <span>{opt.emoji}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Scroll Anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Fixed Message Input Bar */}
        <div style={styles.inputBar}>
          <form onSubmit={handleSend} style={styles.inputForm}>

            <div style={styles.inputFieldContainer}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isListening ? "Listening..." : "Message..."}
                style={styles.textField}
              />

              {/* Voice Rec Button inside input field */}
              <button
                type="button"
                onClick={toggleVoiceRecording}
                style={styles.voiceButton}
                title="Voice Input"
              >
                {isListening ? (
                  // Stop/Pulse square
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                ) : (
                  // Microphone Icon
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Send Button */}
            <button type="submit" disabled={!inputValue.trim() && !isListening} style={styles.sendButton}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style={{ marginLeft: '2px' }}>
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>

          </form>
        </div>

        {/* Global Bottom Navigation Tab Bar */}
        <div className="border-t border-gray-200 pb-5 pt-1 bg-white flex-shrink-0">
                  <BottomNavbar />
                </div>

      </div>
    </div>
  );
};

export default ChatPage;