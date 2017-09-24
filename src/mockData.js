import React from 'react';

//Icons
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import Book from 'material-ui/svg-icons/action/book';

const data = {
    menus: [
        {text: 'Form Page', icon: <Web/>, link: '/form'},
        {text: 'Redux Form Page', icon: <Book/>, link: '/reduxform'},
        {text: 'Table Page', icon: <GridOn/>, link: '/table'},
        {text: 'Login Page', icon: <PermIdentity/>, link: '/login'},
        {text: 'Error Page', icon: <Assessment/>, link: '/homepage'},
    ],
    tablePage: {
        items: [
            {id: 1, name: 'Xiaomi Mi5X', price: '$250.00', category: 'Budget'},
            {id: 2, name: 'Samsung Note 8', price: '$800.00', category: 'Top Tier'},
            {id: 3, name: 'Samsung Galaxy 8', price: '$850.00', category: 'Top Tier'},
            {id: 4, name: 'OnePlus 5', price: '$380.00', category: 'Flagship Killer'},
            {id: 5, name: 'Meizu A5', price: '$250.00', category: 'Budget'},
            {id: 6, name: 'Xiaomi Mi6', price: '$350.00', category: 'Flagship Killer'},
            {id: 7, name: 'Google Pixel', price: '$750.00', category: 'Top Tier'},
            {id: 8, name: 'Turing Phone', price: '$750.00', category: 'Performance Elegance'}
        ]
    },
};

export default data;