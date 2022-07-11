import React from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';
import styles from './styles';
export default props =>
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? 'padding' : null}
        style={[styles.container, props.additionalStyle]}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                {props.children}
            </TouchableWithoutFeedback>
        </SafeAreaView>
    </KeyboardAvoidingView>


// import React from 'react';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import styles from './styles';
// export default props => <KeyboardAwareScrollView
//     showsVerticalScrollIndicator={false}
//     showsHorizontalScrollIndicator={false}
//     style={styles.container(props?.noGap ? '0%' : '5%')}>
//     {props.children}
// </KeyboardAwareScrollView>