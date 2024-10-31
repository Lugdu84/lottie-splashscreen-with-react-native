import SplashScreen from 'components/SplashScreen';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

export default function App() {
	const [splashIsFinished, setSplashIsFinished] = useState(false);

	if (!splashIsFinished) {
		return <SplashScreen onAnimationFinish={() => setSplashIsFinished(true)} />;
	}
	return (
		<View style={styles.container}>
			<Animated.Text entering={ZoomIn.duration(2000)}>
				Netfix Splash Screen !!
			</Animated.Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
