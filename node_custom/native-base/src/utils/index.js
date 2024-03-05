import PropTypes from 'deprecated-react-native-prop-types';
import { canUseDom } from './canUseDom';
import { useKeyboardBottomInset } from './useKeyboardBottomInset';
import getAbsoluteChildren from './getAbsoluteChildren';
import getAttachedChildren from './getAttachedChildren';

import InteractionManager from './interactionManager';
import getSpacedChildren from './getSpacedChildren';
import { mergeRefs, composeEventHandlers } from './mergeRefs';

export { combineContextAndProps } from './combineContextAndProps';
export { ariaAttr } from './accessibilityUtils';
export { isEmptyObj } from './isEmptyObj';
export { resolveStackStyleInput } from './resolveStackStyleInput';
export { createContext } from './createContext';

export {
	InteractionManager,
	PropTypes,
	canUseDom,
	useKeyboardBottomInset,
	getSpacedChildren,
	mergeRefs,
	composeEventHandlers,
	getAbsoluteChildren,
	getAttachedChildren,
};
