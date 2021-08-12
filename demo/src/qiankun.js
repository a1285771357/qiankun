import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'sub1',
        entry: '//localhost:4001',
        container: '#app1',
        activeRule: '/sub1',
    },
    {
        name: 'sub2',
        entry: '//localhost:4002',
        container: '#app1',
        activeRule: '/sub2',
    },
]);
// 启动 qiankun
start();