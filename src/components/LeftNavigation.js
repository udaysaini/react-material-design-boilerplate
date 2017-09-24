import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';

import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';

let imageURL = require('../images/material_bg.png') ;
let imageURL2 = require('../images/manager.png');

class LeftNavigation extends React.Component{
    render(){
        let {navDrawerOpen} = this.props;

        const styles = {
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: blue600,
                //paddingLeft: 40,
                textAlign : 'center' ,
                height: 56,
            },
            menuItem: {
                color: white,
                fontSize: 14
            },
            navigationBlock :{
                div :{
                    padding: '15px 0 20px 15px',
                    backgroundImage:  `url(${imageURL})`, //ES6 syntax.
                    height: 45
                },
                icon:{
                    float: 'left',
                    display: 'block',
                    marginRight: 20,
                    boxShadow: '0px 0px 0px 5px rgba(0,0,0,0.5)'
                },
                usernameTag: {
                    paddingTop: 15,
                    display: 'block',
                    color: 'white',
                    //fontWeight: 300,
                    textShadow: '1px 1px #000'
                }
            }
        };

        return(
            <Drawer
                open={navDrawerOpen}
                zDepth={3}
            >
                <div style={styles.logo}>
                    Material Design
                </div>
                <div style={styles.navigationBlock.div}>
                    <Avatar
                        src="https://image.flaticon.com/icons/svg/505/505408.svg"
                        size={50}
                        style={styles.navigationBlock.icon}
                    />
                    <span style={styles.navigationBlock.usernameTag}> {this.props.username} </span>
                </div>
                <div>
                    {this.props.menus.map((menu, index) =>(
                        <MenuItem key={index}
                                  leftIcon={menu.icon}
                                  primaryText={menu.text}
                                  style={styles.menuItem}
                                  onTouchTap={() => {console.log('Menu item clicked : ', menu.text)}}
                                  containerElement={<Link to={menu.link} />}
                        />
                        )
                    )}
                </div>

            </Drawer>
        )
    }
}

LeftNavigation.propTypes = {
    navDrawerOpen: PropTypes.bool,
    username: PropTypes.string,
    menus: PropTypes.array
};

export default LeftNavigation;