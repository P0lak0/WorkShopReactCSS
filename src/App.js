import React from 'react';
import Card from './components/Card';

const App = () => {
    const cardData = {
        title: "Райский берег",
        image: "https://i.7fon.org/150/x64172.jpg",
        description: "Luctus mus viverra morbi; risus fringilla etiam. Praesent velit semper mauris; tempus a eleifend libero egestas. Amet facilisis mus litora nisi mi eros convallis. Praesent netus in erat aptent mus dictumst orci a. Mattis enim eget malesuada faucibus, dis commodo bibendum nulla. Magnis justo dui porttitor elementum tempor.",
    };

    return (
        <div>
            <Card 
                title={cardData.title} 
                image={cardData.image} 
                description={cardData.description} 
            />
        </div>
    );
};

export default App;