import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, Overlay, Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';
import Container from '../common/container/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import viewScheduleReq, {clearScheduleViewData} from '../../context/actions/requestschedule';
import CustomButton from '../common/customButton';
import {GlobalContext} from '../../context/provider';
import CustomMessage from '../common/message';
import { HOME, RIDES } from '../../constants/routeName';


const ViewRideSchedule = ({navigation}) => {
  const [departureModalOpen, setDepartureModalOpen] = useState(false);
  const [arrivalModalOpen, setArrivalModalOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const [inputOpen2, setInputOpen2] = useState(false);
  const {bookingDispatch, bookingState:{getSchedule: {error, loading, data}}} = useContext(GlobalContext)
  const [errors, setErrors] = useState({});

  const [departureValue, setDepartureValue] = useState(null);
  const [arrivalValue, setArrivalValue] = useState(null);
  const [rideForm, setRideForm] = useState({});
  const [date, setDate] = useState(new Date())

  const handleModalOpen = () => setDepartureModalOpen(true);
  const handleModalClose = () => setDepartureModalOpen(false);
  const handleModalOpen2 = () => setArrivalModalOpen(true);
  const handleModalClose2 = () => setArrivalModalOpen(false);
  const handleValueChange = (value) => setSelectedValue(value);
  


  const onChange=(event, selectedDate)=>{
    setDate(selectedDate)
    const formattedDate = selectedDate.toISOString().slice(0,10);
     
    setRideForm({...rideForm, 'departureDate':formattedDate});
    console.log('newdate', formattedDate)
  }

  const handleFormChange = ({name, value}) => {
    setRideForm({...rideForm, [name]:value});
    
  }
  const handleSubmit = () =>{
    if (rideForm.departureJetty && rideForm.arrivalJetty){
      console.log('form', rideForm)
 
      viewScheduleReq(rideForm)(bookingDispatch)((response)=>{
        console.log('response', response)
        navigation.navigate(RIDES, {schedules: response})
      })

      // uncomment to use dummy data 
      // navigate to the next screen to mock response
      // navigation.navigate(RIDES, {data})


    }
    else {

      setErrors({'Error':'please select departure and arrival jetty'})
      console.log('form', rideForm)

    }
  }

  const items = [
          {label: 'Oworonsoki', value: 'Oworonsoki', id:4},
          {label: 'Lekki', value: 'Lekki', id:5},
          {label: 'Ikorodu', value: 'Ikorodu', id:2},
          {label: 'CMS', value: 'CMS', id:1},
          {label: 'Apapa', value: 'Apapa', id:8},
          {label: 'FESTAC', value: 'FESTAC', id:9},
        ]

  const clearError = () =>{
    console.log('dismissed')
  }

  return (

    <Container >
    {error?.departure_date && (<CustomMessage
          message={JSON.stringify(error)}
          danger
          onDismiss={(clearError)=>{clearError}}
          />) }
    {error?.Error && (<CustomMessage
          message={error.Error}
          danger
          onDismiss={(clearError)=>{clearError}}
          />) }
    {errors?.Error && (<CustomMessage
      message={errors.Error}
      danger
      onDismiss={()=>{setErrors(null)}}
      />)}
      <Button style={styles.buttonWrapper} title={departureValue||"Select Departure"} onPress={handleModalOpen} />
      <Overlay style={styles.container} isVisible={departureModalOpen} onBackdropPress={handleModalClose} fullscreen='false'>
        <View style={styles.wrapper}>
          <Text h4>Select a value</Text>
          <DropDownPicker
            items={items}
            open={inputOpen}
            setOpen={setInputOpen}
            setValue={setDepartureValue}
            onSelectItem={(item) => {handleFormChange({name:'departureJetty', value: item.id});
            handleModalClose();
              
            }}
            style={styles.wrapper}
          />
        </View>
      </Overlay>

      <Button style={styles.buttonWrapper} title={arrivalValue||"Select Arrival"} onPress={handleModalOpen2} />
      <Overlay isVisible={arrivalModalOpen} onBackdropPress={handleModalClose2}>
      <View>
      <DropDownPicker
            items={items}
            open={inputOpen2}
            setOpen={setInputOpen2}
            setValue={setArrivalValue}
            onSelectItem={(value) => {handleFormChange({name:'arrivalJetty', value: value.id});
            handleModalClose2();
            }}
            style={[styles.wrapper]}
          />
      </View>
      </Overlay>
      <View style = {styles.dateTimeWrapper}>
      <Text style={styles.dateTimeHeaderText}>Select Departure Date</Text>
      <DateTimePicker 
      mode="date" 
      display="default"
      value={date}
      onChange={onChange}
      
      />
      </View>

      <CustomButton 
      style={styles.buttonWrapper} 
      title="Submit" 
      onPress={handleSubmit} 
      loading={loading}
      disabled={loading}
      />
    </Container>
  );
};


export default ViewRideSchedule;