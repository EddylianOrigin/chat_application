import {Component} from "react";
import MessageForm from './MessageForm';
import MyMessage from './MessageForm';
import TheirMessage from './MessageForm';

/*class ChatFeed extends Component {
    render() {
        console.log(this.props);

 */
const  ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return key.map((key,index) => {
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[Index -1];
            const isMessage = userName === message.sender.username;

            return (
                <div key={'msg_${Index}'} style={{ width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage />
                                : <TheirMessage />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMessage ? '18px' : '0px', marginLeft: isMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            );
        })
        }


    renderMessages();

    return (
            <div>
                ChatFeed
            </div>
        );
    }

export default ChatFeed;