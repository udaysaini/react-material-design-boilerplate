import React from 'react';

//AppBar
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';


class Header extends React.Component{
    render(){
        const {styles, handleNavDrawerToggle} = this.props;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57
            },
            menuIcon : {
                marginLeft:10
            }
        };

        return(
            <div>
                <AppBar
                    style={{...styles, ...style.appBar}}
                    title="NIC Punjab"
                    iconElementLeft={
                        <IconButton style={style.menuIcon} onClick={handleNavDrawerToggle} >
                            <Menu color={'#ffffff'} />
                        </IconButton>
                    }
                />
            </div>
        )
    }

}

export default Header;