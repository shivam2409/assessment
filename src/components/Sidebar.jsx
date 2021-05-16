import styled from "styled-components";

const SidebarStyles = styled.div`
    width: 200px;
    height: 100%;
    position: fixed;
    background: white;
    top: 0;
    left: 0;

    h2{
        font: normal normal 600 30px/46px Poppins;
        letter-spacing: 0px;
        color: #000000;
        height: 70px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        padding-left: 30px;

    }

    .menu-list-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 60px);
        padding-bottom: 16px;
        .menu-list{
        
            ul {
                margin-bottom: 10px;
                padding-left: 30px;
                list-style: none;
                margin-top: 30px;
                
                h1{
                    font: normal normal normal 15px/23px Poppins;
                    letter-spacing: 0px;
                    color: #000000;
                }
                
                li {
                   padding-left:10px;
                   font: normal normal normal 13px/20px Poppins;
                }
            }
        }
    
        h3 {
            padding-left: 30px;
        }
    }
    
`

const Sidebar = () => {
    return (
        <SidebarStyles>
            <h2 className='name'>LOGO</h2>
            <div className="menu-list-wrapper">
                <div className="menu-list">
                    <ul>
                        <h1>Heading 1</h1>
                        <li><i class='fas fa-th-large'></i> Menu Option 1</li>
                        <li><i class='fas fa-th-large'></i> Menu Option 2</li>
                        <li><i class='fas fa-th-large'></i> Menu Option 3</li>
                    </ul>
                    <ul>
                        <h1>Heading 2</h1>
                        <li><i class='fas fa-th-large'></i> Menu Option 1</li>
                        <li><i class='fas fa-th-large'></i> Menu Option 2</li>
                    </ul>
                    <ul>
                        <h1>Heading 3</h1>
                        <li><i class='fas fa-th-large'></i> Menu Option 1</li>
                        <li><i class='fas fa-th-large'></i> Menu Option 2</li>
                    </ul>
                    <ul>
                        <h1>Heading 4</h1>
                        <li><i class='fas fa-th-large'></i> Menu Option 1</li>
                        <li><i class='fas fa-th-large'></i> Menu Option 2</li>
                    </ul>
                </div>
                <h1 className='Lo'>
              <i class="fas fa-sign-out-alt"></i>
                    Logout</h1>
            </div>
        </SidebarStyles>
    );
}

export default Sidebar;
