import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '5c4f962aef9977f3f5367d66e9e73fee2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, []);
    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    );
};

export default App;
