import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import InfoCards from './components/InfoCards/InfoCards';
import useStyles from './styles';

const alanKey = '5c4f962aef9977f3f5367d66e9e73fee2e956eca572e1d8b807a3e2338fdd0dc/stage';
const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';

const App = () => {
    const classes = useStyles();
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle(prevArt => prevArt + 1);
                }
            }
        })
    }, []);
    return (
        <main>
            <header className={classes.logoContainer} aria-label="Alan AI News Application">
                <img src={alanLogoSrc} alt="Alan AI logo" className={classes.alanLogo} />
            </header>
            { newsArticles.length ?
                <NewsCards articles={newsArticles} activeArticle={activeArticle}/> :
                <InfoCards/>
            }
        </main>
    );
};

export default App;
