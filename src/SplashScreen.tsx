import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0f261f" />
            <LottieView
                source={require('./json/animate.json')}
                autoPlay
                loop={false}
                style={styles.animation}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f261f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});

export default SplashScreen;
