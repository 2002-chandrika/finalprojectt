
import GalleryPhoto from '@/Components/Home/GalleryPhoto/GalleryPhoto'
import PetSection from '@/Components/Home/PetSection/PetSection'
import PetService from '@/Components/Home/PetService/PetService'
import UserReview from '@/Components/Home/UserReview/UserReview'
import Banner from '@/Components/Home/Banner/Banner'
import Donate from '@/Components/Home/Donate/Donate'
import WhyChoseUs from '@/Components/Home/WhyChooseUs/WhyChoseUs'
import FAQ from '@/Components/Home/FAQ/FAQ'

export default function Home() {
  return (
    <div className='bg-[#F5F5DC] dark:bg-[#1B2430]'>
      <Banner />
      <WhyChoseUs />
      <PetSection />
      <PetService />
      <Donate />
      <GalleryPhoto />
      <UserReview />
      <FAQ />
    </div>
  )
}
