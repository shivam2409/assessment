import styled from 'styled-components';

const NavStyles = styled.div`
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
  position: sticky;
  top: 0;
  background: #f7fafc;

  button {
    width: 90px;
    height: 30px;
    background: #2569e6;
    border-radius: 7px;
    border: 0;
    color: white;
    margin-top:5px;
    font-size:12px
  }

  .icons {
    display: flex;
    margin-left: 4px;
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font: normal normal normal 14px/17px Roboto;
      text-align: center;
      line-height: 30px;
    }
  }
`;
const Nav = () => {
  return (
    <NavStyles>
      <button>Button1</button>
      <div className='icons'>
        <div className='icon'>
          <a className='nav-link' >
            <i className='fas fa-info-circle'></i>
          </a>
        </div>
        <div className='icon'>
          <a className='nav-link' >
            <i className='fas fa-bell'></i>
          </a>
        </div>
        <div className='icon'>
          <a className='nav-link'>
            <i className='fas fa-user'></i>
          </a>
        </div>
        <div className='dropdown'>
          <a
            className='dropdown-toggle'
            style={{ cursor: 'pointer', textDecoration: 'none' }}
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Name
          </a>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <a className='dropdown-item' >
                <i className='fas fa-handshake'></i>
                {'  '}Menu 1
              </a>
            </li>
            <li>
              <a className='dropdown-item' >
                <i className='fas fa-handshake'></i>
                {'  '}Menu 2
              </a>
            </li>
            <li>
              <a className='dropdown-item' >
                <i className='fas fa-handshake'></i>
                {'  '}Menu 3
              </a>
            </li>
            <li>
              <a className='dropdown-item' >
                Progress Bar
                (1500/2000)
              </a>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped progress-bar-animated'
                  role='progressbar'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: '75%' }}
                ></div>
              </div>
            </li>
            <li>
              <a className='dropdown-item' >
              <i class="fas fa-sign-out-alt"></i>
                {'  '}Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Nav;
