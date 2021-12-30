import React, { useState, useCallback } from 'react';
import parse from 'html-react-parser';
import { Inners } from '../../styles/Common';
import { Faqs } from './Style';
import faqData from '../../data/faqData';

const Faq = () => {
    const [selectDepth1, setSelectDepth1] = useState(0);
    const [selectDepth2, setSelectDepth2] = useState(0);
    const [openDepth1, setOpenDepth1] = useState(false);
    const [openDepth2, setOpenDepth2] = useState(false);

    const onClickFaqDepth1 = useCallback((depth1) => () => {
        if (depth1 === selectDepth1 && openDepth1 === true) {
            setSelectDepth1(0);
            setOpenDepth1(false);
            setSelectDepth2(0);
            setOpenDepth2(false);
        }
        if (depth1 !== selectDepth1) {
            setSelectDepth1(depth1);
            setOpenDepth1(true);
            setSelectDepth2(0);
            setOpenDepth2(false);
        }
    }, [selectDepth1, setSelectDepth1, setSelectDepth2, openDepth1, setOpenDepth1, setOpenDepth2]);

    const onClickFaqDepth2 = useCallback((depth2) => () => {
        setSelectDepth2(depth2);
        setOpenDepth2(true);

        if (depth2 === selectDepth2) {
            setSelectDepth2(0);
            setOpenDepth2(false);
        }
    }, [selectDepth2, setSelectDepth2, setOpenDepth2]);

    return (
        <Faqs>
            <ul className="faq-depth1-list faq-content-list">
                {faqData.map((data, index) => {
                    return (
                        <li 
                            key={data.id}
                            className={selectDepth1 === (index + 1) && openDepth1 === true 
                                ? "faq-content-item open" 
                                : "faq-content-item"
                            }
                        >
                            <div id={data.href} className="faq-content-link"></div>
                            <Inners>
                                <a href={'#' + data.href} className="faq-depth1-title" onClick={onClickFaqDepth1(index + 1)}>
                                    <b>{data.title}</b>
                                </a>
                            </Inners>
                            <ul className="faq-depth2-list">
                                {data.list.map((list, index2) => {
                                    return (
                                        <li 
                                            key={list.question} 
                                            className={selectDepth1 === (index + 1) && selectDepth2 === (index2 + 1) && openDepth2 === true 
                                                ? "faq-depth2-item open" 
                                                : "faq-depth2-item"
                                            }
                                        >
                                            <Inners>
                                                <button type="button" className="faq-depth2-question" onClick={onClickFaqDepth2(index2 + 1)}>{list.question}</button>
                                                <div className="faq-depth2-answer">
                                                    {parse(list.answer)}
                                                </div>
                                            </Inners>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </Faqs>
    );
};

export default Faq;