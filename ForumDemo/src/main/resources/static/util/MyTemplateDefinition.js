/**
 * 超长的HTML标签,统一在此处定义
 * @param option
 */
var MyTemplateDefinition = function(option){

    __Template__ = this;
    __Template__.init = function () {

    };

    /**
     * [作品详情页使用]
     * 登录页面弹框
     * @param temp
     * @returns {string}
     */
    __Template__.getLoginDialogDom = function(temp){
        return '<div class="Dialog-container login-dialog-container" style="background-color: rgba(0, 0, 0, 0.5); display: block;">\n' +
            '    <div class="Dialog__wrap">\n' +
            '        <div class="LoginDialog__container" role="dialog" tabindex="0" aria-modal="true"\n' +
            '             aria-labelledby="LoginDialog__title" style="width: 661px;">\n' +
            '            <div class="LoginDialog__header">\n' +
            '                <div class="title" id="LoginDialog__title">'+temp.title+'</div>\n' +
            '                <button class="close" tabindex="0" aria-label="关闭"></button>\n' +
            '            </div>\n' +
            '            <div id="BD_Login_Form" class="LoginDialog__content">\n' +
            '                <div class="web-login-container">\n' +
            '                    <article class="web-login">\n' +
            '                        <article class="web-login-union">\n' +
            '                            <div class="web-login-union__login">\n' +
            '                                <div class="web-login-union__login__form">\n' +
            '                                    <div class="web-login-union__login__form__title">密码登录</div>\n' +
            '                                    <div class="web-login-union__login__form__content">\n' +
            '                                        <article class="web-login-account-password">\n' +
            '                                            <div class="web-login-account-password__account-input-wrapper">\n' +
            '                                                <div class="web-login-normal-input">\n' +
            '                                                    <div class="web-login-area-code">\n' +
            '                                                        <div class="web-login-area-code__input-wrapper"><input\n' +
            '                                                                type="text" size="3" name="web-login-area-code-input"\n' +
            '                                                                class="web-login-area-code__input-wrapper__input"\n' +
            '                                                                autocomplete="off" role="combobox" tabindex="0"\n' +
            '                                                                aria-owns="select-ul"\n' +
            '                                                                aria-activedescendant="areacode_item_0"\n' +
            '                                                                aria-label="国家/地区" value="+86"><i\n' +
            '                                                                class="web-login-area-code__input-wrapper__icon-arrow web-login-area-code__input-wrapper__icon-arrow__down"></i>\n' +
            '                                                        </div>\n' +
            '                                                    </div>\n' +
            '                                                    <input name="normal-input" type="text"\n' +
            '                                                           class="web-login-normal-input__input" placeholder="请输入手机号"\n' +
            '                                                           autocomplete="username" maxlength="50" tabindex="0"\n' +
            '                                                           aria-label="请输入手机号或邮箱" value=""></div>\n' +
            '                                            </div>\n' +
            '                                            <div class="web-login-account-password__password-input-wrapper">\n' +
            '                                                <div class="web-login-button-input">\n' +
            '                                                    <div class="web-login-button-input__input-wrapper"><input\n' +
            '                                                            name="button-input" type="password"\n' +
            '                                                            class="web-login-button-input__input" placeholder="请输入密码"\n' +
            '                                                            autocomplete="off" maxlength="20" tabindex="0"\n' +
            '                                                            aria-label="请输入密码" value=""></div>\n' +
            '                                                    <span class="web-login-button-input__button-text" tabindex="0"\n' +
            '                                                          aria-live="off" role="button">忘记密码</span></div>\n' +
            '                                            </div>\n' +
            '                                            <div class="web-login-error" role="alert" aria-relevant="all" tabindex="0"\n' +
            '                                                 aria-live="assertive" aria-atomic="true" aria-label="">\n' +
            '                                            </div>\n' +
            '                                            <div class="web-login-account-password__remember"><span\n' +
            '                                                    class="web-login-account-password__remember__checkbox"></span><span\n' +
            '                                                    class="web-login-account-password__remember__text">记住密码</span></div>\n' +
            '                                            <div class="web-login-account-password__button-wrapper">\n' +
            '                                                <button type="submit"\n' +
            '                                                        class="web-login-button web-login-button__disabled">登录\n' +
            '                                                </button>\n' +
            '                                            </div>\n' +
            '                                        </article>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                                <div class="web-login-union__login__scan-code">\n' +
            '                                    <div class="web-login-union__login__scan-code__title">扫码登录</div>\n' +
            '                                    <article class="web-login-scan-code">\n' +
            '                                        <div class="web-login-scan-code__content">\n' +
            '                                               <div class="web-login-scan-code__content__qrcode-wrapper web-login-scan-code__content__qrcode-tip">\n' +
            '                                                <img alt=""\n' +
            '                                                     src="img/er_wei_ma.jfif"\n' +
            '                                                     class="web-login-scan-code__content__qrcode-wrapper__qrcode"\n' +
            '                                                     tabindex="0" aria-label="二维码">' +
            '                                                </div>' +
            '                                            <div class="web-login-scan-desc"><p>打开<span class="">西瓜视频手机APP</span></p>\n' +
            '                                                <p>我的-扫一扫登录<span class="web-login-scan-desc__question"></span></p></div>\n' +
            '                                        </div>\n' +
            '                                    </article>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="web-login-union__footer">\n' +
            '                                <div class="web-login-other-login-method">\n' +
            '                                    <div class="web-login-other-login-method__text">其他方式：</div>\n' +
            '                                    <ul class="web-login-other-login-method__list">\n' +
            '                                        <li class="web-login-other-login-method__list__item" tabindex="0"\n' +
            '                                            aria-label="抖音授权登录" role="button"><i\n' +
            '                                                class="web-login-other-login-method__list__item__icon web-login-other-login-method__list__item__icon__aweme"></i>\n' +
            '                                        </li>\n' +
            '                                        <li class="web-login-other-login-method__list__item" tabindex="0"\n' +
            '                                            aria-label="qq授权登录" role="button"><i\n' +
            '                                                class="web-login-other-login-method__list__item__icon web-login-other-login-method__list__item__icon__qzone_sns"></i>\n' +
            '                                        </li>\n' +
            '                                        <li class="web-login-other-login-method__list__item" tabindex="0"\n' +
            '                                            aria-label="微信授权登录" role="button"><i\n' +
            '                                                class="web-login-other-login-method__list__item__icon web-login-other-login-method__list__item__icon__weixin"></i>\n' +
            '                                        </li>\n' +
            '                                    </ul>\n' +
            '                                </div>\n' +
            '                                <ul class="web-login-link-list">\n' +
            '                                    <li class="web-login-link-list__item">\n' +
            '                                        <div class="web-login-link-list__item__text" tabindex="0" aria-label="手机验证码登录"\n' +
            '                                             role="button">手机验证码登录\n' +
            '                                        </div>\n' +
            '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </div>\n' +
            '                            <div class="web-login-footer"><span\n' +
            '                                    class="web-login-footer__checkbox web-login-footer__checkbox__checked"></span>登录即代表你同意<a\n' +
            '                                    href="//www.ixigua.com/user_agreement/" target="user_agreement">用户协议</a>和<a\n' +
            '                                    href="//www.ixigua.com/privacy_policy/" target="privacy_policy">隐私政策</a></div>\n' +
            '                        </article>\n' +
            '                    </article>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
    };

    /**
     * [作品详情页使用]
     * commentFoldToogle 展开/收起 转换
     */
    __Template__.getOpenCommentDom = function(childArray){
        return '<button class="commentItem__interaction__moreReply"><span>展开 '+childArray.length+' 条回复</span><i class="newFoldIcon">\n' +
            '    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '              d="M2.854 5.868a.5.5 0 01.353-.853h5.586a.5.5 0 01.353.853L6.354 8.661a.5.5 0 01-.708 0L2.854 5.868z"\n' +
            '              fill="#A3A7AD"></path>\n' +
            '    </svg>\n' +
            '</i></button>';
    };

    /**
     * [作品详情页使用]
     * commentFoldToogle 展开/收起 转换
     */
    __Template__.getShrinkCommentDom = function(){
        return '<button class="commentItem__interaction__moreReply"><span>收起回复</span><i class="newFoldIcon actived">\n' +
            '    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '              d="M9.146 6.674a.5.5 0 01-.353.853H3.207a.5.5 0 01-.353-.853L5.646 3.88a.5.5 0 01.708 0l2.792 2.793z"\n' +
            '              fill="#A3A7AD"></path>\n' +
            '    </svg>\n' +
            '</i></button>';
    };

    /**
     * [作品详情页使用]
     * 第一种情况模板  有child
     * @param temp
     */
    __Template__.firstCommentTemplate_haveChild = function(temp){
        let str = '<div class="commentItem" data-id="'+temp.commentId+'">\n' +
            '    <div class="commentItem__info">\n' +
            '        <div class="component-avatar commentItem__headImg clickable" style="width: 40px; height: 40px;"><a\n' +
            '                class="component-avatar__inner" title="'+temp.userInfo.userName+'" aria-label="'+temp.userInfo.userName+'"\n' +
            '                target="user_'+temp.userInfo.userId+'" data-disable_default="true">\n' +
            '            <div class="tt-img-wrapper"><img class="tt-img BU-MagicImage"\n' +
            '                                             src="'+temp.userInfo.userHead+'"\n' +
            '                                             data-src=""\n' +
            '                                             backup-src=""\n' +
            '                                             alt="'+temp.userInfo.userName+'头像"\n' +
            '                                             style="width: 100%; height: 100%; transition: transform 0.3s ease 0s; object-fit: cover;">\n' +
            '            </div>\n' +
            '            <div class="BU-MagicImage__shadow"></div>\n' +
            '        </a></div>\n' +
            '        <div class="commentItem__userName"><span class="user__name">'+temp.userInfo.userName+'</span></div>\n' +
            '        <div class="commentItem__publishTime">'+temp.workTimeText+'</div>\n' +
            '        <div class="commentItem__ipAddress">'+temp.userInfo.address+'</div>\n' +
            '    </div>\n' +
            '    <div class="commentItem__details">\n' +
            '        <div class="commentItem__details__main">\n' +
            '            <div class="commentItem__text">\n' +
            '                <pre>'+temp.comment+'</pre>\n' +
            '            </div>\n' +
            '            <div class="commentItem__interaction_contaniner">\n' +
            '                <div class="commentItem__interaction">\n' +
            '                    <button aria-label="'+temp.zanCount+'个点赞" class="commentItem__interaction__agree">\n' +
            '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                             role="img">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                                  d="M10.096 2.5c1.973 0 3.313 1.823 2.944 3.6a3.027 3.027 0 0 1-.35.91l-.344.59h6.909a2 2 0 0 1 1.95 2.437l-1.929 8.618A3 3 0 0 1 16.35 21H3.753a1.5 1.5 0 0 1-1.5-1.5V9.1a1.5 1.5 0 0 1 1.5-1.5H6.41l2.607-4.479a1.25 1.25 0 0 1 1.08-.621ZM6.03 9.1H3.753v10.4H6.03V9.1Zm1.5 10.4h8.82a1.5 1.5 0 0 0 1.464-1.172l1.93-8.619a.5.5 0 0 0-.488-.609h-6.909a1.5 1.5 0 0 1-1.296-2.255l.343-.59a1.5 1.5 0 0 0-1.157-2.249L7.53 8.658V19.5Z"\n' +
            '                                  fill="#0C0D0F"></path>\n' +
            '                        </svg>\n' +
            '                        <span>'+__THIS__.getZanCountText(temp.zanCount)+'</span></button>\n' +
            '                    <button class="commentItem__interaction__reply">回复</button>\n' +
            '                </div>\n' +
            '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                     role="img" class="dotMoreAction_trigger commentItem__moreOptions">\n' +
            '                    <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                          d="M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5.003a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"\n' +
            '                          fill="#0C0D0F"></path>\n' +
            '                </svg>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <button class="commentItem__interaction__moreReply"><span>展开 '+temp.child.length+' 条回复</span><i class="newFoldIcon">\n' +
            '            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M2.854 5.868a.5.5 0 01.353-.853h5.586a.5.5 0 01.353.853L6.354 8.661a.5.5 0 01-.708 0L2.854 5.868z"\n' +
            '                      fill="#A3A7AD"></path>\n' +
            '            </svg>\n' +
            '        </i></button>\n' +
            '        <div class="hr"></div>\n' +
            '    </div>\n' +
            '</div>';
        return str;
    };

    /**
     * [作品详情页使用]
     * 第一种情况模板  没有有child
     * @param temp
     */
    __Template__.firstCommentTemplate_notHaveChild = function(temp){
        let str = '<div class="commentItem" data-id="'+temp.commentId+'">\n' +
            '    <div class="commentItem__info">\n' +
            '        <div class="component-avatar commentItem__headImg clickable" style="width: 40px; height: 40px;"><a\n' +
            '                class="component-avatar__inner" title="'+temp.userInfo.userName+'" aria-label="'+temp.userInfo.userName+'" target="user_'+temp.userInfo.userId+'"\n' +
            '                data-disable_default="true">\n' +
            '            <div class="tt-img-wrapper"><img class="tt-img BU-MagicImage"\n' +
            '                                             src="'+temp.userInfo.userHead+'"\n' +
            '                                             data-src=""\n' +
            '                                             backup-src=""\n' +
            '                                             alt="'+temp.userInfo.userName+'头像"\n' +
            '                                             style="width: 100%; height: 100%; transition: transform 0.3s ease 0s; object-fit: cover;">\n' +
            '            </div>\n' +
            '            <div class="BU-MagicImage__shadow"></div>\n' +
            '        </a></div>\n' +
            '        <div class="commentItem__userName"><span class="user__name">'+temp.userInfo.userName+'</span></div>\n' +
            '        <div class="commentItem__publishTime">'+temp.workTimeText+'</div>\n' +
            '        <div class="commentItem__ipAddress">'+temp.userInfo.address+'</div>\n' +
            '    </div>\n' +
            '    <div class="commentItem__details">\n' +
            '        <div class="commentItem__details__main">\n' +
            '            <div class="commentItem__text">\n' +
            '                <pre>'+temp.comment+'</pre>\n' +
            '            </div>\n' +
            '            <div class="commentItem__interaction_contaniner">\n' +
            '                <div class="commentItem__interaction">\n' +
            '                    <button aria-label="'+temp.zanCount+'个点赞" class="commentItem__interaction__agree">\n' +
            '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                             role="img">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                                  d="M10.096 2.5c1.973 0 3.313 1.823 2.944 3.6a3.027 3.027 0 0 1-.35.91l-.344.59h6.909a2 2 0 0 1 1.95 2.437l-1.929 8.618A3 3 0 0 1 16.35 21H3.753a1.5 1.5 0 0 1-1.5-1.5V9.1a1.5 1.5 0 0 1 1.5-1.5H6.41l2.607-4.479a1.25 1.25 0 0 1 1.08-.621ZM6.03 9.1H3.753v10.4H6.03V9.1Zm1.5 10.4h8.82a1.5 1.5 0 0 0 1.464-1.172l1.93-8.619a.5.5 0 0 0-.488-.609h-6.909a1.5 1.5 0 0 1-1.296-2.255l.343-.59a1.5 1.5 0 0 0-1.157-2.249L7.53 8.658V19.5Z"\n' +
            '                                  fill="#0C0D0F"></path>\n' +
            '                        </svg>\n' +
            '                        <span>'+__THIS__.getZanCountText(temp.zanCount)+'</span></button>\n' +
            '                    <button class="commentItem__interaction__reply">回复</button>\n' +
            '                </div>\n' +
            '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                     role="img" class="dotMoreAction_trigger commentItem__moreOptions">\n' +
            '                    <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                          d="M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5.003a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"\n' +
            '                          fill="#0C0D0F"></path>\n' +
            '                </svg>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="hr"></div>\n' +
            '    </div>\n' +
            '</div>';
        return str;
    };

    /**
     * [作品详情页使用]
     * child子评论渲染dom
     * @param childTemp
     */
    __Template__.getchildCommentRenderDom = function(childTemp){
        let str =  '    <div class="commentItem sub-comment-item" data-id="'+childTemp.commentId+'">\n' +
        '        <div class="commentItem__info">\n' +
        '            <div class="component-avatar commentItem__headImg clickable" style="width: 24px; height: 24px;"><a\n' +
        '                    class="component-avatar__inner" title="'+childTemp.userInfo.userName+'" aria-label="'+childTemp.userInfo.userName+'"\n' +
        '                    target="user_'+childTemp.userInfo.userId+'" data-disable_default="true">\n' +
        '                <div class="tt-img-wrapper"><img class="tt-img BU-MagicImage"\n' +
        '                                                 src="'+childTemp.userInfo.userHead+'"\n' +
        '                                                 data-src=""\n' +
        '                                                 backup-src=""\n' +
        '                                                 alt="'+childTemp.userInfo.userName+'头像"\n' +
        '                                                 style="width: 100%; height: 100%; transition: transform 0.3s ease 0s; object-fit: cover;">\n' +
        '                </div>\n' +
        '                <div class="BU-MagicImage__shadow"></div>\n' +
        '            </a></div>\n' +
        '            <div class="commentItem__userName"><span class="user__name">'+childTemp.userInfo.userName+'</span></div>\n' +
        '            <div class="commentItem__publishTime">'+childTemp.workTimeText+'</div>\n' +
        '            <div class="commentItem__ipAddress">'+childTemp.userInfo.address+'</div>\n' +
        '        </div>\n' +
        '        <div class="commentItem__details">\n' +
        '            <div class="commentItem__details__main">\n' +
        '                <div class="commentItem__text">\n';
        // 为true 则说明是@模式,需要增加下面标签
        if(childTemp.aiteState){
            str += '<a target="user_'+childTemp.replyUserInfo.userId+'" class="replyTo" href="#" title="'+childTemp.replyUserInfo.userName+'">@'+childTemp.replyUserInfo.userName+'</a>\n';
        }
        str += '              <pre>'+childTemp.comment+'</pre>\n' +
            '                </div>\n' +
            '                <div class="commentItem__interaction_contaniner">\n' +
            '                    <div class="commentItem__interaction">\n' +
            '                        <button aria-label="'+childTemp.zanCount+'个点赞" class="commentItem__interaction__agree">\n' +
            '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n' +
            '                                 xmlns="http://www.w3.org/2000/svg" role="img">\n' +
            '                                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                                      d="M10.096 2.5c1.973 0 3.313 1.823 2.944 3.6a3.027 3.027 0 0 1-.35.91l-.344.59h6.909a2 2 0 0 1 1.95 2.437l-1.929 8.618A3 3 0 0 1 16.35 21H3.753a1.5 1.5 0 0 1-1.5-1.5V9.1a1.5 1.5 0 0 1 1.5-1.5H6.41l2.607-4.479a1.25 1.25 0 0 1 1.08-.621ZM6.03 9.1H3.753v10.4H6.03V9.1Zm1.5 10.4h8.82a1.5 1.5 0 0 0 1.464-1.172l1.93-8.619a.5.5 0 0 0-.488-.609h-6.909a1.5 1.5 0 0 1-1.296-2.255l.343-.59a1.5 1.5 0 0 0-1.157-2.249L7.53 8.658V19.5Z"\n' +
            '                                      fill="#0C0D0F"></path>\n' +
            '                            </svg>\n' +
            '                            <span>'+__THIS__.getZanCountText(childTemp.zanCount)+'</span></button>\n' +
            '                        <button class="commentItem__interaction__reply">回复</button>\n' +
            '                    </div>\n' +
            '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n' +
            '                         xmlns="http://www.w3.org/2000/svg" role="img"\n' +
            '                         class="dotMoreAction_trigger commentItem__moreOptions">\n' +
            '                        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                              d="M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5.003a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"\n' +
            '                              fill="#0C0D0F"></path>\n' +
            '                    </svg>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';
        return str;
    };

    /**
     * [作品详情页使用]
     * 回复事件触发时的html模板
     */
    __Template__.getCommentWriterTemplate = function(temp){
        // 从本地缓存获取登录用户的头像,如果没有就展示游客头像,真正回复的时候,会拦截用户登录
        let userInfo = utils.getCache("LOGIN_USER");
        let userHead = 'img/no_login.png';
        if(userInfo!=null){
            userHead = userInfo.userHead;
        }
        let commentWriter = '<div class="commentWriter" style="">\n' +
            '    <div class="component-avatar headImg clickable" style="width: 40px; height: 40px;"><a\n' +
            '            class="component-avatar__inner" target="user_5758208720" data-disable_default="true">\n' +
            '        <div class="tt-img-wrapper"><img class="tt-img BU-MagicImage tt-img-loaded"\n' +
            '                                         data-src=""\n' +
            '                                         backup-src=""\n' +
            '                                         alt=""\n' +
            '                                         src="'+userHead+'"\n' +
            '                                         style="width: 100%; height: 100%; transition: transform 0.3s ease 0s; object-fit: cover;">\n' +
            '        </div>\n' +
            '        <div class="BU-MagicImage__shadow"></div>\n' +
            '    </a></div>\n' +
            '    <div class="writer-wrapper">\n' +
            '        <div class="input-wrapper"><textarea placeholder="回复虫虫不咬人：" maxlength="2000" class="ant-input"\n' +
            '                                             style="height: 60px; min-height: 60px; max-height: 120px;"></textarea>\n' +
            '        </div>\n' +
            '        <div class="img-zone" style="display: none;">\n' +
            '            <div tabindex="0" class="dropzone-initial"><input accept="image/*" multiple="" type="file"\n' +
            '                                                              autocomplete="off" tabindex="-1" style="display: none;">\n' +
            '                <div>点击上传图片</div>\n' +
            '                <div>或将图片拖拽到此处上传(最多9张)</div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="input-opt">\n' +
            '            <div class="input-opt-left">\n' +
            '                <div class="input-opt-item" tabindex="0" role="button" title="表情">\n' +
            '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                         role="img">\n' +
            '                        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                              d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9.184 14.624a.75.75 0 1 0-1.298.752A4.748 4.748 0 0 0 12 17.75c1.76 0 3.294-.957 4.114-2.374a.75.75 0 1 0-1.298-.752A3.249 3.249 0 0 1 12 16.25a3.249 3.249 0 0 1-2.816-1.626ZM9 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V9Z"\n' +
            '                              fill="#0C0D0F"></path>\n' +
            '                    </svg>\n' +
            '                    <span>表情</span></div>\n' +
            '                <div class="input-opt-item" tabindex="0" role="button" title="图片">\n' +
            '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                         role="img">\n' +
            '                        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                              d="M2.25 5c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 20 20.75H4A1.75 1.75 0 0 1 2.25 19V5ZM4 4.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h1.166l7.578-8.437a1.75 1.75 0 0 1 2.584-.021l4.922 5.299V5a.25.25 0 0 0-.25-.25H4Zm16 14.5H7.182l6.678-7.434a.25.25 0 0 1 .369-.004l6.021 6.483V19a.25.25 0 0 1-.25.25ZM6.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"\n' +
            '                              fill="#0C0D0F"></path>\n' +
            '                    </svg>\n' +
            '                    <span>图片</span></div>\n' +
            '            </div>\n' +
            '            <div class="input-opt-right">\n' +
            '                <button class="xg-button xg-button-primary xg-button-middle xg-button-disabled">发送</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        return commentWriter;
    };

    /**
     * [index主页面使用]
     * 渲染作品列表Dom
     * @param temp
     */
    __Template__.getIndexItemDom = function(temp){
        return '<div class="FeedContainer__itemWrapper zuopininfo_event" zuo_pin_id="'+temp.zuopinId+'" user_id="'+temp.userId+'">\n' +
            '    <div class="HorizontalFeedCard HorizontalChannelBlockList__item">\n' +
            '        <div class="HorizontalFeedCard__coverContainer">\n' +
            '            <a class="HorizontalFeedCard__coverWrapper disableZoomAnimation"\n' +
            '                                                           href="#"\n' +
            '                                                           target=""\n' +
            '                                                           data-disable_default="true">\n' +
            '            <div class="tt-img-wrapper"><img class="tt-img BU-MagicImage tt-img-loaded"\n' +
            '                                             src="'+temp.imgPath+'"\n' +
            '                                             data-src=""\n' +
            '                                             backup-src=""\n' +
            '                                             style="width:100%;height:100%;transition:transform 0.3s;object-fit:cover"\n' +
            '                                             alt="'+temp.title+'"></div>\n' +
            '            <div class="HorizontalFeedCard__coverWrapper__shadow"></div>\n' +
            '            <span class="HorizontalFeedCard__coverWrapper__RBTag color-content-inverse">07:47</span>\n' +
            '            <div class="videoPreview cover">\n' +
            '                <video src=""\n' +
            '                       autoplay="" loop=""></video>\n' +
            '            </div>\n' +
            '            <div class="HorizontalFeedCard__topRightBtns" style="">\n' +
            '                <div class="CoverAction color-content-inverse">\n' +
            '                    <div class="CoverAction__text" style="width:0">收藏</div>\n' +
            '                    <div class="CoverAction__icon">\n' +
            '                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
            '                             role="img" class="CoverAction__icon__default">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                                  d="M14.403 7.562 12 3.8 9.597 7.562a2.776 2.776 0 0 1-1.63 1.19L3.653 9.89l2.832 3.48c.437.538.657 1.22.618 1.91l-.256 4.482 3.908-1.532c.8-.313 1.69-.313 2.49 0l3.909 1.532-.256-4.481c-.04-.692.18-1.373.617-1.91l2.832-3.481-4.314-1.14a2.776 2.776 0 0 1-1.63-1.189Zm-1.139-4.57a1.5 1.5 0 0 0-2.528 0L8.333 6.755c-.172.27-.44.465-.75.547L3.27 8.44a1.5 1.5 0 0 0-.78 2.396l2.831 3.481c.2.247.302.56.284.878l-.256 4.481a1.5 1.5 0 0 0 2.045 1.482l3.908-1.531a1.914 1.914 0 0 1 1.396 0l3.908 1.531a1.5 1.5 0 0 0 2.045-1.482l-.256-4.481c-.018-.318.083-.63.284-.878l2.832-3.48a1.5 1.5 0 0 0-.781-2.397L16.416 7.3a1.276 1.276 0 0 1-.749-.546l-2.403-3.763Z"\n' +
            '                                  fill="#0C0D0F"></path>\n' +
            '                        </svg>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </a>\n' +
            '        </div>\n' +
            '        <div class="HorizontalFeedCard__contentWrapper" data-disable_default="true" style="cursor:pointer">\n' +
            '            <div class="HorizontalFeedCard__author__avatar">\n' +
            '                <div style="width:36px;height:36px;border:none" class="component-avatar clickable userinfo_event">\n' +
            '                    <a class="component-avatar__inner" title="'+temp.userInfo.userName+'" aria-label="'+temp.userInfo.userName+'" href="#" target="" data-disable_default="true">\n' +
            '                        <div class="tt-img-wrapper">\n' +
            '                            <img class="tt-img BU-MagicImage"\n' +
            '                                                         src="'+temp.userInfo.userHead+'"\n' +
            '                                                         data-src=""\n' +
            '                                                         backup-src=""\n' +
            '                                                         style="width:100%;height:100%;transition:transform 0.3s;object-fit:cover"\n' +
            '                                                         alt="'+temp.userInfo.userName+'头像">\n' +
            '                        </div>\n' +
            '                        <div class="BU-MagicImage__shadow"></div>\n' +
            '                    </a>\n' +
            '                    <div class="component-avatar__vip sprite-vip"></div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="HorizontalFeedCard__rich__media">\n' +
            '                <a class="HorizontalFeedCard__title color-link-content-primary"\n' +
            '                   title="'+temp.title+'"\n' +
            '                   tabindex="-1"\n' +
            '                   aria-hidden="true"\n' +
            '                   href="#"\n' +
            '                   target=""\n' +
            '                   data-disable_default="true">\n' +
            '                    <span>'+temp.title+'</span>\n' +
            '                </a>\n' +
            '                <div class="HorizontalFeedCard__author-name">\n' +
            '                    <a class="user__name userinfo_event" title="'+temp.userInfo.userName+'" aria-hidden="true"\n' +
            '                    tabindex="-1" href="#" target=""\n' +
            '                    data-disable_default="true">'+temp.userInfo.userName+'</a>\n' +
            '                </div>\n' +
            '                <div class="HorizontalFeedCard__bottomInfo color-content-secondary" style="margin-top:2px"><span\n' +
            '                        class="HorizontalFeedCard-accessories-bottomInfo__statistics">'+temp.lookCountText+'<span>&nbsp;·&nbsp;</span>'+temp.workTimeText+'</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
    };






};

if(!templateUtils){
    var templateUtils = new MyTemplateDefinition();
    templateUtils.init();
}