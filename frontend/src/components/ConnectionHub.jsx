import ProjectBooking from "../components/ProjectBooking";
import PartnershipForm from "../components/PartnershipForm";
import GeneralInquiryForm from "../components/GeneralInquiryForm";

export default function ConnectionHub() {
	return (
		<div className="bg-gray-50/50 py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<section id="start-project" className="mb-24">
					<ProjectBooking />
				</section>
				<section id="propose-partnership" className="mb-24">
					<PartnershipForm />
				</section>
				<section id="ask-question" className="mb-24">
					<GeneralInquiryForm />
				</section>
			</div>
		</div>
	);
}
