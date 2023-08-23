import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

const NewsListScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsAction.fetchArticles())
    }, [dispatch]);

    const {articles} = useSelector(state => state.news.articles);
    console.log(articles);

    // const navigation = useNavigation();


    return (
        <FlatList 
            data={articles}
            keyExtractor={item => item.url}
            renderItem={({item}) => (
                <Card 
                    navigation={props.navigation} 
                    title={item.title}
                    image={item.urlToImage}
                    description={item.description}
                    url={item.url}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    
});

export default NewsListScreen;
