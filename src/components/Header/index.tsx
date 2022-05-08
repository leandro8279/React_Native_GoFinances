import React from "react";
 import {View, Text, Image} from "react-native";
 
 import {styles} from "./styles";
 
 export function Header (){
 	return (
 		<View style={styles.container}>
 			<View style={styles.wrapper}>
         <View style={styles.info}>
           <Image source={{uri:"https://avatars.githubusercontent.com/u/49030804?v=4"}} style={styles.photo}/>
           <View style={styles.user}>
             <Text style={styles.title}>
               Òla, 
             </Text>
             <Text style={styles.subTitle}>
                 Leandro
               </Text>
           </View>
         </View>
       </View>
 		</View>
 	);
 } 