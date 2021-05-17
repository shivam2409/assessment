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
    width: 123px;
    height: 41px;
    background: #2569e6;
    border-radius: 7px;
    border: 0;
    color: white;
    margin-top: 5px;
    font-size: 12px;
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
      <div class='btn-group'>
        <div className='icons dropdown'>
          <div className='icon'>
            <a
              className='nav-link'
              class='dropdown'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='fas fa-info-circle'></i>
            </a>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li className='item-border'>
              <a className='dropdown-item'>
              <i class="fas fa-mobile"></i>
                {'  '}Menu Option 1
              </a>
            </li>
            <li className='item-border'>
              <a className='dropdown-item'>
              <i class="fas fa-mobile"></i>
                {'  '}Menu Option 2
              </a>
            </li>
            <li className='item-border'>
              <a className='dropdown-item'>
              <i class="fas fa-mobile"></i>
                {'  '}Menu Option 3
              </a>
            </li>
            <li className='item-border pBar-color '>
              <a className='dropdown-item'>
                <span className='pg-bar'>RESOURCES</span>
              </a>
            </li>
            <li className='item-border'>
              <a className='dropdown-item'>
              <i class="fas fa-mobile"></i>
                {'  '}Menu Option 4
              </a>
            </li>
          </ul>
          </div>
          <div className='icon'>
            <a
              className='nav-link'
              class='dropdown'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='fas fa-bell'></i>
            </a>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li className='item-border wrapper-dp'>
              <a className='dropdown-item'>
                <p>
               <i class="fas fa-exclamation-circle"></i>

                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry.
                </p>
              </a>
            </li>
            <li className='item-border  wrapper-dp'>
              <a className='dropdown-item'>
              <p>
               <i class="fas fa-exclamation-circle"></i>

                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry.
                </p>
              </a>
            </li>
            <li className='item-border  wrapper-dp'>
              <a className='dropdown-item'>
              <p>
               <i class="fas fa-exclamation-circle"></i>

                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry.
                </p>
              </a>
            </li>
          
          </ul>
          </div>

          <div className='icon'>
            
               <i className='fas fa-user'></i>
            
           
          </div>

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
            <li className='item-border'>
              <a className='dropdown-item'>
                <i className='fas fa-handshake'></i>
                {'  '}Menu 1
              </a>
            </li>
            <li className='item-border'>
              <a className='dropdown-item'>
                <i className='fas fa-handshake'></i>
                {'  '}Menu 2
              </a>
            </li>
            <li className='item-border'>
              <a className='dropdown-item'>
                <i className='fas fa-handshake'></i>
                {'  '}Menu 3
              </a>
            </li>
            <li className='item-border pBar-color '>
              <a className='dropdown-item'>
                <span className='pg-bar'>Progress Bar</span>
                (1500/2000)
              </a>
              <div className='container '>
                <div className='progress'>
                  <div
                    className=' progress-bar progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    aria-valuenow='75'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <a className='dropdown-item'>
                <i class='fas fa-sign-out-alt'></i>
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
