(function () {
    'api';
    const tripDoc = {};
    // 生产环境
    tripDoc.api = ""; 
    // 开发环境，打包时切换, 
    if(process.env.NODE_ENV === 'development') {
      tripDoc.api = "/api";
    }

    tripDoc.activeAPI = {

      /* 以下接口都是 公用接口 */
      /****用户登录，注册，退出登录相关接口*/
      login_post: `/user/login`,
      register_post: `/user/register`,
      loginOut_get: `/user/logout`,
      check_login: `/check/login`
    };
  
    window.tripDoc = tripDoc;
  }());
  