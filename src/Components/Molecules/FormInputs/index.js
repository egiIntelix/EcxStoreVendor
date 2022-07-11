import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import { TextInput, Button, Chip } from 'react-native-paper';
// import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
// import CurrencyInput from 'react-native-currency-input';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { MyText } from '@Atoms';
import { log, UUID } from '@Utils';
import { ICON_EMPTY_IMAGE } from '@Images';

import styles, { width } from './styles';

const _charCounter = (str, max) => `${str.length || 0}/${max}`;

const CustomTextInput = props => {
    const { colors } = useTheme();
    let value = typeof props.value === 'undefined' ? '' : props.value;
    let defaultColor = props.error ? colors.red : value.length > 0 ? colors.black : colors.gray;
    let right = typeof props.right != 'undefined' && props.right(defaultColor)
        || props.resetButton && <TextInput.Icon
            style={{ marginTop: 15 }}
            name="close"
            onPress={() => props.onResetField(props.name)}
            size={25}
            color={colors.darkGray}
            rippleColor={colors.darkGray}
        />
        || null;
    let left = typeof props.left != 'undefined' && props.left(defaultColor) || null;
    let editable = 'editable' in props ? props.editable : true;
    let secureText = props.secureText || false;
    let keyboardType = secureText == true ? 'default' : (props.keyboardType || 'default');
    let maxLength = props.maxLength || 300;
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, props.containerStyle]}>
                {props.label && <MyText large color={colors.gray}>{props.label || 'Label'}</MyText>}
                <TextInput
                    {...props.register}
                    secureTextEntry={secureText}
                    onBlur={props.onBlur}
                    onChangeText={props.onChangeText}
                    value={value}
                    key={props.id}
                    // label={props.label || 'Label'}
                    placeholder={''}
                    mode={(props.numberOfLines > 0 ? 'outlined' : 'flat') || 'flat'}
                    style={styles.textInput(props.inputFontSize, props.inputTextAlign, props.numberOfLines > 0 ? 113 : 40)}
                    theme={styles.themeTextInput(defaultColor, defaultColor)}
                    underlineColor={defaultColor}
                    activeUnderlineColor={colors.primary}
                    multiline={(props.numberOfLines > 0) || false}
                    numberOfLines={(props.numberOfLines > 0 ? props.numberOfLines : 1) || 1}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    right={right}
                    left={left}
                    editable={editable}
                    onFocus={() => props.onFocus(props.name)}
                    masking={props.masking}
                />
                <View style={styles.affixContainer}>
                    {props.error && <MyText left color={colors.scarlet}>* {props.errorText}</MyText>}
                    {/* {props.numberOfLines > 1 && <MyText right color={defaultColor} fontSize={14} style={styles.textAffix}> {_charCounter(props.value || 0, maxLength)}</MyText>} */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const OverlayedInput = props => <TextInput
    {...props.register}

    mode={'flat'}
    onBlur={props.onBlur}
    value={typeof props.value === 'undefined' ? '' : props.value}
    key={props.id}
    onChangeText={props.onChangeText}
    style={styles.overlayedInput}
    disabled={true}
/>

const OverlayedInputDate = props => (
    <View style={{ flex: .9 }}>
        <TouchableOpacity
            activeOpacity={1}
            style={[styles.inputDateContainer, styles.inputDateRangeContainer(props.defaultColor)]}
            onPress={() => {
                log('DATE!')
                props.onFocus(props.name);
                props.onPress();
            }}>
            <MyText color={props.defaultColor}>{props.value || props.inputLabel}</MyText>
        </TouchableOpacity>
        {(props.value.length > 0) &&
            <>
                <MyText color={props.defaultColor} style={styles.inputDateRangeFloatingText}>{props.inputLabel}</MyText>
                <TextInput.Icon
                    style={styles.inputDateRangeClearText}
                    name="close-circle"
                    onPress={() => props.onResetField(props.name)}
                    size={20}
                    color={props.defaultColor}
                    rippleColor={props.defaultColor}
                />
            </>
        }
    </View>
)

// const CustomMaskedInput = props => {
//     const { colors } = useTheme();
//     let defaultColor = props.error ? colors.red : colors.primary;
//     let value = typeof props.value === 'undefined' ? '' : props.value;
//     let secureText = props.secureText || false;
//     let keyboardType = secureText == true ? 'default' : (props.keyboardType || 'default');
//     let maxLength = props.maxLength || 300;
//     let right = value != '' && <TextInput.Icon
//         style={{ marginTop: 15 }}
//         name="close-circle"
//         onPress={() => props.onResetField(props.name)}
//         size={20}
//         color={defaultColor}
//         rippleColor={defaultColor}
//     /> || (typeof props.right != 'undefined' && props.right(props.onResetField, 'name', 'value', 'ref')) || null;
//     return <TouchableWithoutFeedback>
//         <View style={[styles.container, props.containerStyle]}>
//             <TextInput
//                 {...props.register}
//                 secureTextEntry={secureText}
//                 onBlur={props.onBlur}
//                 onChangeText={props.onChangeText}
//                 value={value}
//                 key={props.id}
//                 label={props.label || 'Label'}
//                 placeholder={''}
//                 mode={'outlined'}
//                 right={right}
//                 style={styles.textInput(props.inputFontSize, props.inputTextAlign, props.numberOfLines > 0 ? 113 : 40)}
//                 theme={styles.themeTextInput(defaultColor, defaultColor)}
//                 maxLength={maxLength}
//                 keyboardType={keyboardType}
//                 render={() => <CurrencyInput
//                     value={props.value}
//                     onChangeValue={val => props.onResetField(props.name, val)}
//                     {...props?.config?.data}
//                     style={styles.maskedText(props.inputFontSize, props.numberOfLines > 0 ? 113 : 40, defaultColor)}
//                 />
//                 }
//             />
//             <View style={styles.affixContainer}>
//                 {props.error && <MyText left color={colors.scarlet}>* {props.errorText}</MyText>}
//                 {props.numberOfLines > 1 && <MyText right color={defaultColor} fontSize={14} style={styles.textAffix}> {_charCounter(props.value || 0, maxLength)}</MyText>}
//             </View>
//         </View>
//     </TouchableWithoutFeedback>
// }

// const CustomInputDate = (props) => {
//     const { colors } = useTheme();
//     let defaultColor = props.error ? colors.red : colors.primary;
//     return (
//         props.config.data.mode == 'single' &&
//         <>
//             <CustomTextInput {...props} multiline={false} numberOfLines={0} editable={false} />
//             <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.inputDateContainer}
//                 onPress={() => {
//                     log('DATE!')
//                     props.onFocus(props.name);
//                     props.onPress();
//                 }}
//             />
//         </>
//         ||
//         props.config.data.mode == 'range' &&
//         <>
//             <MyText color={colors.primary}>{props.label}</MyText>
//             <View style={[styles.container, styles.dateRangeContainer]}>
//                 <OverlayedInputDate {...props} defaultColor={defaultColor} inputLabel={'From'} value={JSON.parse(props.value || '["",""]')[0]} />
//                 <View style={{ width: 20 }} />
//                 <OverlayedInputDate {...props} defaultColor={defaultColor} inputLabel={'Until'} value={JSON.parse(props.value || '["",""]')[1]} />
//                 <OverlayedInput {...props} />
//                 {props.error && <MyText center color={colors.scarlet}>* {props.errorText}</MyText>}
//             </View>
//         </>
//     )
// }

const CustomInputPicture = (props) => {
    const { colors } = useTheme();
    let defaultColor = props.error ? colors.red : colors.gray;
    return (
        <View style={styles.inputCameraContainer(defaultColor)}>
            <View>
                {props.imageList.length > 0 ? (
                    <>
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${props.imageList[0]}` }}
                            style={styles.images}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => props.onDetelePicture(props.name, 0)}
                            style={styles.deleteBtn}>
                            <Icon name={'close'} size={25} color={'white'} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                props.onFocus(props.name);
                                props.onPress();
                            }}>
                            <Image
                                source={ICON_EMPTY_IMAGE}
                                style={styles.images}
                            />
                        </TouchableOpacity>
                    </>
                )}
            </View>
            <View style={{ margin: 5 }}>
                <MyText xLarge color={colors.darkGray} style={{ marginBottom: 8 }}>{props.label}</MyText>
                <MyText large color={colors.gray}>{props.description || ''}</MyText>
            </View>
            {props.error && <MyText center color={colors.scarlet}>* {props.errorText}</MyText>}
            <OverlayedInput {...props} />
        </View>
    )
}

const CustomInputSelect = (props) => {
    const { colors } = useTheme();
    let disabled = props.dataCount != undefined && props.dataCount.length == 0;
    let defaultColor = disabled ? colors.lightGray : (props.error ? colors.red : typeof props.value === 'undefined' ? colors.gray : colors.black)
    return (
        <>
            <MyText large color={colors.gray}>{props.label || 'Label'}</MyText>
            <TouchableOpacity
                activeOpacity={1}
                disabled={disabled}
                style={styles.inputDropdownContainer(defaultColor)}
                onPress={props.onPress}>
                <MyText color={defaultColor} style={styles.textInputDropdown(defaultColor)}>{typeof props.value === 'undefined' ? `Pilih ${props.label}` : JSON.parse(props.value).description}</MyText>
                <View>
                    <Icon name={'chevron-down'} color={defaultColor} size={20} />
                </View>
            </TouchableOpacity>
            <OverlayedInput {...props} />
            {props.error && <MyText left color={colors.scarlet}>* {props.errorText}</MyText>}
        </>
    )
}

const CustomButton = props => {
    const { colors } = useTheme();
    return <Button
        icon={props.iconName}
        disabled={props.disabled}
        style={[styles.button, props.style]}
        contentStyle={[styles.btnContent(props.disabled ? colors.lightGray : colors.primary), props.style, {width:'100%'}]}
        mode="contained"
        onPress={props.onSubmit}
        labelStyle={[styles.btnLabel(props.disabled ? colors.darkGray : colors.white), props.labelStyle]}
    >{props.submitLabel || 'Submit'}</Button>
}
const CustomSecondaryButton = props => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity activeOpacity={.8} onPress={props.onPress}
            style={styles.btnSecondary(colors.gray)}>
            <MyText bold>{props.title}</MyText>
        </TouchableOpacity>
    )
}
const CustomButtonCancel = props => {
    const { colors } = useTheme();
    return <Button
        style={[styles.button, props.style]}
        contentStyle={[styles.btnContent(colors.red), props.style]}
        mode="contained"
        onPress={props.onSubmit}
        labelStyle={[styles.btnLabel(colors.white), props.labelStyle]}>
        {props.submitLabel || 'Cancel'}
    </Button>
}

const SkeletonInput = () => (
    <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={width * .88} height={48} borderRadius={10} marginVertical={5}></SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
)

const InputChips = (props) => {
    const { colors } = useTheme();
    let defaultColor = props.error ? colors.red : colors.primary;
    return (
        <View style={{ marginVertical: 5 }}>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={props.config.data}
                keyExtractor={({ code }) => `dialNumberInput${code}`}
                contentContainerStyle={{ height: 50, alignItems: 'center' }}
                renderItem={({ item: { code, description } }) =>
                (<Chip
                    textStyle={{ color: props.value == code ? colors.primary : colors.black, fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500' }}
                    selected={props.value == code}
                    icon={() => props.value == code && <Icon name={'check'} size={25} color={colors.primary} />}
                    mode={'outlined'}
                    style={{ marginHorizontal: 5, borderColor: props.value == code ? colors.primary : colors.black }}
                    onPress={() => props.onPress(props.name, code)}>
                    {description}
                </Chip>)
                }
                ListHeaderComponent={<MyText color={defaultColor} fontSize={14} fontWeight={'500'}>{props.label} : </MyText>}
                ListFooterComponent={<OverlayedInput {...props} />}
            />
            {props.error && <MyText color={colors.scarlet}>* {props.errorText}</MyText>}
        </View>
    )
}
const InputCounter = (props) => {
    const { colors } = useTheme();
    let value = typeof props.value === 'undefined' ? "0" : props.value || "0";
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, props.inline && styles.containerInputCounter, props.containerStyle]}>
                {props.label && <MyText {...(props.inline && { xLarge: true, bold: true } || { large: true })} color={props.inline && colors.black || colors.gray}>{props.label || 'Label'}</MyText>}
                <TextInput
                    {...props.register}
                    onBlur={props.onBlur}
                    onChangeText={props.onChangeText}
                    value={value}
                    key={props.id}
                    placeholder={''}
                    mode={'outlined'}
                    style={[styles.textInput(props.inputFontSize, 'center', 35), styles.textInputCounter]}
                    theme={styles.themeTextInput(colors.primary, colors.primary)}
                    underlineColor={colors.primary}
                    activeUnderlineColor={colors.primary}
                    left={<TextInput.Icon
                        color={colors.darkGray}
                        name="minus"
                        size={25}
                        style={styles.iconInputCounter}
                        onPress={props.decrement}
                    />}
                    right={<TextInput.Icon
                        color={colors.darkGray}
                        name="plus"
                        size={25}
                        style={styles.iconInputCounter}
                        onPress={props.increment}
                    />}
                    editable={false}
                    onFocus={() => props.onFocus(props.name)}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export {
    CustomTextInput,
    // CustomMaskedInput,
    CustomButton,
    CustomButtonCancel,
    CustomSecondaryButton,
    CustomInputSelect,
    CustomInputPicture,
    SkeletonInput,
    InputChips,
    InputCounter,
}