import Sponsor from "@/components/sponsor";
import Indications from "@/components/navegation/Indications";
import PasswordForm from "@/containers/account/password";


export default function LostPasswordPage() {
	return (
		<main>
			<Indications />
			<PasswordForm />
			<Sponsor />
		</main>
	)
}