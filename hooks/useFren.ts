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

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
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
  const MODEL = "gemini-2.5-flash-lite";
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${apiKey}`;
  const MAX_RETRIES = 2;

  try {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            contents: contentsWithContext,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            }
          })
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Detalle del error:", errorData);

          if ([502, 504, 429].includes(response.status) && attempt < MAX_RETRIES) {
            const delay = 1500 * Math.pow(2, attempt);
            console.warn(`Gemini respondió con ${response.status}, reintentando en ${delay}ms...`);
            await new Promise(r => setTimeout(r, delay));
            continue;
          }

          throw new Error(errorData.error?.message || `Error en la API (${response.status})`);
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Chuzo, se me fue la onda. ¿Me repites?";
        setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        return;

      } catch (e) {
        clearTimeout(timeoutId);

        if (e instanceof DOMException && e.name === 'AbortError') {
          console.error("Timeout en useFren:", e);
          setMessages(prev => [...prev, { role: 'assistant', content: "Chuzo, El Fren tardó mucho en responder. ¿Dale de nuevo?" }]);
          return;
        }

        if (attempt < MAX_RETRIES) {
          const delay = 1500 * Math.pow(2, attempt);
          console.warn(`Error en intento ${attempt + 1}, reintentando en ${delay}ms...`, e);
          await new Promise(r => setTimeout(r, delay));
          continue;
        }

        console.error("Error en useFren tras agotar reintentos:", e);
        setMessages(prev => [...prev, { role: 'assistant', content: "Ey fren, algo pasó con la conexión. Dale de nuevo." }]);
      }
    }
  } finally {
    setLoading(false);
  }
};

  return { messages, sendMessage, loading };
};