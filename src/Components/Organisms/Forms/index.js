import React, { useCallback, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { View, } from 'react-native'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { en, registerTranslation } from 'react-native-paper-dates'
import * as Animatable from 'react-native-animatable';
import { MyText } from '@Atoms';
import { FormInputs, DatePicker, CapturePicture, DropdownModal } from '@Molecules';
import { log } from '@Utils';
const zoomIn = {
    0: {
        opacity: 0,
        scale: 0.8,
    },
    1: {
        opacity: 1,
        scale: 1,
    },
}
export default forwardRef(({ formname = 'myFieldArray', inputList, defaultValue = {}, btnStyle, submitLabel, onFormSubmit, renderButton, autoClear = false, containerStyle = {}, cleanValues = false, showToast = null, onWatchForm = null }, ref) => {
    //Forms
    const FORM_NAME = formname;
    let focusedInput = '';
    let populatedInputlist = inputList.map((inputList) => ({ ...inputList, [inputList.name]: inputList.name in defaultValue ? defaultValue.value : inputList.value }));
    let inputTypes = inputList.map(({ name, type }) => ({ name, type })).reduce((acc, { name, type }) => ({ ...acc, [name]: type }), {})
    let watchedInput = inputList.filter(({ config }) => config?.watch == true).map(({ name }) => name);
    
    // log(watchedInput.length > 0 ? `watchedInput : ${JSON.stringify(watchedInput)}` : 'nothing to watch')
    const {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        getValues,
        trigger,
        setError,
        formState: { errors, isValid },
        watch,
    } = useForm({ defaultValues: { [FORM_NAME]: populatedInputlist }, mode: 'onChange', reValidateMode: 'onChange', });
    const { fields } = useFieldArray({ control, name: FORM_NAME });
    
    const _onResetField = async (name, value = '') => setValue(name, value)
    const _increment = async (name) => setValue(name, ((parseInt(getValues(name)) || 0)+1).toString())
    const _decrement = async (name) => setValue(name, ((parseInt(getValues(name)) > 0 && parseInt(getValues(name))-1 || 0)).toString())

    const _onSubmit = async serialized => {
        delete serialized[FORM_NAME];
        let rawData = { ...serialized };
        Object.keys(serialized).map(key => cleanValues == true ? ((serialized[key] === undefined || serialized[key] === '') && delete serialized[key]) : (serialized[key] = serialized[key] ?? ''))
        Object.keys(rawData).map(key => (rawData[key] === undefined || rawData[key] === '') && delete rawData[key])
        Object.keys(serialized).map(key => {
            if (['dropdown', 'date'].includes(inputTypes[key]) && serialized[key] != '') {
                serialized[key] = Array.isArray(JSON.parse(serialized[key])) ? JSON.parse(serialized[key]) : JSON.parse(serialized[key]).description
            }
        })
        onFormSubmit({ serialized, rawData })
        if (autoClear == true) {
            reset();
        }
    }
    //DatePicker
    const _dateFormatter = (dates) => dates.map(date => {
        let formatedDate = new Date(date);
        return `${formatedDate.getDate()}/${formatedDate.getMonth() + 1}/${formatedDate.getFullYear()}`;
    })
    const _onConfirmDatePicker = async (choosenDate, inputName) => {
        if (choosenDate.length == 0) return false;
        setValue(inputName, choosenDate.length == 1 ? _dateFormatter(choosenDate)[0] : JSON.stringify(_dateFormatter(choosenDate)), { shouldValidate: true, shouldDirty: true, shouldTouch: true })
    }
    //CapturePicture
    const _onConfirmCapturePicture = async ({ uri, base64, inputName }) => {
        try {
            log('_onConfirmCapturePicture : ');
            let capturedName = JSON.parse(getValues(inputName) || '[]');
            capturedName = [...capturedName, base64];
            setValue(inputName, JSON.stringify(capturedName));
            await trigger(inputName);
        } catch (e) {
            log('_onConfirmCapturePicture ERROR : ', e)
        }
    }
    const _onDetelePicture = async (inputName, index) => {
        try {
            log('_onDetelePicture : ')
            let capturedName = JSON.parse(getValues(inputName));
            capturedName = capturedName.length > 1 && capturedName.splice(index, 1) || undefined;
            setValue(inputName, JSON.stringify(capturedName));
            await trigger(inputName);
        } catch (e) {
            log('_onDetelePicture ERROR : ', e)
        }
    }
    //Dropdown
    const _triggerChild = childInput => {
        log('_triggerChild : ', typeof childInput)
        childInput.map(name => {
            if (typeof getValues(name) != 'undefined') {
                log('set undefined ', name)
                setValue(name, undefined)
            }
        })
    }
    const _openDropdown = ({ level, parent, data }, name) => {
        // log({ level, parent, data }, name)
        if (data != null || data != undefined) {
            refDropdownModal?.current?.create(data, name, getValues(name));
        } else {
            //region
            refDropdownModal?.current?.createRegion(level, name, getValues(name), getValues(parent || ''))
        }
    }

    const _onSelectDropdown = ({ code, description, inputName }) => {
        log(' _onSelectDropdown ');
        setValue(inputName, JSON.stringify({ code, description }));
        trigger(inputName);
        onWatchForm && onWatchForm(code, inputName, setValue, getValues)
    }

    const _setDefaultValue = useCallback(() => {
        if (JSON.stringify(defaultValue) == '{}') return false;
        Object.keys(defaultValue).map(key => {
            _onResetField(key, defaultValue[key])
            trigger(key)
        })
    }, [])

    //refs
    const refDatePicker = useRef(null);
    const refCapturePicture = useRef(null);
    const refDropdownModal = useRef(null);
    // const refFlatListForms = useRef(null);
    useImperativeHandle(ref, () => ({
        resetForms: () => reset(),
        setErrorField: (...args) => setError(...args),
        setFieldValue: (name, value) => setValue(name, value, { shouldTouch: true, shouldDirty: true, shouldValidate: true }),
    }));

    useEffect(() => {
        // log('Mount Forms')
        registerTranslation('en', en)
        _setDefaultValue();
        // const subscription = watch((value, { name, type }) => {
        //     delete value[FORM_NAME];
        //     onWatchForm(value, { name, type }, { setValue, getValues })
        // });
        return () => {
            // log('Unmount Forms')
            focusedInput = '';
            populatedInputlist = [];
            inputTypes = {};
            // subscription.unsubscribe()
        }
    }, [])
    return (
        <View style={containerStyle}>
            {fields?.map(({ id, name, type, inputProps, controllerProps, config }, index) =>
                <Animatable.View key={`controller-${id}`} animation={zoomIn} duration={500}>
                    <Controller
                        control={control}
                        name={name}
                        rules={controllerProps?.rules}
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                            type == 'text' &&
                            <FormInputs.CustomTextInput
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                {...inputProps}
                            />
                            || type == 'maskedText' && <FormInputs.CustomMaskedInput
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                config={config}
                                {...inputProps}
                            />
                            || type == 'date' && <FormInputs.CustomInputDate
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onPress={() => refDatePicker?.current?.open({ ...config.data, name, inputName: name })}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                config={config}
                                {...inputProps}
                            />
                            || type == 'dropdown' && <FormInputs.CustomInputSelect
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                onPress={() => _openDropdown(config, name)}
                                onClearInput={() => _triggerChild('child' in config ? [name, ...config.child] : [name])}
                                dataCount={config?.data || undefined}
                                {...inputProps}
                            />
                            || type == 'camera' && <FormInputs.CustomInputPicture
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onPress={() => (JSON.parse(getValues(name) || '[]').length < inputProps?.maxLength) &&
                                    refCapturePicture?.current?.open(name)
                                }
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                onDetelePicture={_onDetelePicture}
                                imageList={JSON.parse(getValues(name) || '[]')}
                                {...inputProps}
                            />
                            || type == 'chipsOption' && <FormInputs.InputChips
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onPress={_onResetField}
                                config={config}
                                {...inputProps}
                            />
                            || type == 'counter' && <FormInputs.InputCounter
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                increment={() => _increment(name)}
                                decrement={() => _decrement(name)}
                                onFocus={name => focusedInput = name}
                                {...inputProps}
                            />
                            || <MyText>Undefined Input {type}</MyText>
                        )}
                    />
                </Animatable.View>
            )}
            {renderButton === undefined ?
                (fields.length > 0 ?
                    <FormInputs.CustomButton
                        style={btnStyle}
                        // disabled={!isValid}
                        submitLabel={submitLabel}
                        onSubmit={handleSubmit(_onSubmit)}
                    />
                    :
                    <MyText>Fields Empty</MyText>)
                : (populatedInputlist.length > 0 && renderButton(isValid, reset, handleSubmit(_onSubmit),))}
            <DatePicker
                showToast={showToast}
                ref={refDatePicker}
                onConfirm={_onConfirmDatePicker}
            />
            <CapturePicture
                ref={refCapturePicture}
                onResult={_onConfirmCapturePicture}
                showToast={showToast}
            />
            <DropdownModal
                showToast={showToast}
                ref={refDropdownModal}
                onSelect={_onSelectDropdown}
                onClose={() => log('onClose')}
            />
        </View>
    )
})

// let inputs = [ {
//     name: 'email',
//     value: '',
//     type: 'text',
//     inputProps: {
//         label: 'email',
//         placeholder: 'isi emailnya',
//         keyboardType: 'email-address'
//     },
//     controllerProps: {
//         rules: {
//             required: {
//                 value: true,
//                 message: `email harus diisi.`
//             },
//             pattern: {
//                 value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                 message: 'Email tidak valid'
//             },
//              validate : () => null
//         }
//     }
// }
// },]