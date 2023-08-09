import React, { useState } from 'react';
import { Button, Input } from "../../components";

export const Home = (props) => {
    const { sendToCalculation } = props;
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();

    const handleClick = () => {
        //TODO add validation
        sendToCalculation(value1, value2);
    }

    return <div>
        <div className={"title"}>Hello!!! Let us calculate your numbers</div>
        <div className={"controls"}>
            <Input placeholder={"Number 1"} value={value1} onChange={setValue1} />
            <Input placeholder={"Number 2"} value={value2} onChange={setValue2} />
            <Button title={'Calculate'} onClick={handleClick} />
        </div>
    </div>;
}
