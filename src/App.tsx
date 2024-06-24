import React from "react";
// import "./styles/Homepage.css";
// import "./App.css";
import Header from "./components/HL_Header.tsx";
import Footer from "./components/HL_Footer.tsx";
import HeroBanner from "./pages/HL_HeroBanner.tsx";
import SignIn from "./pages/HL_SignIn.tsx";
import Product from "./pages/HL_PDP.tsx";
import NewsPage from "./pages/News.tsx";
import CategoryListingPage from "./pages/CategoryListingPage.tsx";
import ContactDistributor from "./pages/ContactDistributor.tsx";
import { Route, Routes } from "react-router-dom";

interface subNavItem {
    label: string,
    link: string,
    showChevron?: boolean
    pid?: string
}
interface navItem {
    title: string,
    showChevron: Boolean,
    subNavItems: subNavItem[]
}

interface footerItemProp {
    title: string,
    cat: {
        label: string,
        link: string
    }[]
}
const App = () => {
    const HeroBannerDetails = {
        intro: 'I’m Rachel Clarkson, and I’ll help you reach your goals.',
        profession: 'Herbalife Independent Distributor',
        location: 'Witney',
        moto: 'Changing lives in the community to be happier and healthier',
        buttonText: 'Get In Touch'
    };
    const footerNavItems: footerItemProp[] = [
        {
            title: 'Our Products',
            cat: [
                { label: 'Weight Management', link: '/weight-management' },
                { label: 'Fitness', link: '/fitness' },
                { label: 'Performance', link: '/performance' },
                { label: 'Daily Nutrition & Well-being', link: '/daily-nutrition-well-being' },
                { label: 'Skin & Body Care', link: '/skin-body-care' }
            ]
        }, {
            title: 'About Herbalife',
            cat: [
                { label: 'Our Leadership', link: '/our-leadership' },
                { label: 'Start Your Business', link: '/start-your-business' }
            ]
        }, {
            title: 'Get Help',
            cat: [
                { label: 'Contact Distributor', link: '/contact-distributor' },
                { label: 'Contact Herbalife', link: '/fitness' },
                { label: 'Frequently Asked Questions', link: '/performance' }
            ]
        }
    ];
    const HamburgerNavItems: navItem[] = [
        {
            title: 'Achieve Your Goals', showChevron: true, subNavItems: [
                { label: 'Weight Management', link: '/weight-management', showChevron: false },
                { label: 'Fitness', link: '/fitness', showChevron: false },
                { label: 'Performance', link: '/performance', showChevron: false },
                { label: 'Daily Nutrition & Well-being', link: '/daily-nutrition-well-being', showChevron: false },
                { label: 'Skin & Body Care', link: '/skin-body-care', showChevron: false }
            ]
        },
        {
            title: 'Products', showChevron: true, subNavItems: [
                {
                    label: 'By Type', link: '/', showChevron: true,
                    catNavItems: [
                        { label: 'View All', pid: '/category/all-products', showChevron: false, link: '/' },
                        { label: 'Shakes', pid: '/category/shakes', showChevron: false, link: '/' },
                        { label: 'Beverages & Infusions', pid: '/category/beverages-infusions', showChevron: false, link: '/' }
                    ]
                },
                { label: 'By Need', link: '/', showChevron: false }
            ]
        },
        { title: 'Wellness Resources', showChevron: false, subNavItems: [] },
        { title: 'Start Your Business', showChevron: false, subNavItems: [] },
        {
            title: 'About Herbalife', showChevron: true, subNavItems: [
                { label: 'Our Company', link: '/our-Company' },
                { label: 'Our Distributors', link: '/our-distributors' },
                { label: 'Our Athletes', link: '/our-athletes' },
                { label: 'Our Global Impact', link: '/our-global-impact' },
            ]
        }
    ];
    return (<>
        <div className="app-container">
            {/* <Header HamburgerNavItems={HamburgerNavItems} /> */}
            <Routes>
                <Route path="/" element={<HeroBanner HeroBannerDetails={HeroBannerDetails} HideContactInfo={false} />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/contact-distributor" element={<ContactDistributor />} />
                {/* <Route path="/contact-distributor" element={<ContactDistributor HeroBannerDetails={ContactPersonBannerDetails} />} /> */}
                <Route path="/product/:pid" element={<Product />} />
                <Route path="/category/:cid" element={<CategoryListingPage />}></Route>
            </Routes>
            {/* <Footer footerNavItems={footerNavItems} /> */}
            <Routes>
                <Route path="/mb" element={<NewsPage />} />
            </Routes>
        </div>
    </>);
}

export default App