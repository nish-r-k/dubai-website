import DGEcosystemHero from "../components/DGEcosystemHero";
import DGLivingArchives from "../components/DGLivingArchives";
import DGIdeasConstellation from "../components/DGIdeasConstellation";
import DGGuidingPrinciples from "../components/DGGuidingPrinciples";
import DGToolshedSection from "../components/DgToolshedSection";
import DgEcosystemCTA from "../components/DGEcosystemCTA";
const DigitalGarden = () => {
	return (
		<div className="overflow-x-hidden">
			<DGEcosystemHero />
			<DGLivingArchives />
			<DGIdeasConstellation />
			<DGGuidingPrinciples />
			<DGToolshedSection />
			<DgEcosystemCTA />
		</div>
	);
};
export default DigitalGarden;
