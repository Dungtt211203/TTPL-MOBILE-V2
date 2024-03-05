export default class NativeBaseComponent extends Component<any, any, any> {
    static contextTypes: {
        theme: any;
        foregroundColor: any;
    };
    static propTypes: {
        theme: any;
    };
    static childContextTypes: {
        theme: any;
        foregroundColor: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    getChildContext(): {
        theme: any;
    };
    getContextForegroundColor(): any;
}
import { Component } from 'react';
