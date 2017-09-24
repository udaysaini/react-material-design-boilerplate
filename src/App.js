import React from 'react';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';

//supportive components
import Data from './mockData';
import './App.css';
import themeDefault from './default-theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//imported components
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { navDrawerOpen : true };    //Controls if the Navigation Drawer is open or close.
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({navDrawerOpen: nextProps.width === LARGE});
        }
    }

    handleNavDrawerToggle(){
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render(){
        let {navDrawerOpen} = this.state;
        const paddingLeftDrawerOpen =  themeDefault.drawer.width + 6 ;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };

        return(
            <MuiThemeProvider muiTheme={themeDefault}>
            <div>
                <Header styles={styles.header}
                        handleNavDrawerToggle={() => this.handleNavDrawerToggle()}
                />

                <LeftNavigation navDrawerOpen={navDrawerOpen}
                                username="UD11"
                                menus = {Data.menus}
                />

                <div style={styles.container}>
                    {this.props.children}
                </div>

            </div>
            </MuiThemeProvider>
        );

    }
}

App.propTypes = {
    width: PropTypes.number,
    children: PropTypes.element
};

export default withWidth()(App);