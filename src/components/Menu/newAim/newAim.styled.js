import styled from 'styled-components';

export const NewAim = styled.div`
    h2 {
        color: white;
        font-size: 2rem;
        text-align: center;
        margin: 0;
        padding: 0;
    }
`;

export const NewAimForm = styled.div`
    width: 50%;
    min-height: 400px;
    background: orange;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    input {
        width: 300px;
        height: 30px;
        border: none;
        border-radius: 3px;
        ::placeholder {
            text-align: center;
            font-size: 15px;
            color: #bbbbbb;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`;

export const Button = styled.button`
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    width: 100px;
    height: 30px;
    background: white;
    color: grey;
    outline: none;
    &:hover {
        cursor: pointer;
        background: #EFECEB;
    }
`;