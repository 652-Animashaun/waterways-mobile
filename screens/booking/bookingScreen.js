import {useState, useRef} from 'react';
import ViewScheduleComponent from '../../components/viewschedule/index';
import ViewRideSchedule from '../../components/viewschedule/index';



const BookingScreen = ({navigation}) => {
	const [form, setForm] = useState('');

	// const onChange =({name, value})=>{
	// 	setForm(...form, [name]:value)
	// }

	
	
	
	return (
			<ViewRideSchedule navigation={navigation}/>
		)
}



export default BookingScreen;