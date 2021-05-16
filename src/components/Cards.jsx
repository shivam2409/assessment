import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";


const CardsWrapperStyles = styled.div`

    .btn-wrapper {
        margin: 20px 0;
       
    }

    .cards-wrapper {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 20px;
    }

`;

const CardStyles = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 5px #0000000D;
    border-radius: 6px;
    opacity: 1;
    padding: 20px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    width: 270px;
    height: 58px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid ${({ selected }) => selected ? '#2569E6' : 'grey'};
    border-radius: 7px;
    opacity: 1;
    margin-right: 20px;
    color: ${({ selected }) => selected ? '#2569E6' : 'grey'};
    font-weight: bold;
`

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

const CardsWrapper = () => {

    const [tab1Cards] = useState(['T1 C1', 'T1 C2', 'T1 C3', 'T1 C4']);
    const [tab2Cards] = useState(['T2 C1', 'T2 C2']);

    const [content, setContent] = useState(tab1Cards);

    const [tab, setTab] = useState(1);

    const [open, setOpen] = useState(false);
    const [dateRange, setDateRange] = useState({});

    const toggle = () => setOpen(!open);


    useEffect(() => {
        setContent(tab === 1 ? tab1Cards : tab2Cards)
    }, [tab])

    const tabClickHandler = (e) => setTab(+e.target.name);

    return (
        <CardsWrapperStyles>
            <div className="btn-wrapper">
                <Button onClick={tabClickHandler} selected={tab === 1} name="1"><i class="fas fa-spinner-third"></i>Tab 1</Button>
                <Button onClick={tabClickHandler} selected={tab === 2} name="2">Tab 2</Button>
            </div>
            <div className="cards-wrapper">
                {
                    content.map((card) => <CardStyles>{card}</CardStyles    >)
                }
            </div>
            <CardStyles>
                <div className='cardHeading'>
                <h3>Analytics</h3>
                <button onClick={() => setOpen(true)}>Calendar</button>
                <div className='headingList'>
                    <h4>Heading1</h4>
                    <p>24,350</p>
                </div>
                <div className='headingList'>
                    <h4>Heading2</h4>
                    <p>12,360</p>
                </div>
                <div className='headingList'>
                    <h4>Heading3</h4>
                    <p>10,671</p>
                </div>
                <div className='headingList'>
                    <h4>Heading4</h4>
                    <p>6,562</p>
                </div>
                </div>
                <LineChart width={1000} height={456} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </CardStyles>
            <DateRangePicker
                open={open}
                toggle={toggle}
                onChange={(range) => setDateRange(range)}
                closeOnClickOutside={true}
            />
        </CardsWrapperStyles>
    );
}

export default CardsWrapper;
