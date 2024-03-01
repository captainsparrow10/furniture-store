import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import ProfileForm from '@/containers/account/profile'
import ProfileService from '@/services/user/profile'

export default async function ProfilePage() {
	const profile = await ProfileService.getProfile()
	return (
		<main>
			<Indications />
			 <ProfileForm profileData={profile}/>
			<Sponsor />
		</main>
	)
}
