module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'react-native-reanimated/plugin',
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.js',
					'.json',
				],
				alias: {
					//component
					"@Atoms": "./src/Components/Atoms/",
					"@Images": "./src/Components/Atoms/Images/",
					"@Molecules": "./src/Components/Molecules/",
					"@Organisms": "./src/Components/Organisms/",
					//config
					"@Config": "./src/Config/",
					"@CustomHooks": "./src/Config/CustomHooks/",
					"@Data": "./src/Config/Data/",
					// "@Redux": "./src/Config/Redux/",
					// "@Actions": "./src/Config/Redux/actions/",
					// "@Reducers": "./src/Config/Redux/reducers/",
					// "@Store": "./src/Config/Redux/store/",
					"@RootNavigation": "./src/Config/RootNavigation/",
					//Container
					"@Pages": "./src/Container/Pages/",
					"@Templates": "./src/Container/Templates/",
					//utils
					"@Utils": "./src/Utils",
				},
			},
		],
	],
};
