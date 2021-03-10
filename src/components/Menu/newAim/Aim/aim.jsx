import React from 'react';
import * as S from './aim.styled';


class Aim extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <S.Aim>
                <h3>{ this.props.id }</h3>
                <p>
                    { this.props.params }
                </p>
                <p>
                    { this.props.other }
                </p>
            </S.Aim>
        );
    }
}

export default Aim;