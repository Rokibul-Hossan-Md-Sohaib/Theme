import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const Home = ({navigation}) => {
    const myData =[
        {
            id: 1,
            title: "Defaulf",
            description: "lorem5 jhfkdjg jdsfhkd kjdgksd skdjghkzsd skdjg",
            color: "",
            textCol: "black",
            bredius: 10,
            borderWidth: 2,
            borderColor: 'red'
        },
        {
            id: 2,
            title: "Defaulf Dark",
            description: "lorem5 jhfkdjg jdsfhkd kjdgksd skdjghkzsd skdjg",
            color: "#332531",
            textCol: "white",
            bredius: 10
        },
        {
            id: 3,
            title: "Classic",
            description: "lorem5 jhfkdjg jdsfhkd kjdgksd skdjghkzsd skdjg",
            color: "#EFF4FF",
            textCol: "black",
            bredius: 10
        },
        {
            id: 4,
            title: "Spring",
            description: "lorem5 jhfkdjg jdsfhkd kjdgksd skdjghkzsd skdjg",
            color: "#FAFAFA",
            textCol: "black",
            bredius: 10
       
            
        },
        {
            id: 5,
            title: "Space",
            description: "lorem5 jhfkdjg jdsfhkd kjdgksd skdjghkzsd skdjg",
       
            color: "#000",
            textCol: "white",
            bredius: 10
            
        },
    ]
  return (
    <ScrollView style= {styles.container}>
           <Text>Theme</Text>
{
    myData.map( (docum) => {
        return (
            <View style={{backgroundColor: docum.color, borderRadius: docum.bredius,
            shadowColor: '#171717',
            margin: 20,
            height:80,
            marginTop: 50,
            borderWidth: docum.borderWidth,
            borderColor: docum.borderColor
            }}>
                <View style={{margin: 20}}>

                <Text style={{color:docum.textCol , fontSize: 20 }}>{docum.title}</Text>
                <Text style={{color: docum.textCol}}>{docum.description}</Text>
                </View>
                </View>
        )
    })
}
<Pressable
  onPress={() => navigation.navigate('Themes')}
style={styles.press}
>
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10 , flex: 1, flexDirection: 'row'}}>
  <Icon name ="add-circle-outline" size={30} color="red"/>
    <Text style={{ fontSize: 20, color: "red"}}>Create Own Theme</Text>
    </View>
</Pressable>
   
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF5E4"
    },
    press:{
        margin: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        height: 60
    },
    portion:{
        // backgroundColor: '#000',
        borderRadius: 10,
        shadowColor: '#171717',
        margin: 20,
        marginTop: 50,
      
       
    }
})