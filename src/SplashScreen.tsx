import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { fetchSplashAnimation } from './services/contentful';

const SplashScreen = () => {
    const [animationSource, setAnimationSource] = React.useState<any>(null);

    React.useEffect(() => {
        const loadContentfulAnimation = async () => {
            const entryId = '7vbv4yHqGqQIShCPEwK7zl';
            const source = await fetchSplashAnimation(entryId);
            if (source) {
                setAnimationSource(source);
            }
        };

        loadContentfulAnimation();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0f261f" />
            {animationSource ? (
                <LottieView
                    source={animationSource}
                    autoPlay
                    loop={false}
                    style={styles.animation}
                    resizeMode="contain"
                />
            ) : null}
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
