import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Faq from './components/Faq';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
			<Faq />
		</>
	);
};

export default App;