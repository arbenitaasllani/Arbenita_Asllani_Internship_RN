import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const gjirafaURL = 'https://gjirafa50.com/';

const AlbumDetail = ({ product }) => {
    const {title, brand, thumbnail} = product;
    const {thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image 
                 style={thumbnailStyle}
                 source={{ uri: thumbnail }}
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{brand}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image 
            style={imageStyle}
            source={{ uri: thumbnail }}
            />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(gjirafaURL)}>
                Buy Now
            </Button>

        </CardSection>
    </Card>
)
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;

