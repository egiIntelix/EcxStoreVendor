import { DefaultTheme } from 'react-native-paper';
export default {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        primary: '#1a6eb2',
        accent: '#F69621',
        funBlue: '#155EAD',
        sunShade: '#F69621',
        red: '#FE0000',
        black: '#000000',
        white: '#FFFFFF',
        limegreen: '#00BC1E',
        green: '#02A21C',
        westSide: '#FF9519',
        mercury: '#E5E5E5',
        pampas: '#F3F1ED',
        denim: '#1D6AC0',
        chetwodeBlue: '#7989EA',
        mandy: '#F36671',
        tulipTree: '#FFC146',
        mahogany: '#D44D4D',
        scarlet: '#ff1800',
        razzmatazz: '#D7004D',
        gray: '#909090',
        lightGray: '#D9D9D9',
        darkGray: '#787878',
        pink: '#F5C9C8',
    }
};

// color name ref : https://www.hexdictionary.com/color/ff1800