import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import ProfileForm from '@/containers/account/profile'

export default async function ProfilePage() {
	return (
		<main>
			<Indications />
			 <ProfileForm />
			<Sponsor />
		</main>
	)
}
