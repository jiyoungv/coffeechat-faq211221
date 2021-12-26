import React from 'react';
import { Inners } from '../../styles/Common';
import { Heros } from './Style';
import img_hero from '../../assets/images/img_hero.png';

const Hero = () => {
    return (
        <Heros>
            <Inners>
                <div className="hero-link">
                    <a href="http://pf.kakao.com/_xjxcxbxfK" title="커피챗 고객센터" target="_blank" rel="noreferrer"><b>커피챗 고객센터</b></a>
                </div>
                <div className="hero-title">
                    <figure>
                        <img src={img_hero} alt="" />
                    </figure>
                    <h1><b>자주 묻는 질문</b></h1>
                </div>
            </Inners>
        </Heros>
    );
};

export default Hero;