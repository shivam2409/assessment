import styled from "styled-components";
import Cards from "./Cards";
import Dropbox from "./Dropbox";

const DashboardStyles = styled.div`
    margin-left: 200px;
    padding: 40px;
`

const Dashboard = () => {
    return (
        <DashboardStyles>
            <Dropbox />
            <Cards />
        </DashboardStyles>
    );
}

export default Dashboard;
