import { auth } from '@/app/api/auth';
import Image from 'next/image';
import Link from 'next/link';
import dashboard from '../../../../public/images/user_dashboard.svg'
import social from '../../../../public/images/user-social.svg'
import pet_Request from '../../../../public/images/pet-request.svg'
import post from '../../../../public/images/user_post.svg'
import setting from '../../../../public/images/setting.svg'
import security from '../../../../public/images/security.svg'
import petListing from '../../../../public/images/pet-listing.svg'
import home from '../../../../public/images/home.svg'
import adoptRequest from '../../../../public/images/adopt-request.svg'
import order from '../../../../public/images/3592871-200.png'
import allitem from '../../../../public/images/medical_medicine_icon_147379.png'
import myorder from '../../../../public/images/my-orders-icon.webp'
import mydonation from '../../../../public/images/5316685.png'
import allDonation from '../../../../public/images/2021-01-26-donate-icon_tcm1066-466501.png'
import Donation from '../../../../public/images/donate-icon-2048x2048-avi1u1tv.png'

const UserDashNav = async({ childrens }) => {
  const session = await auth();
    const user=session?.user
    // console.log(user,'navabar')
    const isAdmin = "narayanchandrika18@gmail.com" && user.email === "narayanchandrika18@gmail.com";

  const Navlinks = (
    <>
    {
      isAdmin?
      <>
    <li className=' border-y-2 lg:border-y-4 border-[#f04336] mb-2 lg:mb-5'><Link   href={{pathname:"/userprofile",query:{user}}} className='py-2 lg:py-5'>
        <div className="avatar  lg:ml-5">
          <div className="w-8 lg:w-16 rounded-full">
            <Image width={200} height={200} src={user.image} alt='' />
          </div>
        </div>
        {user.name}</Link></li>
        <li className=''><Link href="/admin_dashboard"><Image src={dashboard} alt="alt" width={20} height={20} /> Admin Dashboard</Link></li>
      <li className=' '><Link href="/alluser"><Image src={social} alt="alt" width={20} height={20} />All User</Link></li>
      <li className=''><Link href="/allAdoptRequest"><Image src={pet_Request} alt="alt" width={20} height={20} />All Adopt Request</Link></li>
      <li><Link href='/postPetCommunity'><Image src={post} alt="alt" width={20} height={20} /> Post Medical Store</Link></li>
      <li><Link href='/alldonation'><Image src={allDonation} alt="alt" width={20} height={20} />alldonation</Link></li>
      <li className=' '><Link href="/order" ><Image src={order} alt="alt" width={20} height={20} /> orders</Link></li>
      <li className=' '><Link href="/allItem" ><Image src={allitem} alt="alt" width={20} height={20} />shop items</Link></li>
      <li className='border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={home} alt="alt" width={20} height={20} /> Home Page</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={adoptRequest} alt="alt" width={20} height={20} /> Adopt Request</Link></li>
      <li className=' '><Link href="/pet-listing" ><Image src={petListing} alt="alt" width={20} height={20} /> Pet-Listing</Link></li>
      <li className=' '><Link href="/addreview" ><Image src={post} alt="alt" width={20} height={20} /> Add Review</Link></li>
      <li className=' border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={setting} alt="alt" width={20} height={20} /> Setting</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={security} alt="alt" width={20} height={20} /> Security</Link></li>
    </>
    :
    <>
      <li className=' border-y-2 lg:border-y-4 border-[#f04336] mb-2 lg:mb-5'><Link   href={{pathname:"/userprofile",query:{user}}} className='py-2 lg:py-5'>
        <div className="avatar  lg:ml-5">
          <div className="w-8 lg:w-16 rounded-full">
            <Image width={200} height={200} src={user?.image} alt='' />
          </div>
        </div>
        {user?.name}</Link></li>
      <li className=''><Link href="/dashboard"><Image src={dashboard} alt="alt" width={20} height={20} /> Dashboard</Link></li>
      <li className=' '><Link href="/petCommunity "><Image src={social} alt="alt" width={20} height={20} /> Pet Lover Community</Link></li>
      <li className=''><Link href="/allPetRequest"><Image src={pet_Request} alt="alt" width={20} height={20} /> All adopt Request</Link></li>
      <li><Link href='/postPetCommunity'><Image src={post} alt="alt" width={20} height={20} /> Post Your Community</Link></li>
      <li><Link href='/myorder'><Image src={myorder} alt="alt" width={20} height={20} /> myorder</Link></li>
      <li><Link href='/mydonation'><Image src={mydonation} alt="alt" width={20} height={20} /> mydonation</Link></li>
      <li><Link href='/donation'><Image src={Donation} alt="alt" width={20} height={20} /> Donate</Link></li>
      <li className='border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={home} alt="alt" width={20} height={20} /> Home Page</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={adoptRequest} alt="alt" width={20} height={20} /> Adopt Request</Link></li>
      <li className=' '><Link href="/pet-listing" ><Image src={petListing} alt="alt" width={20} height={20} /> Pet-Listing</Link></li>
      <li className=' '><Link href="/addreview" ><Image src={post} alt="alt" width={20} height={20} /> Add Review</Link></li>
      <li className=' border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={setting} alt="alt" width={20} height={20} /> Setting</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={security} alt="alt" width={20} height={20} /> Security</Link></li>
    </>

    }
    </>
  )
  return (
    <div className=''>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:flex-row">
          {/* Navbar */}
          <div className="w-full basis-1/4 navbar bg-white shadow-2xl">
            <div className="flex-none  lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 lg:hidden">Pet Adopter</div>
            <div className="flex-none min-w-full  hidden lg:block lg:max-h-screen  lg:overflow-auto">
              <ul className="menu menu-verticle min-h-screen font-bold text-lg  ">

                {Navlinks}

              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className='lg:h-screen lg:overflow-hidden w-full'>
            <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              {childrens}
            </div>
          </div>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 min-h-full bg-base-200">
            {Navlinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashNav;