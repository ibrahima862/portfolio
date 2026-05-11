import { ProjectDetail } from "../ProjectDetails";

/* Usage dans Parking.tsx */
export function Parking() {
  return <ProjectDetail
    title="Gestion de Parking"
    description="Système de gestion de parking avec suivi des véhicules et des places."
    images={['parking2.png', 'parking1.png', 'parking3.png', 'parking4.png', 'parking5.png']}
    video="parking_demo.mp4"
    tags={['Laravel', 'React', 'MySQL']}
    features={['Gestion entrées/sorties', 'CRUD véhicules', 'Base de données MySQL']}
    liveUrl="#" githubUrl="https://github.com/ibrahima862/projetParkAuto/tree/projetPark" />;
}
