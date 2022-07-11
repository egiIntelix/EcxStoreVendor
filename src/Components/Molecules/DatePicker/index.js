import { View } from 'react-native'
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { DatePickerModal } from 'react-native-paper-dates'

export default forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('single');
    const [startDate, setStartDate] = useState(new Date(1970, 0, 1));
    const [endDate, setEndDate] = useState(new Date(2030, 12, 30));
    const [disabledDate, setDisabledDates] = useState([]);
    const [inputName, setInputName] = useState('');

    useImperativeHandle(ref, () => ({
        open: ({ mode = 'single', startDate = new Date(1970, 0, 1), endDate = new Date(2030, 12, 30), disabledDate = [], inputName }) => Promise.all([
            setOpen(true),
            setMode(mode),
            setStartDate(startDate),
            setEndDate(endDate),
            disabledDate.length > 0 && setDisabledDates(disabledDate),
            setInputName(inputName)
        ])
    }));

    const _onresult = (params = null) => Promise.all([
        props.onConfirm('date' in params && [params.date] || 'startDate' in params && [params.startDate, params.endDate] || [], inputName),
        setOpen(false),
        setMode('single'),
        setStartDate(new Date(1970, 0, 1)),
        setEndDate(new Date(2030, 12, 30)),
        setDisabledDates([]),
        setInputName('')
    ]);

    return (
        <View style={{ flex: 1 }}>
            <DatePickerModal
                locale="en"
                mode={mode}
                visible={open}
                disableStatusBar={false}
                onDismiss={_onresult}
                date={new Date}
                startDate={startDate}
                endDate={endDate}
                onConfirm={_onresult}
                validRange={{
                    startDate: startDate,  // optional
                    endDate: endDate, // optional
                    disabledDates: disabledDate // optional
                }}
                saveLabel="OK" // optional
                animationType="fade" // optional, default is 'slide' on ios/android and 'none' on web
            // onChange={} // same props as onConfirm but triggered without confirmed by user
            // uppercase={false} // optional, default is true
            // label="Select date" // optional
            />
        </View>
    )
});

