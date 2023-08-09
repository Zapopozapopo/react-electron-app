import React, { useState } from 'react';
import { Home, Result } from "./pages";
import { useIPC } from './hooks';

const HOME_PAGE = "HOME_PAGE";
const RESULT_PAGE = "RESULT_PAGE";

export default () => {
    const [currentPage, setCurrentPage] = useState(HOME_PAGE);
    const [result, setResult] = useState(0);

    const handleResponse = (response) => {
        setResult(response);
        setCurrentPage(RESULT_PAGE);
    }

    const { sendToCalculation } = useIPC(handleResponse);

    const goBack = () => {
        setResult(0);
        setCurrentPage(HOME_PAGE);
    }

    const renderPage = () => {
        if (currentPage === HOME_PAGE) return <Home sendToCalculation={sendToCalculation} />
        if (currentPage === RESULT_PAGE) return <Result result={result} goBack={goBack} />

        return null;
    }

    return <div>
        {renderPage()}
    </div>
}
