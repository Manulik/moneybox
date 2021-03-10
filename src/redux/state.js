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
    let newAim = {
        id: 3,
        params: params,
        other: 'other'
    }
    state.AimsPage.AimsData.push(newAim);
    console.log(state.AimsPage.AimsData);
}

export default state;