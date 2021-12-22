import React, { useState, useCallback } from 'react';
import { Inners } from '../../styles/Common';
import { FaqContents } from './Style';

function FaqContent ({ selectDepth1, setSelectDepth1, openDepth1, setOpenDepth1, selectDepth2, setSelectDepth2, openDepth2, setOpenDepth2 }) {
    const onClickFaqDepth1 = (depth1) => () => {
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
    };

    const onClickFaqDepth2 = (depth2) => () => {
        setSelectDepth2(depth2);
        setOpenDepth2(true);
    };

    return (
        <FaqContents>
            <ul className="faq-depth1-list faq-content-list">
                <li className={selectDepth1 === 1 && openDepth1 === true ? "faq-content-item open" : "faq-content-item"}>
                    <span id="faq-intro" className="faq-link"></span>
                    <Inners>
                        <button type="button" className="faq-depth1-title" onClick={onClickFaqDepth1(1)}><b>커피챗 소개</b></button>
                    </Inners>
                    <ul className="faq-depth2-list">
                        <li className={selectDepth1 === 1 && selectDepth2 === 1 && openDepth2 === true ? "faq-depth2-item open" : "faq-depth2-item"}>
                            <Inners>
                                <button type="button" className="faq-depth2-question" onClick={onClickFaqDepth2(1)}>커피챗은 어떤 서비스인가요?</button>
                                <div className="faq-depth2-answer">
                                    <p>텍스트1</p>
                                </div>
                            </Inners>
                        </li>
                        <li className={selectDepth1 === 1 && selectDepth2 === 2 && openDepth2 === true ? "faq-depth2-item open" : "faq-depth2-item"}>
                            <Inners>
                                <button type="button" className="faq-depth2-question" onClick={onClickFaqDepth2(2)}>질문1</button>
                                <div className="faq-depth2-answer">
                                    <p>텍스트2</p>
                                </div>
                            </Inners>
                        </li>
                    </ul>
                </li>
                <li className={selectDepth1 === 2 && openDepth1 === true ? "faq-content-item open" : "faq-content-item"}>
                    <span id="faq-howto" className="faq-link"></span>
                    <Inners>
                        <button type="button" className="faq-depth1-title" onClick={onClickFaqDepth1(2)}><b>커피챗 이용 방법</b></button>
                    </Inners>
                    <ul className="faq-depth2-list">
                        <li className={selectDepth1 === 2 && selectDepth2 === 1 && openDepth2 === true ? "faq-depth2-item open" : "faq-depth2-item"}>
                            <Inners>
                                <button type="button" className="faq-depth2-question" onClick={onClickFaqDepth2(1)}>질문2</button>
                                <div className="faq-depth2-answer">
                                    <p>텍스트3</p>
                                </div>
                            </Inners>
                        </li>
                        <li className={selectDepth1 === 2 && selectDepth2 === 2 && openDepth2 === true ? "faq-depth2-item open" : "faq-depth2-item"}>
                            <Inners>
                                <button type="button" className="faq-depth2-question" onClick={onClickFaqDepth2(2)}>질문3</button>
                                <div className="faq-depth2-answer">
                                    <p>텍스트4</p>
                                </div>
                            </Inners>
                        </li>
                    </ul>
                </li>
            </ul>
        </FaqContents>
    );
}

export default FaqContent;