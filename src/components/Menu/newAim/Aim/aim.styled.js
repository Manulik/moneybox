import styled from 'styled-components';

export const Aim = styled.div`
    width: 300px;
    height: 200px;
    background: #bbbbbb;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 30px;
    color: white;
    padding: 10px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    p {
        margin: 0;
        padding: 0;
        margin-top: 15px;
    }
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0px rgba(0,0,0,0);
        transition: .3s;
    }
    &:not(hover) {
        transition: .5s;
    }
`;