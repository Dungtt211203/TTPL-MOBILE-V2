import { TypeNavigation, TypeNavigationKeys } from '@app-views/types';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackNavigationProps<T extends TypeNavigationKeys> = T extends 'DrawerContent'
    ? DrawerContentComponentProps
    : NativeStackScreenProps<TypeNavigation, T>;

export type { StackNavigationProps };
