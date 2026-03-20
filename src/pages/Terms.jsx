import React, { useEffect } from 'react';
import Seo from '../components/Seo';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding py-40 min-h-screen">
            <Seo
                title="Terms of Service | Shiroya"
                description="Read the terms of service for using Shiroya's free browser-based tools."
                canonicalPath="/terms"
            />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-10">Terms of Service</h1>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-8 text-lg leading-relaxed">
                <p>Last updated: March 19, 2026</p>
                
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
                    <p>By using Shiroya.in, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">2. Use of Services</h2>
                    <p>Shiroya.in provides browser-based tools "as is". We are not responsible for any data loss, file corruption, or issues arising from the use of our tools. Users are responsible for maintaining their own backups.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">3. Prohibited Activities</h2>
                    <p>You agree not to use our tools for any illegal purposes, including but not limited to the distribution of malware or copyrighted material without permission.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitation of Liability</h2>
                    <p>Shiroya.in and its creators shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">5. Modifications</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>
                </div>
            </div>
        </section>
    );
};

export default Terms;
