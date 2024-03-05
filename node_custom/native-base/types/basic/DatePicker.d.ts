export class DatePicker {
    static defaultProps: {
        disabled: boolean;
    };
    constructor(props: any);
    state: {
        modalVisible: boolean;
        defaultDate: any;
        chosenDate: any;
    };
    setDate(date: any): void;
    showDatePicker: () => void;
    openAndroidDatePicker(): Promise<void>;
    formatChosenDate(date: any): any;
    render(): JSX.Element;
}
