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
            <S.NewAim>
                <h2>Create new Aim</h2>
                <S.NewAimForm>
                    <div>
                        <input type="text" ref={ newAimParams } placeholder="Enter the aim" />
                    </div>
                    <S.Button type="submit" onClick={ addAim } >Add aim</S.Button>
                </S.NewAimForm>
                <div>
                    { aims }
                </div>
            </S.NewAim>
        );
    }
}

export default NewAim;