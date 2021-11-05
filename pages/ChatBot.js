import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatBot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hey! I am the Covid Genie, I can answer all question about Covid?`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Covid Bot',
          avatar: 'https://media.baamboozle.com/uploads/images/1080/1463486588_37_GENIE%20LOGO.png'
        }
      }
    ]
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default ChatBot;