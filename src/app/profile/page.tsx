import Sponsor from "@/components/Sponsor";
import Indications from "@/components/navegation/Indications";
import ProfileForm from "@/components/pages/account/ProfileForm";


export default function ProfilePage() {
	return (
		<main>
			<Indications />
			<ProfileForm />
			<Sponsor />
		</main>
	)
}