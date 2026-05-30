import { useState, useEffect } from 'react';
import { FREN_SYSTEM_PROMPT } from '@/constants/prompts';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useFren = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "¡Qué xopá! Soy El Fren, tu guía aquí en Pa'lante con el Saber. ¿Cómo te llamas, fren?" }
  ]);
  const [loading, setLoading] = useState(false);

  // Load messages from localStorage when the hook mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem("frenChatMessages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Error parsing chat history", error);
      }
    }
  }, []);

  // Save messages to localStorage every time the messages array changes
  useEffect(() => {
    // Optional: Only save if there are messages to avoid overwriting with an empty array on first render
    if (messages.length > 0) {
      localStorage.setItem("frenChatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = async (input: string) => {
  const userMsg: Message = { role: 'user', content: input };
  const newMessages = [...messages, userMsg];
  setMessages(newMessages);
  setLoading(true);

  const history = newMessages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  const contentsWithContext = [
    {
      role: 'user',
      parts: [{ text: `CONTEXTO DE TU ROL: ${FREN_SYSTEM_PROMPT}. RESPONDE A PARTIR DE AQUÍ.` }]
    },
    {
      role: 'model',
      parts: [{ text: "¡Ofi fren! Ya capté el flow. Soy El Fren y estoy listo para guiar a los muchachos de Pa'lante con el Saber. ¿Qué xopá?" }]
    },
    ...history
  ];

  try {
    const response = await fetch('/api/chat', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: contentsWithContext })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Detalle del error:", errorData);
      throw new Error(errorData.error?.message || `Error en la API (${response.status})`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Chuzo, se me fue la onda. ¿Me repites?";
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

  } catch (e) {
    console.error("Error en useFren:", e);
    setMessages(prev => [...prev, { role: 'assistant', content: "Ey fren, algo pasó con la conexión. Dale de nuevo." }]);
  } finally {
    setLoading(false);
  }
};

  return { messages, sendMessage, loading };
};