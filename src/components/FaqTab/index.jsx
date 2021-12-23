import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Inners } from '../../styles/Common';
import { FaqTabs } from './Style';
import faqData from '../../data/faqData';

const FaqTab = ({ selectDepth1, setSelectDepth1, setSelectDepth2, setOpenDepth1, setOpenDepth2 }) => {
    const onClickFaqTab = useCallback((number) => () => {
        setSelectDepth1(number);
        setOpenDepth1(true);

        if (number !== selectDepth1) {
            setSelectDepth2(0);
            setOpenDepth2(false);
        }
    }, [selectDepth1, setSelectDepth1, setSelectDepth2, setOpenDepth1, setOpenDepth2]);

    return (
        <FaqTabs>
            <Inners tablet>
                <ul className="faq-depth1-list faq-tab-list">
                    {faqData.map((data, index) => {
                        return (
                            <li key={data.id} className={selectDepth1 === (index + 1) ? "faq-tab-item active" : "faq-tab-item"}>
                                <a href={'#' + data.href} title={data.title} onClick={onClickFaqTab(index + 1)}>
                                    <b>{data.title}</b>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </Inners>
        </FaqTabs>
    );
};

FaqTab.propTypes = {
    selectDepth1: PropTypes.number,
    setSelectDepth1: PropTypes.func,
    setSelectDepth2: PropTypes.func,
    setOpenDepth1: PropTypes.func,
    setOpenDepth2: PropTypes.func,
};

export default FaqTab;