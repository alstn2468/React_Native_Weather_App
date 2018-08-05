import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import PropTypes  from 'prop-types';

const weatherCases = {
    Rain : {
        colors: ['#00C6FB', '#005BEA'],
        title: "Rainy",
        subtitle: "Today's weather is Rainy.",
        icon: 'ios-rainy'
    },
    Clear : {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "Today's weather is Sunny.",
        icon: 'ios-sunny'
    },
    Thunderstorm : {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "Today's weather is Thunderstorm.",
        icon: 'ios-thunderstorm'
    },
    Clouds : {
        colors: ['#D7D2CC', '#304352'],
        title: "Cloud",
        subtitle: "Today's weather is Clouds.",
        icon: 'ios-cloud'
    },
    Snow : {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "Today's weather is Snow.",
        icon: 'ios-snow'
    },
    Drizzle : {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Today's weather is Drizzle.",
        icon: 'ios-rainy-outline'
    },
    Haze : {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "Today's weather is Haze.",
        icon: 'ios-cloud'
    },
    Atmosphere : {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Atmosphere",
        subtitle: "Today's weather is Atmosphere.",
        icon: 'ios-cloud'
    }
};

function Weather({weatherName, temp}) {
    return (
        <LinearGradient
            colors = {weatherCases[weatherName].colors}
            style = {styles.container}>
            <View style = {styles.upper}>
                <Ionicons
                    color='white' size={144}
                    name={weatherCases[weatherName].icon}/>
                <Text style = {styles.temp}>
                    {temp}℃
                </Text>
            </View>
            <View style = {styles.lower}>
                <Text style = {styles.title}>
                    {weatherCases[weatherName].title}
                </Text>
                <Text style = {styles.subtitle}>
                    {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle : {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 25
    }
});
