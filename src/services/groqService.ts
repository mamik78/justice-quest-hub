
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
        Inclus un terme juridique approprié avec sa définition simple entre parenthèses.
        Illustre ton indice avec un exemple concret et pertinent pour des jeunes de 11-15 ans.
        Adapte ton vocabulaire à l'âge tout en introduisant progressivement les termes juridiques essentiels.
      `
      : `
        Question: "${question}"
        
        En tant qu'expert juridique spécialisé dans le système judiciaire français et le SAUJ (Service d'Accueil Unique du Justiciable), donne un indice très concis (1 phrase maximum) pour aider à réfléchir à cette question sans révéler la réponse.
        Ton indice doit:
        - Inclure un terme juridique essentiel avec sa définition simple
        - Être adapté pour un collégien (11-15 ans)
        - Proposer un exemple concret lié à leur quotidien quand c'est possible
        - Susciter la réflexion et non donner la réponse
        - Tenir en une seule phrase claire mais précise
        
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
            content: "Tu es un assistant pédagogique spécialisé en droit français qui aide les jeunes de 11 à 15 ans à comprendre le système judiciaire français. Tes réponses sont toujours concises, incluent un terme juridique avec sa définition simple, et donnent un exemple concret pertinent pour des collégiens. Tu t'efforces de susciter la réflexion sans donner la réponse."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: 150
      })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erreur lors de la communication avec Groq:", error);
    const isQuizHint = answer !== "" && correctAnswer !== "";
    return isQuizHint 
      ? "Réfléchis au concept de compétence (pouvoir légal d'une juridiction) dans ce contexte, comme lorsqu'un établissement scolaire doit déterminer qui peut régler un conflit entre élèves."
      : "Considère la procédure judiciaire (ensemble des étapes légales) et comment elle protège les droits comme les règles protègent les élèves dans une cour de récréation.";
  }
}
