"use client"
import GetInTouch from "@/Components/contact-page/GetInTouch/GetInTouch";
import Subscribe from "@/Components/contact-page/Subscribe/Subscribe";
import ContactBanner from "@/Components/contact-page/banner/page";
import EmailSection from "@/Components/contact-page/emailSection/page";
import Googlemap from "@/Components/contact-page/googleMap/page";

const ContactPage = () => {
    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <ContactBanner />
            <GetInTouch />
            <EmailSection />
            <Subscribe/>
            <Googlemap />
        </div>
    );
};

export default ContactPage;