
// Service pour interagir avec l'API Groq
export async function getHintFromGroq(question: string, answer: string = "", correctAnswer: string = "") {
  try {
    const API_KEY = "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";
    
    // Si nous avons une réponse utilisateur et une réponse correcte, c'est un indice pour le quiz
    const isQuizHint = answer !== "" && correctAnswer !== "";
    
    const prompt = isQuizHint 
      ? `
        Question: "${question}"
        Réponse de l'utilisateur: "${answer}" 
        Réponse correcte: "${correctAnswer}"
        
        En tant qu'expert juridique, donne un indice pédagogique très court (1 phrase maximum) pour guider l'utilisateur vers la bonne réponse sans la révéler directement. 
        L'indice doit être concis, contextualisé et susciter la réflexion.
        Utilise un langage adapté pour un jeune de 11-15 ans.
      `
      : `
        Question: "${question}"
        
        En tant qu'expert juridique spécialisé dans le système judiciaire français et le SAUJ (Service d'Accueil Unique du Justiciable), donne un indice très concis (1 phrase maximum) pour aider à réfléchir à cette question sans révéler la réponse.
        Ton indice doit:
        - Être adapté pour un collégien (11-15 ans)
        - Susciter la réflexion et non donner la réponse
        - Être en français simple sans jargon juridique complexe
        - Tenir en une seule phrase
        
        Si la question n'est pas liée à la justice ou au système judiciaire français, indique poliment que tu ne peux répondre qu'à des questions sur ces sujets.
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
            content: "Tu es un assistant pédagogique spécialisé en droit français qui aide les jeunes de 11 à 15 ans à comprendre le système judiciaire français. Tes réponses sont toujours concises (1 phrase) et suscitent la réflexion sans donner la réponse."
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
    const isQuizHint = answer !== "" && correctAnswer !== "";
    return isQuizHint 
      ? "Réfléchis au rôle principal de cette institution dans le système judiciaire."
      : "Pense au fonctionnement fondamental du système judiciaire français.";
  }
}
