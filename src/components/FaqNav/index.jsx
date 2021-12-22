import React from 'react';
import { Inners } from '../../styles/Common';
import { FaqNavs } from './Style';

function FaqNav ({ selectDepth1, setSelectDepth1, openDepth1, setOpenDepth1, selectDepth2, setSelectDepth2, openDepth2, setOpenDepth2 }) {
    const onClickFaqNav = (number) => () => {
        setSelectDepth1(number);
        setOpenDepth1(true);
        if (number !== selectDepth1) {
            setSelectDepth2(0);
            setOpenDepth2(false);
        }
    }

    return (
        <FaqNavs>
            <Inners>
                <ul className="faq-depth1-list faq-nav-list">
                    <li className={selectDepth1 === 1 ? "faq-nav-item active" : "faq-nav-item"}>
                        <a href="#faq-intro" title="커피챗 소개" onClick={onClickFaqNav(1)}>
                            <b>커피챗 소개</b>
                        </a>
                    </li>
                    <li className={selectDepth1 === 2 ? "faq-nav-item active" : "faq-nav-item"}>
                        <a href="#faq-howto" title="커피챗 이용 방법" onClick={onClickFaqNav(2)}>
                            <b>커피챗 이용 방법</b>
                        </a>
                    </li>
                </ul>
            </Inners>
        </FaqNavs>
    );
}

export default FaqNav;