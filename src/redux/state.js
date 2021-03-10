import { rerenderEntireTree } from '../render';

let state = {
    FormPage: {
        usersData: { userName: 'admin', password: 'vlastelin_vselennoy' }
    },
    AimsPage: {
        AimsData: [
            { id: 1, params: 'different params', other: 'some other things' },
            { id: 2, params: 'different params', other: 'some other things' },
        ]
    },
};



export let addAim = (params) => {
    const id = state.AimsPage.AimsData[state.AimsPage.AimsData.length-1].id+1;
    let newAim = {
        id: id,
        params: params,
        other: 'other'
    }
    state.AimsPage.AimsData.push(newAim);
    rerenderEntireTree(state);
}

export default state;