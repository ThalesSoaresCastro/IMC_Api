import styled from  'styled-components'

export const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#4169e1;
    flex-direction:column;
`;

export const TitleView = styled.div`
    height:10%;
    width:100%;
    background-color:transparent;
    justify-content: center;
    align-items:center;
`;
export const TitleFont = styled.h1`
    font-size: 32px;
    font-weight:bold;
    color:white;
    text-align: center;
    justify-content:center;
    align-items:center;
`;

export const ViewFormulario = styled.div`
    height: 70%;
    width:40%;
    background-color:#e5e4fb;
    border-width:2px;
    border-radius:3px;
    border-color:black;
    box-shadow: 5px 5px 5px #000;
`;

export const ViewInfos = styled.div`
    width:100hv;
    height:5%;
    flex-direction:row;
    background-color:transparent;
    align-items:center;
    justify-content:center;
    margin-top:2px;
    padding-left:8%;
    padding-top:5%;
`;

export const LabelInfo = styled.label`
    font-size: 14px;
    font-weight:bold;
    color:black;
    text-align: center;
    margin-left:2%;
`;


export const InputInfo = styled.input`
    font-size:14px;
    color: black;
    text-align: center;
    justify-content:center;
    align-items:center;
    width:40%;
    background-color:white;
    margin-left:1%;
    border:3px;
    border-radius:3px;
    border-color: ${props =>props.onClick ?'blue' : 'red'};
`;

export const ButtonConfirm = styled.button`
    width:40%;
    height:80%;
    align-items:center;
    justify-content:center;
    background-color:#8792ed;
    margin-left:25%;
    border-radius:4px;
    border:2px;
`;


export const ViewResult = styled.div`
    height:50%;
    width:100%;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    flex-direction:column;
`;

export const ViewButton = styled.div`
    width:100hv;
    height:10%;
    flex-direction:row;
    background-color:transparent;
    align-items:center;
    justify-content:center;
    margin-top:1.5%;
    padding-left:8%;
    padding-top:0.2%;
    border:transparent;
`;

export const LabelButton = styled.label`
    font-size: 18px;
    font-weight:bold;
    color:white;
    text-align: center;
    margin-left:2%;
`;

export const TextError = styled.p`
    font-size: 12px;
    font-weight:bold;
    color:red;
    text-align: center;
    justify-content:center;
    padding:10%;
    background-color:transparent;
`;

export const OptionsForm = styled.select`
    background-color: #8792ed;
    margin-left:4%;
    border-radius:2px;
    border:transparent;
    height:100%;
    width:20%;
`;


export const TextIMC = styled.p`
    font-size:16px;
    font-weight:bold;
    text-align:center;
    justify-content:center;
`;

export const TextDescription = styled.p`
    font-size:14px;
    font-weight:bold;
    text-align:center;
    justify-content:center;
`;

export const ViewAnimation = styled.div`
    height:60%;
    width:60%;
    align-items:center;
    justify-content:center;
    margin-left:20%;
    margin-top:4%;
    background-color:transparent;
`;

