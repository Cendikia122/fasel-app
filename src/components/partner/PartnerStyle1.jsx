import React from 'react';
import logo1 from '@/assets/img/logo/1.png'
import logo2 from '@/assets/img/logo/2.png'
import logo3 from '@/assets/img/logo/3.png'
import logo4 from '@/assets/img/logo/4.png'
import logo5 from '@/assets/img/logo/5.png'
import logo6 from '@/assets/img/logo/6.png'
import logo7 from '@/assets/img/logo/7.png'
import logo8 from '@/assets/img/logo/8.png'
import logo9 from '@/assets/img/logo/9.png'
import logo10 from '@/assets/img/logo/10.png'
import logo11 from '@/assets/img/logo/11.png'
import logo12 from '@/assets/img/logo/12.png'
import logo13 from '@/assets/img/logo/13.png'
import logo14 from '@/assets/img/logo/14.png'
import logo15 from '@/assets/img/logo/15.png'
import logo16 from '@/assets/img/logo/16.png'
// import logo17 from '@/assets/img/logo/17.png'
// import logo18 from '@/assets/img/logo/18.png'
// import logo19 from '@/assets/img/logo/19.png'
// import logo20 from '@/assets/img/logo/20.png'
// import logo21 from '@/assets/img/logo/21.png'
// import logo22 from '@/assets/img/logo/22.png'
// import logo23 from '@/assets/img/logo/23.png'
// import logo24 from '@/assets/img/logo/24.png'
// import logo25 from '@/assets/img/logo/25.png'
import Image from 'next/image';

const PartnerStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="partner-map" style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}>
                                <h2 className="mask-text" style={{ backgroundImage: `url(/assets/img/banner/10.jpg)` }}>80</h2>
                                <h4>Partners in world wide</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="partner-items">
                                <ul>
                                    <li><Image src={logo1} alt="Daya Motor" /></li>
                                    <li><Image src={logo2} alt="Dharma Group" /></li>
                                    <li><Image src={logo3} alt="HILLCON" /></li>
                                    <li><Image src={logo4} alt="Image Not FOund" /></li>
                                    <li><Image src={logo5} alt="Image Not FOund" /></li>
                                    <li><Image src={logo6} alt="Image Not FOund" /></li>
                                    <li><Image src={logo7} alt="Image Not FOund" /></li>
                                    <li><Image src={logo8} alt="Image Not FOund" /></li>
                                    <li><Image src={logo9} alt="Image Not FOund" /></li>
                                    <li><Image src={logo10} alt="Image Not FOund" /></li>
                                    <li><Image src={logo11} alt="Image Not FOund" /></li>
                                    <li><Image src={logo12} alt="Image Not FOund" /></li>
                                    <li><Image src={logo13} alt="Image Not FOund" /></li>
                                    <li><Image src={logo14} alt="Image Not FOund" /></li>
                                    <li><Image src={logo15} alt="Image Not FOund" /></li>
                                    <li><Image src={logo16} alt="Image Not FOund" /></li>
                                    {/* <li><Image src={logo17} alt="Image Not FOund" /></li>
                                    <li><Image src={logo18} alt="Image Not FOund" /></li>
                                    <li><Image src={logo19} alt="Image Not FOund" /></li>
                                    <li><Image src={logo20} alt="Image Not FOund" /></li>
                                    <li><Image src={logo21} alt="Image Not FOund" /></li>
                                    <li><Image src={logo22} alt="Image Not FOund" /></li>
                                    <li><Image src={logo23} alt="Image Not FOund" /></li>
                                    <li><Image src={logo24} alt="Image Not FOund" /></li>
                                    <li><Image src={logo25} alt="Image Not FOund" /></li>
                                     */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerStyle1;