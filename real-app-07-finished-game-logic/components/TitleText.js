import React from 'react';
import {Text, StyleSheet} from 'react-native';
import BodyText from './BodyText';

const TitleText = props => <Text style={...styles.title}>{...props.children}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default BodyText;