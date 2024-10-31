import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

type SplashScreenProps = {
	onAnimationFinish: () => void;
};

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function SplashScreen({ onAnimationFinish }: SplashScreenProps) {
	return (
		<View style={styles.container}>
			<AnimatedLottieView
				entering={FadeOut.duration(3000)}
				source={require('@assets/netfix.json')}
				style={{ width: '100%', height: 200 }}
				autoPlay
				loop={false}
				onAnimationFinish={onAnimationFinish}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000000',
	},
});
