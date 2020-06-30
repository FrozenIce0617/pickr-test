import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import {setRandomDigits} from '../../redux/actions';
import {IRootState} from '../../redux/store';
import {randomDigitGenerator} from '../../utils';
import styles from './styles';

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
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
    <View style={styles.listItemContainer}>
      {item.map((digit, index) => (
        <Text key={`${digit}-${index}`} style={styles.listItemText}>
          {digit}
        </Text>
      ))}
    </View>
  );
  return (
    <LinearGradient
      colors={['#1a1d1cdd', '#1a1d1c56']}
      locations={[0.4, 1]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {logs[logs.length - 1].map((digit, index) => (
            <View key={index.toString()}>
              <Text style={styles.digit}>{digit}</Text>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <Button
            type="solid"
            title="Generate"
            onPress={handleGenerate}
            buttonStyle={styles.generateButton}
            titleStyle={styles.generateButtonText}
          />
          <Button
            type="clear"
            title="Show Log"
            onPress={handleShowLogs}
            titleStyle={styles.showLogText}
          />
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList<Number[]>
              data={logs}
              renderItem={renderListItem}
              keyExtractor={(item, index) => index.toString()}
              style={styles.listContainer}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
}
