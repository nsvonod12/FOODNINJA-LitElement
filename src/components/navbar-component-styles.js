import { css } from 'lit';

export const navbarStyles = css`

    p{ margin: 0; }

    .container{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        margin-top: 30px;
        height:100vh;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FCECDD;
        padding: 15px;
        font-family: "Lato", sans-serif;
    }

    .logo{
        font-size: 24px;
        color: #FF7D29;
        cursor: pointer;
    }

    .logo span{
        font-weight: 900;
    }

    .nav-btn{
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .nav{
        opacity: 0;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
        background-color: #fff;
        padding: 20px;
        width: 60%;
        gap: 10px;
        z-index: 1;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .nav.visible{
        opacity: 1;
        visibility: visible;
    }

    .nav-close{
        display: flex;
        justify-content: end;
    }

    .close-btn{
        background-color: transparent;
        padding: 5px 10px;
        border: none;
        font-size: 16px;  
        font-weight: bold;
        cursor: pointer;     
    }

    .nav-list{  
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-list li{
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        transition: background-color ease-in-out .5s;
    }

    .nav-list li:hover{
        background-color: #e1e1e1;
        cursor: pointer;
    }

    .nav-list li.active{
        background-color: #e1e1e1;
    }

    .nav-list li a{
        text-decoration: none;
        color:#000000;
        width: 100%;
        font-size: 18px;
    }

    @media (min-width: 475px){
        .nav{
            opacity: 0;
            visibility: hidden;
        }

        .nav-btn{
            display: block;
        }
    }

`