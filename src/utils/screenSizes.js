import { useMediaQuery } from "react-responsive";

export function useScreenSizes() {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1025 });

    return { isMobile, isTablet, isDesktop };
}