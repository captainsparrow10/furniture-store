import Sponsor from "@/components/Sponsor";
import Indications from "@/components/navegation/Indications";
import PasswordForm from "@/components/pages/account/PasswordForm";


export default function LoginPage() {
	return (
		<main>
			<Indications />
			<PasswordForm />
			<Sponsor />
		</main>
	)
}