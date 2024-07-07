import { css } from 'lit';

export const cardRecipeStyles = css`

    h3, p{ margin: 0; }

    .no-recipes{
        font-family: "Lato", sans-serif;
        opacity: 40%;
        text-align: center;
    }

    .card{
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 10px;
        background-color: #fff;
        margin-bottom: 15px;
        overflow: hidden;
    }

    .card-info{
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 100%;
        overflow: hidden;
    }

    .card-img{
        max-width:100%;
        width: 100px;
        display: block;
    }

    .card-text{
        font-family: "Lato", sans-serif;
        flex-grow: 1;
    }

    .card-text h3{
        opacity: 55%;
        font-weight: 900;
        margin-bottom: 5px;
    }

    .card-text p{
        opacity: 45%;
        font-size: 14px;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
    }

    .card-delete {
        width: 100%;
        display: flex; 
        justify-content: end;
        padding-top: 5px;           
    }

    .card-delete button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        text-align: end;
    }

    .add{
        text-align: center;
        width: 100%;
        margin: 20px 0;
    }

    .add-btn{
        border: none;
        background-color:transparent;
        cursor:pointer;
        stroke:#FF9A00;
    }

    .modal, .completed{
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    }

    .form{
        display: flex;
        flex-direction: column;
        width: 60%;
        background-color: #fff;
        padding: 20px;
        font-family: "Lato", sans-serif;
        border-radius: 10px;
    }

    .close{
        display: flex;
        justify-content: end;
    }

    .close-btn{
        cursor: pointer;
        border: none;
        background-color: transparent;
        display: flex;
        text-align:center;
        font-weight: 900;
        margin-bottom: 10px;
    }

    .form h3{
        margin-bottom: 10px;
    }

    .form > input{
        border: 1px solid #e1e1e1; 
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }

    .form > label{
        margin: 8px 0;
    }

    .form-add{
        border: none;
        padding: 10px;
        background-color:#FF9A00;
        text-transform: uppercase;
        margin-top: 20px;
        cursor: pointer;
        color: #FFFFFF;
        transition: background-color ease-in-out .3s;
    }

    .form-add:hover{
        background-color: #FF6701;
    }

    .error{
        color: red;
        padding: 10px;
        text-align: center;
        text-transform: uppercase;
        font-size: 12px; 
        font-weight: 500;
    }

    .completed-message{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        padding: 30px;
        height: 100px;
    }
    
    .completed-message svg{
        padding: 10px 0;
    }
`