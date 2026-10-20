import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Terms = () => {
    usePageMeta({
        title: "Terms of Service | shiroya.in — Fast Browser Tools",
        description: "Terms of Service and acceptable use conditions for Shiroya.in client-side web utilities and developer tools.",
        canonicalUrl: "https://shiroya.in/terms"
    });

    return (
        <section className="section-padding py-40 min-h-screen max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Terms of Service</h1>
            <div className="prose prose-invert max-w-none text-gray-300 space-y-8 text-base md:text-lg leading-relaxed">
                <p className="text-sm font-mono text-[#20E070]">Last updated: October 20, 2026</p>
                
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">1. Acceptance of Terms</h2>
                    <p>By accessing or utilizing Shiroya.in, its subdomains, or any bundled utilities, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using the platform.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">2. Service Provision & Client-Side Execution</h2>
                    <p>Shiroya.in provides software utilities on an "as-is" and "as-available" basis. Because processing occurs strictly inside your web browser environment, execution speed and memory limits depend on your client device hardware, browser configuration, and local operating system.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">3. Acceptable & Lawful Use</h2>
                    <p>You agree not to use Shiroya tools for unlawful purposes, including but not limited to transferring malicious code, harassing others, or infringing on intellectual property rights. You are solely responsible for ensuring you hold legal authorization to process any source code, images, or documents you input.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">4. Limitation of Liability</h2>
                    <p>Shiroya.in and its creator, Vraj Shiroya, shall not be held liable for any data loss, workflow interruptions, or indirect damages resulting from the use or inability to use these experimental tools.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">5. Open Source & Attribution</h2>
                    <p>Shiroya.in is maintained under an open-source ethos. The project codebase is distributed under the MIT License on <a href="https://github.com/VG31OP/shiroya.in" target="_blank" rel="noopener noreferrer" className="text-[#20E070] hover:underline font-mono">GitHub</a>.</p>
                </div>
            </div>
        </section>
    );
};

export default Terms;
