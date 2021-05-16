import { useState } from "react";
import styled from "styled-components";

const DropboxStyles = styled.div`
    height: ${({ height }) => height ? 'auto' : '70px'};
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    padding: 0 20px;
    header {
        display: flex;
        padding: 16px 0;
        justify-content: space-between;
        align-items: center;
        height: 70px;

        h1 {
            padding-left:15px;
            font-size:35px
        }

        button {

        }
    }
    `;

const ContentStyles = styled.div`
    border-top: 1px solid;

    .columns {
        display: grid;
        grid-template-columns: 1fr 1px 1fr 1px 1fr;
        margin: 30px 0;
        grid-gap: 5%;

        .line{
            height: 100%;
            width: 1px;
            background: black;
        }
    }
`;

const Dropbox = () => {

    const [dropBoxOpen, setDropBoxOpen] = useState(false);

    return (
        <DropboxStyles height={dropBoxOpen}>
            <header>
                <h1>Lorem Ipsum</h1>
                <a onClick={() => setDropBoxOpen((prev) => !prev)}><i class="fas fa-chevron-down"></i></a>
            </header>
            {
                dropBoxOpen && <ContentStyles>
                    <div className="columns">
                        <div className="column">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eligendi laborum adipisci architecto neque, doloremque placeat debitis sit minima, ut maxime deserunt nemo in cupiditate culpa obcaecati. Accusantium non quos, ipsam, fugiat suscipit modi nisi corrupti nostrum nesciunt neque minima.</p>
                        </div>
                        <div className="line"></div>
                        <div className="column">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eligendi laborum adipisci architecto neque, doloremque placeat debitis sit minima, ut maxime deserunt nemo in cupiditate culpa obcaecati. Accusantium non quos, ipsam, fugiat suscipit modi nisi corrupti nostrum nesciunt neque minima.</p>
                        </div>
                        <div className="line"></div>
                        <div className="column">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eligendi laborum adipisci architecto neque, doloremque placeat debitis sit minima, ut maxime deserunt nemo in cupiditate culpa obcaecati. Accusantium non quos, ipsam, fugiat suscipit modi nisi corrupti nostrum nesciunt neque minima.</p>
                        </div>
                    </div>
                </ContentStyles>
            }

        </DropboxStyles>
    );
}

export default Dropbox;
