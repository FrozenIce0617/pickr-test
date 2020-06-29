import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';

import {setRandomDigits} from '../../redux/actions';
import {IRootState} from '../../redux/store';
import {randomDigitGenerator} from '../../utils';

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {height} = useWindowDimensions();
  const {logs} = useSelector((state: IRootState) => state.random);

  const handleGenerate = () => {
    dispatch(
      setRandomDigits([
        randomDigitGenerator(),
        randomDigitGenerator(),
        randomDigitGenerator(),
      ]),
    );
  };

  const handleShowLogs = () => {
    setModalVisible(true);
  };

  const renderListItem = ({item}: {item: Number[]}) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {item.map((digit, index) => (
        <Text key={`${digit}-${index}`} style={{flex: 1, textAlign: 'center'}}>
          {digit}
        </Text>
      ))}
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {logs[logs.length - 1].map((digit, index) => (
          <View key={index.toString()}>
            <Text>{digit}</Text>
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity onPress={handleGenerate}>
          <Text>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowLogs}>
          <Text>Show Log</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View style={{backgroundColor: 'white', height: height / 3}}>
          <FlatList<Number[]>
            data={logs}
            renderItem={renderListItem}
            keyExtractor={(item, index) => index.toString()}
            style={{margin: 20}}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
