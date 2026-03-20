import React, { useEffect } from 'react';
import Seo from '../components/Seo';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding py-40 min-h-screen">
            <Seo
                title="Privacy Policy | Shiroya"
                description="Read Shiroya's privacy policy for browser-based tools including BgZero, Drop, and PDF utilities."
                canonicalPath="/privacy"
            />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-10">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-8 text-lg leading-relaxed">
                <p>Last updated: March 19, 2026</p>
                
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">1. Data Collection</h2>
                    <p>At Shiroya.in, we believe in privacy by design. Our tools (Drop and PDF Tools) operate entirely in your browser. We do not store, upload, or process your personal files on our servers. Your data remains yours.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">2. Cookies</h2>
                    <p>We use minimal cookies only to improve site performance and remember your preferences. We do not track users for advertising purposes.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">3. External Links</h2>
                    <p>Our tools may link to third-party services. We are not responsible for the privacy practices of those external sites.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">4. Contact</h2>
                    <p>If you have any questions about our privacy practices, please contact us at <a href="mailto:vraj@shiroya.in" className="text-primary hover:underline">vraj@shiroya.in</a>.</p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
