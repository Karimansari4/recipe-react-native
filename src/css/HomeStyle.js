const { StyleSheet } = require("react-native");
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeStyle = StyleSheet.create({
    backgrouImage: {
        width: wp(100),
        height: "100%"
    },
    searchView: {
        width: wp(100),
    },
    serachInput: {
        flex: 1,
        marginTop: hp(10),
    },
})

export default HomeStyle