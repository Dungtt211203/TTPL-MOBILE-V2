import ButtonMain from './Button';
import ButtonGroup from './ButtonGroup';
import type { IButtonComponentType } from './types';

const ButtonTemp: any = ButtonMain;
ButtonTemp.Group = ButtonGroup;

// To add typings
const Button: IButtonComponentType = ButtonTemp;

export { Button };
export type { IButtonGroupProps, IButtonProps } from './types';
