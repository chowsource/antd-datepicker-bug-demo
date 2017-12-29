
import React from 'react';
import { render } from 'react-dom';

import { DatePicker, version } from 'antd';

//打开哪个就显示就日期里的星期几就显示哪个语言的星期几
// import enUS from 'antd/lib/locale-provider/en_US';
// import koKR from 'antd/lib/locale-provider/ko_KR';//打开注释,如果DatePicker没有设值则显示韩语,如果设值了则不影响
// import zhCN from 'antd/lib/locale-provider/zh_CN';//打开注释,如果DatePicker没有设值则显示中文,如果设值了则不影响
// import jaJP from 'antd/lib/locale-provider/ja_JP';//打开注释,如果DatePicker没有设值则显示日语,如果设值了则不影响

import thTH from 'antd/lib/locale-provider/th_TH';

//打开注释,如果DatePicker没有设值则显示该语言,如果设值了则不影响

//上面可以依次类推,import哪个语言包,DatePicker 就显示哪个语言


render(
    <div>
        <p style={{ marginBottom: 24 }}>
            Current antd version: {version} <br/>

            //打开哪个就显示就日期里的星期几就显示哪个语言的星期几<br/>
            // import enUS from 'antd/lib/locale-provider/en_US';<br/>
            // import koKR from 'antd/lib/locale-provider/ko_KR';//打开注释,如果DatePicker没有设值则显示韩语,如果设值了则不影响<br/>
            // import zhCN from 'antd/lib/locale-provider/zh_CN';//打开注释,如果DatePicker没有设值则显示中文,如果设值了则不影响<br/>
            // import jaJP from 'antd/lib/locale-provider/ja_JP';//打开注释,如果DatePicker没有设值则显示日语,如果设值了则不影响<br/>
            <br/>
            import thTH from 'antd/lib/locale-provider/th_TH';//打开注释,如果DatePicker没有设值则显示该语言,如果设值了则不影响<br/>
            <br/>
            //上面可以依次类推,import哪个语言包,DatePicker 就显示哪个语言<br/>
        </p>
        <DatePicker/>
    </div>,
    document.getElementById('react-root')
);