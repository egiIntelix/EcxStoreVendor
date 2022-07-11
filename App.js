import React, {createRef} from 'react';
import { StatusBar, View } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import { useTheme } from 'react-native-paper';
import { CustomBottomNavbar } from '@Molecules';
import MainStackNavigator from '@Pages';

enableFreeze(true)
export default (props) => {
	const { colors } = useTheme();
	const refCustomNavBar = createRef();
	const appVersion = Object.values({
		appName: 'ECXStore-',
		major: 'V0',
		minor: '.0',
		patch: '.1',
		release: ` 20220607`
	}).toString().replace(/,/g, '');
	return (
		<>
			<StatusBar
				animated={true}
				backgroundColor={colors.white}
				barStyle={'dark-content'}
				showHideTransition={'fade'}
				hidden={false} />
			<MainStackNavigator
				{...props}
				appVersion={appVersion}
				navBarState={data => refCustomNavBar.current?.flip(data)}
			/>
			
			<CustomBottomNavbar ref={refCustomNavBar}/>
		</>
	)
};
