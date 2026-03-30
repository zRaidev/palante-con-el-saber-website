'use client';

import { useState, useRef, useEffect } from "react";
import { useCompa } from "@/hooks/useCompa";
import "./CompaChat.css";

export default function CompaChat() {
  // Extraemos las funciones y estados del hook
  const { messages, sendMessage, loading } = useCompa();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll automático al final de los mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;

    sendMessage(text); // Viene del hook useCompa
    setInput("");
    
    // Resetear altura del textarea
    if (inputRef.current) {
      inputRef.current.style.height = "46px";
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a1628 0%, #0d2444 50%, #0a1628 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      padding: "16px"
    }}>
      <div className="chat-wrapper">
        <header className="chat-header">
          <div className="logo-circle">🤝</div>
          <div className="header-text">
            <h1>El Compa de Pa'lante</h1>
            <p>Orientación vocacional · Activo</p>
          </div>
        </header>

        <div className="messages-area">
          {messages.map((msg, i) => (
            <div key={i} className={`msg-row ${msg.role}`}>
              {msg.role === "assistant" && <div className="avatar">🤠</div>}
              <div className={`bubble ${msg.role}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="msg-row assistant">
              <div className="avatar">🤠</div>
              <div className="bubble assistant">Escribiendo...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <textarea
            ref={inputRef}
            className="input-box"
            placeholder="Chatea con tu Compa..."
            value={input}
            onChange={e => {
              setInput(e.target.value);
              e.target.style.height = "46px";
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={handleKey}
            rows={1}
            disabled={loading}
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={loading || !input.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1628" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}