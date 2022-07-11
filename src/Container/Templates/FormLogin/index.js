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
export default memo(({ route: { params }, navigation: { replace, navigate }, setActivityIndicator }) => {
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
                        <View style={{alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={() => log('Bantuan')}>
                                <MyText style={{color:colors.primary}}>Butuh Bantuan?</MyText>
                            </TouchableOpacity>
                        </View>
                        <FormInputs.CustomButton
                            disabled={!isValid}
                            onSubmit={handleSubmit}
                            submitLabel={'Masuk'} />
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <MyText style={{color:colors.gray}}>Belum punya akun eCentrix?</MyText>
                            <TouchableOpacity onPress={() => navigate('BukaToko')}>
                                <MyText style={{color:colors.primary}}> Daftar</MyText>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                onFormSubmit={({serialized}) => replace('Home')}
            />
        </ScrollView>
    </View>
})