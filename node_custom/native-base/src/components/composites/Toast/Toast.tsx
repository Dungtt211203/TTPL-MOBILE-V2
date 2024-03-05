import Box from 'native-base/components/primitives/Box';
import {Overlay} from 'native-base/components/primitives/Overlay';
import {usePropsResolution} from 'native-base/hooks';
import {useKeyboardBottomInset} from 'native-base/utils';
import React, {
  MutableRefObject,
  createContext,
  memo,
  useMemo,
  useState,
} from 'react';
import {
  AccessibilityInfo,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Text, variables} from '../../../index';
import PresenceTransition from '../Transitions/PresenceTransition';
import {IToast, IToastContext, IToastInfo, IToastProps} from './types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import sizes from '@assets/styles/sizes';

const INSET = 100;

const POSITIONS: any = {
  top: {
    top: INSET,
    alignSelf: 'center',
  },
  'top-right': {
    top: INSET,
    right: 0,
    alignSelf: 'flex-end',
  },
  'top-left': {
    top: INSET,
    left: 0,
    alignSelf: 'flex-start',
  },
  bottom: {
    bottom: 150,
    alignSelf: 'center',
  },
  'bottom-left': {
    bottom: INSET,
    left: 0,
    alignSelf: 'flex-start',
  },
  'bottom-right': {
    bottom: INSET,
    right: 0,
    alignSelf: 'flex-end',
  },
};

const initialAnimationOffset = 24;

const transitionConfig: any = {
  bottom: initialAnimationOffset,
  top: -initialAnimationOffset,
  'top-right': -initialAnimationOffset,
  'top-left': -initialAnimationOffset,
  'bottom-left': initialAnimationOffset,
  'bottom-right': initialAnimationOffset,
};

const ToastContext = createContext<IToastContext>({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {},
});

let timer: any;

