
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const ServiceJuridictionFinder = () => {
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{nom: string, code: string}>>([]);
  const [selectedService, setSelectedService] = useState('tribunal');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  // Simuler l'API pour les suggestions de villes
  useEffect(() => {
    if (codePostal.length === 5) {
      fetchCitySuggestions(codePostal);
    } else {
      setSuggestions([]);
    }
  }, [codePostal]);

  const fetchCitySuggestions = async (cp: string) => {
    try {
      // En production, utilisez l'API adresse.data.gouv.fr
      // Cette version utilise des données simulées
      setLoading(true);
      
      // Dans la vraie implémentation:
      // const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${cp}&limit=5`);
      // const data = await response.json();
      
      // Pour la démo, on simule des villes
      setTimeout(() => {
        if (cp.startsWith('75')) {
          setSuggestions([
            { nom: 'Paris', code: cp },
            { nom: 'Paris 1er', code: cp }
          ]);
        } else if (cp.startsWith('69')) {
          setSuggestions([
            { nom: 'Lyon', code: cp },
            { nom: 'Villeurbanne', code: cp }
          ]);
        } else if (cp.startsWith('33')) {
          setSuggestions([
            { nom: 'Bordeaux', code: cp },
            { nom: 'Mérignac', code: cp }
          ]);
        } else if (cp.startsWith('78')) {
          setSuggestions([
            { nom: 'Mantes-la-Jolie', code: cp },
            { nom: 'Versailles', code: cp },
            { nom: 'Saint-Germain-en-Laye', code: cp }
          ]);
        } else {
          setSuggestions([
            { nom: 'Ville exemple 1', code: cp },
            { nom: 'Ville exemple 2', code: cp }
          ]);
        }
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Erreur lors de la recherche des villes");
      setLoading(false);
    }
  };

  const sendEmail = (type: string) => {
    // Vérification des champs nom et prénom
    if (!nom.trim() || !prenom.trim()) {
      toast.error("Veuillez saisir votre nom et prénom avant d'envoyer une demande");
      return;
    }
    
    // Dans une vraie application, ceci serait géré par un service d'email
    toast.success(`Demande de ${type} envoyée à tprx-mantes-la-jolie@justice.fr au nom de ${prenom} ${nom}`);
  };

  const findServices = async () => {
    if (!codePostal || !ville) {
      setError("Veuillez entrer un code postal et sélectionner une ville");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // En production, utilisez les API réelles
      // Ici, on simule les résultats
      setTimeout(() => {
        const simulatedResults = {
          tribunal: {
            name: "Tribunal Judiciaire",
            address: codePostal.startsWith('75') ? 
              "Palais de Justice, 10 Boulevard du Palais, 75001 Paris" : 
              "1 rue de la Justice, " + codePostal + " " + ville,
            phone: "01.44.32.51.51",
            website: "https://www.tribunal-" + ville.toLowerCase().replace(" ", "-") + ".fr",
            email: ville === "Mantes-la-Jolie" ? "tprx-mantes-la-jolie@justice.fr" : "contact@justice.fr"
          },
          conciliateur: {
            name: "Conciliateur de Justice",
            address: "Mairie de " + ville + ", " + codePostal + " " + ville,
            phone: "01.00.00.00.00",
            website: "https://www.conciliateurs.fr",
            email: ville === "Mantes-la-Jolie" ? "tprx-mantes-la-jolie@justice.fr" : "contact@conciliateurs.fr"
          },
          police: {
            name: codePostal.startsWith('75') ? "Commissariat de Police" : "Gendarmerie",
            address: codePostal.startsWith('75') ? 
              "11 rue de la Sécurité, " + codePostal + " " + ville : 
              "5 avenue de la Défense, " + codePostal + " " + ville,
            phone: codePostal.startsWith('75') ? "01.00.00.00.00" : "01.00.00.00.01",
            website: codePostal.startsWith('75') ? 
              "https://www.police-nationale.interieur.gouv.fr" : 
              "https://www.gendarmerie.interieur.gouv.fr",
            email: "contact@interieur.gouv.fr"
          },
          cdad: {
            name: "Conseil Départemental d'Accès au Droit",
            address: "Tribunal Judiciaire, " + codePostal + " " + ville,
            phone: "01.00.00.00.02",
            website: "https://www.cdad-" + codePostal.substring(0, 2) + ".justice.fr",
            email: ville === "Mantes-la-Jolie" ? "tprx-mantes-la-jolie@justice.fr" : "cdad@justice.fr"
          }
        };

        setResults(simulatedResults);
        setLoading(false);
      }, 1000);

    } catch (err) {
      setError("Erreur lors de la recherche des services");
      setLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-justice-primary">Trouvez les services juridiques près de chez vous</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
              <Input 
                type="text" 
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                placeholder="Ex: 75001"
                maxLength={5}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
              <select 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                disabled={suggestions.length === 0}
              >
                <option value="">Sélectionnez une ville</option>
                {suggestions.map((city, index) => (
                  <option key={index} value={city.nom}>{city.nom}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service recherché</label>
              <select 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="tribunal">Tribunal</option>
                <option value="conciliateur">Conciliateur de justice</option>
                <option value="police">Police/Gendarmerie</option>
                <option value="cdad">Point d'accès au droit (CDAD)</option>
              </select>
            </div>

            <Button 
              className="bg-justice-primary hover:bg-justice-dark"
              onClick={findServices}
              disabled={loading}
            >
              {loading ? 'Recherche en cours...' : 'Rechercher'}
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="font-medium mb-4 text-justice-primary">Comment ça marche ?</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Saisissez votre code postal</li>
              <li>Sélectionnez votre ville</li>
              <li>Choisissez le type de service juridique que vous recherchez</li>
              <li>Cliquez sur "Rechercher" pour afficher les informations du service</li>
            </ol>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Ce service vous permet de trouver les coordonnées des institutions juridiques et d'accès au droit les plus proches de chez vous.</p>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-md my-4">
            {error}
          </div>
        )}
        
        {results && (
          <div className="mt-6">
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-justice-primary mr-2" />
                {results[selectedService].name}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-justice-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{results[selectedService].address}</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-justice-primary mr-3 flex-shrink-0" />
                  <span>{results[selectedService].phone}</span>
                </div>
                
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-justice-primary mr-3 flex-shrink-0" />
                  <a href={results[selectedService].website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {results[selectedService].website}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-justice-primary mr-3 flex-shrink-0" />
                  <span>{results[selectedService].email}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-medium mb-4">Vos informations pour la demande</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <Input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <Input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <h3 className="font-medium mb-3">Contacter ce service :</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => sendEmail('demande d\'information')} variant="outline" className="text-sm">
                      Demande d'information
                    </Button>
                    <Button onClick={() => sendEmail('prise de rendez-vous')} variant="outline" className="text-sm">
                      Prise de rendez-vous
                    </Button>
                    <Button onClick={() => sendEmail('signalement')} variant="outline" className="text-sm">
                      Signaler un problème
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceJuridictionFinder;
