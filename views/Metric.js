import React, {Component} from 'react';
import {StuleSheet, View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

type Props = {};

export default class Metric extends Component<Props>{
    render(){
        const { navigation } = this.props;
        const app_id = navigation.getParam('app_id', 'No App');
        const uuid = navigation.getParam('uuid', 'No uuid');
        console.log (navigation);
        return(
            <Card title="Metrics">
            <View>
                <ListItem
                    key={1}
                    title={"APP: " + app_id}
                />

            </View>
        </Card>
        )      
    }
}