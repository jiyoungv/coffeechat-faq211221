import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/free-mode";
// import "swiper/css/pagination"
// import SwiperCore, { FreeMode } from 'swiper';
import { Inners } from '../../styles/Common';
import { FaqTabs } from './Style';
import faqData from '../../data/faqData';
// import { IsMobile } from '../../utils/mediaQuery';

// SwiperCore.use([FreeMode]);

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
            <Inners tabletType2 mobileType2>
                {/* {IsMobile()
                    ? <Swiper
                        slidesPerView={'auto'}
                        freeMode={true}
                        className='faq-depth1-list faq-tab-list'
                    >                    
                        {faqData.map((data, index) => {
                            return (
                                <SwiperSlide key={data.id}>
                                    <div className={selectDepth1 === (index + 1) ? "faq-tab-item active" : "faq-tab-item"}>
                                        <a href={'#' + data.href} title={data.title} onClick={onClickFaqTab(index + 1)}>
                                            <b>{data.title}</b>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    : <div className="faq-depth1-list faq-tab-list">
                        {faqData.map((data, index) => {
                            return (
                                <div key={data.id} className={selectDepth1 === (index + 1) ? "faq-tab-item active" : "faq-tab-item"}>
                                    <a href={'#' + data.href} title={data.title} onClick={onClickFaqTab(index + 1)}>
                                        <b>{data.title}</b>
                                    </a>
                                </div>
                            );
                        })}
                    </div>                    
                } */}

                <div className="faq-depth1-list faq-tab-list">
                    {faqData.map((data, index) => {
                        return (
                            <div key={data.id} className={selectDepth1 === (index + 1) ? "faq-tab-item active" : "faq-tab-item"}>
                                <a href={'#' + data.href} title={data.title} onClick={onClickFaqTab(index + 1)}>
                                    <b>{data.title}</b>
                                </a>
                            </div>
                        );
                    })}
                </div> 
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