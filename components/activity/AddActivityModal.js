import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from "react-native";

import { Input } from 'react-native-elements';

import { ScrollView, TextInput } from "react-native-gesture-handler";
import ACTIVITY from '../../models/activity'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';
import SegmentedControl from '@react-native-community/segmented-control';
import { create_activity } from '../../store/actions/activityAction'

import theme from "../../themes/default"
import moment from 'moment'
import AnimalItem from '../animal/AnimalItem'
import { useDispatch } from 'react-redux';
import StallItem from '../../components/stall/StallItem'

const AddActivityModal = (props) => {

  //param props type, selectedItem, modelVisible
  let { type: activityType } = props
  const dispatch = useDispatch()

  const [activity, setActivity] = useState(new ACTIVITY())
  const [selectedItem, SetSelectedItem] = useState()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const segmentActValue = ['ฟาร์ม', 'ปศุสัตว์', 'คอก'];
  const [segmentActivity, setSegmentActivity] = useState(0);

  const segmentToString = (seg) => seg === 2 ? 'stall' : seg === 1 ? 'animal' : 'farm'

  useEffect(() => {
    if (props.selectedItem) {
      SetSelectedItem(props.selectedItem)
    }
  }, [props.selectedItem])

  useEffect(() => {
    console.log('new_activity useEffect');
    const new_activity = new ACTIVITY()
    setActivity({ ...new_activity, type: segmentToString(segmentActivity) })
  }, [props.setModalVisible, segmentActivity])

  useEffect(() => {
    activityType = segmentToString(segmentActivity)
  }, [segmentActivity])

  useEffect(() => {
    console.log(activityType);
    if (activityType === 'farm') {
      setSegmentActivity(0)
    } else if (activityType === 'animal') {
      setSegmentActivity(1)
    } else if (activityType === 'stall') {
      setSegmentActivity(2)
    }
  }, [activityType])

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const selectDate = date
    setActivity(prev => ({ ...prev, alertDate: selectDate }))
    hideDatePicker();
  };

  const submitActivity = () => {
    dispatch(create_activity(activity))
    props.setModalVisible()
  }
  const selectFarmItems =()=> {
    props.navigation.navigate('farm')
    props.setModalVisible()
  }

  const renderSeclectedComponent = () => {
    if (!selectedItem && segmentActivity !== 0) {
      return (<View>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'gray' }]} onPress={selectFarmItems} >
          <Text style={{ ...theme.font, textAlign: 'center' }}>เลือก{segmentActValue[segmentActivity]}</Text>
        </TouchableOpacity>
      </View>)
    } else if (segmentActivity === 1) {
      return (<AnimalItem Animal={selectedItem} navigation={props.navigation} setModalVisible={props.setModalVisible} />)
    } else if (segmentActivity === 2) {
      return (<StallItem stalls={selectedItem} navigation={props.navigation} isActivityButton={false} setModalVisible={props.setModalVisible} />)
    } else {
      return (<View />)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', paddingVertical: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ ...theme.font, fontSize: 30, fontWeight: 'bold' }}>เพิ่มกิจกรรม</Text>
                  <SegmentedControl
                    style={{ width: '50%' }}
                    values={segmentActValue}
                    selectedIndex={segmentActivity}
                    onChange={(event) => {
                      setSegmentActivity(event.nativeEvent.selectedSegmentIndex);
                    }}
                  />
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '0%' }}>
                <View style={{ width: '100%' }} >
                  {renderSeclectedComponent()}

                  <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>หัวข้อ</Text>

                  <TextInput
                    value={activity.name}
                    maxLength={25}
                    placeholder='หัวข้อ'
                    onChangeText={text =>
                      setActivity(prev => ({ ...prev, name: text }))}
                    style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderColor: 'black', borderWidth: 1, textAlign: 'left' }} />
                  <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>รายละเอียด</Text>

                  <TextInput value={activity.detail}
                    placeholder='รายละเอียด'
                    maxLength={75}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text =>
                      setActivity(prev => ({ ...prev, detail: text }))}
                    style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderColor: 'black', borderWidth: 1, textAlign: 'left', alignItems: 'flex-start' }} />

                  <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}><AntDesign name="calendar" size={24} color="black" style={{ marginLeft: 10 }} /> กำหนดสิ้นสุด</Text>

                  <View style={{ flex: 1 }}>

                    <View style={{ width: '66%' }}>

                      <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{moment(activity.alertDate).format('DD MMMM YYYY, h:mm')}</Text>
                      </TouchableOpacity>

                      <DateTimePickerModal
                        headerTextIOS='กำหนดสิ้นสุด'
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        isDarkModeEnabled={true}
                      />
                    </View>
                    <View>
                      <TouchableOpacity style={[styles.button, theme.successButton]} onPress={submitActivity} >
                        <Text style={{ ...theme.font, textAlign: 'center' }}>เพิ่มกิจกรรมในฟาร์ม</Text>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <TouchableOpacity style={[styles.button, theme.dangerButton]} onPress={props.setModalVisible} >
                        <Text style={{ ...theme.font, textAlign: 'center' }}>ยกเลิก</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  button: {
    // flex: 0.6,
    borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: '3%',
    marginTop: '4%',
    paddingVertical: '3%',
    // backgroundColor: theme..backgroundColor,
    color: theme.defaultButton.color,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 0
  },
  modalView: {
    margin: 0,
    width: '100%',
    flex: 0.8,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AddActivityModal;