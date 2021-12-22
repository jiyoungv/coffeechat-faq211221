import React, { useState } from 'react';
import { Faqs } from './Style';
import FaqTab from '../FaqTab';
import FaqContent from '../FaqContent';

const Faq = () => {
    const [selectDepth1, setSelectDepth1] = useState(0);
    const [selectDepth2, setSelectDepth2] = useState(0);
    const [openDepth1, setOpenDepth1] = useState(false);
    const [openDepth2, setOpenDepth2] = useState(false);

    return (
        <Faqs>
            <FaqTab 
                selectDepth1={selectDepth1} setSelectDepth1={setSelectDepth1}
                selectDepth2={selectDepth2} setSelectDepth2={setSelectDepth2}
                openDepth1={openDepth1} setOpenDepth1={setOpenDepth1}
                openDepth2={openDepth2} setOpenDepth2={setOpenDepth2}
            />
            <FaqContent 
                selectDepth1={selectDepth1} setSelectDepth1={setSelectDepth1}
                selectDepth2={selectDepth2} setSelectDepth2={setSelectDepth2}
                openDepth1={openDepth1} setOpenDepth1={setOpenDepth1}
                openDepth2={openDepth2} setOpenDepth2={setOpenDepth2}
            />
        </Faqs>
    );
};

export default Faq;