import React from 'react';
import * as S from './newAim.styled';
import Aim from './Aim/aim';

class NewAim extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let aims = this.props.state.AimsPage.AimsData.map(aim => <Aim params={ aim.params } id={ aim.id } other={ aim.other } />);
        let addAim = () => {
            let params = newAimParams.current.value;
            this.props.addAim(params);
            console.log(this.props.addAim);
            newAimParams.current.value = '';
        }
        let newAimParams = React.createRef();
        return(
            <S.newAim>
                <h1>Create new Aim</h1>
                <textarea ref={ newAimParams } ></textarea>
                <input type="submit" value="add aim" onClick={ addAim } />
                <div>
                    { aims }
                </div>
            </S.newAim>
        );
    }
}

export default NewAim;