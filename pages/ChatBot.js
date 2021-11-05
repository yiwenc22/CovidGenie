import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Bot = {
    _id: 2,
    name: 'CovidBOT',
    avatar: 'https://media.baamboozle.com/uploads/images/1080/1463486588_37_GENIE%20LOGO.png'
};

class ChatBot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hey! I am the Covid Genie, I can answer all question about Covid?`,
        createdAt: new Date(),
        user: Bot
      }
    ]
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    switch(messages[0].text) {
 
        case 'What is Covid?':
          this.sendBotResponse("COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, some people experience post-COVID conditions. Post-COVID conditions are a wide range of new, returning, or ongoing health problems people can experience more than four weeks after first being infected with the virus that causes COVID-19. Older people and those who have certain underlying medical conditions are more likely to get severely ill from COVID-19. Vaccines against COVID-19 are safe and effective.");
          break;
        
        case 'How can I prevent it?':
            this.sendBotResponse("Handwashing is one of the best ways to protect yourself and your family from getting sick, Wear Mask, and stand 6 ft apart.");
          break;
   
        default:
            if(messages[0].text.slice(-1) == "?"){
            this.sendBotResponse("I don't have a answer for that right now, Please ask another quesiton or submit a Feedback so we can found the answer for you.");
            }else{
            this.sendBotResponse("Not sure is that a question, try adding ? to the end.");
            }
        }
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: Bot
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
            name: 'user',
          }}
        />
      </View>
    );
  }
}

export default ChatBot;