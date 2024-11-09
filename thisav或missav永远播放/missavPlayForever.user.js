// ==UserScript==
// @name thisav或missav永远播放
// @description:en Remove lose focus -> stop playing + Remove first click pop-up advert
// @description thisav或missav永远播放!

// @namespace https://www.lowoneko.eu.org/
// @author lowo
// @license AGPL-3.0
// @version 1.0.3

// @match        https://missav.com/*
// @match        https://thisav.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=missav.com
// @grant        none

// ==/UserScript==

(function () {
    'use strict';

    // 当页面加载完成后执行以下代码
    document.addEventListener('ready', () => {
        console.log('ready'); // 输出“ready”到控制台，用于调试

        // 禁止使用window.open函数，防止页面打开新窗口
        window.open = () => { };

        // 获取播放器的原始暂停方法，保存到变量pause中
        const pause = window.player.pause;

        // 重写播放器的pause方法
        window.player.pause = () => {
            console.log('pasu'); // 输出“pasu”到控制台，用于调试

            // 检查页面是否具有焦点，只有在页面具有焦点时才执行原始的暂停操作
            if (document.hasFocus()) {
                pause(); // 调用原始的pause方法，暂停播放器
            }
        };
    });

    // Your code here...
})();
