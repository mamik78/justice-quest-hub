
import { Card } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { AlertCircle, Phone, FileText, Library } from "lucide-react";

const HarcelementPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-justice-primary">Harcèlement : Comprendre et Agir</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
            Qu'est-ce que le harcèlement ?
          </h2>
          <p className="mb-3">
            Le harcèlement se caractérise par des propos ou comportements répétés ayant pour objet ou effet une 
            dégradation des conditions de vie de la victime. Ces agissements peuvent porter atteinte à ses droits 
            et à sa dignité, altérer sa santé physique ou mentale ou compromettre son avenir professionnel.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Les différentes formes de harcèlement :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Harcèlement moral</li>
            <li>Harcèlement sexuel</li>
            <li>Cyberharcèlement</li>
            <li>Harcèlement scolaire</li>
            <li>Harcèlement au travail</li>
          </ul>
        </Card>
        
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-justice-primary" />
            Cadre légal
          </h2>
          <p className="mb-3">
            En France, le harcèlement est sanctionné par la loi. Les peines encourues varient selon le type de 
            harcèlement et les circonstances aggravantes.
          </p>
          
          <Table>
            <TableCaption>Sanctions prévues par le Code pénal</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Type de harcèlement</TableHead>
                <TableHead>Sanctions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Harcèlement moral</TableCell>
                <TableCell>2 ans d'emprisonnement et 30 000€ d'amende</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Harcèlement sexuel</TableCell>
                <TableCell>2 ans d'emprisonnement et 30 000€ d'amende</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cyberharcèlement</TableCell>
                <TableCell>2 ans d'emprisonnement et 30 000€ d'amende</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Avec circonstances aggravantes</TableCell>
                <TableCell>Jusqu'à 3 ans d'emprisonnement et 45 000€ d'amende</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>

      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Library className="mr-2 h-5 w-5 text-justice-primary" />
          Comment agir face au harcèlement ?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Si vous êtes victime :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Brisez le silence : parlez-en à un proche, un collègue, un ami</li>
              <li>Conservez les preuves : messages, emails, témoignages</li>
              <li>Consignez les faits par écrit : dates, lieux, propos, témoins</li>
              <li>Consultez un médecin pour faire constater l'impact sur votre santé</li>
              <li>Contactez des associations d'aide aux victimes</li>
              <li>Déposez plainte auprès de la police ou de la gendarmerie</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Si vous êtes témoin :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ne restez pas silencieux</li>
              <li>Soutenez la victime</li>
              <li>Proposez votre témoignage</li>
              <li>Signalez les faits aux autorités compétentes</li>
              <li>Dans un cadre professionnel, alertez la hiérarchie, les RH ou les représentants du personnel</li>
            </ul>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Phone className="mr-2 h-5 w-5 text-green-600" />
          Numéros et ressources utiles
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Numéros d'urgence</h3>
            <ul className="space-y-2">
              <li><strong>Police / Gendarmerie :</strong> 17</li>
              <li><strong>Violences Femmes Info :</strong> 3919</li>
              <li><strong>Enfance en danger :</strong> 119</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Cyberharcèlement</h3>
            <ul className="space-y-2">
              <li><strong>Net Écoute :</strong> 0800 200 000</li>
              <li><a href="https://www.internet-signalement.gouv.fr" className="text-blue-600 hover:underline">Plateforme PHAROS</a></li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Associations</h3>
            <ul className="space-y-2">
              <li><a href="https://www.france-victimes.fr" className="text-blue-600 hover:underline">France Victimes</a></li>
              <li><a href="https://arretonslesviolences.gouv.fr" className="text-blue-600 hover:underline">Arrêtons les violences</a></li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HarcelementPage;
