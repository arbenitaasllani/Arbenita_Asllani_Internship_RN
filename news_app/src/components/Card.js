import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const Card = props => {

    const dispatch = useDispatch();
    const isFav = useSelector( state => state.news.favorites.some(article => article.url === props.url));

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('NewsDetails', {
                articleUrl: props.url,
                
            })
        }}>
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image 
                    // source={require('../../assets/news_image.jpg')}
                    source={{ uri: props.image ? props.image : 'https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po='  }}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                   {props.title.length > 30 ? props.title.slice(0, 30) + '...' : props.title}
                </Text>
                <Feather 
                    
                    name="heart"
                    width={24}        
                    height={24}
                    onPress={() => {
                        dispatch(newsAction.toggleFavorites(props.url))
                    }}
                />
            </View>
          
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                    {props.description.length > 50 ? props.description.slice(0, 100) + '...' : props.description} 
                </Text>
            </View>
        </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create( {
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10

    },
    title: {
        fontSize: 17
    },
    description: {
        fontSize: 14
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    }

})

export default Card;

