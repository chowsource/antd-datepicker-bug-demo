import React from 'react';

import { LocaleProvider ,Button, DatePicker,version} from 'antd';
// import enUS from 'antd/es/locale-provider/en_US';
import zhCN from 'antd/es/locale-provider/zh_CN';


export default class DemoComponent extends React.Component {

    state = {local:null};


    changeLocale = () => {
        const { local } = this.state;
        if(local){
            this.setState({local:null});
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
                    <Button onClick={this.changeLocale}>{local ? '当前中文' : '当前English'}</Button>
                    <br/>
                    <DatePicker/>
                </div>
            </LocaleProvider>
        );
    }
}
