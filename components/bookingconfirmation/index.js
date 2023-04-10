import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import {VIEW_RIDE_SCHEDULE_DETAIL} from '../../constants/routeName';
import Container from '../common/container/index';
import {getBoatRide, } from '../../context/actions/bookride';


const BookingConfirmationScreen = ({data, date, navigation, bookingdispatch}) => {



  
  handleSubmit = (item) => {
      getBoatRide(item.id)(bookingdispatch)((response)=>{
        navigation.navigate(VIEW_RIDE_SCHEDULE_DETAIL, {item:response})
      })
    }

  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.touchableWrapper} onPress={()=>handleSubmit(item)}>
      <View style={styles.itemWrapper}>
        <Text style={styles.itemText}>{item.departure_jetty.name} - {item.arrival_jetty.name}</Text>
        <Text style={styles.itemText}>N{item.fare}</Text>
        
      </View>
      <View style={styles.itemWrapper}>
        <Text style={styles.itemText}>{item.departure_time.slice(11,16)} - {item.arrival_time.slice(11,16)}</Text>
        <Text style={styles.itemText}></Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Ride Schedules</Text>
          <Text style={styles.dateTitleText}>{new Date(date).toDateString()}</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
  );
};

export default BookingConfirmationScreen;
