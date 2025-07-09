function ChatBubble({ text, isLast = false }) {
    let content;
    if (!text) {
        content = <div className="loader"></div>;
    }
    else {
        content = <>{text}</>;
    }

    return (
        <div className={`bubble ${isLast ? 'lastBubble' : ''}`}>
            {content}
        </div>
    );
}

export default ChatBubble;