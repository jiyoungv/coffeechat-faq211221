import React, { useState } from 'react';
import { Faqs } from './Style';
import FaqNav from '../FaqNav';
import FaqContent from '../FaqContent';

function Faq () {
    const [selectDepth1, setSelectDepth1] = useState(0);
    const [openDepth1, setOpenDepth1] = useState(false);
    const [selectDepth2, setSelectDepth2] = useState(0);
    const [openDepth2, setOpenDepth2] = useState(false);

    return (
        <Faqs>
            <div>
            selectDepth1: {selectDepth1}<br/>
            openDepth1: {openDepth1 ? 'true' : 'false'}<br/>
            selectDepth2: {selectDepth2}<br/>
            openDepth2: {openDepth2 ? 'true' : 'false'}<br/>
            </div>
            <FaqNav 
                selectDepth1={selectDepth1}
                setSelectDepth1={setSelectDepth1}
                openDepth1={openDepth1}
                setOpenDepth1={setOpenDepth1}
                selectDepth2={selectDepth2}
                setSelectDepth2={setSelectDepth2}
                openDepth2={openDepth2}
                setOpenDepth2={setOpenDepth2}
            />
            <FaqContent 
                selectDepth1={selectDepth1}
                setSelectDepth1={setSelectDepth1}
                openDepth1={openDepth1}
                setOpenDepth1={setOpenDepth1}
                selectDepth2={selectDepth2}
                setSelectDepth2={setSelectDepth2}
                openDepth2={openDepth2}
                setOpenDepth2={setOpenDepth2}
            />
        </Faqs>
    );
}

export default Faq;