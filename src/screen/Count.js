import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment} from "../store/authSlice";

const Count =(props)=>{
    const count = useSelector(state => state.reducer.auth.value);
    const dispatch = useDispatch();

    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:'10%'}}>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>dispatch(increment())}>
                <Text style={{fontSize:50}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize:50}}>{count}</Text>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>dispatch(decrement())}>
                <Text style={{fontSize:50}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Count;