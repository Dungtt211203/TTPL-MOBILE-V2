import {DrawerScreens} from '@app-navigation/navigation-screens';
import {goBack, navigate} from '@app-navigation/navigation-services';
import {TypeDrawerKeys} from '@app-views/types';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {keys} from 'lodash';
import {Box, Text} from 'native-base';
import React, {useCallback, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles_c from '../../assets/styles/styles_c';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {DATA_CATEGORIES} from '@realm-db/dataTest';
import sizes from '@assets/styles/sizes';
import {SvgXml} from 'react-native-svg';
import {iconBackSvg} from '@app-uikits/icon-svg';
import {scaleH} from '@app-services/utils';

interface NavigationDrawerProps {}

const Drawer = createDrawerNavigator();

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({}) => {
  const [status, setStatus] = useState<string>('41');
  const [dataList, setDataList] = useState([
    ...DATA_CATEGORIES.filter((e: any) => e.id === '41'),
  ]);
  const [image, setImage] = useState<string>('');

  const setStatusFilter = (status: string) => {
    const data: any = DATA_CATEGORIES.filter((e: any) => e.id === status);
    setDataList(data[0].children_data);
    setStatus(status);
  };

  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => {
       
        }}>
        <FastImage
          source={{
            uri: image,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: 44, height: 44, borderRadius: 4, marginRight: 10}}
        />
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={{...styles.textTab}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const DrawerContent = useCallback(
    (props: DrawerContentComponentProps) => {
      return (
        <>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 12 * scaleH,
              borderTopRightRadius: 20 * scaleH,
              borderTopLeftRadius: 20 * scaleH,
            }}>
            <TouchableOpacity onPress={() => goBack()}>
              <SvgXml xml={iconBackSvg('#0088FF')} />
            </TouchableOpacity>
            <Text
              bold
              fontSize={'14px'}
              fontWeight={'bold'}
              marginRight={'10px'}
              marginLeft={'10px'}
              style={{color:'#0088FF'}}>
              DANH MỤC SẢN PHẨM
            </Text>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
            <ScrollView
              style={{flex: 1}}
              bounces={false}
              showsVerticalScrollIndicator={false}>
              <View style={styles.listTab}>
                {DATA_CATEGORIES.map((e: any, i: number) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        setStatusFilter(e.id);
                        setImage(e.image);
                      }}>
                      {status === e.id ? (
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          colors={['#36C4FF', '#5790FF']}
                          style={{...styles.btnTab}}>
                          <Text
                            style={[
                              {...styles.textTab},
                              status === e.id && styles.textTabActive,
                            ]}>
                            {e.name}
                          </Text>
                        </LinearGradient>
                      ) : (
                        <View style={{...styles.btnTab}}>
                          <Text
                            style={[
                              {...styles.textTab},
                              status === e.id && styles.textTabActive,
                            ]}>
                            {e.name}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
            <FlatList
              bounces={false}
              data={dataList}
              keyExtractor={(e, i) => i.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      );
    },
    [status],
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: sizes._screen_width - 50,
        },
      }}
      drawerContent={DrawerContent}>
      {keys(DrawerScreens).map(key => {
        const value = DrawerScreens[key as TypeDrawerKeys];
        return (
          <Drawer.Screen
            key={value.name}
            name={value.name}
            component={value.component}
            options={value.options}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listTab: {
    backgroundColor: '#F6F6F6',
    paddingVertical: Platform.OS === 'ios' ? 45 : 0,
  },
  btnTab: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'flex-start',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  textTab: {
    fontSize: 14,
    fontWeight: '400',
  },
  btnTabActive: {
    backgroundColor: '#227A12',
    borderRadius: 5,
  },
  textTabActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    ...styles_c.row_start,
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
});
