import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../Components/Title';
import TitleClass from '../../Components/Title/classComponent';

const Home = () => {
    const [title,setTitle] = useState('My First Component');

    useEffect(() => {
        setTimeout(() => {
            setTitle('Updated prop text');
        },3000);
    },[]);
    
    console.log('title :>> ',title);
    return (
        <SafeAreaView>
            <View>
                <Title />
                <TitleClass text="class Component" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);