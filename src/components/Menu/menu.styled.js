import styled from 'styled-components';

export const Menu = styled.div`
    width: 500px;
    height: 500px;
    background-color: grey;
    margin: 0 auto;
    color: #bbbbbb;
    padding: 10px;
    border-radius: 5px;
    h1 {
        margin: 0;
        padding: 0;
        font-size: 50px;
        text-align: center;
    }
    a {
        font-size: 2rem;
        width: 200px;
        color: white;
        text-decoration: none;
        color: white;
        display: block;
        margin-bottom: 10px;
        &:hover {
            text-decoration: underline;
            transition: .3s;
            color: #ADA9A8;
        }
        &:not(hover) {
            transition: 1s;
            color: white;
        }
    }
    &:hover {
        width: 1000px;
        cursor: pointer;
        transition: .5s;
        color: white;
        h1 {
            font-size: 60px;
            transition: .25s;
        }

    }
    &:not(hover) {
        transition: .7s;
        h1 {
            font-size: 50px;
            transition: .2s;
        }
    }
`;