import Sponsor from "@/components/sponsor";
import Indications from "@/components/navegation/Indications";
import LoginForm from "@/containers/account/login";


export default function LoginPage() {
	return (
		<main>
			<Indications />
			<LoginForm />
			<Sponsor />
		</main>
	)
}
