import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';


const CONTENT = [
  {
    title: 'What is COVID-19?',
    content: "COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, some people experience post-COVID conditions. Post-COVID conditions are a wide range of new, returning, or ongoing health problems people can experience more than four weeks after first being infected with the virus that causes COVID-19. Older people and those who have certain underlying medical conditions are more likely to get severely ill from COVID-19. Vaccines against COVID-19 are safe and effective.",
  },
  {
    title: 'What is community spread?',
    content: "Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions.",
  },
  {
    title: 'How do I protect myself from COVID-19?',
    content:"Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol.",
  },
  {
    title: 'What are the symptoms of covid-19?',
    content: "Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:Fever or chills, Cough, Shortness of breath or difficulty breathing, Fatigue, Muscle or body aches, Headache, New loss of taste or smell, Sore throat, Congestion or runny nose, Nausea or vomiting, Diarrhea",
  },
  {
    title: 'Can someone test negative and later test positive on a viral test for COVID-19?',
    content: "Yes, it is possible. You may test negative if the sample was collected early in your infection and test positive later during this illness. You could also be exposed to COVID-19 after the test and get infected then. Even if you test negative, you still should take steps to protect yourself and others.",
  },
];

export default class Trending extends Component {
  state = {
    activeSections: [],
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={{ marginTop: 20, marginBottom: 10 }}
        duration={400}
      >
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: '500', marginLeft: 30, marginRight: 30 }}>{section.title}</Text>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View
        duration={400}
      >
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '200', marginLeft: 30, marginRight: 30 }} animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Text>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={{ marginTop: 80 }}>
        <ScrollView>
          <Text style={{textAlign: 'center', fontSize: 30, fontWeight: '600', marginBottom: 50 }}>Frequently Asked Questions</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}