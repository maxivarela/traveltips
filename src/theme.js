import { createMuiTheme } from '@material-ui/core/styles';
import { pink, teal } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: pink,
        error: {
            main: pink.A400,
        },
        background: {
            default: '#efefef',
        },
    },
    typography: {
        h5: {
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
        },
    },
});

export default theme;