const CustomToast = memo(({_overlay, _stack, _presenceTransition}: any) => {
  const {toastInfo, visibleToasts, removeToast} =
    React.useContext(ToastContext);

  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  let hasToastOnOverlay = false;
  getPositions().map(position => {
    if (toastInfo[position]?.length > 0) hasToastOnOverlay = true;
  });

  return getPositions().length > 0 ? (
    <Overlay
      {..._overlay}
      isOpen={hasToastOnOverlay}
      isKeyboardDismissable={false}>
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <View
              key={position}
              style={{
                position: 'absolute',
                ...POSITIONS[position],
                width: '80%',
              }}>
              {
                // @ts-ignore
                toastInfo[position].map((toast: IToast) => (
                  <PresenceTransition
                    {..._presenceTransition}
                    key={toast.id}
                    visible={visibleToasts[toast.id]}
                    onTransitionComplete={(status: any) => {
                      if (status === 'exited') {
                        removeToast(toast.id);
                        toast.config?.onCloseComplete &&
                          toast.config?.onCloseComplete();
                      }
                    }}
                    initial={{
                      opacity: 0,
                      translateY: transitionConfig[position],
                    }}>
                    <SafeAreaView>
                      <Box
                        bottom={
                          ['bottom', 'bottom-left', 'bottom-right'].includes(
                            position,
                          ) && toast.config?.avoidKeyboard
                            ? bottomInset + 'px'
                            : undefined
                        }
                        alignSelf={'center'}
                        style={{
                          backgroundColor: variables.backgroundCard,
                          borderRadius: 8,
                        }}
                        shadow={'3'}>
                        {toast.component}
                      </Box>
                    </SafeAreaView>
                  </PresenceTransition>
                ))
              }
            </View>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
});

export const ToastProvider = ({children}: {children: any}) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({});
  const [visibleToasts, setVisibleToasts] = useState<{
    [key in string]: boolean;
  }>({});

  const [themeProps] = useState<any>(usePropsResolution('Toast', {}));
  const toastIndex = React.useRef(1);

  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);

  const hideToast = React.useCallback(
    (id: any) => {
      setVisibleToasts(prevVisibleToasts => ({
        ...prevVisibleToasts,
        [id]: false,
      }));
    },
    [setVisibleToasts],
  );

  const isActive = React.useCallback(
    (id: any) => {
      for (const toastPosition of Object.keys(toastInfo)) {
        const positionArray: Array<IToast> = toastInfo[toastPosition];
        return positionArray.findIndex(toastData => toastData.id === id) > -1;
      }

      return false;
    },
    [toastInfo],
  );

  const removeToast = React.useCallback(
    (id: any) => {
      setToastInfo(prev => {
        for (const toastPosition of Object.keys(prev)) {
          const positionArray: Array<IToast> = prev[toastPosition];
          const isToastPresent =
            positionArray.findIndex(toastData => toastData.id === id) > -1;

          if (isToastPresent) {
            const newPositionArray = positionArray.filter(
              item => item.id !== id,
            );
            const temp: any = {};
            temp[toastPosition] = newPositionArray;

            const newToastInfo = {...prev, ...temp};
            return newToastInfo;
          }
        }

        return prev;
      });
    },
    [setToastInfo],
  );

  const setToast = React.useCallback(
    (props: IToastProps): number => {
      const {
        placement = 'bottom',
        title,
        text,
        type,
        render,
        id = toastIndex.current++,
        description,
        duration = 3000,
        _title,
        _description,
        accessibilityAnnouncement,
        // @ts-ignore
        avoidKeyboard = false, //eslint-disable-line
        ...rest
      } = props;
      let positionToastArray = toastInfo[placement];
      if (!positionToastArray) positionToastArray = [];

      let component = null;

      if (render) {
        component = render({id});
      } else {
        if (type === 'success') {
          component = (
            <View
              style={{
                ...styles.outerContainer,
                borderColor: '#49a255',
              }}>
              <View style={styles.innerContainer}>
                <View style={{...styles.icons}}>
                  <Octicons name="check-circle" size={24} color={'#49a255'} />
                </View>
                <View style={{...styles.view_text}}>
                  {title && (
                    <Text style={{...styles.title, color: '#49a255'}}>
                      {title}
                    </Text>
                  )}
                  {text && (
                    <Text numberOfLines={1} style={styles.text}>
                      {text}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }
        if (type === 'error') {
          component = (
            <View
              style={{
                ...styles.outerContainer,
                borderColor: '#c74243',
              }}>
              <View style={styles.innerContainer}>
                <View style={{...styles.icons}}>
                  <MaterialIcons name="error" size={24} color={'#c74243'} />
                </View>
                <View style={{...styles.view_text}}>
                  {title && (
                    <Text style={{...styles.title, color: '#c74243'}}>
                      {title}
                    </Text>
                  )}
                  {text && (
                    <Text numberOfLines={1} style={styles.text}>
                      {text}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }
        if (type === 'warning') {
          component = (
            <View
              style={{
                ...styles.outerContainer,
                borderColor: '#df954a',
              }}>
              <View style={styles.innerContainer}>
                <View style={{...styles.icons}}>
                  <Feather name="info" size={24} color={'#df954a'} />
                </View>
                <View style={{...styles.view_text}}>
                  {title && (
                    <Text style={{...styles.title, color: '#df954a'}}>
                      {title}
                    </Text>
                  )}
                  {text && (
                    <Text numberOfLines={1} style={styles.text}>
                      {text}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }
        if (type === 'info') {
          component = (
            <View
              style={{
                ...styles.outerContainer,
                backgroundColor: '#474747',
              }}>
              <View style={styles.innerContainer}>
                <View style={{...styles.icons}}>
                  <MaterialIcons
                    name="error-outline"
                    size={24}
                    color={'#FFFFFF'}
                  />
                </View>
                <View style={{...styles.view_text}}>
                  {title && (
                    <Text style={{...styles.title, color: '#FFFFFF'}}>
                      {title}
                    </Text>
                  )}
                  {text && (
                    <Text
                      numberOfLines={1}
                      style={{...styles.text, color: '#FFFFFF'}}>
                      {text}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }
      }

      toastInfo[placement] = [
        ...positionToastArray,
        {component, id, config: props},
      ];

      setToastInfo({...toastInfo});

      setVisibleToasts({...visibleToasts, [id]: true});
      if (duration !== null) {
        setTimeout(function () {
          hideToast(id);
        }, duration);
      }

      if (duration !== null) {
        setTimeout(function () {
          hideAll();
        }, 15000);
      }
      // iOS doesn't support accessibilityLiveRegion
      if (accessibilityAnnouncement && Platform.OS === 'ios') {
        AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
      }

      return id;
    },
    [themeProps, toastInfo, visibleToasts, hideToast],
  );

  const contextValue = React.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast,
    };
  }, [
    toastInfo,
    setToastInfo,
    setToast,
    removeToast,
    hideAll,
    isActive,
    visibleToasts,
    setVisibleToasts,
    hideToast,
  ]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <CustomToast
        _overlay={themeProps._overlay}
        _stack={themeProps._stack}
        _presenceTransition={themeProps._presenceTransition}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const {setToast, hideAll, isActive, hideToast} =
    React.useContext(ToastContext);

  const toast = useMemo(
    () => ({
      show: setToast,
      close: hideToast,
      closeAll: hideAll,
      isActive,
    }),
    [setToast, hideAll, isActive, hideToast],
  );

  return toast;
};

export type IToastService = ReturnType<typeof useToast>;

export const ToastRef =
  React.createRef<IToastService>() as MutableRefObject<IToastService>;

export const Toast: IToastService = {
  show: (props: IToastProps) => ToastRef.current?.show(props),
  close: (id: any) => ToastRef.current?.close(id),
  closeAll: () => ToastRef.current?.closeAll(),
  isActive: (id: any) => ToastRef.current?.isActive(id),
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    borderLeftWidth: 8,
    alignItems: 'flex-start',
    width: sizes._screen_width / 1.4,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  view_text: {
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: '#3E3E3E',
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  icons: {
    paddingVertical: 10,
  },
});
