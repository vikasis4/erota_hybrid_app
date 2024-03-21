import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useProducts from '../hooks/products/useProducts'
import { FlashList } from '@shopify/flash-list';
import Error from '../packages/ui/Error';
import Theme from '../theme';
import { ProductBaseURL } from '../config/api';
import StyledButton from '../packages/ui/StyledButton';

const ProductsList = () => {

    const { isLoading, data, isError } = useProducts();

    return (
        isLoading ?
            null :
            isError ?
                <Error />
                :
                <FlashList
                    renderItem={({ item }: { item: any }) => {
                        return <Content
                            data={item}
                        />;
                    }}
                    estimatedItemSize={data.length}
                    contentContainerStyle={{ padding: 10, backgroundColor: Theme.colors.primary }}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    data={data}
                />
    )
}

export default ProductsList;

const Content = ({ data }: any) => {

    return (
        <View style={styles.main}>
            <Image source={{ uri: ProductBaseURL + data.imagesLink[0] }} style={styles.img} />
            <Text style={styles.txt}>{data.name}</Text>
            <View style={styles.inner}>
                <Text style={styles.txt1}>&#8377; {data.price}</Text>
                <Text style={styles.txt2}>&#8377; {data.price + 300}</Text>
                <Text style={styles.txt1}>{Math.round((300) * 100 / (data.price + 300))}% off</Text>

            </View>
            <StyledButton txt="View Product" fxn={() => { }} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: Theme.colors.primary,
        elevation: 6,
        borderRadius: 6,
    },
    inner: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 300,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    txt: {
        fontFamily: Theme.fonts.lg,
        color: Theme.colors.text.dark,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 12
    },
    txt1: {
        fontFamily: Theme.fonts.lg,
        color: 'darkgreen',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 8
    },
    txt2: {
        fontFamily: Theme.fonts.lg,
        color: Theme.colors.text.danger,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 8,
        textDecorationLine:'line-through'
    }
})