import { ProjectDetail } from "../ProjectDetails";

/* Usage dans Logistique.tsx */
export function Logistique() {
  return <ProjectDetail
    title="Système de Suivi Logistique"
    description="Application complète de gestion des expéditions avec API REST Laravel et interface React."
    images={['/logistique/logi1.png', '/logistique/logi2.png', '/logistique/logi3.png', '/logistique/logi4.png', '/logistique/logi5.png', '/logistique/logi6.png']}
    video="logistique_demo.mp4"
    tags={['Laravel', 'React', 'MySQL', 'API REST']}
    features={['Gestion des statuts', 'API REST', 'CRUD complet', 'Mise à jour en temps réel']}
    liveUrl="#" githubUrl="#" />;
}
