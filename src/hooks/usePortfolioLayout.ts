import { useWindowDimensions } from 'react-native';

export const usePortfolioLayout = () => {
  const { width } = useWindowDimensions();

  return {
    isTablet: width < 900,
    isMobile: width < 680,
    width,
  };
};
