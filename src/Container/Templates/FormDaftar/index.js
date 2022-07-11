import { View, ScrollView, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { useTheme } from 'react-native-paper';
import { FormInputs, } from '@Molecules';
import { Forms, } from '@Organisms';
import { log } from '@Utils';
import { MyText } from '@Atoms';

import { FORM_NAME, INPUT_LIST } from './input';
import styles from './styles';
// import { UseLKN } from '../../Config/ViewModel';
export default memo(({ route: { params }, navigation: { navigate }, setActivityIndicator }) => {
    // const { _submitAlamat } = UseLKN();
    const { colors } = useTheme();
    return <View style={styles.innerContainer}>
        <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <Forms
                formname={FORM_NAME}
                inputList={INPUT_LIST}
                autoClear={true}
                renderButton={(isValid, reset, handleSubmit) =>
                    <>
                        <FormInputs.CustomButton
                            disabled={!isValid}
                            onSubmit={handleSubmit}
                            submitLabel={'Daftar'} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <MyText style={{ color: colors.gray }}>Dengan mendaftar, saya menyetujui</MyText>
                            <TouchableOpacity onPress={() => log('Syarat Ketentuan')}>
                                <MyText style={{ color: colors.primary }}> Syarat dan Ketentuan</MyText>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <MyText style={{ color: colors.gray }}>Serta</MyText>
                            <TouchableOpacity onPress={() => log('Kebijakan Privasi')}>
                                <MyText style={{ color: colors.primary }}> Kebijakan Privasi.</MyText>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                onFormSubmit={({ serialized }) => navigate('StoreSetup')}
            />
        </ScrollView>
    </View>
})