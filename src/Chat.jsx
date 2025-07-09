import React, { useState, useEffect } from 'react';
import ChatBubble from "./Components/ChatBubble.jsx";
import { useNavigate } from 'react-router-dom';

function Chat() {
    const nav = useNavigate();

    const goClick = async () => {
        const btn = document.getElementById('btnWrapper');
        await new Promise(resolve => setTimeout(resolve, 80));
        btn.classList.add('btnOut');
        await new Promise(resolve => setTimeout(resolve, 300)); // match with btnOut animation
        const bubbles = document.getElementsByClassName('bubble');
        let currIndex = bubbles.length - 1;
        while (currIndex >= 0) {
            await new Promise(resolve => setTimeout(resolve, 50));
            bubbles[currIndex--].classList.add('bubbleOut');
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        nav("/home");
    }
    const [bubbles, setBubbles] = useState([{ text: "", updating: true }]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allBubblesDisplayed, setAllBubblesDisplayed] = useState(false);
    const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);

    useEffect(() => {
        const texts = ["Hey there 👋",
            "I'm Akash",
            "What do i do?",
            "Well.. Building the web?",
            "Transforming ideas to code?",
            "and sometimes, gaming :)",
            // "Let's Connect 🌐 ",
            // "https://linkedin.com/in/kash04",
            "The story of me starts here - click below to read on."
        ];
        let timeoutId;
        if (currentIndex < texts.length) {
            if (bubbles[currentIndex].updating) {
                timeoutId = setTimeout(() => {
                    setBubbles(prevBubbles => {
                        const newBubbles = [...prevBubbles];
                        newBubbles[currentIndex] = { text: texts[currentIndex], updating: false };
                        return newBubbles;
                    });
                }, ((Math.random() * 1000) + 500)); // typing delay
            } else {
                timeoutId = setTimeout(() => {
                    if (currentIndex < texts.length - 1) {
                        setBubbles(prevBubbles => [...prevBubbles, { text: "", updating: true }]);
                        setCurrentIndex(currentIndex + 1);
                    } else {
                        setAllBubblesDisplayed(true);
                    }
                }, 1000); // delay between msgs
            }
        }

        return () => clearTimeout(timeoutId);
    }, [currentIndex, bubbles]);

    useEffect(() => {
        let timeoutId;
        if (allBubblesDisplayed) {
            timeoutId = setTimeout(() => {
                setShowAdditionalDiv(true);
            }, 500); // delay before btn display
        }
        return () => clearTimeout(timeoutId);
    }, [allBubblesDisplayed]);

    return (
        <div className="chatPage">
            {bubbles.map((bubble, index) => (
                <ChatBubble
                    key={index}
                    text={bubble.text}
                    isLast={index === bubbles.length - 1}
                />
            ))}
            {showAdditionalDiv && (
                <div className='goBtnContainer'>
                    <div id='btnWrapper' className='rotateWrapper popin' onClick={goClick}>
                        <div className='goBtn'>
                            &gt;
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Chat;