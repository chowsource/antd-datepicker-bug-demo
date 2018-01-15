import React from 'react';

import { LocaleProvider ,Button, DatePicker,version} from 'antd';
import enUS from 'antd/es/locale-provider/en_US';
import zhCN from 'antd/es/locale-provider/zh_CN';

const { RangePicker } = DatePicker;

export default class DemoComponent extends React.Component {

    state = {local:enUS};


    changeLocale = () => {
        const { local } = this.state;
        if(local === zhCN){
            this.setState({local:enUS});
        }else{
            this.setState({local:zhCN});
        }

    }


    render() {
        const { local } = this.state;
        return (
            <LocaleProvider locale={local}>
                <div>
                    <p>Current Version:{version}</p>
                    <Button type='primary' onClick={this.changeLocale}>{local === zhCN ? '当前中文' : '当前English'}</Button>
                    <br/>
                    <DatePicker/>
                    <RangePicker />
                </div>
            </LocaleProvider>
        );
    }
}
