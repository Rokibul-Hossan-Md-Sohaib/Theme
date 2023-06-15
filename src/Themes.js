import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Themes = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Create', 
          headerStyle: {
            backgroundColor: '#FFF5E4',
       
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            padding:15,
       
            
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{marginLeft: 10}}>
              <Text style={{color: 'black'}}>Theme</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            //   onPress={() => alert('hello from Right Menu ')}
              style={{marginRight: 25}}>
              <Text style={{color: 'black'}}>Delete</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
    const mainData =
     {  
       
        Genarel:
       [ 
        {
            title: "Background",
            icon: "menu",
            icon2: 'ios-alert-circle-sharp'

        },
        {
            title: "Background semitone",
            icon: "menu",
            icon2: 'ios-alert-circle-sharp'
        },
        {
            title: "Primary accent",
            icon: "menu",
            icon2: 'ios-alert-circle-sharp'
        },
        {
            title: "Secondary accent",
            icon: "menu",
            icon2: 'ios-alert-circle-sharp'
        },
   ],
   Text:[
    {
        lago: "T",
        title: "Title",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        lago: "H",
        title: "Heading",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        lago: "S1",
        title: "Subheading",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        lago: "S2",
        title: "Subheading 2",
        icon2: 'ios-alert-circle-sharp'
    },
   ],
   Insert:[
    {
        icon: "menu",
        title: "Quote",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        icon: "menu",
        title: "Link",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        icon: "menu",
        title: "Callout",
        icon2: 'ios-alert-circle-sharp'
    },
    {
        icon: "menu",
        title: "Link break",
        icon2: 'ios-alert-circle-sharp'
    },
   ]
    }
    
  return (
    <ScrollView style ={{backgroundColor: "#FFF5E4"}}>
      <Text>Themes</Text>

      <View
      style={styles.positions}

      >
        <Text style={{textAlign: 'center', justifyContent: 'center'}}>My Theme#1</Text>
      
      </View>
      <View
       
        >
            <Text style={styles.text}>Ganeral</Text>
         {
            mainData.Genarel.map(docu =>{
                return(
                    <View
                    style={styles.positions2}
                    >
                        <View
                        style={{  flex: 1,
                            flexDirection: 'row',}}
                        >
                        <Icon 
                        name={docu.icon}
                        size={20}
                        />
                        <Text>{docu.title}</Text>
                        <Icon name={docu.icon2} size={20} style={{marginLeft: "auto"}}/>
                        </View>
                        <View  style={{ height: 20,
                        borderBottomWidth: StyleSheet.hairlineWidth,}}
                       >

                        </View>
                    </View>
                )
            })
         }
        </View>

        <View
       
       >
           <Pressable
           style={styles.positions}
   onPress={() => navigation.navigate('Highlight')}
   >
    <Text>Hightlight</Text>
   </Pressable>
           <Text style={styles.text}>Text</Text>
        {
           mainData.Text.map(docu =>{
               return(
                   <View
                   style={styles.positions2}
                   >
                       <View
                       style={{  flex: 1,
                           flexDirection: 'row',}}
                       >
                     
                       <Text style={{paddingRight:10 , fontWeight: 'bold'}}>{docu.lago}</Text>
                       <Text>{docu.title}</Text>
                       <Icon name={docu.icon2} size={20} style={{marginLeft: "auto"}}/>
                       </View>
                       <View  style={{ height: 20,
                        borderBottomWidth: StyleSheet.hairlineWidth,}}
                       >

                        </View>
                   </View>
               )
           })
        }
       </View>
        <View
       
       >
           <Text style={styles.text}>Insert</Text>
        {
           mainData.Insert.map(docu =>{
               return(
                   <View
                   style={styles.positions2}
                   >
                       <View
                       style={{  flex: 1,
                           flexDirection: 'row',}}
                       >
                        <Icon 
                        name={docu.icon}
                        size={20}
                        />
                       <Text style={{paddingRight:10 , fontWeight: 'bold'}}>{docu.lago}</Text>
                       <Text>{docu.title}</Text>
                       <Icon name={docu.icon2} size={20} style={{marginLeft: "auto"}}/>
                       </View>
                       <View  style={{ height: 20,
                        borderBottomWidth: StyleSheet.hairlineWidth,}}
                       >

                        </View>
                   </View>
               )
           })
        }
       </View>
    </ScrollView>
  )
}

export default Themes

const styles = StyleSheet.create({
    positions: {
      
        backgroundColor: "white", color: "white", height: 40,  borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth, margin: 10, borderRadius: 5
    },
    positions2: {
      
        backgroundColor: "white", color: "white", height: 40,  borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth, marginLeft: 10, marginRight: 10 ,borderRadius: 5,
        
    },
    text: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
})