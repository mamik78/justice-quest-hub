
// Service pour interagir avec l'API Groq
export async function getHintFromGroq(question: string, answer: string, correctAnswer: string) {
  try {
    const API_KEY = "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";
    
    const prompt = `
      Question: "${question}"
      Réponse de l'utilisateur: "${answer}" 
      Réponse correcte: "${correctAnswer}"
      
      En tant qu'expert juridique, donne un indice pédagogique court (max 2 phrases) pour guider l'utilisateur vers la bonne réponse sans la révéler directement. Utilise un langage adapté pour un jeune de 11-15 ans.
    `;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "Tu es un assistant pédagogique spécialisé en droit français qui aide les jeunes de 11 à 15 ans à comprendre le système judiciaire français."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: 100
      })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erreur lors de la communication avec Groq:", error);
    return "Indice non disponible pour le moment. Essaie de réfléchir aux principes de base du système judiciaire.";
  }
}
