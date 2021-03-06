import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { Small, Original } from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

const LazyImage = ({
    smallSource,
    source,
    ratio,
    shouldLoad
}) => {
    const opacity = new Animated.Value(0)
        ; const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (shouldLoad) {
            setTimeout(() => {
                setLoaded(true)
            }, 1000);
        }
    }, [shouldLoad])

    const handleAnimate = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    return (
        <Small
            source={smallSource}
            ratio={ratio}
            resizeMode="contain"
            blurRadius={2}
        >
            {
                loaded &&
                <OriginalAnimated
                    style={{ opacity }}
                    source={source}
                    ratio={ratio}
                    resizeMode="contain"
                    onLoadEnd={handleAnimate}
                />
            }
        </Small>
    );

};

export default LazyImage;
