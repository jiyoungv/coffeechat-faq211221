import React from 'react';
import { Inners } from '../../styles/Common';
import { Heros } from './Style';
import img_hero from '../../assets/images/img_hero.png';

const Hero = () => {
    return (
        <Heros>
            <Inners>
                <article>
                    <div className="hero-link">
                        <a href="/" title="커피챗 고객센터"><b>커피챗 고객센터</b></a>
                    </div>
                    <div className="hero-title">
                        <h1><b>자주 묻는 질문</b></h1>
                        <figure>
                            <img src={img_hero} alt="" />
                        </figure>
                    </div>
                </article>
            </Inners>
        </Heros>
    );
};

export default Hero;