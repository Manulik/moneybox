import React from 'react';
import * as S from './menu.styled';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NewAim from './newAim/newAim';


class Menu extends React.Component {
    constructor() {
        super();
        
    }
    render(){
        return(
            <S.Menu>
                <h1>Menu</h1>
                <div>
                    <ul>
                            <Link to="/newaim">Create aim</Link>
                            <Link>My aim</Link>
                            <Link>Create aim</Link>
                            <Link>Create aim</Link>
                            <Link>Create aim</Link>
                    </ul>
                </div>
            </S.Menu>
        );
    }
}


export default Menu;