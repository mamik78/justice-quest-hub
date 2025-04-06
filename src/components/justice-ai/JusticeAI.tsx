
import React, { useState } from "react";
import JusticeAIHeader from "./JusticeAIHeader";
import JusticeAIDisclaimerBox from "./JusticeAIDisclaimerBox";
import JusticeAIForm from "./JusticeAIForm";
import JusticeAIAnswer from "./JusticeAIAnswer";

const JusticeAI: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (submittedQuestion: string) => {
    if (!submittedQuestion.trim()) return;
    
    setIsLoading(true);
    setQuestion(submittedQuestion);
    
    try {
      // Simulation d'une réponse de l'IA (à remplacer par un vrai appel API)
      setTimeout(() => {
        const questionLower = submittedQuestion.toLowerCase();
        let response = "";
        
        // Réponses spécifiques selon le type de question
        if (questionLower.includes("sauj") || questionLower.includes("accueil") || questionLower.includes("service d'accueil")) {
          response = "Le Service d'Accueil Unique du Justiciable (SAUJ) est un guichet d'accueil présent dans les tribunaux judiciaires. Il permet aux citoyens d'obtenir des informations sur leurs droits et leurs démarches judiciaires, de suivre l'avancement des procédures et, dans certains cas, de déposer des demandes.";
        } 
        else if (questionLower.includes("harcèlement") || questionLower.includes("harcelement")) {
          response = "Le harcèlement est sanctionné par la loi française. Selon le Code pénal, le harcèlement moral peut être puni de 2 ans d'emprisonnement et 30 000€ d'amende. Le harcèlement scolaire est spécifiquement reconnu depuis la loi du 2 mars 2022, qui prévoit jusqu'à 10 ans d'emprisonnement en cas de suicide ou tentative de suicide de la victime. N'hésitez pas à consulter notre page dédiée au harcèlement pour plus d'informations.";
        }
        else if (questionLower.includes("plainte") || questionLower.includes("porter plainte")) {
          response = "Pour déposer une plainte, vous pouvez vous rendre dans n'importe quel commissariat de police ou brigade de gendarmerie. Un officier de police judiciaire recueillera votre témoignage et les éléments de preuve dont vous disposez. Vous pouvez également adresser un courrier au procureur de la République du tribunal judiciaire du lieu de l'infraction ou du domicile de l'auteur de l'infraction. Depuis 2021, il est possible de déposer une pré-plainte en ligne pour certaines infractions.";
        }
        else if (questionLower.includes("mineur") || questionLower.includes("justice des mineurs")) {
          response = "La justice des mineurs est une juridiction spécialisée qui traite des infractions commises par des personnes de moins de 18 ans. Elle est régie par le Code de la justice pénale des mineurs entré en vigueur le 30 septembre 2021, qui remplace l'ordonnance de 1945. Elle privilégie les mesures éducatives à la répression, avec une attention particulière à la réinsertion. Le juge des enfants est le magistrat spécialisé qui intervient tant en matière pénale que pour la protection de l'enfance en danger.";
        }
        else if (questionLower.includes("code civil") || questionLower.includes("code napoléon")) {
          response = "Le Code civil, également appelé Code Napoléon, a été promulgué le 21 mars 1804. Il constitue le fondement du droit civil français et a inspiré de nombreux systèmes juridiques dans le monde. Il est organisé en trois livres principaux : les personnes, les biens, et les différentes manières d'acquérir la propriété. Le Code civil consacre des principes fondamentaux comme la liberté contractuelle, le droit de propriété et la responsabilité civile. Depuis sa création, il a connu de nombreuses réformes pour s'adapter aux évolutions de la société, notamment en matière de droit de la famille et des contrats.";
        }
        else if (questionLower.includes("code pénal") || questionLower.includes("droit pénal")) {
          response = "Le Code pénal français actuel est entré en vigueur le 1er mars 1994, remplaçant le Code pénal napoléonien de 1810. Il classe les infractions en trois catégories selon leur gravité : contraventions, délits et crimes. Le Code pénal définit les infractions et fixe les peines applicables, en respectant le principe de légalité (« pas de peine sans loi »). Il a connu d'importantes évolutions ces dernières années, notamment concernant la cybercriminalité, les violences intrafamiliales ou encore les atteintes à l'environnement.";
        }
        else if (questionLower.includes("grec") || questionLower.includes("athènes") || questionLower.includes("athenes") || questionLower.includes("démocratie") || questionLower.includes("democratie")) {
          response = "La justice dans la démocratie athénienne du Ve siècle avant J.-C. était exercée par des tribunaux populaires appelés Héliée. Ces tribunaux étaient composés de citoyens tirés au sort, incarnant l'idéal démocratique de participation civique. Le concept d'isonomia (égalité devant la loi) était un pilier fondamental de ce système. Les réformes de Solon et de Clisthène ont posé les bases d'une justice plus accessible et équitable. Ce modèle a profondément influencé les conceptions modernes de la justice participative et de l'état de droit.";
        }
        else if (questionLower.includes("tribunal judiciaire") || questionLower.includes("tribunaux")) {
          response = "Le tribunal judiciaire est la juridiction de droit commun en première instance, créé le 1er janvier 2020 par la fusion des tribunaux d'instance et de grande instance. Il traite des litiges civils et des affaires pénales. Il existe 164 tribunaux judiciaires répartis sur le territoire français, avec parfois des chambres de proximité (qui remplacent certains anciens tribunaux d'instance). Le tribunal judiciaire traite toutes les affaires civiles pour lesquelles le montant de la demande est supérieur à 10 000 €, ainsi que certains contentieux spécifiques comme le droit de la famille, le droit immobilier ou les successions.";
        }
        else {
          const generalResponses = [
            "D'après le système juridique français, cette question concerne un domaine qui nécessiterait une consultation juridique personnalisée. Je vous invite à vous rapprocher d'un professionnel du droit ou à vous rendre au Service d'Accueil Unique du Justiciable (SAUJ) le plus proche pour obtenir des informations adaptées à votre situation.",
            "Le droit français prévoit plusieurs dispositifs pour répondre à ce type de situation. Pour obtenir une information précise et adaptée, je vous recommande de consulter le site justice.fr ou de contacter le point-justice le plus proche de chez vous.",
            "Cette question relève d'un domaine juridique complexe où plusieurs textes de loi peuvent s'appliquer selon les circonstances exactes. Pour une réponse précise, je vous invite à consulter un avocat ou à contacter le SAUJ de votre tribunal judiciaire."
          ];
          response = generalResponses[Math.floor(Math.random() * generalResponses.length)];
        }
        
        setAnswer(response);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      setAnswer("Désolé, une erreur s'est produite lors du traitement de votre question.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <JusticeAIHeader />
      <JusticeAIDisclaimerBox />
      <JusticeAIForm 
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <JusticeAIAnswer answer={answer} />
    </div>
  );
};

export default JusticeAI;
