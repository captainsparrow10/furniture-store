import Sponsor from "@/components/Sponsor";
import Indications from "@/components/navegation/Indications";
import LoginForm from "@/components/pages/account/LoginForm";


export default function Page() {
	return (
		<main>
			<Indications />
			<LoginForm />
			<Sponsor />
		</main>
	)
}
