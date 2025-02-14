import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li>
                <Link className="facebook" href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li>
                <Link className="instagram" href="https://www.instagram.com/fasel.inc/" target="_blank">
                    <i className="fab fa-instagram"></i>
                </Link>
            </li>
            <li>
                <Link className="youtube" href="https://www.pinterest.com/" target="_blank">
                    <i className="fab fa-youtube"></i>
                </Link>
            </li>
            <li>
                <Link className="linkedin" href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShare;