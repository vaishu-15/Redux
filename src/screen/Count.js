import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount,} from "../store/counterReducer";

const Count =()=>{
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:'100%'}}>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>dispatch(increment())}>
                <Text style={{fontSize:50}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>dispatch(incrementByAmount(4))}>
                <Text style={{fontSize:50}}>4</Text>
            </TouchableOpacity>
            <Text style={{fontSize:50}}>{count}</Text>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>dispatch(decrement())}>
                <Text style={{fontSize:50}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Count;