import React, { memo } from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { PageWrapper, Splitter } from "../../../Components/Atoms";

import styles from "./styles";

export default memo(({ navigation }) => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
    const _onSubmit = data => {
        console.log(data);
    };

    return (
        <PageWrapper>
            <View style={styles.container}>
                <Text style={styles.title}>Example</Text>
                <Text style={styles.label}>User Name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true }}
                />
                <Text style={styles.label}>Password</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                />

                <View style={styles.button}>
                    <Button
                        style={styles.buttonInner}
                        color
                        title="Reset"
                        onPress={() => {
                            reset({
                                email: '',
                                password: ''
                            })
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        style={styles.buttonInner}
                        color
                        title="Button"
                        onPress={handleSubmit(_onSubmit)}
                    />
                </View>
                <Splitter vertikal style={{backgroundColor:'red'}} />
            </View>
        </PageWrapper>
    );
});
