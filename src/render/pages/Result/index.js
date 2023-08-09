import React from 'react';
import { Button } from "../../components";

export const Result = (props) => {
    const { result, goBack } = props;
    return <div>
        <div className={"title"}>Here is your result: {result}</div>
        <div className={"controls"}>
            <Button title={'Go Back'} onClick={goBack} />
        </div>
    </div>;
}
