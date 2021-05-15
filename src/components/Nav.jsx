import styled from "styled-components";


const NavStyles = styled.div`
    height: 60px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;
    position: sticky;
    top: 0;
    background: #F7FAFC;
    
    button{
        width: 123px;
        height: 41px;
        background: #2569E6;
        border-radius: 7px;
        border: 0;
        color: white;
    }
    
    .icons{
        display: flex;
        margin-left: 4px;
        .icon{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: grey;
            margin-left: 12px;
            font: normal normal normal 14px/17px Roboto;
            text-align: center;
            line-height: 30px
        }
    }
`
const Nav = () => {
    return (
        <NavStyles>
            <button>Button1</button>
            <div className="icons">
                <div className="icon">1</div>
                <div className="icon">2</div>
                <div className="icon">3</div>

            </div>
        </NavStyles>
    );
}

export default Nav;
