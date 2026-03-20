import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';

export const useSectionNavigation = () => {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();

    // Handle scroll after cross-page navigation
    useEffect(() => {
        if (pathname === '/' && state?.scrollTo) {
            // Tiny delay to ensure the page is rendered before scrolling
            const timer = setTimeout(() => {
                scrollToSection(state.scrollTo);
                // Clear state after scroll
                navigate('/', { state: {}, replace: true });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname, state, navigate]);

    const goToSection = (sectionId) => {
        if (pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    return { goToSection };
};
export default useSectionNavigation;
