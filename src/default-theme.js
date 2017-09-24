import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue600, grey900 } from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
    palette : {
        // primary1Color: blue100,
        // secondaryColor: faintBlack,
        // textColor:amber400 ,
        // accent1Color: faintBlack
    },
    appBar: {
        height: 57,
        color: blue600
    },
    drawer: {
        width: 230,
        color: grey900
    },
    raisedButton: {
        primaryColor: blue600,
    }
});

export default themeDefault;