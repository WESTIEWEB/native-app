import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    btnContainer : {
        width: '40px',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.small / 1.25,
        backgroundColor: COLORS.white
    },
    btnImage: () => ({
        width: '60%',
        height: '60%',
        borderRadius: SIZES.small / 1.25,
    }),
});

export default styles;