import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const NewsDetailsScreen = props => {

    const dispatch = useDispatch();

    const {articleUrl} = props.route.params;
    const article = useSelector(state => state.news.articles.articles.find(article => article.url === articleUrl));

    const isFav = useSelector( state => state.news.favorites.some(article => article.url === article.url));

    return (
        <ScrollView style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>{article.title}</Text>
            </View>

            <View>
                <ImageBackground source={{ uri: article.urlToImage  }} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.author}>{article.author}</Text>
                        <Feather 
                    
                    name="heart"
                    width={24}        
                    height={24}
                    onPress={() => {
                        dispatch(newsAction.toggleFavorites(article.url))
                    }}
                />

                    </View>
                </ImageBackground>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {article.description}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    heading: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    author: {
        fontFamily: 'Ubuntu',
        fontSize: 20,
        color: 'white'
    },  
    description: {
        margin: 10
    },
    descriptionText: {
        fontSize: 20,
        fontFamily: 'Ubuntu'
    }


    
});

export default NewsDetailsScreen;
