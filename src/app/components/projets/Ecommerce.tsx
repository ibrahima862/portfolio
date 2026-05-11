import { ProjectDetail } from "../ProjectDetails";

/* Usage dans Ecommerce.tsx */
export function Ecommerce() {
  return <ProjectDetail
    title="Plateforme E-commerce"
    description="Site e-commerce complet avec gestion des produits, panier et dashboard admin."
    images={['ecom1.png', 'ecom2.png', 'ecom3.png', 'ecom4.png', 'ecom5.png']}
    video="ecommerce_demo.mp4"
    tags={['Laravel', 'React', 'MySQL']}
    features={['Gestion produits', 'Panier', 'Interface admin']}
    liveUrl="#" githubUrl="#" />;
}
