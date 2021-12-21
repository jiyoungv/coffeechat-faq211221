import React, { useState } from 'react';
import { Inners } from '../../styles/Common';
import { Faqs } from './Style';

function Faq () {
    const [depth1, setDepth1] = useState(0);
    const [depth2, setDepth2] = useState(0);

    return (
        <Faqs>
            <nav className="faq-nav">
                <Inners>
                    <ul className="faq-depth1-list faq-nav-list">
                        <li className="faq-nav-item active"><a href="#faq-intro"><b>커피챗 소개</b></a></li>
                        <li className="faq-nav-item"><a href="#faq-howto"><b>커피챗 이용 방법</b></a></li>
                    </ul>
                </Inners>
            </nav>
            <article className="faq-content">
                <ul className="faq-depth1-list faq-content-list">
                    <li className="faq-content-item active">
                        <span id="faq-intro" className="faq-link"></span>
                        <Inners>
                            <button type="button" className="faq-depth1-title"><b>커피챗 소개</b></button>
                        </Inners>
                        <ul className="faq-depth2-list">
                            <li className="faq-depth2-item active">
                                <Inners>
                                    <button type="button" className="faq-depth2-question">커피챗은 어떤 서비스인가요?</button>
                                    <div className="faq-depth2-answer">
                                        <p>텍스트1</p>
                                    </div>
                                </Inners>
                            </li>
                            <li className="faq-depth2-item">
                                <Inners>
                                    <button type="button" className="faq-depth2-question">질문1</button>
                                    <div className="faq-depth2-answer">
                                        <p>텍스트2</p>
                                    </div>
                                </Inners>
                            </li>
                        </ul>
                    </li>
                    <li className="faq-content-item">
                        <span id="faq-howto" className="faq-link"></span>
                        <Inners>
                            <button type="button" className="faq-depth1-title"><b>커피챗 이용 방법</b></button>
                        </Inners>
                        <ul className="faq-depth2-list">
                            <li className="faq-depth2-item active">
                                <Inners>
                                    <button type="button" className="faq-depth2-question">질문2</button>
                                    <div className="faq-depth2-answer">
                                        <p>텍스트3</p>
                                    </div>
                                </Inners>
                            </li>
                            <li className="faq-depth2-item">
                                <Inners>
                                    <button type="button" className="faq-depth2-question">질문3</button>
                                    <div className="faq-depth2-answer">
                                        <p>텍스트4</p>
                                    </div>
                                </Inners>
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>            
        </Faqs>
    );
}

export default Faq;