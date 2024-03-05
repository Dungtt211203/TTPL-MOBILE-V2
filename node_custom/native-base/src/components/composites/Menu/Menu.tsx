import { FocusScope } from '@react-native-aria/focus';
import React, { forwardRef, memo } from 'react';
import { AccessibilityInfo, ScrollView } from 'react-native';
import { useControllableState, useLayout } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import { Overlay } from '../../primitives/Overlay';
import Backdrop from '../Backdrop';
import { Popper } from '../Popper';
import { PresenceTransition } from '../Transitions';
import { MenuContext } from './MenuContext';
import type { IMenuProps } from './types';
import { useMenu, useMenuTrigger, useMenuTypeahead } from './useMenu';

const Menu = (
	{
		trigger,
		closeOnSelect = true,
		children,
		onOpen,
		onClose,
		isOpen: isOpenProp,
		defaultIsOpen,
		placement = 'bottom left',
		...props
	}: IMenuProps,
	ref?: any,
) => {
	const triggerRef = React.useRef(null);
	const [isOpen, setIsOpen] = useControllableState({
		value: isOpenProp,
		defaultValue: defaultIsOpen,
		onChange: (value) => {
			value ? onOpen && onOpen() : onClose && onClose();
		},
	});

	const { _overlay, _presenceTransition, _backdrop, useRNModal, ...resolvedProps } = usePropsResolution(
		'Menu',
		props,
	);
	const { layout, onLayout } = useLayout();

	const handleOpen = React.useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const handleClose = React.useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const triggerProps = useMenuTrigger({
		handleOpen,
		isOpen,
	});

	const updatedTrigger = () => {
		return trigger(
			{
				...triggerProps,
				ref: triggerRef,
				onPress: handleOpen,
			},
			{ open: isOpen },
		);
	};

	React.useEffect(() => {
		if (isOpen) {
			AccessibilityInfo.announceForAccessibility('Popup window');
		}
	}, [isOpen]);

	//TODO: refactor for responsive prop
	if (useHasResponsiveProps(resolvedProps)) {
		return null;
	}

	return (
		<>
			<Box onLayout={onLayout}>{updatedTrigger()}</Box>
			<Overlay
				isOpen={isOpen}
				onRequestClose={handleClose}
				useRNModalOnAndroid
				useRNModal={useRNModal}
				{..._overlay}
			>
				<PresenceTransition visible={isOpen} {..._presenceTransition}>
					<Popper triggerRef={triggerRef} onClose={handleClose} placement={placement} {...resolvedProps}>
						<Backdrop onPress={handleClose} {..._backdrop} />
						<Popper.Content isOpen={isOpen}>
							<MenuContext.Provider value={{ closeOnSelect, onClose: handleClose, layout }}>
								<FocusScope contain restoreFocus autoFocus>
									<MenuContent menuRef={ref} {...resolvedProps}>
										{children}
									</MenuContent>
								</FocusScope>
							</MenuContext.Provider>
						</Popper.Content>
					</Popper>
				</PresenceTransition>
			</Overlay>
		</>
	);
};

const MenuContent = ({ menuRef, children, ...props }: Omit<IMenuProps, 'trigger'> & { menuRef: any }) => {
	const menuProps = useMenu();
	const typeaheadProps = useMenuTypeahead(menuProps);

	return (
		<Box {...props} {...menuProps} {...typeaheadProps} ref={menuRef}>
			<ScrollView>{children}</ScrollView>
		</Box>
	);
};

export default memo(forwardRef(Menu));
