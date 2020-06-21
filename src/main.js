import Vue from 'vue'
import App from './App.vue'
import "./assets/global.css"
import "./assets/reset.css"
import router from "./routes";
//第一种使用方式
// getNewsChannels().then((resp) =>{
// //   console.log(resp)
// // });
// 第二种使用方式
// async function test() {
//   var resp = await getNewsChannels();
//   console.log(resp);
// }

// test();

// 第一种使用方式
// getNews("5572a108b3cdc86cf39001cd", 2, 5).then((resp) => {
//   console.log(resp);
// });

// 第二种使用方式"5572a108b3cdc86cf39001cd"
// async function test() {
//   var resp = await getNews("5572a108b3cdc86cf39001cd", 2, 10);
//   console.log(resp);
// }
// test();
// Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,//配置路由
}).$mount('#app')
