declare const _default: {
    runAfterInteractions: (f: any) => void;
    Events: {
        interactionStart: string;
        interactionComplete: string;
    };
    addListener(eventType: string, listener: (...args: any[]) => any, context?: any): import("react-native").EmitterSubscription;
    createInteractionHandle(): number;
    clearInteractionHandle(handle: number): void;
    setDeadline(deadline: number): void;
};
export default _default;
