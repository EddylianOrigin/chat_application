const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div classname="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
                message?.attachments?.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            classname="message-image"
                            style={{ marginleft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    ) : (

                        <div className="mesage"
                             style={{float: 'left', backgroundColor: '#CABCDC', marginleft: isFirstMessageByUser ? '4px' : '48px'  }}>
                            //, marginRight: '18px', color: 'white'
                            {message.text}
                        </div>
                    )
            }
        </div>
    );
}

export default TheirMessage;