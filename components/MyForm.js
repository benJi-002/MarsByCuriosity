import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput,
    Pressable,
    Platform
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import Svg, {Path} from 'react-native-svg'

import { globalStyle } from '../styles/style';


export default function MyForm({onUpdateOptions}) {

    const [date, setDate] = useState(new Date());
    const [showPicker, seteShowPicker] = useState(false);

    const [cameraForView, setCameraForView] = useState('');
    const [cameraForGet, setCameraForGet] = useState('');
    const [dateForView, setDateForView] = useState('');
    const [dateForGet, setDateForGet] = useState('');


    const toggleDatePicker = () => {
        seteShowPicker(!showPicker);
    };

    const onChangeDate = ({type}, selectedDate) => {
        if (type == "set") {
            const currenDate = selectedDate;
            setDate(currenDate);

            if (Platform.OS === 'android') {
                toggleDatePicker();
                setDateForView(formatDateForInput(formatDateForGet(currenDate)));
            }
        } else {
            toggleDatePicker();
        }
    };

    const formatDateForGet = (rawDate) => {

        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        setDateForGet(`${year}-${month}-${day}`);

        return {
            day: +day,
            month: +month,
            year: +year
        }
        
    }

   const formatDateForInput = (date) => {

        let letterMonth = '';

        switch (date.month) {
            case 1:
                letterMonth = 'Jan';
            break;
            case 2:
                letterMonth = 'Feb';
            break;
            case 3:
                letterMonth = 'Mar';
            break;
            case 4:
                letterMonth = 'Apr';
            break;
            case 5:
                letterMonth = 'May';
            break;
            case 6:
                letterMonth = 'Jun';
            break;
            case 7:
                letterMonth = 'Jul';
            break;
            case 8:
                letterMonth = 'Aug';
            break;
            case 9:
                letterMonth = 'Sep';
            break;
            case 10:
                letterMonth = 'Oct';
            break;
            case 11:
                letterMonth = 'Nov';
            break;
            case 12:
                letterMonth = 'Dec';
            break;

            default:
                alert( "Oops... An error has occurred :(" );
        }

        return `${date.day = date.day < 10 ? `0${date.day}` : date.day} ${letterMonth}, ${date.year}`

    }

    const onChangeCamera = (camera) => {

        switch (camera) {
            case 'Front Hazard Avoidance Camera':
                setCameraForGet('FHAZ');
            break;
            case 'Rear Hazard Avoidance Camera':
                setCameraForGet('RHAZ');
            break;
            case 'Mast Camera':
                setCameraForGet('MAST');
            break;
            case 'Chemistry and Camera Complex':
                setCameraForGet('CHEMCAM');
            break;
            case 'Mars Hand Lens Imager':
                setCameraForGet('MAHLI');
            break;
            case 'Mars Descent Imager':
                setCameraForGet('MARDI');
            break;
            case 'Navigation Camera':
                setCameraForGet('NAVCAM');
            break;

            default:
                return;
        }

        setCameraForView(camera);

    }


    return (

        <View 
            style={styles.container}
        >

            <View>

                <Text style={[globalStyle.light, styles.label]}>
                    Rover Camera
                </Text>
                
                <View style={styles.inputGap}>
                    <SelectList
                        setSelected={(val) => onChangeCamera(val)} 
                        data={[
                            {key:'1', value:'Front Hazard Avoidance Camera'},
                            {key:'2', value:'Rear Hazard Avoidance Camera'},
                            {key:'3', value:'Mast Camera'},
                            {key:'4', value:'Chemistry and Camera Complex'},
                            {key:'5', value:'Mars Hand Lens Imager'},
                            {key:'6', value:'Mars Descent Imager'},
                            {key:'7', value:'Navigation Camera'},
                        ]}

                        save="value"
                        id="camera"
                        name="camera"
                        as="select"
                        search={false} 
                        placeholder="Select camera"
                        fontFamily='d-light'
                        boxStyles={{
                            borderRadius: 10,
                            height: 60,
                            backgroundColor: '#fff',
                            borderColor: '#fff',
                            paddingTop: 18,
                            paddingRight: 36,
                            paddingBottom: 18,
                            paddingLeft: 16,
                        }}
                        inputStyles={{
                            lineHeight: 22,
                            width: '100%',
                            paddingRight: 18,
                            fontSize: 18,
                        }}
                        labelStyles={{
                            color: 'red'
                        }}
                        dropdownStyles={{
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            borderColor: '#fff',
                        }}
                        dropdownItemStyles={{
                            height: 50
                        }}
                        dropdownTextStyles={{
                            fontSize: 18
                        }}
                        arrowicon={
                            <Svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path 
                                    d="M7 9L11.2929 13.2929C11.6834 13.6834 12.3166 13.6834 12.7071 13.2929L17 9" 
                                    stroke="black" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round"
                                />
                            </Svg>
                        }
                    />
                </View>
            </View>

            <View style={{marginTop: 16}}>


                <Text style={[globalStyle.light, styles.label]}>
                    Date
                </Text>

                {showPicker && (
                    <DateTimePicker
                        onChange={onChangeDate} 
                        value={date}
                        mode="date"
                        display="calendar"
                        maximumDate={new Date()}
                    />  
                )}        
                {!showPicker && (
                    <Pressable
                        onPress={toggleDatePicker}
                    >
                        <View>

                            <View style={styles.calendarIcon}>
                                <Svg 
                                    width="20" 
                                    height="22" 
                                    viewBox="0 0 20 22" 
                                    fill="none"     
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path d="M1.09265 8.40427H18.9166" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M14.4421 12.3097H14.4514" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M10.0046 12.3097H10.0139" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M5.5579 12.3097H5.56717" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M14.4421 16.1962H14.4514" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M10.0046 16.1962H10.0139" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M5.5579 16.1962H5.56717" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M14.0437 1V4.29078" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path d="M5.96552 1V4.29078" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <Path fillRule="evenodd" clipRule="evenodd" d="M14.2383 2.57919H5.77096C2.83427 2.57919 1 4.21513 1 7.22222V16.2719C1 19.3262 2.83427 21 5.77096 21H14.229C17.175 21 19 19.3546 19 16.3475V7.22222C19.0092 4.21513 17.1842 2.57919 14.2383 2.57919Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </Svg>
                            </View>
                            <TextInput
                                onChangeText={setDateForView}   
                                placeholder='Select date'
                                value={dateForView}
                                editable={false}      
                                id="date"
                                name="date" 
                                style={[globalStyle.light, styles.inputGap, styles.dateInput]} 
                                placeholderTextColor=/* '#a0a0a0' */'#000'               
                            />
                        </View>
                    </Pressable>
                )}          
            </View>

            <View>

                <TouchableOpacity    
                    onPress={() => onUpdateOptions(cameraForView, cameraForGet, dateForView, dateForGet)}
                    
                    style={styles.button}
                >
                    <Text style={[globalStyle.bold, styles.textButton]}>Explore</Text>

                </TouchableOpacity> 
            </View>
        </View>
    )
};





const styles = StyleSheet.create({

    dropdownIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 100,
        height: 100
    },

    calendarIcon: {
        position: 'absolute',
        zIndex: 5,
        right: 15,
        top: 25
    },

    container: {
        width: '100%'
    },

    label: {
        color: '#000',
        fontSize: 14,
    },

    inputGap: {
        marginTop: 7
    },

    dateInput: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 10,
        fontSize: 18,
        paddingLeft: 16,
        paddingTop: 18,
        paddingRight: 60,
        paddingBottom: 18,
        color: '#000'
    },

    button: {
        backgroundColor: '#BF2E0E',
        height: 60,
        borderRadius: 10,
        paddingTop: 18,
        marginTop: 40,
        boxShadow: '0px 4px 14px 0px rgba(191, 46, 14, 0.20)'
    },

    textButton: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }
});