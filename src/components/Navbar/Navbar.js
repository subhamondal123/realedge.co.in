// components/Navbar.js
import MyConstraint from '@/utils/MyConstraint';
import RouteConstraints from '@/utils/RouteConstraints';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50  flex-col pb-1 md:pb-0 ">
            {/* Logo Section */}
            <section className='bg-[#f8f8f8] flex justify-between px-4 md:px-22 items-center py-1 text-xs'>
                <div className='flex items-center'>
                    <img src='assets/images/icon-mail-orange.png' alt='download-icon' className="w-4 h-4 object-contain mr-2" />
                    <Link href={RouteConstraints.HomePage}><span className='text-black font-light text-sm'>info@realedge.co.in</span></Link>
                    <img src='assets/images/icon-phone-orange.png' alt='download-icon' className="w-4 h-4 object-contain ml-3 mr-2" />
                    <Link href={RouteConstraints.HomePage}><span className='text-black font-light text-sm'>1800 890 2868</span></Link>
                </div>
                <div className='flex items-center'>
                    <a
                        href={MyConstraint.FACEBOOK_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src='assets/images/facebook-icon.png' alt='download-icon' className="w-8 h-8 object-contain cursor-pointer" />
                    </a>
                    <a
                        href={MyConstraint.YOUTUBE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src='assets/images/youtube-icon.png' alt='download-icon' className="w-8 h-8 object-contain ml-2" />
                    </a>
                </div>
            </section>
            <div className='flex items-center md:justify-between px-4 md:px-22'>
                <div className="flex items-center">
                    <img src='assets/images/realedge-logo.png' alt='Srmb-logo' className="w-16 h-10 md:w-36 md:h-28 object-contain" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-5 font-medium text-gray-700 md:ml-auto">
                    <Link href="/" className="text-orange-600 border-b-2 border-orange-600 text-lg font-medium">HOME</Link>
                    <Link href="/products" className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                        PRODUCTS
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                    </Link>
                    <Link href={RouteConstraints.AboutPage} className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                        ABOUT US
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                    </Link>
                    <Link href="/blog" className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                        BLOG
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                    </Link>
                    <Link href={RouteConstraints.ContactUsPage} className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                        CONTACT
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-6 md:ml-6">
                    <button className="border md:border-2 border-[#5B1629] p-2 md:px-8 md:py-3 rounded-xs md:rounded-full flex items-center text-[9px] md:text-lg font-medium text-[#5B1629] cursor-pointer">
                        <span className="md:mr-2 text- text-[#5B1629]"><img src='assets/images/icon-download.png' alt='download-icon' className="w-2 h-2 md:w-5 md:h-5 object-contain" /></span> Download <br className="block md:hidden" /> Design Book
                    </button>
                    < a href='javascript:void(0)' id='getQuote' className="bg-orange-500 font-medium text-white text-[10px] md:text-lg p-2 md:px-8 md:py-3.5 rounded-s-md md:rounded-full hover:bg-orange-600 transition cursor-pointer">
                        Get Price Quotation
                    </a>
                </div>
                {/* Mobile Menu (CSS only) */}
                <details className="md:hidden ml-auto group">
                    <summary className="list-none cursor-pointer text-2xl select-none">☰</summary>
                    <div className="absolute left-0 top-full w-full bg-white shadow-md px-4 py-4 space-y-3 space-x-1 overflow-hidden transition-all group-open:max-h-125 group-open:opacity-100 group-open:translate-y-0 max-h-0 opacity-0 -translate-y-2 duration-3000 ease-out">
                        {/* <Link href="/">HOME</Link>
                        <Link href="/products">PRODUCTS</Link>
                        <Link href={RouteConstraints.AboutPage}>ABOUT US</Link>
                        <Link href="/blog">BLOG</Link>
                        <Link href={RouteConstraints.ContactUsPage}>CONTACT</Link> */}
                        <Link href="/" className="text-orange-600 border-b-2 border-orange-600 text-lg font-medium">HOME</Link>
                        <Link href="/products" className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                            PRODUCTS
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                        </Link>
                        <Link href={RouteConstraints.AboutPage} className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                            ABOUT US
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                        </Link>
                        <Link href="/blog" className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                            BLOG
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                        </Link>
                        <Link href={RouteConstraints.ContactUsPage} className="relative hover:text-orange-600 text-[#5D6C7C] text-lg font-medium group">
                            CONTACT
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-1/2 transform -translate-x-1/2"></span>
                        </Link>
                    </div>
                </details>
            </div>
        </nav>
    );
};

export default Navbar;