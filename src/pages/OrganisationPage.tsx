
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Scale, Building, Briefcase, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const OrganisationPage = () => {
  const isMobile = useIsMobile();

  const renderJuridictionsCiviles = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building size={20} className="text-justice-primary" />
          Les juridictions civiles
        </CardTitle>
        <CardDescription>
          Elles traitent les litiges entre particuliers ou entreprises
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tribunal-judiciaire">
              <AccordionTrigger className="font-semibold">Tribunal judiciaire</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Remplace depuis 2020 les tribunaux d'instance et de grande instance. Compétent pour les litiges civils.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prud-hommes">
              <AccordionTrigger className="font-semibold">Conseil de prud'hommes</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Compétent pour les litiges entre employeurs et salariés.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tribunal-commerce">
              <AccordionTrigger className="font-semibold">Tribunal de commerce</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Compétent pour les litiges entre commerçants.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cour-appel">
              <AccordionTrigger className="font-semibold">Cour d'appel</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Juridiction du second degré qui réexamine les affaires déjà jugées.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cour-cassation">
              <AccordionTrigger className="font-semibold">Cour de cassation</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Juridiction suprême de l'ordre judiciaire, elle vérifie la conformité des décisions au droit.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <>
            <div className="border-l-4 border-justice-primary pl-4 py-2">
              <h3 className="font-semibold">Tribunal judiciaire</h3>
              <p className="text-sm text-gray-600">Remplace depuis 2020 les tribunaux d'instance et de grande instance. Compétent pour les litiges civils.</p>
            </div>
            
            <div className="border-l-4 border-justice-primary pl-4 py-2">
              <h3 className="font-semibold">Conseil de prud'hommes</h3>
              <p className="text-sm text-gray-600">Compétent pour les litiges entre employeurs et salariés.</p>
            </div>
            
            <div className="border-l-4 border-justice-primary pl-4 py-2">
              <h3 className="font-semibold">Tribunal de commerce</h3>
              <p className="text-sm text-gray-600">Compétent pour les litiges entre commerçants.</p>
            </div>
            
            <div className="border-l-4 border-justice-primary pl-4 py-2">
              <h3 className="font-semibold">Cour d'appel</h3>
              <p className="text-sm text-gray-600">Juridiction du second degré qui réexamine les affaires déjà jugées.</p>
            </div>
            
            <div className="border-l-4 border-justice-primary pl-4 py-2">
              <h3 className="font-semibold">Cour de cassation</h3>
              <p className="text-sm text-gray-600">Juridiction suprême de l'ordre judiciaire, elle vérifie la conformité des décisions au droit.</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );

  const renderJuridictionsPenales = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building size={20} className="text-justice-secondary" />
          Les juridictions pénales
        </CardTitle>
        <CardDescription>
          Elles jugent les infractions à la loi pénale
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tribunal-police">
              <AccordionTrigger className="font-semibold">Tribunal de police</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Juge les contraventions (infractions les moins graves).</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tribunal-correctionnel">
              <AccordionTrigger className="font-semibold">Tribunal correctionnel</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Juge les délits (infractions de gravité moyenne).</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cour-assises">
              <AccordionTrigger className="font-semibold">Cour d'assises</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Juge les crimes (infractions les plus graves).</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tribunal-enfants">
              <AccordionTrigger className="font-semibold">Tribunal pour enfants</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">Compétent pour les infractions commises par des mineurs.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <>
            <div className="border-l-4 border-justice-secondary pl-4 py-2">
              <h3 className="font-semibold">Tribunal de police</h3>
              <p className="text-sm text-gray-600">Juge les contraventions (infractions les moins graves).</p>
            </div>
            
            <div className="border-l-4 border-justice-secondary pl-4 py-2">
              <h3 className="font-semibold">Tribunal correctionnel</h3>
              <p className="text-sm text-gray-600">Juge les délits (infractions de gravité moyenne).</p>
            </div>
            
            <div className="border-l-4 border-justice-secondary pl-4 py-2">
              <h3 className="font-semibold">Cour d'assises</h3>
              <p className="text-sm text-gray-600">Juge les crimes (infractions les plus graves).</p>
            </div>
            
            <div className="border-l-4 border-justice-secondary pl-4 py-2">
              <h3 className="font-semibold">Tribunal pour enfants</h3>
              <p className="text-sm text-gray-600">Compétent pour les infractions commises par des mineurs.</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
  
  const renderOrdreAdministratif = () => (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building size={20} className="text-justice-primary" />
            Juridictions administratives
          </CardTitle>
          <CardDescription>
            Elles traitent les litiges entre les particuliers et l'administration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tribunal-admin">
                <AccordionTrigger className="font-semibold">Tribunal administratif</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Juge en première instance les litiges entre les particuliers et l'administration.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cour-admin">
                <AccordionTrigger className="font-semibold">Cour administrative d'appel</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Juridiction d'appel des tribunaux administratifs.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="conseil-etat">
                <AccordionTrigger className="font-semibold">Conseil d'État</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Juridiction suprême de l'ordre administratif, il juge en dernier ressort.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <>
              <div className="border-l-4 border-justice-primary pl-4 py-2">
                <h3 className="font-semibold">Tribunal administratif</h3>
                <p className="text-sm text-gray-600">Juge en première instance les litiges entre les particuliers et l'administration.</p>
              </div>
              
              <div className="border-l-4 border-justice-primary pl-4 py-2">
                <h3 className="font-semibold">Cour administrative d'appel</h3>
                <p className="text-sm text-gray-600">Juridiction d'appel des tribunaux administratifs.</p>
              </div>
              
              <div className="border-l-4 border-justice-primary pl-4 py-2">
                <h3 className="font-semibold">Conseil d'État</h3>
                <p className="text-sm text-gray-600">Juridiction suprême de l'ordre administratif, il juge en dernier ressort.</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building size={20} className="text-justice-secondary" />
            Juridictions spécialisées
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cour-comptes">
                <AccordionTrigger className="font-semibold">Cour des comptes</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Contrôle l'usage des fonds publics et sanctionne les irrégularités.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="conseil-constitutionnel">
                <AccordionTrigger className="font-semibold">Conseil constitutionnel</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Veille à la conformité des lois à la Constitution.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <>
              <div className="border-l-4 border-justice-secondary pl-4 py-2">
                <h3 className="font-semibold">Cour des comptes</h3>
                <p className="text-sm text-gray-600">Contrôle l'usage des fonds publics et sanctionne les irrégularités.</p>
              </div>
              
              <div className="border-l-4 border-justice-secondary pl-4 py-2">
                <h3 className="font-semibold">Conseil constitutionnel</h3>
                <p className="text-sm text-gray-600">Veille à la conformité des lois à la Constitution.</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
  
  const renderSAUJ = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase size={20} className="text-justice-primary" />
          Le Service d'Accueil Unique du Justiciable (SAUJ)
        </CardTitle>
        <CardDescription>
          Un point d'entrée unique pour faciliter l'accès à la justice
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="mb-4">
          Le Service d'Accueil Unique du Justiciable (SAUJ) est un guichet d'accueil polyvalent qui permet aux citoyens 
          d'être mieux informés sur leurs démarches juridiques, quel que soit leur lieu de résidence ou la juridiction compétente.
        </p>
        
        <div className={`grid grid-cols-1 ${!isMobile ? "md:grid-cols-2" : ""} gap-4`}>
          <div className="bg-justice-light p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Missions du SAUJ</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Informer les usagers sur les procédures</li>
              <li>Orienter vers le tribunal compétent</li>
              <li>Aider à accomplir certaines démarches</li>
              <li>Fournir des informations sur l'avancement des affaires</li>
              <li>Délivrer certains documents (attestations, copies de décisions)</li>
            </ul>
          </div>
          
          <div className="bg-justice-gray p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Où trouver un SAUJ ?</h3>
            <p className="text-sm">
              Les SAUJ sont progressivement déployés dans les tribunaux judiciaires (anciens tribunaux d'instance 
              et de grande instance), les conseils de prud'hommes et les cours d'appel en France. Ils sont généralement 
              situés à l'entrée des palais de justice.
            </p>
          </div>
        </div>
        
        <Alert className="mt-4">
          <Info className="h-4 w-4" />
          <AlertTitle>Bon à savoir</AlertTitle>
          <AlertDescription>
            Le SAUJ ne remplace pas l'aide juridictionnelle ni les consultations avec un avocat, mais il facilite 
            les premières démarches et l'orientation des justiciables.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="text-justice-primary" size={isMobile ? 24 : 28} />
          <h1 className={isMobile ? "text-xl" : "text-2xl"} style={{ fontWeight: 'bold' }}>Organisation de la Justice en France</h1>
        </div>
        
        <Alert className="mb-6 bg-justice-light border-justice-primary">
          <Info className="h-4 w-4" />
          <AlertTitle>À savoir</AlertTitle>
          <AlertDescription>
            Le système judiciaire français est organisé en deux ordres : l'ordre judiciaire et l'ordre administratif.
            Chaque ordre dispose de sa propre hiérarchie de juridictions.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="ordre-judiciaire" className="w-full">
          <TabsList className={`mb-4 ${isMobile ? "w-full grid grid-cols-3" : "w-full justify-start"}`}>
            <TabsTrigger value="ordre-judiciaire" className={isMobile ? "text-xs" : ""}>Ordre Judiciaire</TabsTrigger>
            <TabsTrigger value="ordre-administratif" className={isMobile ? "text-xs" : ""}>Ordre Administratif</TabsTrigger>
            <TabsTrigger value="sauj" className={isMobile ? "text-xs" : ""}>Le SAUJ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ordre-judiciaire" className="space-y-6">
            {renderJuridictionsCiviles()}
            {renderJuridictionsPenales()}
          </TabsContent>
          
          <TabsContent value="ordre-administratif" className="space-y-6">
            {renderOrdreAdministratif()}
          </TabsContent>
          
          <TabsContent value="sauj" className="space-y-6">
            {renderSAUJ()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrganisationPage;
