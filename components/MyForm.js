import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Button, 
    Text, 
    TextInput,
    Pressable,
    Platform
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function MyForm({onUpdateOptions}) {

    const [date, setDate] = useState(new Date());
    const [showPicker, seteShowPicker] = useState(false);

    const [camera, setCamera] = useState('');
    const [photoDate, setPhotoDate] = useState('');
    const [dateForGet, setDateForGet] = useState('');




    const toggleDatePicker = () => {
        seteShowPicker(!showPicker);
    };

    const onChange = ({type}, selectedDate) => {
        if (type == "set") {
            const currenDate = selectedDate;
            setDate(currenDate);

            if (Platform.OS === 'android') {
                toggleDatePicker();
                setPhotoDate(formatDateForInput(formatDateForGet(currenDate)));
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
                alert( "Нет таких значений" );
        }

        return `${date.day = date.day < 10 ? `0${date.day}` : date.day} ${letterMonth}, ${date.year}`

    }



    return (

        <View>

            <View>

                <Text>
                    Rover Camera
                </Text>
                
                <SelectList
                    setSelected={(val) => setCamera(val)} 
                    data={['qwqe', 'rty', 'uio']}

                    id="camera"
                    name="camera"
                    as="select"
                    search={false} 
                    placeholder="Select camera"
                    fontFamily='d-light'
                />
            </View>

            <View>

                <Text>
                    Date
                </Text>

                {showPicker && (
                    <DateTimePicker
                        onChange={onChange} 
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
                        <TextInput
                            onChangeText={setPhotoDate}   
                            placeholder='Select date'
                            value={photoDate}
                            editable={false}      
                            id="date"
                            name="date"                   
                        />
                    </Pressable>
                )}          
            </View>

            <View>

                <Button 
                    onPress={() => onUpdateOptions(camera, dateForGet, photoDate)}
                    title='Explore'
                />
            </View>
        </View>
    )
};





const styles = StyleSheet.create({

});