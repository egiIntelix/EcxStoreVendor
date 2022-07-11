import { View } from 'react-native';
import React, { memo } from 'react';
import { useTheme } from 'react-native-paper';
import { FormInputs, } from '@Molecules';
import { Forms, } from '@Organisms';
import { back } from '@RootNavigation';

import { FORM_NAME, INPUT_LIST } from './input';
import styles from './styles';
// import { UseLKN } from '../../Config/ViewModel';
export default memo(({ route: { params }, navigation: { replace, navigate }, setActivityIndicator }) => {
    // const { _submitAlamat } = UseLKN();
    const { colors } = useTheme();
    return <View style={styles.innerContainer}>
        <View
            style={styles.container}
        >
            <Forms
                formname={FORM_NAME}
                inputList={INPUT_LIST}
                autoClear={true}
                containerStyle={{ flex: 1 }}
                renderButton={(isValid, reset, handleSubmit) =>
                    <View style={styles.containerButton}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <View style={styles.containerInnerButton}>
                                <FormInputs.CustomButton
                                    onSubmit={back}
                                    submitLabel={'Sebelumnya'}
                                    style={{backgroundColor:colors.white}}
                                    labelStyle={{color:colors.darkGray}} />
                            </View>
                            <View style={styles.containerInnerButton}>
                                <View style={styles.dot(colors.lightGray)}></View>
                                <View style={styles.dot(colors.lightGray)}></View>
                                <View style={styles.dot(colors.primary)}></View>
                                <View style={styles.dot(colors.lightGray)}></View>
                                <View style={styles.dot(colors.lightGray)}></View>
                                <View style={styles.dot(colors.lightGray)}></View>
                            </View>
                            <View style={styles.containerInnerButton}>
                                <FormInputs.CustomButton
                                    disabled={!isValid}
                                    onSubmit={handleSubmit}
                                    submitLabel={'Lanjut'} />
                            </View>
                        </View>
                    </View>
                }
                onFormSubmit={({ serialized }) => navigate('SupportSetup')}
            />
        </View>
    </View>
})