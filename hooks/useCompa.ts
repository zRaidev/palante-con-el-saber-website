import { useState } from 'react';
import { COMPA_SYSTEM_PROMPT } from '@/constants/prompts';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useCompa = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "¡Qué xopá! Soy Compa, tu guía aquí en Pa'lante con el Saber. ¿Cómo te llamas, fren?" }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (input: string) => {
  const userMsg: Message = { role: 'user', content: input };
  const newMessages = [...messages, userMsg];
  setMessages(newMessages);
  setLoading(true);

  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // 1. Mapeamos el historial
    const history = newMessages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // 2. HACEMOS EL HACK PARA V1: 
    // Metemos el System Prompt como un mensaje de contexto al inicio
    const contentsWithContext = [
      {
        role: 'user',
        parts: [{ text: `CONTEXTO DE TU ROL: ${COMPA_SYSTEM_PROMPT}. RESPONDE A PARTIR DE AQUÍ.` }]
      },
      {
        role: 'model',
        parts: [{ text: "¡Ofi fren! Ya capté el flow. Soy Compa y estoy listo para guiar a los muchachos de Pa'lante con el Saber. ¿Qué xopá?" }]
      },
      ...history
    ];

    const MODEL = "gemini-2.5-flash-lite";
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${apiKey}`;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: contentsWithContext, // Usamos el historial con el contexto inyectado
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Detalle del error:", errorData);
      throw new Error(errorData.error?.message || "Error en la API");
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Chuzo, se me fue la onda. ¿Me repites?";
    
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

  } catch (e) {
    console.error("Error en useCompa:", e);
    setMessages(prev => [...prev, { role: 'assistant', content: "Ey fren, algo pasó con la conexión. Dale de nuevo." }]);
  } finally {
    setLoading(false);
  }
};

  return { messages, sendMessage, loading };
};