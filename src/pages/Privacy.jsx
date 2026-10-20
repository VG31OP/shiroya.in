import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Privacy = () => {
    usePageMeta({
        title: "Privacy Policy | shiroya.in — Zero Cloud Storage & Client-Side Privacy",
        description: "Privacy policy for Shiroya.in and its browser utilities (Web Shiroya, Drop, BgZero, PDF Tools). 100% local client-side processing with zero server storage.",
        canonicalUrl: "https://shiroya.in/privacy"
    });

    return (
        <section className="section-padding py-40 min-h-screen max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-gray-300 space-y-8 text-base md:text-lg leading-relaxed">
                <p className="text-sm font-mono text-[#20E070]">Last updated: October 20, 2026</p>
                
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">1. Privacy by Design: Client-Side Execution</h2>
                    <p>At Shiroya.in, we believe privacy should be an architectural guarantee rather than a corporate promise. All core tools—including <strong>Web Shiroya</strong> (source code inspection), <strong>Drop</strong> (P2P file transfer), <strong>BgZero</strong> (AI background removal), and <strong>PDF Tools</strong> (document manipulation)—operate entirely in your web browser using HTML5 Canvas, WebAssembly, and WebRTC APIs. We do not store, copy, upload, or process your files or media on remote servers.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">2. Peer-to-Peer Data Transfer (Drop)</h2>
                    <p>When using Drop (drop.shiroya.in), files are transferred directly between peer devices over WebRTC with end-to-end DTLS encryption. Intermediary servers are used only for initial STUN connection negotiation and never inspect, store, or buffer your file contents.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">3. Cookies & Tracking</h2>
                    <p>We do not use tracking cookies, behavioral tracking scripts, nor advertising trackers. No personal identity or browser fingerprint is sold or shared with third-party advertisers or data brokers.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">4. External Links</h2>
                    <p>Our tools and documentation may reference external websites or open-source repositories. We encourage users to review the privacy policies of any third-party destinations they visit.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3">5. Contact & Privacy Inquiries</h2>
                    <p>For inquiries regarding our architecture, privacy principles, or security practices, contact architect Vraj Shiroya directly at <a href="mailto:vraj@shiroya.in" className="text-[#20E070] hover:underline font-mono">vraj@shiroya.in</a>.</p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
