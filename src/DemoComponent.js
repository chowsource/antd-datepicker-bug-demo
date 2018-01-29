import React from 'react';

import { LocaleProvider ,Button, DatePicker,version,Form,Col, Tabs, Row, Table} from 'antd';
import enUS from 'antd/es/locale-provider/en_US';
import zhCN from 'antd/es/locale-provider/zh_CN';

const { RangePicker } = DatePicker;

@Form.create()
export default class DemoComponent extends React.Component {

    state = {local:enUS};


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            // const {timerange} = fieldsValue;
            // const values = {
            //     'startDate':timerange[0].format('YYYYMMDD'),
            //     'endDate':timerange[1].format('YYYYMMDD'),
            // };
           console.log(values);
        });
    }

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

        const { form } = this.props;
        const { getFieldDecorator  } = form;
        const formItemLayout = {
            labelCol: {
                sm: {span: 24},
                md: {span: 4},
            },
            wrapperCol: {
                sm: {span: 24},
                md: {span: 20},
            },
            colon: false
        };
        return (
            <LocaleProvider locale={local}>
                <div>
                    <Form onSubmit={this.handleSubmit} hideRequiredMark={true} >
                        <p>Current Version:{version}</p>
                        {/*<Button type='primary' onClick={this.changeLocale}>{local === zhCN ? '当前中文' : '当前English'}</Button>*/}
                        {/*<br/>*/}
                        {/*<DatePicker/>*/}
                        <Col md={14} sm={24} >
                            <Form.Item
                                {...formItemLayout}
                                label={'time range'}>
                                {getFieldDecorator('timerange', {
                                    rules: [{ required: true, message:'Time Range is required'}],
                                })(
                                    <RangePicker/>
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={10} sm={24} style={{textAlign: 'left'}}>
                            <Form.Item >
                                <Button type="primary" style={{marginLeft: 8}}
                                        htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Col>
                    </Form>
                </div>
            </LocaleProvider>
        );
    }
}
