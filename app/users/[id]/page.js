import MyProfileNav from '../../components/profile/MyProfileNav'
import ProfileHeader from '../../components/profile/ProfileHeader';
import AboutMe from '@/app/components/profile/AboutMe';
import Reviews from '@/app/components/review/Reviews';
import ContactInfo from '@/app/components/profile/ContactInfo';
import MyCategories from '@/app/components/profile/MyCategories';
import { notFound } from 'next/navigation';


const getUser = async (id) => {
  try{
    const response = await fetch(`http://localhost:5000/api/users/${id}`, {cache: 'no-store'});
    return response.json();
  }catch(err){
    return null
  }
}

export default async function ProfilePage({ params }) {
    const { id } = params
    const data = await getUser(id);
    const user = data?.user || null;
    
    if (!user) return notFound();
  return (
    <div className='flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto w-full'>
        <MyProfileNav user={user}  />
        <ProfileHeader user={user} />
        <div className={user.role === 'worker' ? 'grid grid-cols-1 md:grid-cols-[auto_auto] gap-5 w-full' : "flex flex-col w-full"} >
          {user.role === 'worker' && <div className={`md:col-start-1 md:row-start-1`}><AboutMe about={user?.about} /></div>}
          {user.role === 'worker' && <div className={`row-start-4 md:col-start-1 md:row-start-2`}><Reviews userId={user?._id}  /></div>}
          <div className='md:col-start-2 md:row-start-1'><ContactInfo user={user} /></div>
          <div className={`${user.role !== 'worker' && 'hidden'} md:col-start-2 md:row-start-2`}><MyCategories categories={user?.categoriesId} /></div>
        </div>
    </div>
  )
}
