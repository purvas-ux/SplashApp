<<<<<<< HEAD
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
                resizeMode="cover"
=======

import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

// Import the logo image
// Assuming the path is correct based on file structure exploration
const X_LOGO = require('./assets/x_logo.png');

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    // Initial scale is large enough to cover the screen with the green pattern of the logo
    const scale = useSharedValue(80);

    // Opacity for a smoother reveal if needed, but the main effect is scaling
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
        };
    });

    useEffect(() => {
        // animate the scale down to 1
        scale.value = withTiming(1, {
            duration: 1500, // Adjust duration as needed for the "feel"
            easing: Easing.out(Easing.exp),
        });
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={X_LOGO}
                style={[styles.logo, animatedStyle]}
                resizeMode="contain"
>>>>>>> d6ebd52dd23d93dfd713242c92357ab17e3d4ce7
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: '#0f261f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
=======
        backgroundColor: '#051811', // Dark background matching the reference images
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width * 0.5, // 50% of screen width for the final size
        height: width * 0.5, // Keep aspect ratio (assuming square-ish logo)
>>>>>>> d6ebd52dd23d93dfd713242c92357ab17e3d4ce7
    },
});

export default SplashScreen;
