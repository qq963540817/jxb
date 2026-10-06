// ==UserScript==
// @name 常看VIP视频全网解析 (PRO版)
// @namespace https://scriptcat.org/zh-CN/script-show-page/6457
// @version 2.5.5
// @description 💎💎💎大版本更新💎💎💎 | 💎VIP视频解析 | 🎬爱奇艺解析 | 全面支持移动端 | 🔍腾讯VIP去广 | 📺优酷独播解锁 | ⚡芒果TV大会员 | 🎥B站番剧解析 | 🔗搜狐视频直连 | ✦乐视超清播放 | ◆PPTV聚力解析 | ●咪咕体育直播 | ★西瓜VIP解锁 | 🔍抖音短剧解析 | 🎬快手短视频解析 | 📺1905电影网 | ⚡AcFun弹幕解析 | 🔗土豆/风行/暴风兼容 | ✦全网影视通解 | ◆4K蓝光画质 | ●HDR杜比音效 | ★智能线路优选 | 💎免登录免费看 | 🎞️热播剧/最新电影/独家综艺/国漫日番 | ⚡极速评估 | 🔄智能缓存 | 🚀DNS预解析 | 🚀24并发加速 | ▶Google Shaka播放器引擎 | 全面支持移动端
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAASgklEQVR4nH1aCZAc1Xn+XndP91y7O7PXzOzspdUiCcRpYSxjLCtggeTYuIzBJo7LFUOCHTsuUkmcuJxKOXeopJIiiStOULCJXXZsEhcBY0MwyMZggwRCgEAgiZX23tnZOXfOvt5L/a+7Z2dXxF1qdav7n9ff+8/vf08skx4EwEAHY/7dpiuTz/33Cl00TXNTw8Po70+q8Xh8JxgOMOAKABMApgH0YONwAZwCUADwkgB+AoGX6/V6s1QqYzWfZ47j0LiuEN4P6Cog/6I/KNfb8hq8p6cskx76pYC7QKuGYbiZTAbpdGqUAbcD+JSq4JLxtKFOTqQxMZbB8EAU6dQQ4tEwoEVRLqygWl3H4nIO80tVvHV+CStFMe9y9iCAbwng1VxuFSsrK6ppmlxIxD54fwIB8GAi9JyNZIY2gWbsAsDyTzY7wsfGRncA+BJj+OhkNt579WWjuPHAdYDbdgR3UK/MMSPEmXDajGlR1MrLUJUQwrEeDkWHFkkL2xZqyIixIz99HsdeWXLnV60jQuBvATy5sLCIpaVlRUDwbu2X6i1/EhvgWXakG/gGaM8KTI3HY+7k5ATi8fgXGMNf7JiI9t38gf2YzMYcVVQV1yozBo0J4aJWWkAkqkO4LlQjifXiIqJRA0IIqMYAaqVlQFEQiye5avRzLT6lnXz9NJ746Ss4tyL+WQj8Sb1er87Ozqn1esMlbf+/wEcJ+IVapmfq4OCAO719e4YxfCPZo9z04YNX4T3XXOxwp6ZW86dYxGAQ3MXMMnD0xDzOLbexVhY4v1hEs0WuDQwk44gbDkZTYeyaiOHyaQPbRw1o4SHUq3nEE1k3FJ9gzx8/ozz605kz1Qa7Qwj8/K2ZGa1QKDo06XK9teH7/snGssNbtUxXLZNJOxMT4+8E8PAlU/HM737uFoe3llXObVYrzAIKw0NPruCpY2vIVwSazaYcvD+RQIPuBaBqqv9cIBqNyWuj0cREJoxD12Vx7S4LA31hQAnBSO52bBHV7v/OEefNBf45AIfn5ua1lZWcU661IJjYDHx8dHgraDWTSbsEmjH873uvTic/eds+x6nPaNxpgmm9+M4jp/Dg4wuorLcQjUU7oGPRKBqNRiedJJNJ+W/LMhGNRtFsNKWZg/tIWMHHbhjErfsjCEUyaNQqbl/mcuW/fniC/eK15l1CSPDqG2fPy4zTDZ5NjAXAJWhlaHCQT2+fugYMjx/cvzN56H3bXdVZUoXbxqnzDr724BmcfDMvgYUNwwPRbMK0zE3Ag+ekZUP35MrlchfwRud+pB/49ME4LttugGkRYSR28h8+s6T+5IX8XRA4fPzkKXU1v+bKlCNPMjjz/lIYlHgsKqa3T6UYww9+5dqp5MF9465Vm1GF28KjT6/gt//sWczM1704gOcKHhiBZF8v9JDelb79SOqS03UdyUQfms0Nq9BxdqGJLx/O48mXTHC7wezWmnLDnj537yXGfYzhwI7pabcnHlMp2RNWiTm4IUNs2zYpGMO3Lr2ob/jXbrnOMdfnVEMX+M/HFvGP356Vpg/covuwTAumbaPZakrtJpOJC8DRYVoWLMuWMoZhINblZqTJ+35Qw0M/q8O1GqxePM0+cmCnuGiEf4sxMTw1NSngFUDpHVLjgFBHs1m3pyf++WQPO/CFz97qOM1FDdzE48+u4WvfnZF+SqeuGwjrBhKJpPTTbs2apildxjQtKRe4iCcnJFC6ejKmfE9WYP47msT9P6zgsWcWYGi20i69zn/z9r2pvij/am9vDx8fGyXM0toKIJRIOMzHxke3Q4i/ufnGy7jbmFdrazOYXbFwz7+fkhbxPgoJnj7MmIBh6PKUAepPwvNtLyADcIaud8phw8849JtyuSTlSPsUL2FDl+M+8ISJMwsWHGtdtRsrzo17U7cx4LaJiTE3Eg6rvnszlhnJkMd/ZcdkrGfvnm2cuw0mwHH//+Q8jfj5nTRCt95HKxIYmVgPkeZCfnUISt4GuDaB03Vphbc7NmIFSCT6ZKzc92gD4AKuVVX2bFfFtmHrrxgQoQpOmBVdD7mp4SEqMrd84PrLhGuV1fXCPB75WRnHX1uGbVtSa55Guj/sAdQ0DZVKGZZlIZlISu35r7qkPLlypSwnIGOgK20GkrZlwrZtOd7iGsOPXgqjkj+ntGqL/Ka9oxcxhhtGMimh6yGF0h9p9BOTGSM2Paa6wrVY23Lx/SdzneyhhTyN0OCkEcdx3jZ7kAsF2SNBhWgrOCE6ceDFgI5k3+ZJ+MaVLvTwM1W0LUBXbUwNNcXogPgMWT81PCSU/v5kiDF8+p1XjFJiUWrlBTx9vIliqdYZpJMVTAuWbYMJXJA9yLeDIwjksA9uU36PbY0VSCt1ApligAkpVyzX8dQJF4I7it0u4eqLh25gDNODA/1c6YnHpjUVO/ZdMy6EcBVS3o+P5aEbOnQqMN2B150VOtljw3e9ykjlPSqDsB3IhEhmI8c3Gxs0oFQue7ECLsehWJEs1Zd97g2bLMVC4UG+ZzuLqHD39fbEoYDhxuyQHhLgLvn20pqN0+co2i1fa17moJM+dmH2sGB1ZY+tHiQDNIiBZHKL3EYwaKEQKpVSl5wns5B3MZsDXMcRVmNZpHrND9KsNMawZzzbB3AbYByvnPEqIx1k4lK5Ij9AgUdmdWxHTugCcOWShJFMJCTnITLl0/4uVzPlZAl8oi+JZivw7YCzbsjR7yk9RiJRnFwQGOqdVZgaYdmhyCUrNUQ0BoyPjwwSl2aRsI7Ts7UtyvADzzZx66Gr8Dt3HJBB9q//8RS+/r1n5LuP/+rluPO2K9FqtfD79zyJuCHw1//0fnDXxr89+Cq++6MZvPuKQfz5Zy8mfwV3LfnOdSy8NlPDvf/dQG6ttCVWBNqmCVXTML+qQOzizDBcZPuV9PFzMKhybsukYhCCMxI+t7Duc4pe2N3ZQwDHXj6HtmlLfxwb6ZNy6dQg9lyaAgTHer2FUsnXtOAAODRVkXLRaEQ+o4aDOLw8hYuLJ0K4+yM6euJ+HAh0AjkWi8n7uRzRWjBwVwwnRJRBTCsMSBioIBJWmeAca2XPZ81O9vDzbrOBucUC3nxrRX40NdQDVRHQNI7MUBxCOHj51AoWVoo+g/PAUer0XIt1nn3zsVV88itvIF9sQ7gOknEOFbYXK36G8XTlWbtQdWGEGDh3xdDgcIgwU3A6EZKTFU+g2XY7mcTLHlaHe3DOcPSlGUC4yAzHMTDQi6ihoC9OmuJ4/uW8n2E84CRH41L2aNRrHU1TpaybKk6+1SRLoycikIwriMYoy5Tkd2Ux88dqmx42snTE4ERUHPJxhTsWhMpBGpfCXf5NH+3O1Uu5qqfxgRh2TA7CNFugar9aWMfxk+elduPRWJc7kMt4H+bk39xBq1FHzHBw6ZQO7jqo1C2Ua+7mQLY2Ajkej4HzEoz4CAgrEx6rtcGIa3HZ0PYnItK8HvfoilL/8sKJM8jlK1J+NNODidGEvM/l62i0ba+4OJR7udR4JBz2Y8VTjOAuPnVoEA98eQz9PZ5lnjpuA1pvJxN1AlR4GUZwswNgdXmeMwa5EHOmWLFpQYDTwPGokFqjWCBzuQ6ZeyNGC+U6Xjo5Jz+4a1s/rr1qTIL5+fE5tMnNolFpUpk9BPm41BA0VfM17kq/5q4r77/5RA3ff6YhY4riKfDvgAaQ20bUJk2a1iyUckPUGfCGBiC/UmxhLDuCWnEe2QEdZ857MyVf9Kipjgi1XhXiK5AgD+6bwkWTSfTFNBkHr54pdoqG1W77GuewbEua3bZomcKV57efqODRo+1NNKDDVwSQjEZlvaDf0ZFJAnpPFrXiAiqteBVAi1zlpaUccWQuSOOTaZkV5WBkOgoJKt2SN/tVr1hpotkykeqPwAgBp87m8dZcUX6I3oc0zfdxxwtQACHDkJqmk7qAbu12LOp/V9IAy0R/MiknMJ1RpEe4XCBX4qcZQ51c5chywXX9Lg5X7Ywh5OfTYERJkvyGWFU15NaaOD2T97MGx9FXltE2nQ73sCnYacmQ4kaR3ZbMLkLmcbKE6IBLBmyza8GnuwCRxXdP92K9OCsiYQ2rFeVJekuuciJftnLrxcVs2ND49qyibBuJYHa5JTVCg28akAG51TV8/is/8HrQRqNj0kDoFy8XcPPvvdgxP8kde30dN//hmpQIuikve/j5m9ihr+2NdRggO8gwkdZQWeOqEAqvWL0/pudKvV5vuVx8jwaWoQ+Bfe/o93izaSLRl/D5t3hb7hFwa+IeAU+XLHIL9wjauKTk6V1EzV+mIHeks5ttUgxcu9sgbbvhsIpjZ/lxAeWVer2hKNUqkSh8/c15y4GAohqDOHTtsFysoQGJrXU+KjW8mR1S3aL3lm1KsJ7v6ptyfzc4U3ZUnky3IWWA1hte1fa/l4jruPGaGLhM8YydWQkfpuXocqWkKIVCUYFgr+eryrNnF5qU0F23tYyP7k96vJrMLfyPmqSRUIdbB+0lmZ7kAp5OzzfJdYNr+LGiaZt5erCELCcbQ7FUwvuvUmCuLwjDYOx8TpTWnf6HmGCsUCi6iuu6bK2wRj/902dP2vKjlF8/fn0PpkZCXYN5WYbKP31Uas3o6uADcNGo14OatuwzXdvZkj1EZybdPN0NCJ3/blsK+PB1MQiX0hNTXjwf+wcqI/m1NcV1XCF3AvL5vArg6ZWi+y/PHj2jRiMhGeZ3fmikw9g6uwT+6EHnQvmdwG3q4LuiWVrK5x6unz2Ik2xUZK8PbQfukfBi6jcO9qBanHfBhPbqnHKiYg//HcVkbnWVU4JQfD/my8srdP+lY6fFOcGZyjnnOyeiuPMDUSSSCQlOfpTKcZeKZQzISutlDwIn27ducN2LQIZnJRmgRMB86irdUQa7jU/uNzE1osvEHQqF3JcX+u/kENbS4hKNQeQTXgQKCNrOaDSatZYT+sR3j1Bx8jje/it0fGyfKgcN6YZssYh7dBYv/SAMMkegOT2kdXGPWCc1tjuZKCR72m4jkdyH9qxj/55BapgdRWHaEyd7/8BiPSca9Ya6vJLjtNZCwrRtEQQZX1xcVIXA0cWS8ZnHX4SyXljghq6KQ9douPvjI7J62l08vdM7diqtB46WM2g1YFN19MHFfDlab6QY8JbhvLXEX39vEweuIFLlOpX8bOj5mdjhspO5lzY05hcWZQn2lpk5lM4WhdcnunPz8xqtS5+ad+56+qSp+m0LP7B3EH95Rx8yCUv6LQUoVVPZmctGerOLy0D25Ty2uTUGvKNUKiGTaOOPbm3hXTuawugdtakXfvF87PBKe5LWyJVz52d5rVYH516UCcF84PL091uKZWdpeVmCP70cu+vxo01VCKEIzp3JFMc9v9WDT1wfQ0TfcI8LsscWdDI3d3EPOsi3DZ3j1veF8cUPtzCebLse7UXosecKh5dbUwRaXVpeFsVCSXRjlAv7l1+cAS08KwqDSovkimTpSKeGtWw24zCIm0b6xTcOXtnOhHXmCnCmRdJK03Tx8JF5PHfKRqlhdNyEuEej2fJ3ITzfDqYQ891kMmXgPbsF9r+jF+b6vNBDjBiZxgVzjpzOfrHY6rlXgClLSysit5oXlfUmiE1xLpcT4XKAXbYr7QMm4N6WCvEiekYbsJOT4y6DGNGV9t9fvd26/fJtCtRoWq7BhA1FEUKwhVIfXnmribPzdVTaOpZWW+BCRyxO1bCM/h5gaiSGoVgNuyc5xgcpQwmux0dEdW1O1XUFbywqR98sjd9t8/BRAj07Oy9KpbIgRkhbNuQm1Dp6wAXYpTvTHdCB1mmpN3gWi0XV0eyIS9pSGG5Phtf/+F27k5cOhPMwdCq0wg3F0qgW5pmhM+qImRYbwXphVpqWZITgwohnRXXtvNB1mitX9XiWVQtzWK2q+deW+r7aEKl7uIDdaDTVxaVll2KENMs7wL17V1DTLIFnJNBA66Rtav3lNXjGwNLpFEunhrnCQPAOxUPrd2wbah/ce+UYNY6oFudghFTqfkQoOiLW5b9pyV5Aj2WUSmFOtm5hQ5GaO5Ub/MXZJesBWx1+RAiskiZzq3kll1slXL6G6QTK6y3Zl3jAvR6F7d6RDvZUOmBVttllmAeeluHU4aFBd3BwINip26VAvNtglQ8Oxaxdg71uJp1KJXtjgLW+AHKBtiXQwnB1bn6lWm1rb1Za0R+brP9pDuWFINAKhaKaXytw07SETNME0AdN7wl4MIngPbtkR9rfEBLeJlZH0/6WxRbwdBsKaUoymRCJRB+nIuRvbxBt6KHV1Lf7Twi0GUEtV7AX32w2WaVSVcvlimvbjgR8AWgqLhyoVJs+aMoq5OcC/weKQptut+XS4wAAAABJRU5ErkJggg==
// @author lsym
// @noframes
// @match *://*/*
// @match *://m.*/*
// @match *://*.m.*/*
// @match *://*.youku.com/*
// @match *://*.iqiyi.com/*
// @match *://*.qq.com/*
// @match *://*.bilibili.com/*
// @match *://*.mgtv.com/*
// @match *://*.le.com/*
// @match *://*.sohu.com/*
// @match *://*.pptv.com/*
// @match *://*.acfun.cn/*
// @match *://*.ixigua.com/*
// @match *://*.douyin.com/*
// @match *://*.kuaishou.com/*
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_registerMenuCommand
// @run-at document-end
// @connect 360zy.com
// @connect jsdelivr.com
// @connect api.1080zyku.com
// @connect api.apibdzy.com
// @connect api.ffzyapi.com
// @connect api.guangsuapi.com
// @connect api.maoyanapi.top
// @connect api.niuniuzy.me
// @connect api.okzyw.net
// @connect api.tiankongapi.com
// @connect api.ukuapi.com
// @connect api.ukuapi88.com
// @connect api.wujinapi.me
// @connect api.xinlangapi.com
// @connect api.yparse.com
// @connect api.yzzy-api.com
// @connect api.zuidapi.com
// @connect caiji.dyttzyapi.com
// @connect caiji.kczyapi.com
// @connect caiji.kuaichezy.org
// @connect caiji.moduapi.cc
// @connect cj.ffzyapi.com
// @connect cj.lziapi.com
// @connect cj.rycjapi.com
// @connect cj.vodimg.top
// @connect cj.yayazy.net
// @connect ckzy.me
// @connect ddmf.net
// @connect hhzyapi.com
// @connect ikunzyapi.com
// @connect iqiyizyapi.com
// @connect jszyapi.com
// @connect jyzyapi.com
// @connect lz.118318.xyz
// @connect m3u8.apiyhzy.com
// @connect p2100.net
// @connect savviuux.hk3.345888.xyz.cdn.cloudflare.net
// @connect sdzyapi.com
// @connect slapibf.com
// @connect subocaiji.com
// @connect suboziyuan.net
// @connect suoniapi.com
// @connect taopianapi.com
// @connect tyyszyapi.com
// @connect www.39kan.com
// @connect www.hongniuzy2.com
// @connect www.huyaapi.com
// @connect www.lovedan.net
// @connect www.lzzy.tv
// @connect www.mdzyapi.com
// @connect www.qilinzyz.com
// @connect www.ryzyw.com
// @connect www.seacms.org
// @connect www.wyvod.com
// @connect xkanzy.com
// @connect xsd.sdzyapi.com
// @connect fastly.jsdelivr.net
// @connect cdn.jsdelivr.net
// @connect unpkg.com
// @connect gcore.jsdelivr.net
// @connect cdnjs.cloudflare.com
// @connect doh.pub
// @connect dns.alidns.com
// @connect doh.360.cn
// @connect doh.baidu.com
// @connect cloudflare-dns.com
// @connect dns.google
// @connect dns.quad9.net
// @connect tyyszy.com
// @connect cj.lzcaiji.com
// @connect suoniapi.com
// @connect ckzy.me
// @connect zuidazy.me
// @connect bfzyapi.com
// @connect api.wujinapi.com
// @connect m3u8.apiyhzy.com
// @connect caiji.maotaizy.cc
// @connect caiji.kuaichezy.org
// @connect xsd.sdzyapi.com
// @connect subocaiji.com
// @connect jinyingzy.com
// @connect suoniapi.com
// @connect m3u8.tiankongapi.com
// @connect sdzyapi.com
// @connect suoniapi.com
// @connect ikunzyapi.com
// @connect hhzyapi.com
// @connect cj.jusj.top
// @connect *
// @antifeature piracy
// @license MIT
// ==/UserScript==
(function () {
    if (window.hasInitVipScript) return;
    window.hasInitVipScript = true;
    'use strict';

    // >>> QQ_AD_GUARD_BEGIN
    // 腾讯视频(m.v.qq.com)拉起App广告屏蔽：
    // 播放页点击空白处触发 PullApp -> 拉起 txvideo:// 失败 -> 回退 location.href 跳转
    // https://m.v.qq.com/activity/downapp_activity.html?not_auto_open=1（下载App广告页）
    (function () {
        if (location.hostname !== 'm.v.qq.com') return;
        var AD_PATH = '/activity/downapp_activity.html';
        var isAdUrl = function (u) {
            try { return typeof u === 'string' && u.indexOf(AD_PATH) !== -1; } catch (e) { return false; }
        };

        // 当前正处在广告页（上一层拦截未生效的浏览器，如 Safari）：立即弹回
        if (location.pathname.indexOf(AD_PATH) !== -1) {
            var refHost = '';
            try { refHost = new URL(document.referrer || '', location.href).hostname; } catch (e) {}
            var selfRef = refHost === 'm.v.qq.com' || /(^|\.)v\.qq\.com$/.test(refHost);
            if (location.search.indexOf('not_auto_open=1') !== -1 || selfRef) {
                try {
                    if (history.length > 1) history.back();
                    else if (document.referrer) location.replace(document.referrer);
                    else location.replace('https://m.v.qq.com/');
                } catch (e) {}
            }
            return;
        }

        // Navigation API：拦截 location.href= / location.replace 等一切方式发起的广告页跳转
        try {
            if (window.navigation && typeof window.navigation.addEventListener === 'function') {
                window.navigation.addEventListener('navigate', function (e) {
                    try {
                        var u = e.destination && e.destination.url;
                        if (u && u.indexOf(AD_PATH) !== -1 && e.cancelable) e.preventDefault();
                    } catch (err) {}
                });
            }
        } catch (err) {}

        // window.open 拦截
        try {
            var _open = window.open;
            window.open = function (url) {
                if (isAdUrl(typeof url === 'string' ? url : '')) return null;
                return _open.apply(window, arguments);
            };
        } catch (err) {}

        // 链接点击捕获拦截
        try {
            document.addEventListener('click', function (e) {
                try {
                    var t = e.target;
                    var a = t && t.closest ? t.closest('a[href]') : null;
                    if (a && isAdUrl(a.href)) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                } catch (err) {}
            }, true);
        } catch (err) {}
    })();
    // >>> QQ_AD_GUARD_END

    const HAS_GM = typeof GM !== 'undefined';
    const NEW_GM = ((scope, GM) => {
        if (typeof GM_info === 'undefined' || GM_info.scriptHandler !== "Tampermonkey") return;
        try {
            if (compareVersions(GM_info.version, "5.3.2") < 0) return;
        } catch(e) { return; }

        const GM_xmlhttpRequestOrig = GM_xmlhttpRequest;
        const GM_xmlHttpRequestOrig = GM?.xmlHttpRequest;

        function compareVersions(v1, v2) {
            const parts1 = v1.split('.').map(Number);
            const parts2 = v2.split('.').map(Number);
            const length = Math.max(parts1.length, parts2.length);
            for (let i = 0; i < length; i++) {
                const num1 = parts1[i] || 0;
                const num2 = parts2[i] || 0;
                if (num1 > num2) return 1;
                if (num1 < num2) return -1;
            }
            return 0;
        }

        function GM_xmlhttpRequestWrapper(odetails) {
            if (odetails.redirect !== undefined) {
                return GM_xmlhttpRequestOrig(odetails);
            }

            const { onload, onloadend, onerror, onabort, ontimeout, ...details } = odetails;

            const handleRedirects = (initialDetails) => {
                return GM_xmlhttpRequestOrig({
                    ...initialDetails,
                    redirect: 'manual',
                    onload: function(response) {
                        if (response.status >= 300 && response.status < 400) {
                            const m = response.responseHeaders.match(/Location:\s*(\S+)/i);
                            const redirectUrl = m && m[1];
                            if (redirectUrl) {
                                try {
                                    const absoluteUrl = new URL(redirectUrl, initialDetails.url).href;
                                    handleRedirects({ ...initialDetails, url: absoluteUrl });
                                    return;
                                } catch(e) {}
                            }
                        }
                        if (onload) onload.call(this, response);
                        if (onloadend) onloadend.call(this, response);
                    },
                    onerror: function(response) {
                        if (onerror) onerror.call(this, response);
                        if (onloadend) onloadend.call(this, response);
                    },
                    onabort: function(response) {
                        if (onabort) onabort.call(this, response);
                        if (onloadend) onloadend.call(this, response);
                    },
                    ontimeout: function(response) {
                        if (ontimeout) ontimeout.call(this, response);
                        if (onloadend) onloadend.call(this, response);
                    }
                });
            };

            return handleRedirects(details);
        }

        function GM_xmlHttpRequestWrapper(odetails) {
            let abort;
            const p = new Promise((resolve, reject) => {
                const { onload, ontimeout, onerror, ...send } = odetails;
                send.onerror = function(r) { if (onerror) { resolve(r); onerror.call(this, r); } else reject(r); };
                send.ontimeout = function(r) { if (ontimeout) { resolve(r); ontimeout.call(this, r); } else reject(r); };
                send.onload = function(r) { resolve(r); if (onload) onload.call(this, r); };
                const a = GM_xmlhttpRequestWrapper(send).abort;
                if (abort === true) a(); else abort = a;
            });
            p.abort = () => { if (typeof abort === 'function') abort(); else abort = true; };
            return p;
        }

        GM_xmlhttpRequest = GM_xmlhttpRequestWrapper;
        scope.GM_xmlhttpRequestOrig = GM_xmlhttpRequestOrig;

        if (GM?.xmlHttpRequest) {
            const gopd = Object.getOwnPropertyDescriptor(GM, 'xmlHttpRequest');
            if (gopd && gopd.configurable === false) {
                return { __proto__: GM, xmlHttpRequest: GM_xmlHttpRequestWrapper, xmlHttpRequestOrig: GM_xmlHttpRequestOrig };
            } else {
                GM.xmlHttpRequest = GM_xmlHttpRequestWrapper;
                GM.xmlHttpRequestOrig = GM_xmlHttpRequestOrig;
            }
        }
        return null;
    })(typeof window !== 'undefined' ? window : globalThis, HAS_GM ? GM : {});
    if (HAS_GM && NEW_GM) GM = NEW_GM;

    const DNS_OPT = {
        _domainRank: new Map(),
        getLatency(domain) {
            const r = this._domainRank.get(domain);
            return r ? r.latency : Infinity;
        },
        injectHints(domainList) {
            try {
                const frag = document.createDocumentFragment();
                const dnsSelf = ['fastly.jsdelivr.net', 'cdn.jsdelivr.net', 'unpkg.com', 'gcore.jsdelivr.net'];
                [...new Set([...dnsSelf, ...domainList])].forEach(d => {
                    const link = document.createElement('link');
                    link.rel = 'dns-prefetch';
                    link.href = '//' + d;
                    frag.appendChild(link);
                });
                if (document.head) document.head.appendChild(frag);
            } catch(e) {}
        },
        boot(domainList) {
            this.injectHints(domainList);
        }
    };

    const _UA_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isMobileView = () => _UA_MOBILE || window.innerWidth <= 768;

    const CONFIG = {
        API_TIMEOUT: 3500, 
        STUCK_CHECK_TIMEOUT: 7000,
        SEARCH_CONCURRENCY: 16,
        FAST_EVAL_TIMEOUT: 700,
        SMART_SORTING: true,
        AUTOPLAY_NEXT_DELAY: 200,
        PANEL_LEAVE_CLOSE_DELAY: 1500,
        SPA_DEBOUNCE: 400,
        STORAGE_KEY_ICON_POSITION: 'vip_icon_pos_v8',
        VIDEO_URL_PATTERNS: [
            /iqiyi\.com\/[vwa]_/, /iqiyi\.com\/play\//,
            /m\.iqiyi\.com\/(v|a|play|video)\//,
            /iq\.com\/play\//, /m\.iq\.com\/play\//,
            /youku\.com\/v_show\/id_/, /v\.youku\.com\/v_show\/id_/,
            /m\.youku\.com\/(v_show|video|play)\//,
            /youku\.com\/video\//, /youku\.com\/play\//,
            /v\.qq\.com\/(x\/cover|x\/page|tv|play)\//,
            /m\.v\.qq\.com\/(x\/cover|x\/page|tv|play)\//,
            /v\.qq\.com\/cover\//, /v\.qq\.com\/page\//,
            /m\.v\.qq\.com\/cover\//, /m\.v\.qq\.com\/page\//,
            /mgtv\.com\/(b|s|video)\//, /m\.mgtv\.com\/(b|s|video)\//,
            /bilibili\.com\/(video|bangumi\/play|anime|play)\//,
            /m\.bilibili\.com\/(video|bangumi\/play|anime|play)\//,
            /b23\.tv\//, /m\.b23\.tv\//,
            /le\.com\/ptv\/vplay\//, /m\.le\.com\/ptv\/vplay\//,
            /le\.com\/(play|video)\//, /m\.le\.com\/(play|video)\//,
            /tv\.sohu\.com\/v\//, /film\.sohu\.com\/album\//,
            /m\.sohu\.com\/(v|tv|film)\//, /sohu\.com\/play\//,
            /pptv\.com\/show\//, /m\.pptv\.com\/show\//,
            /pptv\.com\/play\//, /m\.pptv\.com\/play\//,
            /acfun\.cn\/v\/ac/, /m\.acfun\.cn\/v\/ac/,
            /acfun\.cn\/play\//, /m\.acfun\.cn\/play\//,
            /1905\.com\/play\//, /m\.1905\.com\/play\//,
            /1905\.com\/video\//, /m\.1905\.com\/video\//,
            /ixigua\.com\/(video|play)\//, /m\.ixigua\.com\/(video|play)\//,
            /douyin\.com\/video\//, /m\.douyin\.com\/video\//,
            /douyin\.com\/discover\//, /m\.douyin\.com\/discover\//,
            /kuaishou\.com\/(short-video|video|play)\//,
            /m\.kuaishou\.com\/(short-video|video|play)\//,
            /tudou\.com\/(listplay|albumplay|programs\/view|video)\//,
            /m\.tudou\.com\/(listplay|albumplay|programs\/view|video)\//,
            /fun\.tv\/(vod-play|player|play)\//, /funshion\.com\/(play|player)\//,
            /m\.fun\.tv\/(vod-play|player|play)\//,
            /baofeng\.com\/(play\/|play-|player\/)/, /bfeng\.cn\//,
            /m\.baofeng\.com\/(play\/|play-|player\/)/,
            /miguvideo\.com\/(detail|play|v|n|p)\//,
            /m\.miguvideo\.com\/(detail|play|v|n|p)\//,
            /cmvideo\.cn\/(detail|play|v|n|p)\//,
            /m\.cmvideo\.cn\/(detail|play|v|n|p)\//,
            /migumovie\.hcs\.cmvideo\.cn\/movie/,
            /stormsfy\.com\//, /hanju\.koudaibaobao\.com\//,
            /maiduidui\.com\/play\//, /rrsp\.tv\/play\//,
            /vas\.hiaiabc\.com\/play\//
        ],
        MESSAGES: {
            VIDEO_ENDED: 'tm_video_ended',
            PLAY_SUCCESS: 'tm_play_success',
            PLAY_ERROR: 'tm_play_error',
            STREAM_ALIVE: 'tm_stream_alive',
            LIB_CORRUPT: 'tm_lib_corrupt',
            PLAYER_READY: 'tm_player_ready',
            SWITCH_URL: 'tm_switch_url',
            SWITCH_ACK: 'tm_switch_ack',
            HIDE_CONTROLS: 'tm_hide_controls'
        },
        SELECTORS: {
            PLAYER_ELEMENTS: [
                '#tenvideo_player', '.txp_player_root', '#player-container', '#player',
                '[class*="txp_player"]', '[class*="mod_player"]', '.site-player',
                '#bilibili-player', '.bpx-player-container', '[class*="player-wrap"]',
                '.container-player', '#youku-player', '[class*="youku-player"]',
                '.iqp-player', '#iqp-player', '[class*="iqiyi-player"]',
                '#mgtv-player-wrap', '[class*="mgtv-player"]',
                '#sohuplayer', '#flashbox', '#le_player', '#player_swf',
                '#pp-player', '#ACPlayer', '#video-player', '#xigua-player',
                '.video-area', '.player-container', '.shaka-video-container',
                '#bf-player', '.bf-player', '#baofeng-player', '.bf-video-player',
                '#fun-player', '.fun-player', '#FunPlayer', '#h5player',
                '[class*="video-player"]', '[class*="videoPlayer"]',
                '[class*="play-container"]', '[class*="playContainer"]',
                '[id*="player"]', '[class*="player-box"]'
            ],
            QUICK_TITLE: ['meta[property="og:title"]', 'h1', '.video-title', '.title', '.vod_title', '.video-info-title'],
            PRECISE_TITLE: {
                'iqiyi.com': '[class*="episodes_playingItem"] [class*="episodes_order"], .qy-episode-item[class*="is-active"] a, .album-list .is-active .title-content, [class*="selected"] .qy-episode-num, #text[style*="IQYHT-Bold"]',
                'youku.com': '.box-anthology-item.active, .anthology-wrap li.active span, .anthology-item.current, .play-panel-item.active',
                'v.qq.com': '.episode-item--select, .playlist-item--current, [class*="selected"] [class*="episode-item-text"], [class*="episode-item"][class*="selected"] .episode-item-text, [class*="episode-item"][class*="current"] .episode-item-text, [class*="episode-item"][class*="active"] .episode-item-text, [class*="numberListItem_select"] [class*="numberListItem_title"], [data-v-db0ab5fa].episode-item-text, [class*="episode"][class*="on"] [class*="text"], [class*="pick-list"] [class*="on"]',
                'bilibili.com': '[class*="EpisodeVirtualList_numberTitle"], [class*="numberListItem_select"] [class*="numberListItem_title"], .ep-list-item.on .ep-item-title, [class*="episode_list"] [class*="selected"]',
                'mgtv.com': '[class*="mgtv-player-aside-number-selector__number"], .episode-list .current a, .episode-series .current',
                'sohu.com': 'li.pane-item.vip.on a, li.pane-item.on a, .player-album-list .on a',
                'le.com': '.js-episode-item.on',
                'pptv.com': '.episode-list .current',
                'acfun.cn': '.active .title-wenzi',
                'miguvideo.com': '[data-v-50548e8b].on span[data-v-50548e8b], [data-v-50548e8b].on, [class*="episodeTitle"][class*="on"]',
                'baofeng.com': '.media-title, .player-album .on, .play-list .on, .episode-list .current, [class*="episode"][class*="active"], [class*="episode"][class*="on"]'
            },
            PRECISE_MAIN_TITLE: {
                'qq.com': '[data-mvp-identifier="intro"][title], .intro-title[title], .video-title[title], .player-title, [class*="video-title"], [class*="videoTitle"], [class*="mod_title"], h1[class*="title"]',
                'v.qq.com': '[data-mvp-identifier="intro"][title], .intro-title[title], [class*="video-title"], [class*="videoTitle"], [class*="mod_title"], .player-title, h1[class*="title"], [class*="site-title"]',
                'iqiyi.com': '[data-ai-entity="视频名称、主标题"], [data-ai-entity*="主标题"], [data-ai-entity*="视频名称"], [class*="meta_title"], [class*="meta_titleNotCloud"], [class*="meta_titleNewLabel"], [class*="episodeTitle"], .album-head-title',
                'iq.com': '[data-ai-entity="视频名称、主标题"], [data-ai-entity*="主标题"], [data-ai-entity*="视频名称"], [class*="meta_title"]',
                'youku.com': '[data-spm-anchor-id*="introduction"] .title, .title[style*="max-width"], .video-title, a[data-pb-txid="pg_playlist_title"][title]',
                'bilibili.com': '[class*="mediaTitle"][title], [class*="mediaTitle"], .media-info-title-t',
                'b23.tv': '[class*="mediaTitle"][title], [class*="mediaTitle"]',
                'sohu.com': 'a[data-pb-txid="pg_playlist_title"][title]',
                'mgtv.com': 'h2[class*="mgtv-player-aside-info__title"][title]',
                'miguvideo.com': '[data-v-50548e8b][title].episodeTitle',
                'le.com': '.j_jujiName, .juji_bar, h1.title, .detail-title, .video-title, [class*="movieName"], [class*="videoName"]',
                'baofeng.com': '.media-title, .video-info h1, .player-title, .detail-title, .movie-title, h1.title, [class*="videoTitle"], [class*="video-title"]'
            },
            MOBILE_TITLE_SELECTORS: {
                'qq.com': '[data-mvp-identifier="intro"][title], .intro-title[title], [class*="video-title"], [class*="videoTitle"], [class*="mod_title"], h1',
                'v.qq.com': '[data-mvp-identifier="intro"][title], .intro-title[title], [class*="video-title"], [class*="videoTitle"], [class*="mod_title"], h1',
                'iqiyi.com': '[class*="title"], h1, .album-title, .video-title',
                'youku.com': '[class*="title"], h1, .video-title, .show-title',
                'bilibili.com': '[class*="title"], h1, .media-title, .video-title',
                'mgtv.com': '[class*="title"], h1, .video-title',
                'mgtv.com': '[class*="title"], h1, .video-title',
                'sohu.com': '[class*="title"], h1, .video-title',
                'le.com': '[class*="title"], h1, .video-title',
                'douyin.com': '[class*="title"], h1, .video-title',
                'kuaishou.com': '[class*="title"], h1, .video-title'
            }
        },
        MOVIE_KEYWORDS: /^(HD|超清|高清|正片|国语|HD国语|720P|1080P|蓝光|4K|BD|TC|TS|DVD|抢先|高清版|HD高清|国语高清|HD中字)$/i,
        MOVIE_PRIORITY: ['蓝光', '4K', '1080P', '超清', 'HD国语', 'HD', '国语', '高清', '720P', 'BD', '正片', 'HD高清', '国语高清', 'HD中字', 'TC', 'TS', 'DVD', '抢先', '高清版']
    };

    const _MEDIA_EXT_RE = /\.m3u8|\.mp4|\.flv/i;
    const _TITLE_SPLIT_RE = /[-_\s（(]/;
    const _EP_REMOVE_RE = /第.+[集季部]/;

    const _ROMAN_MAP = { 'Ⅰ': '1', 'Ⅱ': '2', 'Ⅲ': '3', 'Ⅳ': '4', 'Ⅴ': '5', 'Ⅵ': '6', 'Ⅶ': '7', 'Ⅷ': '8', 'Ⅸ': '9', 'Ⅹ': '10', 'Ⅺ': '11', 'Ⅻ': '12' };
    const _ROMAN_RE = /[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ]/g;
    const _NOISE_RE = /[\s\u200b-\u200f\ufeff_·、，,!！?？:：;；'"“”‘’\-–—\[\]【】()（）]/g;

    const normalizeName = s => (s || '')
        .replace(/[\u200b-\u200f\ufeff]/g, '')
        .replace(_ROMAN_RE, c => _ROMAN_MAP[c] || c)
        .toLowerCase()
        .replace(_NOISE_RE, '');

    const nameSimilarity = (a, b) => {
        const x = normalizeName(a), y = normalizeName(b);
        if (!x || !y) return 0;
        if (x === y) return 1;
        if (x.includes(y) || y.includes(x)) return 0.75 + 0.25 * Math.min(x.length, y.length) / Math.max(x.length, y.length);
        if (x.length < 2 || y.length < 2) return 0;
        const ga = new Set(), gb = new Set();
        for (let i = 0; i < x.length - 1; i++) ga.add(x.slice(i, i + 2));
        for (let i = 0; i < y.length - 1; i++) gb.add(y.slice(i, i + 2));
        let inter = 0;
        ga.forEach(g => { if (gb.has(g)) inter++; });
        return (2 * inter) / (ga.size + gb.size);
    };

    const titleQueryVariants = title => {
        const out = [];
        const push = s => { s = (s || '').trim(); if (s && s.length > 1 && !out.includes(s)) out.push(s); };
        const toArabic = s => s.replace(_ROMAN_RE, c => _ROMAN_MAP[c] || c);
        push(title);
        push(toArabic(title));
        push(title.replace(/\s+/g, ''));
        const short = title.split(_TITLE_SPLIT_RE)[0];
        push(short);
        push(toArabic(short));
        return out;
    };

    const _NUM_ONLY_RE = /^\d+$/;
    const _EP_PATTERN_RE = /(?:第|EP|Ep|ep|E)\s*(\d+)(?:集|话|期|部|季|章)?/i;
    const _EP_PREFIX_RE = /^(\d+)\s*(?:集|话|期|部|季|章)/;
    const _EP_SUFFIX_RE = /(\d+)\s*(?:集|话|期|部|季|章)(?:\D|$)/;
    const _EP_EP_RE = /(?:EP|Ep|ep)(\d+)/i;
    const _EP_SEASON_RE = /第\s*\d+\s*[季部]\s*第\s*(\d+)\s*[集话]/;
    const _EP_FALLBACK_RE = /(?:\D|^)(\d{1,4})(?:\D|$)/;

    const _CACHE_VERSION = 'v6';
    const _CACHE_EXPIRY = 3600000;
    const SearchCache = {
        get(key) {
            try {
                const c = JSON.parse(GM_getValue('cache_' + _CACHE_VERSION + '_' + key, 'null'));
                if (c && Date.now() - c.ts < _CACHE_EXPIRY) return c.data;
            } catch (e) {}
            return null;
        },
        set(key, data) {
            try {
                GM_setValue('cache_' + _CACHE_VERSION + '_' + key, JSON.stringify({ data: data, ts: Date.now() }));
            } catch (e) {}
        }
    };

    function purgeSearchCache() {
        try {
            if (typeof GM_listValues !== 'function' || typeof GM_deleteValue !== 'function') return;
            const now = Date.now();
            const prefix = 'cache_' + _CACHE_VERSION + '_';
            GM_listValues().forEach(k => {
                if (k.indexOf('cache_') !== 0) return;
                if (k.indexOf(prefix) !== 0) { GM_deleteValue(k); return; }
                try {
                    const c = JSON.parse(GM_getValue(k, 'null'));
                    if (!c || now - c.ts >= _CACHE_EXPIRY) GM_deleteValue(k);
                } catch (e) { GM_deleteValue(k); }
            });
        } catch (e) {}
    }

    const LibCache = {
        _cache: {},
        _promises: {},
        _ver: '4.7.11',
        _DEFS: {
            core: {
                key: 'vp_lib_shaka_core',
                meta: 'vp_lib_meta_shaka_core',
                marker: 'shaka',
                minLen: 200000,
                urls: [
                    'https://fastly.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.compiled.min.js',
                    'https://cdn.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.compiled.min.js',
                    'https://gcore.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.compiled.min.js',
                    'https://unpkg.com/shaka-player@4.7.11/dist/shaka-player.compiled.js'
                ]
            },
            ui: {
                key: 'vp_lib_shaka_ui',
                meta: 'vp_lib_meta_shaka_ui',
                marker: 'shaka.ui',
                minLen: 100000,
                urls: [
                    'https://fastly.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.ui.js',
                    'https://cdn.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.ui.js',
                    'https://gcore.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.ui.js',
                    'https://unpkg.com/shaka-player@4.7.11/dist/shaka-player.ui.js'
                ]
            },
            css: {
                key: 'vp_lib_shaka_css',
                meta: 'vp_lib_meta_shaka_css',
                marker: '.shaka-video-container',
                minLen: 8000,
                urls: [
                    'https://fastly.jsdelivr.net/npm/shaka-player@4.7.11/dist/controls.css',
                    'https://cdn.jsdelivr.net/npm/shaka-player@4.7.11/dist/controls.css',
                    'https://gcore.jsdelivr.net/npm/shaka-player@4.7.11/dist/controls.css',
                    'https://unpkg.com/shaka-player@4.7.11/dist/controls.css'
                ]
            }
        },
        _sum(str) {
            let h = 0x811c9dc5;
            for (let i = 0; i < str.length; i++) {
                h ^= str.charCodeAt(i);
                h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
            }
            return h.toString(36);
        },
        _valid(kind, code, meta) {
            const def = this._DEFS[kind];
            if (!meta || typeof code !== 'string') return false;
            if (meta.v !== this._ver) return false;
            if (code.length < def.minLen || meta.len !== code.length) return false;
            if (meta.sum !== this._sum(code)) return false;
            return code.indexOf(def.marker) !== -1;
        },
        _read(kind) {
            try {
                const code = GM_getValue(this._DEFS[kind].key, '');
                if (!code) return null;
                let meta = null;
                try { meta = JSON.parse(GM_getValue(this._DEFS[kind].meta, 'null')); } catch (e) {}
                if (this._valid(kind, code, meta)) return code;
            } catch (e) {}
            this._clearKind(kind);
            return null;
        },
        _write(kind, code) {
            try {
                GM_setValue(this._DEFS[kind].key, code);
                GM_setValue(this._DEFS[kind].meta, JSON.stringify({
                    v: this._ver,
                    len: code.length,
                    sum: this._sum(code),
                    ts: Date.now()
                }));
            } catch (e) {
                console.warn('[VIP] Persist player lib failed:', e && e.message);
            }
        },
        _clearKind(kind) {
            try {
                GM_setValue(this._DEFS[kind].key, '');
                GM_setValue(this._DEFS[kind].meta, '');
            } catch (e) {}
        },
        purge() {
            Object.keys(this._DEFS).forEach(kind => {
                this._cache[kind] = null;
                this._promises[kind] = null;
                this._clearKind(kind);
            });
        },
        _metaOk(kind) {
            try {
                const meta = JSON.parse(GM_getValue(this._DEFS[kind].meta, 'null'));
                return !!(meta && meta.v === this._ver && meta.len > this._DEFS[kind].minLen);
            } catch (e) {
                return false;
            }
        },
        _fetchSingle(url, timeout = 4000) {
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: url,
                    timeout: timeout,
                    onload(r) {
                        if (r.status >= 200 && r.status < 400 && r.responseText) {
                            resolve(r.responseText);
                        } else {
                            reject(new Error('HTTP ' + r.status));
                        }
                    },
                    onerror() { reject(new Error('Network error')); },
                    ontimeout() { reject(new Error('Timeout')); }
                });
            });
        },
        _fetchWithFallback(kind) {
            const def = this._DEFS[kind];
            const urls = def.urls;
            const marker = def.marker;
            const minLen = def.minLen;
            return new Promise((resolve) => {
                let index = 0;
                const tryNext = () => {
                    if (index >= urls.length) {
                        resolve(null);
                        return;
                    }
                    const url = urls[index];
                    this._fetchSingle(url, 4000)
                        .then(code => {
                            if (code && code.length >= minLen && code.indexOf(marker) !== -1) {
                                resolve(code);
                            } else {
                                index++;
                                tryNext();
                            }
                        })
                        .catch(() => {
                            index++;
                            tryNext();
                        });
                };
                tryNext();
            });
        },
        async _load(kind) {
            const cached = this._read(kind);
            if (cached) return cached;
            const code = await this._fetchWithFallback(kind);
            if (code) this._write(kind, code);
            return code;
        },
        preload() {
            if (Object.keys(this._DEFS).every(kind => this._metaOk(kind))) return;
            this.getCore();
            this.getUi();
            this.getCss();
        },
        async get(kind) {
            if (this._cache[kind]) return this._cache[kind];
            if (this._promises[kind]) return await this._promises[kind];
            this._promises[kind] = this._load(kind).then(code => { this._cache[kind] = code; return code; });
            return await this._promises[kind];
        },
        getCore() { return this.get('core'); },
        getUi() { return this.get('ui'); },
        getCss() { return this.get('css'); }
    };
    LibCache.preload();

    const ApiStats = {
        _p: {},
        _t: null,
        _priority: new Set(['西瓜', 'iqiyi', '新浪', '360', '1080', '天堂', '新浪', '速播2', 'U酷', '红牛', '百度']),
        _flush() {
            const p = this._p;
            this._p = {};
            this._t = null;
            for (const [k, v] of Object.entries(p)) GM_setValue(`api_stats_${k}`, v);
        },
        _schedule() { if (!this._t) this._t = setTimeout(() => this._flush(), 2000); },
        get(n) { return this._p[n] || GM_getValue(`api_stats_${n}`) || { s: 0, f: 0, l: 0, r: 0 }; },
        ok(n, lat) { const s = this.get(n); s.s++; s.l += lat; s.r++; this._p[n] = s; this._schedule(); },
        fail(n) { const s = this.get(n); s.f++; s.r++; this._p[n] = s; this._schedule(); },
        score(s, name) {
            if (name && this._priority.has(name)) return 99999;
            if (s.r < 3) return 1000;
            const sr = s.s / s.r;
            if (sr < 0.5) return -1000;
            return sr * 10000 - (s.s ? s.l / s.s : CONFIG.API_TIMEOUT);
        }
    };

    const RAW_APIS = [
{ n: "1080", u: atob("aHR0cHM6Ly9hcGkuMTA4MHp5a3UuY29tL2luYy9hcGlqc29uLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "iqiyi", u: atob("aHR0cHM6Ly9pcWl5aXp5YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "360", u: atob("aHR0cHM6Ly8zNjB6eS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "西瓜", u: atob("aHR0cHM6Ly9jYWlqaS54Z3p5YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "艾旦", u: atob("aHR0cDovL3d3dy5sb3ZlZGFuLm5ldC9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "百度", u: atob("aHR0cDovL2FwaS5hcGliZHp5LmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "蛋蛋", u: atob("aHR0cDovL2RkbWYubmV0L2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "非凡", u: atob("aHR0cHM6Ly9hcGkuZmZ6eWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "非凡2", u: atob("aHR0cDovL2NqLmZmenlhcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "光速", u: atob("aHR0cHM6Ly9hcGkuZ3VhbmdzdWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "豪华", u: atob("aHR0cHM6Ly9oaHp5YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "红牛", u: atob("aHR0cHM6Ly93d3cuaG9uZ25pdXp5Mi5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "虎牙", u: atob("aHR0cHM6Ly93d3cuaHV5YWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "极速", u: atob("aHR0cHM6Ly9qc3p5YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "巨量", u: atob("aHR0cHM6Ly9hcGkuanVsaWFuZy5saXZlL2FwaS9wcm92aWRlL3ZvZC8=") },
{ n: "猫眼", u: atob("aHR0cHM6Ly9hcGkubWFveWFuYXBpLnRvcC9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "魔都", u: atob("aHR0cHM6Ly9jYWlqaS5tb2R1YXBpLmNjL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "魔都2", u: atob("aHR0cHM6Ly93d3cubWR6eWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "量子", u: atob("aHR0cHM6Ly9jai5semlhcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "如意", u: atob("aHR0cDovL2NqLnJ5Y2phcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "天堂", u: atob("aHR0cHM6Ly9jYWlqaS5keXR0enlhcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "天堂2", u: atob("aHR0cDovL2NhaWppLmR5dHR6eWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "无忧", u: atob("aHR0cHM6Ly93d3cud3l2b2QuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "无尽", u: atob("aHR0cHM6Ly9hcGkud3VqaW5hcGkubWUvYXBpLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "新浪", u: atob("aHR0cHM6Ly9hcGkueGlubGFuZ2FwaS5jb20veGlubGFuZ2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "一零", u: atob("aHR0cDovL2FwaS4xMDgwenlrdS5jb20vaW5jL2FwaV9tYWMxMC5waHAvcHJvdmlkZS92b2Qv") },
{ n: "ikun", u: atob("aHR0cHM6Ly9pa3VuenlhcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Qv") },
{ n: "U酷", u: atob("aHR0cHM6Ly9hcGkudWt1YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9kLw==") },
{ n: "优质", u: atob("aHR0cHM6Ly9hcGkueXp6eS1hcGkuY29tL2luYy9hcGlqc29uLnBocC9wcm92aWRlL3ZvZC8=") },
{ n: "天涯", u: atob("aHR0cHM6Ly90eXlzenkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Q=") },
{ n: "量子2", u: atob("aHR0cHM6Ly9jai5semNhaWppLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9k") },
{ n: "CK", u: atob("aHR0cHM6Ly9ja3p5Lm1lL2FwaS5waHAvcHJvdmlkZS92b2Q=") },
{ n: "索尼", u: atob("aHR0cHM6Ly9zdW9uaWFwaS5jb20vYXBpLnBocC9wcm92aWRlL3ZvZA==") },
{ n: "最大2", u: atob("aHR0cHM6Ly96dWlkYXp5Lm1lL2FwaS5waHAvcHJvdmlkZS92b2Q=") },
{ n: "暴风", u: atob("aHR0cHM6Ly9iZnp5YXBpLmNvbS9hcGkucGhwL3Byb3ZpZGUvdm9k") },
{ n: "无尽2", u: atob("aHR0cHM6Ly9hcGkud3VqaW5hcGkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Q=") },
{ n: "速播", u: atob("aHR0cHM6Ly9zdWJvY2FpamkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Q=") },
{ n: "金鹰", u: atob("aHR0cHM6Ly9qaW55aW5nenkuY29tL2FwaS5waHAvcHJvdmlkZS92b2Q=") },

    ];

    const _PRIORITY_ORDER = ['西瓜', 'iqiyi', '新浪', '360', '1080', '天堂', '新浪', '速播2', 'U酷', '红牛', '百度'];
    const _LOW_PRIORITY = new Set(['量子', '最大']);

    const processApis = raw => {
        const m = new Map();
        raw.forEach(a => {
            if (!m.has(a.u)) m.set(a.u, { name: a.n, url: a.u, shortName: a.n.substring(0, 4) });
        });
        const apis = Array.from(m.values());
        const priority = apis.filter(a => ApiStats._priority.has(a.shortName));
        priority.sort((a, b) => {
            const ai = _PRIORITY_ORDER.indexOf(a.shortName);
            const bi = _PRIORITY_ORDER.indexOf(b.shortName);
            return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        });
        const low = apis.filter(a => _LOW_PRIORITY.has(a.shortName));
        const others = apis.filter(a => !ApiStats._priority.has(a.shortName) && !_LOW_PRIORITY.has(a.shortName));
        if (CONFIG.SMART_SORTING) {
            others.sort((a, b) => ApiStats.score(ApiStats.get(b.shortName), b.shortName) - ApiStats.score(ApiStats.get(a.shortName), a.shortName));
        }
        return [...priority, ...others, ...low];
    };

    const UNIQUE_APIS = processApis(RAW_APIS);

    const State = {
        eps: [],
        curUrl: '',
        hiddenEl: null,
        panelOpen: false,
        curURL: location.href,
        dom: {},
        timers: {},
        cache: { key: null, results: [] },
        activeName: null,
        firstAuto: false,
        curEp: null,
        failed: new Set(),
        failedSources: new Set(),
        closed: false,
        searchId: 0,
        playing: false,
        switchCount: 0,
        stuckPending: false,
        isPageLoad: true,
        lastSwitchTime: 0,
        isAutoSwitch: false,
        playGeneration: 0,
        libReloadTried: false,
        lastPlayUrl: '',
        iframeReady: false,
        switchAckGen: 0
    };

    const EP_MATCH_PATTERNS = [
        { regex: /第\s*(\d+)\s*集/, group: 1 },
        { regex: /第\s*(\d+)\s*话/, group: 1 },
        { regex: /第\s*(\d+)\s*期/, group: 1 },
        { regex: /EP\s*(\d+)/i, group: 1 },
        { regex: /Ep\s*(\d+)/, group: 1 },
        { regex: /ep\s*(\d+)/, group: 1 },
        { regex: /E(\d+)/i, group: 1 },
        { regex: /(\d+)\s*集/, group: 1 },
        { regex: /(\d+)\s*话/, group: 1 },
        { regex: /(\d+)\s*期/, group: 1 },
        { regex: /\[(\d+)\]/, group: 1 },
        { regex: /【(\d+)】/, group: 1 },
        { regex: /（(\d+)）/, group: 1 },
        { regex: /\((\d+)\)/, group: 1 }
    ];

    function matchEpisodeEnhanced(epName, targetNum) {
        if (!epName || !targetNum) return false;
        const cleanName = epName.trim();
        const num = parseInt(targetNum, 10);
        if (/^\d+$/.test(cleanName) && parseInt(cleanName, 10) === num) return true;
        for (const pattern of EP_MATCH_PATTERNS) {
            const match = cleanName.match(pattern.regex);
            if (match && match[pattern.group]) {
                if (parseInt(match[pattern.group], 10) === num) return true;
            }
        }
        if (cleanName.includes(targetNum)) {
            const idx = cleanName.indexOf(targetNum);
            const before = idx === 0 ? '' : cleanName.charAt(idx - 1);
            const after = idx + targetNum.length >= cleanName.length ? '' : cleanName.charAt(idx + targetNum.length);
            if ((/\D/.test(before) || idx === 0) && (/\D/.test(after) || idx + targetNum.length === cleanName.length)) {
                return true;
            }
        }
        return false;
    }

    const VIDEO_DOMAINS = [
        'iqiyi.com', 'iq.com', 'youku.com', 'v.qq.com', 'm.v.qq.com',
        'mgtv.com', 'bilibili.com', 'b23.tv', 'le.com', 'letv.com',
        'sohu.com', 'pptv.com', 'acfun.cn', '1905.com', 'ixigua.com',
        'douyin.com', 'kuaishou.com', 'miguvideo.com', 'cmvideo.cn',
        'baofeng.com', 'fun.tv', 'funshion.com', 'bfeng.cn', 'stormsfy.com',
        'tudou.com', 'hanju.koudaibaobao.com', 'maiduidui.com', 'rrsp.tv',
        'vas.hiaiabc.com', 'mgtv.com'
    ];

    const VIDEO_URL_KEYWORDS = [
        '/video/', '/play/', '/v_show/', '/v_play/', '/episode/',
        '/bangumi/', '/show/', '/detail/', '/movie/', '/tv/',
        '/film/', '/anime/', '/variety/', '/documentary/',
        '/x/cover/', '/x/page/', '/x/web-interface/'
    ];

    const VIDEO_PLAYER_SELECTORS = [
        'video', 'iframe[src*="player"]', 'iframe[src*="video"]',
        '[class*="player"]', '[id*="player"]', '[class*="video"]',
        '[id*="video"]', '.shaka-video-container', '#shaka-player-container',
        '.xgplayer', '.dplayer', '.video-player',
        '[class*="migu-player"]', '[class*="commonPlayer"]',
        '#wPlayer', '#player-container', '#sohuplayer',
        '#flashbox', '.iqp-player', '#bilibili-player',
        '.bpx-player-container', '#mgtv-player-wrap',
        '#le_player', '#player_swf', '#pp-player',
        '#ACPlayer', '#video-player', '#xigua-player',
        '.video-area', '.player-container', '#bf-player',
        '.bf-player', '#baofeng-player', '.bf-video-player',
        '#fun-player', '.fun-player', '#FunPlayer', '#h5player',
        '[class*="txp_player"]', '[class*="tenvideo"]',
        '[class*="yvp-player"]', '[class*="youku-player"]',
        '[class*="iqiyi-player"]', '[class*="le-player"]',
        '[class*="sohu-player"]', '[class*="pptv-player"]',
        '[class*="ac-player"]', '[class*="mgtv-player"]'
    ];

    const EXACT_PLAYER_SELECTORS = [
        '#tenvideo_player', '.txp_player_root', '#player-container', '#player',
        '[class*="txp_player"]', '[class*="mod_player"]', '.site-player',
        '#bilibili-player', '.bpx-player-container', '[class*="player-wrap"]',
        '.container-player', '#youku-player', '[class*="youku-player"]',
        '.iqp-player', '#iqp-player', '[class*="iqiyi-player"]',
        '#mgtv-player-wrap', '[class*="mgtv-player"]',
        '#sohuplayer', '#flashbox', '#le_player', '#player_swf',
        '#pp-player', '#ACPlayer', '#video-player', '#xigua-player',
        '.video-area', '.shaka-video-container',
        '#bf-player', '.bf-player', '#baofeng-player',
        '#fun-player', '.fun-player', '#FunPlayer', '#h5player'
    ];
    const _EXACT_PLAYER_SEL = EXACT_PLAYER_SELECTORS.join(', ');

    const onVideoPage = (() => {
        let _cache = { url: '', result: false, ts: 0 };
        return () => {
        const href = location.href;
        if (href === _cache.url && Date.now() - _cache.ts < 500) return _cache.result;
        const hn = location.hostname;
        const isMobile = isMobileView();

        let _result;
        if (isMobile) {
            if (CONFIG.VIDEO_URL_PATTERNS.some(p => p.test(href))) { _cache = { url: href, result: true, ts: Date.now() }; return true; }
            if (VIDEO_URL_KEYWORDS.some(kw => href.toLowerCase().includes(kw))) {
                if (VIDEO_DOMAINS.some(d => hn.includes(d))) { _cache = { url: href, result: true, ts: Date.now() }; return true; }
            }
            if (VIDEO_DOMAINS.some(d => hn.includes(d))) {
                if (document.querySelector('video')) { _cache = { url: href, result: true, ts: Date.now() }; return true; }
                if (document.querySelector(_EXACT_PLAYER_SEL)) { _cache = { url: href, result: true, ts: Date.now() }; return true; }
                const title = document.title.toLowerCase();
                if (title.includes('播放') || title.includes('play') || title.includes('watch')) { _cache = { url: href, result: true, ts: Date.now() }; return true; }
            }
            _cache = { url: href, result: false, ts: Date.now() };
            return false;
        }

        const isVideoSite = VIDEO_DOMAINS.some(d => hn.includes(d));
        if (!isVideoSite) { _cache = { url: href, result: false, ts: Date.now() }; return false; }

        const hasVideoUrl = CONFIG.VIDEO_URL_PATTERNS.some(p => p.test(href)) ||
            VIDEO_URL_KEYWORDS.some(kw => href.toLowerCase().includes(kw));

        if (!hasVideoUrl) { _cache = { url: href, result: false, ts: Date.now() }; return false; }

        const hasVideo = document.querySelector('video');
        const hasPlayer = !!document.querySelector(_EXACT_PLAYER_SEL);

        if (hasVideo || hasPlayer) { _cache = { url: href, result: true, ts: Date.now() }; return true; }

        if (document.querySelector('video[src], video source[src]')) { _cache = { url: href, result: true, ts: Date.now() }; return true; }

        _cache = { url: href, result: false, ts: Date.now() };
        return false;
    };
    })();

    const UI = {
        init() {
            const existingRoot = document.getElementById('vip-root');
            if (existingRoot) existingRoot.remove();
            const staleOv = document.getElementById('vip-overlay');
            if (staleOv) staleOv.remove();
            const staleToast = document.getElementById('vip-toast');
            if (staleToast) staleToast.remove();
            this._css();
            State.dom.c = this._el('div', { id: 'vip-root' });
            State.dom.btn = this._el('div', { id: 'vip-btn', title: '点击展开/解析VIP视频 (可拖拽)' });
            State.dom.btn.innerHTML = '<div class="vip-btn-inner"><span>VIP</span></div>';

            State.dom.p = this._el('div', { id: 'vip-panel' });
            State.dom.ov = this._el('div', { id: 'vip-overlay' });
            State.dom.ov.innerHTML = '<iframe id="vip-iframe" allow="autoplay; fullscreen; picture-in-picture; document-picture-in-picture; encrypted-media; gyroscope; accelerometer" referrerpolicy="no-referrer"></iframe><div id="vip-spinner"><div class="vip-spinner-circle"></div></div><div id="vip-close" title="退出解析播放">✕</div>';

            document.body.append(State.dom.c, State.dom.ov);
            State.dom.c.append(State.dom.btn, State.dom.p);

            State.dom.ifr = document.getElementById('vip-iframe');
            State.dom.cls = document.getElementById('vip-close');
            State.dom.spinner = document.getElementById('vip-spinner');
            State.dom.toast = this._el('div', { id: 'vip-toast' });
            document.body.append(State.dom.toast);

            this._drag();
            State.dom.cls.onclick = () => Player.close();

            State.dom.p.onmouseenter = () => clearTimer('panel_leave');
            State.dom.p.onmouseleave = () => {
                State.timers.panel_leave = setTimeout(() => {
                    if (State.panelOpen && !State.dom.btn.matches(':hover')) hideP();
                }, CONFIG.PANEL_LEAVE_CLOSE_DELAY);
            };

            if (!this._bound) {
                this._bound = true;
                window.addEventListener('resize', () => {
                    clearTimer('resize');
                    State.timers.resize = setTimeout(() => Player.repos(), 200);
                }, { passive: true });

                window.addEventListener('message', e => Player.onMsg(e), { passive: true });

                if (isMobileView()) {
                    document.addEventListener('click', e => {
                        if (State.panelOpen && !State.dom.p.contains(e.target) && !State.dom.btn.contains(e.target)) {
                            hideP();
                        }
                    }, true);
                    document.addEventListener('click', e => {
                        if (State.closed || !State.playing) return;
                        if (!State.dom.ov || State.dom.ov.style.display === 'none') return;
                        const t = e.target;
                        if (t && t.closest && t.closest('#vip-root, #vip-overlay, #vip-panel')) return;
                        try {
                            State.dom.ifr.contentWindow.postMessage({ type: CONFIG.MESSAGES.HIDE_CONTROLS, _generation: State.playGeneration }, '*');
                        } catch (err) {}
                    }, true);
                }
            }
        },

        _el: (tag, props = {}) => Object.assign(document.createElement(tag), props),

        _css() {
            if (this._cssDone) return;
            this._cssDone = true;
            const isMobile = isMobileView();
            GM_addStyle(`
                #vip-root {
                    position: fixed;
                    z-index: 2147483647;
                    user-select: none;
                    -webkit-user-select: none;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                }
                #vip-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;
                    background:
                        repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.13) 0 1px, rgba(94, 60, 0, 0.07) 1px 2px, transparent 2px 4px),
                        linear-gradient(135deg, #f7e08b 0%, #e0b84f 45%, #b8860b 100%);
                    cursor: grab;
                    padding: 3px;
                    box-sizing: border-box;
                    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.45), 0 0 0 2px rgba(255, 255, 255, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.5);
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #vip-btn::after {
                    content: "";
                    position: absolute;
                    top: -60%;
                    left: -80%;
                    width: 55%;
                    height: 220%;
                    background: linear-gradient(105deg, transparent 15%, rgba(255, 255, 255, 0.55) 50%, transparent 85%);
                    transform: rotate(10deg);
                    pointer-events: none;
                    animation: vip-sheen 3.6s ease-in-out infinite;
                }
                @keyframes vip-sheen {
                    0%, 55% { left: -80%; }
                    90%, 100% { left: 140%; }
                }
                #vip-btn:hover {
                    transform: scale(1.08);
                    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.65), 0 0 0 3px rgba(255, 255, 255, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.55);
                }
                #vip-btn:active {
                    cursor: grabbing;
                    transform: scale(0.95);
                }
                .vip-btn-inner {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: rgba(15, 23, 42, 0.85);
                    background-image:
                        repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 3px),
                        repeating-linear-gradient(25deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-weight: 800;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    backdrop-filter: blur(4px);
                }
                .vip-btn-inner span {
                    background: linear-gradient(120deg, #f9e7b3 15%, #e8c468 60%, #c9971d 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                #vip-btn.loading .vip-btn-inner span {
                    display: none;
                }
                #vip-btn.loading .vip-btn-inner::after {
                    content: "";
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.25);
                    border-top-color: #e8c468;
                    border-radius: 50%;
                    animation: vip-spin 0.8s linear infinite;
                }
                @keyframes vip-spin {
                    to { transform: rotate(360deg); }
                }
                #vip-panel {
                    display: none;
                    position: absolute;
                    left: 54px;
                    top: 0;
                    width: 320px;
                    max-height: 75vh;
                    background: rgba(15, 23, 42, 0.88);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 16px;
                    padding: 12px;
                    box-sizing: border-box;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
                    flex-direction: column;
                    gap: 8px;
                    color: #e2e8f0;
                    will-change: transform;
                    contain: layout style;
                }
                .vip-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 6px 10px;
                    background: rgba(255, 255, 255, 0.06);
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #f0dfae;
                }
                .vip-header-btn {
                    cursor: pointer;
                    padding: 2px 8px;
                    border-radius: 6px;
                    background-color: rgba(212, 175, 55, 0.16);
                    background-image: repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 3px);
                    border: 1px solid rgba(212, 175, 55, 0.35);
                    color: #f0dfae;
                    font-size: 12px;
                    transition: all 0.2s;
                }
                .vip-header-btn:hover {
                    background-color: rgba(212, 175, 55, 0.35);
                    background-image: repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 3px);
                    color: #fff;
                }
                .vip-list-wrap {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 6px;
                    overflow-y: auto;
                    max-height: 52vh;
                    padding-right: 4px;
                    box-sizing: border-box;
                }
                .vip-list-wrap.ep-mode {
                    grid-template-columns: repeat(4, 1fr);
                }
                .vip-item-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 6px;
                    background-color: rgba(255, 255, 255, 0.05);
                    background-image: repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 3px);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 8px;
                    color: #cbd5e1;
                    font-size: 12px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    will-change: transform;
                    contain: layout style;
                }
                .vip-item-btn:hover {
                    background-color: rgba(212, 175, 55, 0.18);
                    background-image: repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 3px);
                    border-color: rgba(212, 175, 55, 0.45);
                    color: #fff;
                    transform: translateY(-1px);
                }
                .vip-item-btn.active {
                    background:
                        repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.12) 0 1px, rgba(94, 60, 0, 0.06) 1px 2px, transparent 2px 4px),
                        linear-gradient(135deg, #e8c468, #b8860b) !important;
                    border-color: transparent !important;
                    color: #241a02 !important;
                    box-shadow: 0 4px 14px rgba(212, 175, 55, 0.45);
                    font-weight: 700;
                }
                .vip-item-btn.active .quality-badge {
                    color: #241a02 !important;
                    opacity: 0.75;
                }
                .vip-item-btn .quality-badge {
                    font-size: 10px;
                    margin-left: 4px;
                    opacity: 0.8;
                    color: #38bdf8;
                }
                .vip-list-wrap::-webkit-scrollbar {
                    width: 5px;
                }
                .vip-list-wrap::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                }
                 
                @media (max-width: 768px) {
                    #vip-btn {
                        width: 36px;
                        height: 36px;
                        padding: 2px;
                        box-shadow: 0 2px 8px rgba(212, 175, 55, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.5);
                    }
                    .vip-btn-inner {
                        font-size: 11px;
                    }
                    #vip-panel {
                        position: fixed;
                        left: 50%;
                        right: auto;
                        top: auto;
                        bottom: 36px;
                        width: calc(100vw - 16px);
                        max-width: 250px;
                        max-height: 42vh;
                        transform: translateX(-50%);
                        padding: 5px;
                        gap: 3px;
                        border-radius: 8px;
                    }
                    .vip-header {
                        padding: 3px 5px;
                        border-radius: 5px;
                        font-size: 10px;
                        gap: 3px;
                    }
                    .vip-header-btn {
                        padding: 2px 5px;
                        font-size: 9px;
                        border-radius: 4px;
                    }
                    .vip-list-wrap {
                        gap: 2px;
                        max-height: 34vh;
                        padding: 0 1px 2px 0;
                    }
                    .vip-list-wrap.ep-mode {
                        grid-template-columns: repeat(5, 1fr);
                    }
                    .vip-item-btn {
                        flex-direction: column;
                        padding: 3px 1px;
                        border-radius: 4px;
                        font-size: 9px;
                        word-break: break-all;
                        line-height: 1.1;
                        min-height: 24px;
                    }
                    .vip-item-btn span {
                        display: block;
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .vip-item-btn .quality-badge {
                        font-size: 7px;
                        margin-top: 0;
                        margin-left: 0;
                    }
                }
                #vip-overlay {
                    position: absolute;
                    background: #000;
                    z-index: 2147483646;
                    display: none;
                    border-radius: 4px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
                }
                #vip-iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    display: block;
                }
                #vip-close {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    z-index: 2147483647;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: rgba(15, 23, 42, 0.75);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #f1f5f9;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: all 0.2s ease;
                }
                #vip-close:hover {
                    background: #ef4444;
                    border-color: #ef4444;
                    color: #fff;
                    transform: scale(1.1);
                }
                #vip-spinner {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform 0.28s ease;
                    z-index: 2147483647;
                    pointer-events: none;
                    display: none;
                }
                #vip-spinner.vip-switch {
                    transform: translate(-50%, -50%) scale(0.62);
                }
                #vip-spinner.vip-show {
                    display: block;
                }
                .vip-spinner-circle {
                    width: 52px;
                    height: 52px;
                    border: 4px solid rgba(255, 255, 255, 0.22);
                    border-top-color: #e8c468;
                    border-radius: 50%;
                    animation: vip-spin 0.9s linear infinite;
                    box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
                }
                @media (max-width: 768px) {
                    .vip-spinner-circle {
                        width: 36px;
                        height: 36px;
                        border-width: 3px;
                    }
                }
                @keyframes vip-spin {
                    to { transform: rotate(360deg); }
                }
                #vip-toast {
                    position: fixed;
                    top: 24px;
                    left: 50%;
                    transform: translateX(-50%) translateY(-20px);
                    background: rgba(15, 23, 42, 0.92);
                    backdrop-filter: blur(12px);
                    color: #93c5fd;
                    font-size: 13px;
                    font-weight: 500;
                    padding: 8px 18px;
                    border-radius: 30px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    pointer-events: none;
                    opacity: 0;
                    z-index: 2147483647;
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                #vip-toast.show {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                 
                @media (max-width: 768px) {
                    #vip-overlay {
                        border-radius: 0;
                    }
                    #vip-close {
                        top: 4px;
                        right: 4px;
                        width: 18px;
                        height: 18px;
                        font-size: 9px;
                        background: rgba(15, 23, 42, 0.5);
                        border: 1px solid rgba(255, 255, 255, 0.12);
                    }
                    #vip-toast {
                        top: 12px;
                        font-size: 14px;
                        padding: 10px 20px;
                        max-width: 90vw;
                        text-align: center;
                    }
                }
            `);
        },

        _drag() {
            let isDragging = false, hasMoved = false, startX, startY, origLeft, origTop;
            const c = State.dom.c;
            const isMobile = _UA_MOBILE;
            const defaultPos = isMobile ? { l: 12, t: window.innerHeight - 60 } : { l: 20, t: 200 };
            const pos = GM_getValue(CONFIG.STORAGE_KEY_ICON_POSITION, defaultPos);
            c.style.left = `${pos.l}px`;
            c.style.top = `${pos.t}px`;

            const getPos = e => {
                if (e.touches && e.touches.length) {
                    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
                }
                return { x: e.clientX, y: e.clientY };
            };

            let _moveRaf = 0, _pdX = 0, _pdY = 0;
            const applyMove = () => {
                _moveRaf = 0;
                let nx = origLeft + _pdX;
                let ny = origTop + _pdY;
                nx = Math.max(8, Math.min(innerWidth - 52, nx));
                ny = Math.max(8, Math.min(innerHeight - 52, ny));
                c.style.left = `${nx}px`;
                c.style.top = `${ny}px`;
            };
            const flushMove = () => {
                if (_moveRaf) {
                    cancelAnimationFrame(_moveRaf);
                    applyMove();
                }
            };

            const onMove = e => {
                if (!isDragging) return;
                e.preventDefault();
                const pos = getPos(e);
                const dx = pos.x - startX;
                const dy = pos.y - startY;
                if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;
                if (!hasMoved) return;
                _pdX = dx;
                _pdY = dy;
                if (!_moveRaf) _moveRaf = requestAnimationFrame(applyMove);
            };

            const onUp = () => {
                if (!isDragging) return;
                isDragging = false;
                flushMove();
                document.body.style.userSelect = '';
                if (hasMoved) {
                    const rect = c.getBoundingClientRect();
                    const snapLeft = rect.left < innerWidth / 2 ? 14 : innerWidth - 58;
                    c.style.transition = 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    c.style.left = `${snapLeft}px`;
                    setTimeout(() => { c.style.transition = ''; }, 300);
                    GM_setValue(CONFIG.STORAGE_KEY_ICON_POSITION, { l: snapLeft, t: rect.top });
                }
                removeEventListener('mousemove', onMove, true);
                removeEventListener('mouseup', onUp, true);
                removeEventListener('touchmove', onMove, true);
                removeEventListener('touchend', onUp, true);
                removeEventListener('touchcancel', onUp, true);
            };

            const onStart = e => {
                if (e.target.closest('#vip-panel')) return;
                if (e.type === 'mousedown' && e.button !== 0) return;
                isDragging = true;
                hasMoved = false;
                const pos = getPos(e);
                startX = pos.x;
                startY = pos.y;
                const r = c.getBoundingClientRect();
                origLeft = r.left;
                origTop = r.top;
                document.body.style.userSelect = 'none';
                addEventListener('mousemove', onMove, true);
                addEventListener('mouseup', onUp, true);
                addEventListener('touchmove', onMove, { passive: false, capture: true });
                addEventListener('touchend', onUp, true);
                addEventListener('touchcancel', onUp, true);
            };

            c.addEventListener('mousedown', onStart);
            c.addEventListener('touchstart', onStart, { passive: true });

            State.dom.btn.onclick = e => {
                e.stopPropagation();
                if (hasMoved) return;
                if (State.panelOpen) {
                    hideP();
                } else {
                    const currentUrl = location.href;
                    if (State.cache.key === currentUrl && State.cache.results.length) {
                        State.closed = false;
                        showP();
                        renderSrc();
                    } else {
                        showP();
                        Search.go();
                    }
                }
            };
        },

        addSrc(r) {
            const list = document.querySelector('#vip-list');
            if (!list || !State.panelOpen || list.classList.contains('ep-mode')) return;
            const old = list.querySelector(`[data-name="${r.name}"]`);
            if (old) old.remove();

            const pu = r.data.vod_play_url || '';
            const cnt = pu.includes('$$$') ? pu.split('$$$').pop().split('#').length : (pu.includes('#') ? pu.split('#').length : 1);
            const btn = UI._el('div', {
                className: `vip-item-btn ${r.name === State.activeName ? 'active' : ''}`,
                innerHTML: `<span>${r.name}</span><span class="quality-badge">${r.resolution ? r.resolution + 'P' : cnt + '集'}</span>`,
                onclick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    State.activeName = r.name;
                    UI.epList(r, false, State.curEp);
                }
            });
            btn.dataset.name = r.name;
            list.appendChild(btn);
        },

        epList(src, auto = false, cur = null, clearFailed = true) {
            if (State.closed) return;
            clearAll();
            const panel = State.dom.p;
            panel.innerHTML = '';

            const header = UI._el('div', { className: 'vip-header' });
            header.innerHTML = `<span>${src.name} - 选集</span><div class="vip-header-btn">‹ 返回源列表</div>`;
            header.querySelector('.vip-header-btn').onclick = () => renderSrc();

            const list = UI._el('div', { className: 'vip-list-wrap ep-mode', id: 'vip-list' });
            panel.append(header, list);

            State.eps = [];
            const pu = src.data?.vod_play_url || '';
            if (!pu) {
                header.querySelector('span').textContent = '该源无有效播放地址';
                Player._switchToNextAvailableSource(src.name);
                return;
            }

            const rawEps = pu.includes('$$$') ? pu.split('$$$').pop().split('#') : (pu.includes('#') ? pu.split('#') : [pu]);
            const frag = document.createDocumentFragment();
            let idx = 0;

            rawEps.forEach(epStr => {
                const [nm, uStr] = epStr.split('$');
                const name = (nm || '').trim();
                const url = (uStr || nm || '').trim();
                if (!name && !url) return;
                idx++;
                const finalName = name || `第${idx}集`;
                State.eps.push({ name: finalName, url });

                const btn = UI._el('div', {
                    className: 'vip-item-btn',
                    textContent: finalName,
                    onclick(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        const epNum = Utils.epNum(finalName);
                        if (epNum) State.curEp = epNum;
                        if (clearFailed) {
                            State.switchCount = 0;
                            State.failed.clear();
                            State.failedSources.clear();
                        }
                        Player.start(url);
                        UI.highlightPlayingEpisode(url);
                    }
                });
                btn.dataset.url = url;
                btn.dataset.name = finalName;
                frag.appendChild(btn);
            });

            list.appendChild(frag);
            _adjustPanelPosition();

            if (!cur) {
                if (auto && State.eps.length) {
                    const best = _bestMovie(State.eps);
                    if (best) {
                        UI.highlightPlayingEpisode(best.url);
                        if (clearFailed) {
                            State.switchCount = 0;
                            State.failed.clear();
                            State.failedSources.clear();
                        }
                        Player.start(best.url);
                    }
                }
                return;
            }

            const targetNum = String(parseInt(cur, 10));
            const btns = Array.from(list.querySelectorAll('.vip-item-btn'));
            let matchedBtn = btns.find(b => matchEpisodeEnhanced(b.dataset.name, targetNum));

            if (matchedBtn) {
                matchedBtn.classList.add('active');
                setTimeout(() => matchedBtn.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
                if (auto) {
                    if (clearFailed) {
                        State.switchCount = 0;
                        State.failed.clear();
                        State.failedSources.clear();
                    }
                    Player.start(matchedBtn.dataset.url);
                }
            }
        },

        highlightPlayingEpisode(url) {
            const list = document.querySelector('#vip-list');
            if (!list) return;
            list.querySelectorAll('.vip-item-btn').forEach(b => b.classList.remove('active'));
            const target = list.querySelector(`[data-url="${CSS.escape(url)}"]`);
            if (target) {
                target.classList.add('active');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        toggleLoading: v => State.dom.btn?.classList.toggle('loading', v),
        toast(msg, time = 3000) {
            const t = State.dom.toast;
            if (!t) return;
            t.textContent = msg;
            t.classList.add('show');
            clearTimeout(State.timers.toast);
            State.timers.toast = setTimeout(() => {
                t.classList.remove('show');
            }, time);
        },
        dismissToast() {
            clearTimeout(State.timers.toast);
            if (State.dom.toast) State.dom.toast.classList.remove('show');
        }
    };

    function _adjustPanelPosition() {
        if (!State.dom.c || !State.dom.p) return;
        const isMobile = isMobileView();
        const panel = State.dom.p;
        
        if (isMobile) {
            panel.style.position = 'fixed';
            panel.style.left = '50%';
            panel.style.right = 'auto';
            panel.style.bottom = '36px';
            panel.style.top = 'auto';
            panel.style.transform = 'translateX(-50%)';
            panel.style.width = 'calc(100vw - 16px)';
            panel.style.maxWidth = '250px';
        } else {
            panel.style.position = 'absolute';
            panel.style.transform = 'none';
            panel.style.width = '320px';
            panel.style.bottom = 'auto';
            const r = State.dom.c.getBoundingClientRect();
            if (r.right + 340 > innerWidth) {
                panel.style.left = 'auto';
                panel.style.right = '54px';
            } else {
                panel.style.left = '54px';
                panel.style.right = 'auto';
            }
        }
    }

    function renderSrc() {
        const panel = State.dom.p;
        panel.innerHTML = '';
        _adjustPanelPosition();

        const header = UI._el('div', { className: 'vip-header' });
        header.innerHTML = `<span>解析源 (共 ${State.cache.results.length} 个)</span>`;

        const list = UI._el('div', { className: 'vip-list-wrap', id: 'vip-list' });
        panel.append(header, list);

        const frag = document.createDocumentFragment();
        State.cache.results.forEach(r => {
            const pu = r.data?.vod_play_url || '';
            const cnt = pu.includes('$$$') ? pu.split('$$$').pop().split('#').length : (pu.includes('#') ? pu.split('#').length : 1);
            const btn = UI._el('div', {
                className: `vip-item-btn ${r.name === State.activeName ? 'active' : ''}`,
                innerHTML: `<span>${r.name}</span><span class="quality-badge">${r.resolution ? r.resolution + 'P' : cnt + '集'}</span>`,
                onclick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    State.activeName = r.name;
                    UI.epList(r, false, State.curEp);
                }
            });
            btn.dataset.name = r.name;
            frag.appendChild(btn);
        });
        list.appendChild(frag);
    }

    function showP() {
        State.dom.p.style.display = 'flex';
        State.panelOpen = true;
        _adjustPanelPosition();
    }

    function hideP() {
        if (State.dom.p) State.dom.p.style.display = 'none';
        State.panelOpen = false;
        clearTimer('panel_leave');
    }

    var spinnerShownAt = 0;
    function showSpinner() {
        if (State.dom.spinner) {
            if (!State.dom.spinner.classList.contains('vip-show')) {
                State.dom.spinner.classList.add('vip-show');
                spinnerShownAt = Date.now();
            }
        }
    }

    function hideSpinner() {
        if (State.dom.spinner) State.dom.spinner.classList.remove('vip-show', 'vip-switch');
        clearTimer('spinner_stutter');
    }

    function stutterSpinner() {
        if (!State.dom.spinner || !State.dom.spinner.classList.contains('vip-show')) return;
        if (Date.now() - spinnerShownAt < 800) return;
        State.timers.spinner_stutter = setTimeout(function() {
            State.timers.spinner_stutter = null;
            if (State.dom.spinner) State.dom.spinner.classList.remove('vip-switch');
        }, 500);
        State.dom.spinner.classList.add('vip-switch');
    }

    function _bestMovie(eps) {
        let best = eps[0], bi = Infinity;
        for (const ep of eps) {
            for (let i = 0; i < CONFIG.MOVIE_PRIORITY.length; i++) {
                if (ep.name === CONFIG.MOVIE_PRIORITY[i] || ep.name.includes(CONFIG.MOVIE_PRIORITY[i])) {
                    if (i < bi) { bi = i; best = ep; }
                    break;
                }
            }
        }
        return best;
    }

    function clearTimer(t) {
        if (State.timers[t]) {
            clearTimeout(State.timers[t]);
            State.timers[t] = null;
        }
    }

    function clearAll() {
        for (const t in State.timers) {
            if (t !== 'toast') clearTimer(t);
        }
    }

    const Search = {
        async go() {
            clearAll();
            UI.toggleLoading(true);

            const title = Utils.title();
            if (!title) {
                UI.toast('无法获取视频标题，请在播放页重试');
                UI.toggleLoading(false);
                return;
            }

            const curEp = await Utils.curEp();
            const cacheKey = `${title}_${curEp || 'main'}`;

            if (!State.isPageLoad) {
                const cached = SearchCache.get(cacheKey);
                if (cached && cached.length) {
                    State.cache = { key: location.href, results: cached };
                    State.activeName = null;
                    State.firstAuto = false;
                    State.closed = false;
                    State.switchCount = 0;
                    State.failed.clear();
                    State.failedSources.clear();

                    const best = cached.find(r => r.score >= 50) || cached[0];
                    if (best) {
                        State.activeName = best.name;
                        UI.epList(best, true, curEp);
                        hideP();
                    } else {
                        showP();
                        renderSrc();
                    }
                    UI.toggleLoading(false);
                    return;
                }
            }

            State.isPageLoad = false;
            State.cache = { key: location.href, results: [] };
            State.activeName = null;
            State.firstAuto = false;
            State.failed.clear();
            State.closed = false;
            const searchId = Date.now();
            State.searchId = searchId;
            State.curEp = curEp;

            renderSrc();
            this._search(title, curEp, searchId, cacheKey);
        },

        async _search(title, curEp, id, cacheKey) {
            const handleOneApi = async api => {
                if (State.closed || State.searchId !== id) return;
                const res = await this._one(api, title);

                if (!res) {
                    ApiStats.fail(api.name);
                    return;
                }
                ApiStats.ok(api.name, res.latency);
                if (State.closed || State.searchId !== id) return;

                const eps = res.data.vod_play_url.split('$$$').pop().split('#');
                let targetUrl = null, isMatch = false, isMovie = false;
                const numEp = curEp ? String(parseInt(curEp, 10)) : null;
                const mEps = [], nmEps = [];

                for (const ep of eps) {
                    const [nm] = ep.split('$');
                    if (nm && CONFIG.MOVIE_KEYWORDS.test(nm.trim())) mEps.push(ep);
                    else nmEps.push(ep);
                }

                if (mEps.length >= 1 && nmEps.length === 0) {
                    isMovie = true;
                    let best = mEps[0], bi = Infinity;
                    for (const ep of mEps) {
                        const [nm] = ep.split('$');
                        const tn = nm.trim();
                        for (let i = 0; i < CONFIG.MOVIE_PRIORITY.length; i++) {
                            if (tn === CONFIG.MOVIE_PRIORITY[i] || tn.includes(CONFIG.MOVIE_PRIORITY[i])) {
                                if (i < bi) { bi = i; best = ep; }
                                break;
                            }
                        }
                    }
                    targetUrl = best.split('$')[1] || best.split('$')[0];
                } else if (numEp && nmEps.length) {
                    let te = nmEps.find(ep => {
                        const [nm] = ep.split('$');
                        const en = Utils.epNum(nm);
                        return en && String(parseInt(en, 10)) === numEp;
                    });
                    if (!te) te = nmEps.find(ep => {
                        const [nm] = ep.split('$');
                        return nm && matchEpisodeEnhanced(nm, numEp);
                    });
                    if (te) {
                        targetUrl = te.split('$')[1] || te.split('$')[0];
                        isMatch = true;
                    }
                } else if (nmEps.length) {
                    const fe = nmEps[0] || eps[0];
                    if (fe && fe.includes('$')) targetUrl = fe.split('$')[1] || fe.split('$')[0];
                } else if (eps.length && eps[0].includes('$')) {
                    targetUrl = eps[0].split('$')[1] || eps[0].split('$')[0];
                }

                if (!targetUrl) {
                    _insertResult({ ...res, score: 50, resolution: 0, latency: res.latency });
                    return;
                }

                const ev = await Utils.evalSrc(targetUrl);
                const finalRes = {
                    ...res,
                    score: ev ? Math.max(0, Math.min(100, ev.score)) : 50,
                    resolution: ev ? ev.resolution : 0,
                    latency: ev ? ev.latency : res.latency,
                    evaluatedUrl: ev ? ev.url : targetUrl
                };

                const autoPlay = isMovie || isMatch;
                if (!State.firstAuto && autoPlay) {
                    State.firstAuto = true;
                    State.activeName = finalRes.name;
                    State.switchCount = 0;
                    State.failed.clear();
                    UI.epList(finalRes, true, isMovie ? null : State.curEp);
                    hideP();
                    UI.toast(`已自动优选: ${finalRes.name}`);
                }

                _insertResult(finalRes);

                function _insertResult(item) {
                    const idx = State.cache.results.findIndex(x => x.name === item.name);
                    if (idx > -1) State.cache.results[idx] = item;
                    else State.cache.results.push(item);
                    State.cache.results.sort((a, b) => b.score - a.score);
                    UI.addSrc(item);
                }
            };

            const priorityApis = UNIQUE_APIS.filter(a => ApiStats._priority.has(a.shortName));
            const otherApis = UNIQUE_APIS.filter(a => !ApiStats._priority.has(a.shortName));

            await Utils.pool(8, priorityApis, handleOneApi).catch(() => {});
            Utils.pool(CONFIG.SEARCH_CONCURRENCY, otherApis, handleOneApi).then(() => {
                if (State.searchId !== id || State.closed) return;
                UI.toggleLoading(false);
                if (State.cache.results.length > 0) {
                    SearchCache.set(cacheKey, State.cache.results);
                } else {
                    UI.toast('未找到可用解析源，请重试');
                }
            });
        },

        async _one(api, title) {
            try {
                const queries = titleQueryVariants(title);
                let best = null, totalLatency = 0;
                for (const q of queries) {
                    const l = await Utils.req(`ac=list&wd=${encodeURIComponent(q)}`, api);
                    totalLatency += l.latency;
                    const items = l.data?.list;
                    if (!items || !items.length) continue;
                    for (const item of items) {
                        const score = nameSimilarity(title, item.vod_name || '');
                        if (!best || score > best.score) best = { item, score };
                    }
                    if (best && best.score >= 0.9) break;
                }
                if (best && best.score >= 0.3) {
                    const first = best.item;
                    if (first.vod_play_url) return { name: api.name, data: first, latency: totalLatency };
                    const vd = await Utils.req(`ac=detail&ids=${first.vod_id}`, api);
                    const v = vd.data?.list?.[0];
                    if (v?.vod_play_url) return { name: api.name, data: v, latency: totalLatency + vd.latency };
                }
                const d = await Utils.req(`ac=detail&wd=${encodeURIComponent(title)}`, api);
                if (d.data?.list?.[0]?.vod_play_url) return { name: api.name, data: d.data.list[0], latency: totalLatency + d.latency };
                return null;
            } catch (e) {
                return null;
            }
        }
    };

    const Player = {
        _posRaf: null,
        _pos(attempt = 0) {
            if (State.closed || attempt > 8) return;
            const isMobile = isMobileView();
            if (this._posRaf) cancelAnimationFrame(this._posRaf);
            this._posRaf = requestAnimationFrame(() => {
                this._posRaf = null;
                let targetRect = null;
                if (!State.hiddenEl) State.hiddenEl = Utils.findPlayer();

                if (!State.hiddenEl) {
                    const v = document.querySelector('video');
                    if (v) {
                        const parentMinHeight = isMobile ? 150 : 300;
                        let p = v.parentElement;
                        while (p && p.tagName !== 'BODY' && p.offsetHeight < parentMinHeight) p = p.parentElement;
                        if (p && p.offsetHeight >= parentMinHeight) {
                            State.hiddenEl = p;
                            State.hiddenEl.style.opacity = '0';
                        }
                        if (!State.hiddenEl && v.parentElement) {
                            State.hiddenEl = v.parentElement;
                            State.hiddenEl.style.opacity = '0';
                        }
                    }
                }

                if (State.hiddenEl) {
                    try { targetRect = State.hiddenEl.getBoundingClientRect(); } catch (e) {}
                }

                const minWidth = isMobile ? 100 : 200;
                const minHeight = isMobile ? 60 : 100;
                if (targetRect && targetRect.width > minWidth && targetRect.height > minHeight) {
                    State.dom.ov.style.cssText = `position:absolute;top:${targetRect.top + scrollY}px;left:${targetRect.left + scrollX}px;width:${targetRect.width}px;height:${targetRect.height}px;display:block;z-index:2147483646;`;
                } else if (State.curUrl && attempt > 4) {
                    if (isMobile) {
                        State.dom.ov.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:56vw;display:block;z-index:2147483646;';
                    } else {
                        State.dom.ov.style.cssText = 'position:fixed;top:50%;left:50%;width:86%;height:80%;transform:translate(-50%,-50%);display:block;z-index:2147483646;box-shadow:0 0 50px rgba(0,0,0,0.8);border-radius:8px;';
                    }
                } else if (attempt <= 8) {
                    setTimeout(() => this._pos(attempt + 1), 120);
                }
            });
        },

        async start(url) {
            if (State.closed) return;
            clearAll();
            hideP();
            State.libReloadTried = false;
            const wasAutoSwitch = State.isAutoSwitch;
            if (!wasAutoSwitch) UI.dismissToast();
            State.curUrl = url;
            State.playGeneration++;
            UI.highlightPlayingEpisode(url);
            State.playing = true;
            this._pauseOrig();
            this._pos(0);
            State.dom.ov.style.display = 'block';
            showSpinner();
            const resolvedUrl = await Utils.resolveUrl(url);
            this._play(resolvedUrl, wasAutoSwitch);
        },

        async _play(url, wasAutoSwitch = false) {
            if (State.closed) return;
            showSpinner();
            stutterSpinner();
            clearTimer('stuck_watchdog');
            clearTimer('ifr_load');
            clearTimer('switch_ack');
            State.stuckPending = true;
            State.lastPlayUrl = url;

            const myGeneration = State.playGeneration;

            State.timers.stuck_watchdog = setTimeout(() => {
                if (State.stuckPending && !State.closed && State.playGeneration === myGeneration) {
                    this._switch();
                }
            }, CONFIG.STUCK_CHECK_TIMEOUT);

            if (State.iframeReady && this._sendSwitch(url, myGeneration)) {
                setTimeout(() => this.repos(), 100);
                return;
            }

            this._loadDoc(url, myGeneration);
        },

        _sendSwitch(url, myGeneration) {
            try {
                const w = State.dom.ifr.contentWindow;
                if (!w) return false;
                w.postMessage({ type: CONFIG.MESSAGES.SWITCH_URL, url: url, _generation: myGeneration }, '*');
            } catch (e) {
                return false;
            }
            State.timers.switch_ack = setTimeout(() => {
                clearTimer('switch_ack');
                if (State.closed || State.playGeneration !== myGeneration) return;
                if (State.switchAckGen !== myGeneration) {
                    State.iframeReady = false;
                    this._loadDoc(url, myGeneration);
                }
            }, 800);
            return true;
        },

        async _loadDoc(url, myGeneration) {
            try {
                const html = await this._html(url, myGeneration);
                if (State.closed || State.playGeneration !== myGeneration) return;
                State.iframeReady = false;
                State.dom.ifr.srcdoc = html;
                State.dom.ifr.onload = () => {
                    if (State.closed || State.playGeneration !== myGeneration) return;
                    setTimeout(() => this.repos(), 100);
                };
            } catch (e) {
                if (!State.closed && State.playGeneration === myGeneration) this._switch();
            }
        },

        _switch() {
            if (State.closed) return;
            clearTimer('stuck_watchdog');
            clearTimer('pre_switch');
            clearTimer('ifr_load');

            const now = Date.now();
            const timeSinceLast = now - State.lastSwitchTime;
            const minInterval = 1500;

            if (timeSinceLast < minInterval) {
                if (!State.timers.pre_switch) {
                    State.timers.pre_switch = setTimeout(() => {
                        State.timers.pre_switch = null;
                        if (!State.closed && State.stuckPending) this._switch();
                    }, minInterval - timeSinceLast + 100);
                }
                return;
            }

            State.lastSwitchTime = now;
            State.stuckPending = false;
            State.isAutoSwitch = true;
            UI.toast('当前线路加载较慢或受限，正在自动换源...');
            this._doSwitch();
        },

        _doSwitch() {
            try {
                State.switchCount++;
                State.failed.add(State.curUrl);
                if (State.activeName) State.failedSources.add(State.activeName);

                if (State.failedSources.size >= State.cache.results.length) {
                    UI.toast('所有解析源已轮询完毕');
                    hideSpinner();
                    State.isAutoSwitch = false;
                    if (State.cache.results.length > 0) {
                        showP();
                        renderSrc();
                    }
                    return;
                }

                const epNum = parseInt(State.curEp, 10);
                let nextFound = false;

                for (const r of State.cache.results) {
                    if (State.failedSources.has(r.name) || !r.data?.vod_play_url) continue;
                    const eps = r.data.vod_play_url.split('$$$').pop().split('#');

                    let targetEp = null;
                    if (!isNaN(epNum)) {
                        targetEp = eps.find(ep => {
                            const [nm] = ep.split('$');
                            return matchEpisodeEnhanced(nm, String(epNum));
                        });
                    } else {
                        targetEp = eps[0] || null;
                    }

                    if (targetEp) {
                        const [nm, u] = targetEp.split('$');
                        State.failed.clear();
                        State.failed.add(u); 
                        State.activeName = r.name;
                        nextFound = true;
                        UI.epList(r, true, State.curEp, false);
                        break;
                    }
                }

                if (!nextFound) {
                    UI.toast('其他解析源均无此集，无法自动切换');
                    State.isAutoSwitch = false;
                    if (State.cache.results.length > State.failedSources.size) {
                        showP();
                        renderSrc();
                    }
                }
            } catch (e) {}
        },

        _switchToNextAvailableSource(currentSourceName) {
            if (!State.cache.results.length) {
                UI.toast('没有可用的解析源');
                return;
            }

            State.failedSources.add(currentSourceName);
            const epNum = parseInt(State.curEp, 10);

            if (isNaN(epNum)) {
                UI.toast('无法识别当前集数，请手动选择集数');
                return;
            }

            const nextSource = State.cache.results.find(r => {
                if (State.failedSources.has(r.name) || !r.data?.vod_play_url) return false;
                const eps = r.data.vod_play_url.split('$$$').pop().split('#');
                return eps.some(ep => {
                    const [nm, u] = ep.split('$');
                    return matchEpisodeEnhanced(nm, String(epNum)) && !State.failed.has(u);
                });
            });

            if (nextSource) {
                UI.toast(`正在切换至线路: ${nextSource.name}`);
                State.activeName = nextSource.name;
                State.isAutoSwitch = true;

                setTimeout(() => {
                    if (!State.closed) {
                        UI.epList(nextSource, true, State.curEp, false);
                    }
                }, 300);
            } else {
                UI.toast('其他解析源均无此集，无法自动切换');
            }
        },

        async _html(url, generation = 0) {
            const cleanUrl = url.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const [coreCode, uiCode, cssCode] = await Promise.all([LibCache.getCore(), LibCache.getUi(), LibCache.getCss()]);
            const inlineLib = code => '<script>' + code.replace(/<\/script>/gi, '<\\/script>') + '<\/script>';
            const coreScript = coreCode ? inlineLib(coreCode) : '<script src="' + LibCache._DEFS.core.urls[0] + '"><\/script>';
            const uiScript = uiCode ? inlineLib(uiCode) : '<script src="' + LibCache._DEFS.ui.urls[0] + '"><\/script>';
            const cssStyle = cssCode ? '<style>' + cssCode + '</style>' : '<link rel="stylesheet" href="' + LibCache._DEFS.css.urls[0] + '">';
            const iconCss = '<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/material-icons@1.13.12/iconfont/round.css">' +
                '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/round.css">' +
                '<link rel="stylesheet" href="https://unpkg.com/material-icons@1.13.12/iconfont/round.css">';
            const isMobile = _UA_MOBILE;
            
            return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="referrer" content="no-referrer">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>VIP Play</title>
    <style>
        * { -webkit-tap-highlight-color: transparent; }
        html, body { width: 100%; height: 100%; margin: 0; padding: 0; background: #000; overflow: hidden; touch-action: manipulation; }
        #shaka-player-container { width: 100%!important; height: 100%!important; }
        #shaka-player-container video { width: 100%!important; height: 100%!important; object-fit: contain; background: #000; }
        .shaka-video-container.src-switching .shaka-spinner { animation: srcPulse .6s ease; }
        .shaka-video-container .shaka-spinner { padding: 26px; }
        .shaka-video-container .shaka-spinner-path { stroke: #e8c468; }
        .shaka-controls-button-panel .vip-text-btn { width: auto; min-width: 40px; padding: 0 6px; font-size: 14px; font-weight: 500; }
        @media (max-width: 768px) {
            .shaka-video-container .shaka-spinner { padding: 18px; }
        }
        @keyframes srcPulse { 0% { transform: scale(1); opacity: 1; } 40% { transform: scale(.7); opacity: .45; } 100% { transform: scale(1); opacity: 1; } }
    </style>
    ${cssStyle}
    ${iconCss}
    <script>
        (function() {
            window.open = function() { return null; };
            window.alert = function() {};
            window.confirm = function() { return false; };
            window.prompt = function() { return null; };
            try {
                var _origHref = Object.getOwnPropertyDescriptor(window.location.__proto__, 'href');
                var _allowNav = false;
                if (_origHref && _origHref.configurable !== false) {
                    Object.defineProperty(window.location, 'href', {
                        configurable: true,
                        set: function(v) {
                            if (_allowNav) _origHref.set.call(window.location, v);
                        },
                        get: function() { return _origHref.get.call(window.location); }
                    });
                }
            } catch(e) {}
            document.addEventListener('click', function(e) {
                var target = e.target;
                while (target && target !== document) {
                    if (target.tagName === 'A' && target.target === '_blank') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    target = target.parentElement;
                }
            }, true);
            var _adRemoveCount = 0;
            function removeAds() {
                _adRemoveCount++;
                if (_adRemoveCount > 3) return;
                var selectors = ['[class*="ad-"]', '[id*="ad-"]', '[class*="banner"]', '[class*="popup"]', 'iframe:not([src*="shaka"])'];
                var app = document.getElementById('shaka-player-container');
                selectors.forEach(function(sel) {
                    try {
                        document.querySelectorAll(sel).forEach(function(el) {
                            if (app && app.contains(el)) return;
                            el.remove();
                        });
                    } catch(e) {}
                });
            }
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() { removeAds(); setTimeout(removeAds, 1500); setTimeout(removeAds, 3000); });
            } else {
                removeAds(); setTimeout(removeAds, 1500); setTimeout(removeAds, 3000);
            }
        })();
    </script>
    ${coreScript}
    ${uiScript}
</head>
<body>
    <div id="shaka-player-container"></div>
    <script>
        var notifiedAlive = false;
        var _playGen = ${generation};
        var _isMobile = ${isMobile};
        var _playSuccessSent = 0;
        var player = null;
        var ui = null;
        var controls = null;
        var video = null;
        var container = null;
        var bootSeq = 0;
        var shakaRetryCount = 0;
        var nativeMode = false;
        var errorPosted = false;
        var mobileTapBound = false;
        var touchUnmute = null;
        var srcFlashTimer = null;
        var hasPlayedOnce = false;
        var stallArmTimer = null;
        var holdActive = false;
        var holdUntil = 0;
        var holdDeadline = 0;
        var stallCount = 0;
        var rateGuardOwns = false;
        var rateGuardBanned = false;
        function notifyAlive() {
            if (!notifiedAlive) {
                notifiedAlive = true;
                parent.postMessage({ type: '${CONFIG.MESSAGES.STREAM_ALIVE}', _generation: _playGen }, '*');
            }
        }
        function postError() {
            if (errorPosted) return;
            errorPosted = true;
            parent.postMessage({ type: '${CONFIG.MESSAGES.PLAY_ERROR}', _generation: _playGen }, '*');
        }

        if (typeof shaka === 'undefined' || typeof shaka.Player === 'undefined' || typeof shaka.ui === 'undefined') {
            parent.postMessage({ type: '${CONFIG.MESSAGES.LIB_CORRUPT}', _generation: _playGen }, '*');
            throw new Error('Player component missing or corrupted');
        }

        var _RATE_STEPS = [1, 1.25, 1.5, 2, 0.5, 0.75];
        var _customRegistered = false;
        function registerCustomElements() {
            if (_customRegistered) return true;
            if (typeof shaka.ui.Controls === 'undefined' || typeof shaka.ui.Controls.registerElement !== 'function' ||
                typeof shaka.ui.Element === 'undefined') return false;
            _customRegistered = true;

            class VipRateButton extends shaka.ui.Element {
                constructor(parent, controls) {
                    super(parent, controls);
                    this.button = document.createElement('button');
                    this.button.classList.add('vip-text-btn');
                    this.button.setAttribute('aria-label', '播放速度');
                    this.button.textContent = '1x';
                    parent.appendChild(this.button);
                    this.button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        var rates = _RATE_STEPS;
                        var idx = rates.indexOf(this.video.playbackRate);
                        this.video.playbackRate = rates[(idx + 1) % rates.length];
                    }.bind(this));
                    this.eventManager.listen(this.video, 'ratechange', function() {
                        var r = this.video.playbackRate;
                        this.button.textContent = (r === 1 ? '1x' : r + 'x');
                    }.bind(this));
                }
            }

            class VipQualityButton extends shaka.ui.Element {
                constructor(parent, controls) {
                    super(parent, controls);
                    this.button = document.createElement('button');
                    this.button.classList.add('vip-text-btn');
                    this.button.setAttribute('aria-label', '画质');
                    this.button.textContent = '自动';
                    parent.appendChild(this.button);
                    this.button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        this.cycle();
                    }.bind(this));
                    this.eventManager.listen(this.player, 'trackschanged', function() { this.refresh(); }.bind(this));
                    this.eventManager.listen(this.player, 'variantchanged', function() { this.refresh(); }.bind(this));
                    this.refresh();
                }
                levels() {
                    var seen = {}, out = [];
                    this.player.getVariantTracks().forEach(function(t) {
                        if (!t.height || seen[t.height]) return;
                        seen[t.height] = true;
                        out.push({ height: t.height, bw: t.bandwidth || 0, track: t });
                    });
                    out.sort(function(a, b) { return b.height - a.height || b.bw - a.bw; });
                    return out;
                }
                cycle() {
                    var lv = this.levels();
                    if (!lv.length) return;
                    if (this.player.getConfiguration().abr.enabled) {
                        this.player.configure({ abr: { enabled: false } });
                        this.player.selectVariantTrack(lv[0].track, true);
                    } else {
                        var cur = null;
                        this.player.getVariantTracks().forEach(function(t) { if (t.active) cur = t; });
                        var idx = -1;
                        for (var i = 0; i < lv.length; i++) {
                            if (cur && lv[i].height === cur.height) { idx = i; break; }
                        }
                        if (idx === -1 || idx + 1 >= lv.length) {
                            this.player.configure({ abr: { enabled: true } });
                        } else {
                            this.player.selectVariantTrack(lv[idx + 1].track, true);
                        }
                    }
                    this.refresh();
                }
                refresh() {
                    try {
                        this.button.classList.remove('shaka-hidden');
                        var lv = this.levels();
                        if (!lv.length || this.player.getConfiguration().abr.enabled) { this.button.textContent = '自动'; return; }
                        var cur = null;
                        this.player.getVariantTracks().forEach(function(t) { if (t.active) cur = t; });
                        this.button.textContent = cur ? (cur.height + 'P') : '自动';
                    } catch (e) {}
                }
            }

            shaka.ui.Controls.registerElement('vip_rate', { create: function(p, c) { return new VipRateButton(p, c); } });
            shaka.ui.Controls.registerElement('vip_quality', { create: function(p, c) { return new VipQualityButton(p, c); } });
            return true;
        }
        var _hasCustomButtons = registerCustomElements();

        function guessMime(u) {
            u = (u || '').toLowerCase();
            if (/\.m3u8/.test(u)) return 'application/x-mpegurl';
            if (/\.mpd/.test(u)) return 'application/dash+xml';
            if (/\.ism/.test(u)) return 'application/vnd.ms-sstr+xml';
            if (/\.mp4|\.m4v/.test(u)) return 'video/mp4';
            if (/\.webm/.test(u)) return 'video/webm';
            if (/\.mp3/.test(u)) return 'audio/mpeg';
            if (/\.m4a|\.aac/.test(u)) return 'audio/mp4';
            return '';
        }

        function makeVideoEl() {
            var v = document.createElement('video');
            v.autoplay = true;
            v.preload = 'auto';
            v.setAttribute('playsinline', '');
            v.setAttribute('webkit-playsinline', '');
            v.setAttribute('x5-video-player-type', 'h5');
            v.setAttribute('x5-video-player-fullscreen', 'true');
            v.setAttribute('x5-orientation', 'landscape');
            v.setAttribute('webkit-airplay', 'allow');
            v.setAttribute('x-webkit-airplay', 'allow');
            return v;
        }

        function teardown() {
            if (ui) { try { if (ui.destroy) ui.destroy(); } catch (e) {} ui = null; }
            if (controls) { try { controls.destroy(); } catch (e) {} controls = null; }
            if (player) { try { player.destroy(); } catch (e) {} player = null; }
            video = null;
            nativeMode = false;
            if (container) container.innerHTML = '';
        }

        function tryAutoplay(seq) {
            var tries = 0;
            var attempt = function() {
                if (seq !== bootSeq || !video) return;
                video.muted = false;
                var p = video.play();
                if (p === undefined || !p.catch) return;
                p.catch(function(err) {
                    if (seq !== bootSeq || !video) return;
                    var name = err && err.name;
                    // 只有浏览器明确禁止“带声自动播放”才静音；未就绪/被中断先重试，避免解析成功却初始静音
                    if (name === 'NotAllowedError' || name === 'SecurityError') {
                        video.muted = true;
                        var p2 = video.play();
                        if (p2 !== undefined && p2.catch) p2.catch(function() {});
                        return;
                    }
                    if (tries++ < 3) setTimeout(attempt, 400);
                });
            };
            attempt();
        }

        function attachVideoEvents(seq) {
            video.addEventListener('playing', function() {
                hasPlayedOnce = true;
                cancelStallArm();
                holdActive = false; holdUntil = 0; holdDeadline = 0;
                notifyAlive();
                if (_playSuccessSent < 3) { _playSuccessSent++; parent.postMessage({ type: '${CONFIG.MESSAGES.PLAY_SUCCESS}', _generation: _playGen }, '*'); }
            });

            video.addEventListener('seeking', function() {
                cancelStallArm();
                holdActive = false; holdUntil = 0; holdDeadline = 0;
            });

            video.addEventListener('waiting', function() {
                // 起播阶段不干预(秒开优先)；先观望 800ms，瞬时抖动不触发卡顿水位
                if (!hasPlayedOnce || !video || video.seeking) return;
                if (holdActive || stallArmTimer) return;
                stallArmTimer = setTimeout(engageStallHold, 800);
            });

            video.addEventListener('timeupdate', function() {
                if (_playSuccessSent < 3 && video && video.currentTime > 0.1) {
                    _playSuccessSent++;
                    notifyAlive();
                    parent.postMessage({ type: '${CONFIG.MESSAGES.PLAY_SUCCESS}', _generation: _playGen }, '*');
                }
            });

            video.addEventListener('ended', function() {
                parent.postMessage({ type: '${CONFIG.MESSAGES.VIDEO_ENDED}', _generation: _playGen }, '*');
            });

            video.addEventListener('error', function() {
                if (nativeMode && seq === bootSeq) postError();
            });
        }

        function playNative(url, seq) {
            return new Promise(function(resolve, reject) {
                if (seq !== bootSeq || !video) return reject(new Error('stale'));
                var proceed = function() {
                    if (seq !== bootSeq || !video) return reject(new Error('stale'));
                    nativeMode = true;
                    video.src = url;
                    var cleanup = function() {
                        video.removeEventListener('error', onError);
                        video.removeEventListener('loadedmetadata', onOk);
                    };
                    var onError = function() { cleanup(); reject(new Error('native_error')); };
                    var onOk = function() { cleanup(); resolve(); };
                    video.addEventListener('error', onError);
                    video.addEventListener('loadedmetadata', onOk);
                    tryAutoplay(seq);
                };
                if (player) {
                    try {
                        var dp = player.detach();
                        if (dp && dp.then) { dp.then(proceed, proceed); return; }
                    } catch (e) {}
                }
                proceed();
            });
        }

        function onShakaError(err) {
            var e = (err && err.detail) ? err.detail : err;
            if (!e || nativeMode) return;
            try {
                var Cat = shaka.util.Error.Category;
                if (shakaRetryCount < 2 && (e.category === Cat.NETWORK || e.category === Cat.MEDIA)) {
                    shakaRetryCount++;
                    player.retryStreaming();
                    return;
                }
            } catch (x) {}
            postError();
        }

        function bufferedAhead() {
            if (!video) return 0;
            try {
                var b = video.buffered;
                for (var i = 0; i < b.length; i++) {
                    if (b.start(i) <= video.currentTime && video.currentTime <= b.end(i)) {
                        return b.end(i) - video.currentTime;
                    }
                }
            } catch (e) {}
            return 0;
        }

        function cancelStallArm() {
            if (stallArmTimer) { clearTimeout(stallArmTimer); stallArmTimer = null; }
        }

        // 卡顿后按腾讯三级水位规则恢复：首次攒 4s，之后翻倍 8s，封顶 10s（原规则 0.5s/1s→2s→4s→5s，按 5-10s 分段粒度放大）
        function engageStallHold() {
            stallArmTimer = null;
            if (!hasPlayedOnce || !video || video.seeking || video.ended || video.paused) return;
            stallCount++;
            holdUntil = Math.min(10, 4 * Math.pow(2, stallCount - 1));
            holdDeadline = Date.now() + 15000;
            holdActive = true;
            try { video.pause(); } catch (e) {}
        }

        function releaseStallHold() {
            if (!holdActive) return;
            holdActive = false;
            holdUntil = 0;
            holdDeadline = 0;
            if (video && video.paused && !video.ended) {
                var p = video.play();
                if (p && p.catch) p.catch(function(err) {
                    if (err && err.name === 'NotAllowedError' && video) {
                        video.muted = true;
                        var p2 = video.play();
                        if (p2 && p2.catch) p2.catch(function() {});
                    }
                });
            }
        }

        function bufferRulesTick() {
            if (holdActive) {
                if (!video || video.seeking || bufferedAhead() >= holdUntil || Date.now() >= holdDeadline) {
                    releaseStallHold();
                }
                return;
            }
            // 腾讯倍速规则：缓冲偏低降 0.9 倍给缓冲让路，回到 20s 以上恢复 1 倍；用户自选倍速不干预
            if (!video || video.paused || video.ended) return;
            var cur = video.playbackRate;
            if (rateGuardOwns) {
                if (Math.abs(cur - 0.9) > 0.01) { rateGuardOwns = false; rateGuardBanned = true; return; }
                if (bufferedAhead() >= 20) { video.playbackRate = 1; rateGuardOwns = false; }
                return;
            }
            if (rateGuardBanned) return;
            if (Math.abs(cur - 1) > 0.01) { rateGuardBanned = true; return; }
            if (bufferedAhead() < 8) { video.playbackRate = 0.9; rateGuardOwns = true; }
        }

        function bootPlayer(url) {
            notifiedAlive = false;
            _playSuccessSent = 0;
            shakaRetryCount = 0;
            errorPosted = false;
            hasPlayedOnce = false;
            cancelStallArm();
            holdActive = false; holdUntil = 0; holdDeadline = 0; stallCount = 0;
            rateGuardOwns = false; rateGuardBanned = false;
            var seq = ++bootSeq;

            teardown();

            container = document.getElementById('shaka-player-container');
            video = makeVideoEl();
            attachVideoEvents(seq);
            container.appendChild(video);

            player = new shaka.Player(video);
            player.addEventListener('error', onShakaError);
            try {
                player.configure({
                    streaming: {
                        bufferBehind: 120,
                        bufferingGoal: 300,
                        rebufferingGoal: 2,
                        segmentPrefetchLimit: 6,
                        useNativeHlsOnSafari: true,
                        retryParameters: {
                            maxAttempts: 5,
                            baseDelay: 500,
                            backoffFactor: 2,
                            timeout: 20000
                        }
                    },
                    manifest: {
                        retryParameters: {
                            maxAttempts: 4,
                            baseDelay: 500,
                            backoffFactor: 2,
                            timeout: 10000
                        },
                        hls: { defaultAudioCodec: 'mp4a.40.2' }
                    },
                    abr: { defaultBandwidthEstimate: 1000000, switchInterval: 4 }
                });
            } catch (e) {}

            var desktopPanel = ['play_pause', 'mute', 'volume', 'time_and_duration', 'spacer'];
            var mobilePanel = ['play_pause', 'mute', 'time_and_duration', 'spacer'];
            if (_hasCustomButtons) {
                desktopPanel.push('vip_rate', 'vip_quality');
                mobilePanel.push('vip_rate', 'vip_quality');
            }
            desktopPanel.push('picture_in_picture', 'fullscreen');
            mobilePanel.push('fullscreen');
            var uiConfig = {
                addBigPlayButton: false,
                addSeekBar: true,
                preferDocumentPictureInPicture: false,
                fadeDelay: _isMobile ? 5 : 0,
                singleClickForPlayAndPause: !_isMobile,
                controlPanelElements: _isMobile ? mobilePanel : desktopPanel,
                overflowMenuButtons: []
            };
            try {
                ui = new shaka.ui.Overlay(player, container, video);
                controls = ui.getControls();
                try { if (ui.configure) ui.configure(uiConfig); } catch (e) {}
                try {
                    var loc = controls.getLocalization ? controls.getLocalization() : null;
                    if (loc && loc.changeLocale) loc.changeLocale(['zh-CN', 'zh']);
                } catch (e) {}
            } catch (e) {
                ui = null;
                controls = null;
            }

            if (_isMobile && !mobileTapBound) {
                mobileTapBound = true;
                var lastTapTime = 0;
                var suppressTapClick = false;
                container.addEventListener('touchstart', function(e) {
                    if (e.target.closest && e.target.closest('.shaka-bottom-controls, .shaka-overflow-menu, .shaka-top-controls')) return;
                    e.stopPropagation();
                    e.preventDefault();
                    var now = Date.now();
                    if (now - lastTapTime < 300) {
                        lastTapTime = 0;
                        if (controls && controls.toggleFullScreen) {
                            try { controls.toggleFullScreen(); } catch (err) {}
                        } else {
                            try {
                                if (document.fullscreenElement) document.exitFullscreen();
                                else if (container.requestFullscreen) container.requestFullscreen();
                                else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
                            } catch (err) {}
                        }
                        return;
                    }
                    lastTapTime = now;
                    var cc = container.querySelector('.shaka-controls-container');
                    if (!cc) return;
                    if (cc.getAttribute('shown') != null) {
                        cc.removeAttribute('shown');
                        cc.style.opacity = '0';
                        cc.style.pointerEvents = 'none';
                    } else {
                        cc.setAttribute('shown', 'true');
                        cc.style.opacity = '1';
                        cc.style.pointerEvents = '';
                    }
                }, true);
                container.addEventListener('touchend', function(e) {
                    if (e.target.closest && e.target.closest('.shaka-bottom-controls, .shaka-overflow-menu, .shaka-top-controls')) return;
                    e.stopPropagation();
                }, true);
                container.addEventListener('click', function(e) {
                    if (suppressTapClick) { suppressTapClick = false; e.stopPropagation(); }
                }, true);
            }

            var mime = guessMime(url);
            var isManifest = mime === 'application/x-mpegurl' || mime === 'application/dash+xml' || mime === 'application/vnd.ms-sstr+xml';

            if (isManifest) {
                player.load(url, undefined, mime).then(function() {
                    if (seq === bootSeq) tryAutoplay(seq);
                }).catch(function() {
                    if (seq !== bootSeq) return;
                    playNative(url, seq).catch(function() {
                        if (seq === bootSeq) postError();
                    });
                });
            } else {
                playNative(url, seq).catch(function() {
                    if (seq !== bootSeq) return;
                    if (!player || !player.attach) { postError(); return; }
                    try {
                        player.attach(video).then(function() {
                            if (seq !== bootSeq) throw new Error('stale');
                            return player.load(url, undefined, mime || undefined);
                        }).then(function() {
                            if (seq === bootSeq) tryAutoplay(seq);
                        }).catch(function() {
                            if (seq === bootSeq) postError();
                        });
                    } catch (err) {
                        postError();
                    }
                });
            }

            if (touchUnmute) {
                document.removeEventListener('touchstart', touchUnmute);
                document.removeEventListener('click', touchUnmute);
            }
            touchUnmute = function() {
                if (video && video.muted) video.muted = false;
            };
            document.addEventListener('touchstart', touchUnmute, { once: true });
            document.addEventListener('click', touchUnmute, { once: true });
        }

        bootPlayer('${cleanUrl}');
        setInterval(bufferRulesTick, 500);

        parent.postMessage({ type: '${CONFIG.MESSAGES.PLAYER_READY}', _generation: _playGen }, '*');

        window.addEventListener('message', function(e) {
            var m = e.data;
            if (!m || e.source !== parent) return;
            if (m.type === '${CONFIG.MESSAGES.HIDE_CONTROLS}') {
                var cc = document.querySelector('.shaka-controls-container');
                if (cc) {
                    cc.removeAttribute('shown');
                    cc.style.opacity = '0';
                    cc.style.pointerEvents = 'none';
                }
                return;
            }
            if (!m.type || m.type !== '${CONFIG.MESSAGES.SWITCH_URL}') return;
            _playGen = m._generation;
            var appEl = document.getElementById('shaka-player-container');
            if (appEl) {
                appEl.classList.remove('src-switching');
                void appEl.offsetWidth;
                appEl.classList.add('src-switching');
                clearTimeout(srcFlashTimer);
                srcFlashTimer = setTimeout(function() { appEl.classList.remove('src-switching'); }, 650);
            }
            bootPlayer(m.url);
            parent.postMessage({ type: '${CONFIG.MESSAGES.SWITCH_ACK}', _generation: _playGen }, '*');
        });
    <\/script>
</body>
</html>`;
        },

        onMsg(e) {
            if (!e.data?.type) return;
            const m = e.data;

            if (State.closed) return;

            const msgGeneration = m._generation;
            if (msgGeneration !== undefined && msgGeneration !== State.playGeneration) return;

            if (m.type === CONFIG.MESSAGES.PLAYER_READY) {
                State.iframeReady = true;
            } else if (m.type === CONFIG.MESSAGES.SWITCH_ACK) {
                State.switchAckGen = m._generation;
                clearTimer('switch_ack');
            } else if (m.type === CONFIG.MESSAGES.STREAM_ALIVE || m.type === CONFIG.MESSAGES.PLAY_SUCCESS) {
                hideSpinner();
                clearTimer('stuck_watchdog');
                clearTimer('pre_switch');
                clearTimer('ifr_load');
                State.stuckPending = false;
                UI.dismissToast();
            } else if (m.type === CONFIG.MESSAGES.VIDEO_ENDED) {
                if (!State.curUrl || !State.eps.length) return;
                const idx = State.eps.findIndex(x => x.url === State.curUrl);
                if (idx > -1 && idx < State.eps.length - 1) {
                    const nextEp = State.eps[idx + 1];
                    const nextNum = Utils.epNum(nextEp.name);
                    if (nextNum) State.curEp = nextNum;
                    UI.toast(`即将自动播放: ${nextEp.name}`);
                    setTimeout(() => this.start(nextEp.url), CONFIG.AUTOPLAY_NEXT_DELAY);
                } else {
                    UI.toast('全剧已播放完毕');
                }
            } else if (m.type === CONFIG.MESSAGES.LIB_CORRUPT) {
                State.iframeReady = false;
                if (!State.libReloadTried && State.lastPlayUrl) {
                    State.libReloadTried = true;
                    LibCache.purge();
                    UI.toast('播放器组件已失效，正在自动重新加载');
                    this._play(State.lastPlayUrl);
                } else {
                    this._switch();
                }
            } else if (m.type === CONFIG.MESSAGES.PLAY_ERROR) {
                this._switch();
            }
        },

        close() {
            clearAll();
            clearTimer('ifr_load');
            clearTimer('switch_ack');
            hideSpinner();
            UI.toggleLoading(false);
            State.dom.ifr.src = 'about:blank';
            State.dom.ifr.srcdoc = '';
            State.iframeReady = false;
            State.dom.ov.style.display = 'none';

            if (State.hiddenEl) {
                State.hiddenEl.style.opacity = '';
                State.hiddenEl.style.visibility = '';
                State.hiddenEl.style.pointerEvents = '';
                State.hiddenEl = null;
            }
            const isMobile = isMobileView();
            if (isMobile) {
                const bilibiliSelectors = ['.bpx-player-container', '#bilibili-player', '.bpx-player-control-wrap', '.bpx-player-state-wrap', '.bpx-player-loading-panel'];
                bilibiliSelectors.forEach(sel => {
                    const el = document.querySelector(sel);
                    if (el) {
                        el.style.opacity = '';
                        el.style.visibility = '';
                        el.style.pointerEvents = '';
                    }
                });
            }
            State.curUrl = '';
            State.playing = false;
            State.switchCount = 0;
            State.isAutoSwitch = false;
            State.failed.clear();
            State.failedSources.clear();
            State.stuckPending = false;
            State.closed = true;
            Utils.clearCaches();
        },

        _pauseOrig() {
            document.querySelectorAll('video, audio').forEach(m => {
                try {
                    if (!m.paused) m.pause();
                    m.muted = true;
                } catch (e) {}
            });
            State.hiddenEl = Utils.findPlayer();
            if (State.hiddenEl) {
                State.hiddenEl.style.opacity = '0';
                State.hiddenEl.style.visibility = 'hidden';
                State.hiddenEl.style.pointerEvents = 'none';
            }
            const isMobile = isMobileView();
            if (isMobile) {
                const bilibiliSelectors = ['.bpx-player-container', '#bilibili-player', '.bpx-player-control-wrap', '.bpx-player-state-wrap', '.bpx-player-loading-panel'];
                bilibiliSelectors.forEach(sel => {
                    const el = document.querySelector(sel);
                    if (el) {
                        el.style.opacity = '0';
                        el.style.visibility = 'hidden';
                        el.style.pointerEvents = 'none';
                    }
                });
            }
        },

        repos() {
            try {
                if (State.hiddenEl && State.dom.ov.style.display === 'block') {
                    const r = State.hiddenEl.getBoundingClientRect();
                    if (r.width > 50 && r.height > 50) {
                        State.dom.ov.style.cssText = `position:absolute;top:${r.top + scrollY}px;left:${r.left + scrollX}px;width:${r.width}px;height:${r.height}px;display:block;z-index:2147483646;`;
                    }
                }
            } catch (e) {}
        }
    };

    const Utils = {
        async pool(limit, array, iteratorFn) {
            const ret = [];
            const executing = new Set();
            for (const item of array) {
                const p = Promise.resolve().then(() => iteratorFn(item));
                ret.push(p);
                executing.add(p);
                const clean = () => executing.delete(p);
                p.then(clean).catch(clean);
                if (executing.size >= limit) {
                    await Promise.race(executing);
                }
            }
            return Promise.all(ret);
        },

        req(param, api, retries = 1) {
            return new Promise((resolve, reject) => {
                const start = Date.now();
                let origin = '';
                try { origin = new URL(api.url).origin; } catch (e) {}

                const attemptReq = count => {
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: `${api.url}?${param}`,
                        headers: {
                            'Referer': origin ? `${origin}/` : '',
                            'User-Agent': navigator.userAgent,
                            'Accept': 'application/json, text/plain, */*'
                        },
                        timeout: CONFIG.API_TIMEOUT,
                        onload: res => {
                            const latency = Date.now() - start;
                            if (res.status !== 200 || !res.responseText || res.responseText.trim().startsWith('<')) {
                                if (count < retries) return setTimeout(() => attemptReq(count + 1), 200);
                                return reject(new Error('resp_err'));
                            }
                            try {
                                const data = JSON.parse(res.responseText);
                                resolve({ data, latency });
                            } catch (e) {
                                if (count < retries) return setTimeout(() => attemptReq(count + 1), 200);
                                reject(new Error('json_err'));
                            }
                        },
                        onerror: () => {
                            if (count < retries) return setTimeout(() => attemptReq(count + 1), 200);
                            reject(new Error('net_err'));
                        },
                        ontimeout: () => {
                            if (count < retries) return setTimeout(() => attemptReq(count + 1), 200);
                            reject(new Error('timeout'));
                        }
                    });
                };
                attemptReq(0);
            });
        },

        _evalCache: new Map(),
        evalSrc(url) {
            if (!url) return Promise.resolve(null);
            if (!_MEDIA_EXT_RE.test(url)) {
                return Promise.resolve({ latency: 0, resolution: 0, bitrate: 0, score: 50, url });
            }
            if (this._evalCache.has(url)) return this._evalCache.get(url);

            const result = Promise.resolve({
                latency: 0,
                resolution: 0,
                bitrate: 0,
                score: 50,
                url
            });

            this._evalCache.set(url, result);
            return result;
        },

        title() {
            const hn = location.hostname;
            const href = location.href;
            const isMobileUrl = /m\./.test(hn) || /mobile|android|iphone|ipad/i.test(navigator.userAgent);

            if (hn.includes('qq.com') || hn.includes('v.qq.com') || hn.includes('m.v.qq.com')) {
                try {
                    const cleanQQTitle = (raw) => {
                        if (!raw) return null;
                        let cleaned = raw.replace(/【腾讯视频】\s*/g, '').trim();
                        cleaned = cleaned.replace(/\s*(免费)?在线观看.*$/, '').trim();
                        cleaned = cleaned.replace(/\s+\d+$/, '').trim();
                        cleaned = cleaned.replace(/第\d+[集话期]/g, '').trim();
                        cleaned = cleaned.split(/[-_（(]/)[0].trim();
                        return cleaned && cleaned.length > 1 ? cleaned : null;
                    };

                    const introTitle = document.querySelector('.intro-title[title], [data-mvp-identifier="intro"][title]');
                    if (introTitle) {
                        const result = cleanQQTitle(introTitle.getAttribute('title'));
                        if (result) return result;
                    }

                    const metaTitle = document.querySelector('meta[name="title"]');
                    if (metaTitle?.content) {
                        const result = cleanQQTitle(metaTitle.content);
                        if (result) return result;
                    }

                    const ogTitle = document.querySelector('meta[property="og:title"]');
                    if (ogTitle?.content) {
                        const result = cleanQQTitle(ogTitle.content);
                        if (result) return result;
                    }

                    if (document.title) {
                        const result = cleanQQTitle(document.title);
                        if (result) return result;
                    }

                    const qqSelectors = [
                        '.player-title', '.video-title',
                        '[class*="site-title"]', '[class*="mod_title"]',
                        '[class*="video-title"]', '[class*="videoTitle"]',
                        '[class*="cover-title"]', '[class*="episode-title"]',
                        '[class*="detail-title"]', '[class*="info-title"]',
                        'h1[class*="title"]', 'h2[class*="title"]',
                        'h1'
                    ];
                    for (const selector of qqSelectors) {
                        const el = document.querySelector(selector);
                        if (el) {
                            const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                            if (t && t.length > 1 && t.length < 100) {
                                const result = cleanQQTitle(t);
                                if (result) return result;
                            }
                        }
                    }

                    const introEl = document.querySelector('.intro-title');
                    if (introEl) {
                        const clone = introEl.cloneNode(true);
                        clone.querySelectorAll('[class*="intro-txt"], [class*="arrow"], button, a').forEach(el => el.remove());
                        const t = clone.textContent.trim().replace(/\s+/g, '');
                        if (t && t.length > 1) {
                            const result = cleanQQTitle(t);
                            if (result) return result;
                        }
                    }
                } catch (e) {}
            }

            if (hn.includes('iqiyi.com') || hn.includes('iq.com')) {
                const iqiyiMainTitle = document.querySelector('[data-ai-entity="视频名称、主标题"]');
                if (iqiyiMainTitle) {
                    const t = (iqiyiMainTitle.getAttribute('title') || iqiyiMainTitle.getAttribute('content') || iqiyiMainTitle.textContent || '').trim();
                    if (t) {
                        const cleanedTitle = t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                        if (cleanedTitle) return cleanedTitle;
                    }
                }

                const iqiyiSelectors = [
                    '[data-ai-entity*="主标题"]',
                    '[data-ai-entity*="视频名称"]',
                    '[class*="meta_title"]',
                    '[class*="meta_titleNotCloud"]',
                    '[class*="meta_titleNewLabel"]',
                    '.album-head-title',
                    '[class*="episodeTitle"]'
                ];

                for (const selector of iqiyiSelectors) {
                    const el = document.querySelector(selector);
                    if (el) {
                        const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                        if (t) {
                            const cleanedTitle = t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                            if (cleanedTitle) return cleanedTitle;
                        }
                    }
                }
            }

            if (hn.includes('le.com') || hn.includes('letv.com')) {
                try {
                    const leSelectors = [
                        '.j_jujiName',
                        '.juji_bar',
                        'h1.title',
                        '.detail-title',
                        '.video-title',
                        '[class*="movieName"]',
                        '[class*="videoName"]'
                    ];
                    for (const selector of leSelectors) {
                        const el = document.querySelector(selector);
                        if (el) {
                            const t = (el.getAttribute('title') || el.textContent || '').trim();
                            if (t) return t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                        }
                    }
                } catch (e) {}
            }

            if (isMobileUrl) {
                try {
                    const mobileTitleSelectors = [
                        '[class*="title"][class*="video"]', '[class*="title"][class*="episode"]',
                        '[class*="title"][class*="media"]', '[class*="title"][class*="show"]',
                        '[class*="title"][class*="album"]', '[class*="title"][class*="detail"]',
                        'h1[class*="title"]', 'h2[class*="title"]',
                        '[class*="video-title"]', '[class*="videoTitle"]',
                        '[class*="episode-title"]', '[class*="episodeTitle"]',
                        '.title', 'h1', 'h2'
                    ];
                    for (const selector of mobileTitleSelectors) {
                        const el = document.querySelector(selector);
                        if (el) {
                            const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                            if (t && t.length > 1 && t.length < 100) {
                                const cleanedTitle = t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                                if (cleanedTitle && cleanedTitle.length > 1) return cleanedTitle;
                            }
                        }
                    }
                    const ogTitle = document.querySelector('meta[property="og:title"]');
                    if (ogTitle?.content) {
                        const cleanedTitle = ogTitle.content.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                        if (cleanedTitle) return cleanedTitle;
                    }
                } catch (e) {}
            }

            const matchKey = Object.keys(CONFIG.SELECTORS.PRECISE_MAIN_TITLE).find(k => hn.includes(k));
            if (matchKey) {
                const selectors = CONFIG.SELECTORS.PRECISE_MAIN_TITLE[matchKey].split(',');
                for (let i = 0; i < selectors.length; i++) {
                    const el = document.querySelector(selectors[i].trim());
                    if (el) {
                        const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                        if (t) return t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                    }
                }
            }

            const aiEntitySelectors = [
                '[data-ai-entity*="主标题"]',
                '[data-ai-entity*="视频名称"]',
                '[data-ai-entity*="标题"]'
            ];
            for (const selector of aiEntitySelectors) {
                const el = document.querySelector(selector);
                if (el) {
                    const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                    if (t) return t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                }
            }

            const classSelectors = [
                '[class*="meta_title"]',
                '[class*="videoTitle"]',
                '[class*="video-title"]',
                '[class*="mediaTitle"]'
            ];
            for (const selector of classSelectors) {
                const el = document.querySelector(selector);
                if (el) {
                    const t = (el.getAttribute('title') || el.getAttribute('content') || el.textContent || '').trim();
                    if (t) return t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                }
            }

            const quickSelectors = CONFIG.SELECTORS.QUICK_TITLE;
            for (let i = 0; i < quickSelectors.length; i++) {
                const el = document.querySelector(quickSelectors[i]);
                if (el) {
                    const t = (el.getAttribute('content') || el.textContent || '').trim();
                    if (t) return t.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
                }
            }

            return document.title.split(_TITLE_SPLIT_RE)[0].replace(_EP_REMOVE_RE, '').trim();
        },

        async curEp() {
            try {
                const url = location.href;
                const search = location.search || '';
                const s4Match = url.match(/[?&]s4=(\d+)/i);
                if (s4Match) return s4Match[1];
                const tvnameMatch = url.match(/[?&]tvname=([^&]+)/i);
                if (tvnameMatch) {
                    const decoded = decodeURIComponent(tvnameMatch[1]);
                    const epMatch = decoded.match(/第(\d+)集/);
                    if (epMatch) return epMatch[1];
                }
                const p = new URLSearchParams(search);
                for (const key of ['s4', 'ep', 'episode', 'index']) {
                    if (p.has(key)) {
                        const e = p.get(key);
                        if (e && /^\d+$/.test(e)) return e;
                    }
                }
                if (p.has('tvname')) {
                    const e = this.epNum(decodeURIComponent(p.get('tvname')));
                    if (e) return e;
                }
            } catch (e) {}

            const hn = location.hostname;

            if (hn.includes('bilibili.com') || hn.includes('b23.tv')) {
                try {
                    const titleMatch = document.title.match(/第(\d+)集/);
                    if (titleMatch) return titleMatch[1];

                    const ogTitle = document.querySelector('meta[property="og:title"]');
                    if (ogTitle?.content) {
                        const ogMatch = ogTitle.content.match(/第(\d+)集/);
                        if (ogMatch) return ogMatch[1];
                    }

                    const keywords = document.querySelector('meta[name="keywords"]');
                    if (keywords?.content) {
                        const kwMatch = keywords.content.match(/第(\d+)集/);
                        if (kwMatch) return kwMatch[1];
                    }

                    const bilibiliSelectors = [
                        '[class*="EpisodeVirtualList_numberTitle"]',
                        '[class*="numberListItem_select"] [class*="numberListItem_title"]',
                        '.ep-list-item.on .ep-item-title',
                        '[class*="episode_list"] [class*="selected"]',
                        '[class*="episode"][class*="active"]',
                        '[class*="ep-item"][class*="on"]',
                        '[class*="list-item"][class*="active"]',
                        '[class*="num-item"][class*="active"]',
                        '[class*="part-item"][class*="active"]'
                    ];
                    for (const selector of bilibiliSelectors) {
                        try {
                            const el = document.querySelector(selector);
                            if (el) {
                                const text = el.getAttribute('title') || el.textContent;
                                const ep = this.epNum(text);
                                if (ep) return ep;
                            }
                        } catch (e) {}
                    }

                    const epButtons = document.querySelectorAll('[class*="ep-item"], [class*="list-item"], [class*="part-item"]');
                    for (const btn of epButtons) {
                        if (btn.classList.toString().match(/active|on|selected|current/)) {
                            const ep = this.epNum(btn.textContent);
                            if (ep) return ep;
                        }
                    }
                } catch (e) {}
            }

            if (hn.includes('iqiyi.com') || hn.includes('iq.com')) {
                try {
                    const iqiyiTitleMatch = document.title.match(/第(\d+)集/);
                    if (iqiyiTitleMatch) return iqiyiTitleMatch[1];

                    const metaTitle = document.querySelector('meta[property="og:title"], meta[itemprop="name"]');
                    if (metaTitle?.content) {
                        const metaMatch = metaTitle.content.match(/第(\d+)集/);
                        if (metaMatch) return metaMatch[1];
                    }

                    const kwMeta = document.querySelector('meta[name="keywords"]');
                    if (kwMeta?.content) {
                        const kwMatch = kwMeta.content.match(/第(\d+)集/);
                        if (kwMatch) return kwMatch[1];
                    }

                    const iqyText = document.querySelector('span#text[style*="IQYHT-Bold"]');
                    if (iqyText) {
                        const text = iqyText.textContent?.trim();
                        if (text && /^\d+$/.test(text)) return text;
                    }

                    const allTextSpans = document.querySelectorAll('span#text');
                    for (const el of allTextSpans) {
                        const style = el.getAttribute('style') || '';
                        if (style.includes('IQYHT-Bold')) {
                            const text = el.textContent?.trim();
                            if (text && /^\d+$/.test(text)) return text;
                        }
                    }

                    const iqiyiActiveSelectors = [
                        '[class*="episodes"] [class*="active"] span[id="text"]',
                        '.qy-episode-item[class*="is-active"] a',
                        '[class*="selected"] .qy-episode-num',
                        '.album-list .is-active .title-content',
                        '[class*="episode"][class*="active"]',
                        '[class*="episodes_playingItem"] [class*="episodes_order"]'
                    ];
                    for (const selector of iqiyiActiveSelectors) {
                        try {
                            const el = document.querySelector(selector);
                            if (el) {
                                const val = el.getAttribute('title') || el.textContent;
                                const ep = this.epNum(val);
                                if (ep) return ep;
                            }
                        } catch (e) {}
                    }
                } catch (e) {}
            }

            if (hn.includes('mgtv.com')) {
                try {
                    const mgtvActiveNumber = document.querySelector(
                        '[class*="number-selector__item--active"] [class*="number-selector__number"]'
                    );
                    if (mgtvActiveNumber?.textContent) {
                        const e = this.epNum(mgtvActiveNumber.textContent.trim());
                        if (e) return e;
                    }

                    const mgtvPlaying = document.querySelector(
                        '[class*="number-selector__playing"]'
                    );
                    if (mgtvPlaying) {
                        const parentItem = mgtvPlaying.closest('[class*="number-selector__item"]');
                        if (parentItem) {
                            const numberEl = parentItem.querySelector('[class*="number-selector__number"]');
                            if (numberEl?.textContent) {
                                const e = this.epNum(numberEl.textContent.trim());
                                if (e) return e;
                            }
                        }
                    }

                    const mgtvOn = document.querySelector('[class*="number-selector__number"][class*="on"], [class*="number-selector"] [class*="on"]');
                    if (mgtvOn?.textContent) {
                        const e = this.epNum(mgtvOn.textContent.trim());
                        if (e) return e;
                    }

                    const mgtvEps = document.querySelectorAll('[class*="mgtv-player-aside-number-selector__number"]');
                    for (const el of mgtvEps) {
                        const parent = el.closest('[class*="active"], [class*="select"]');
                        if (parent) {
                            const e = this.epNum(el.textContent.trim());
                            if (e) return e;
                        }
                    }
                } catch (e) {}
            }

            if (hn.includes('miguvideo.com') || hn.includes('cmvideo.cn')) {
                try {
                    const miguTitle = document.querySelector('[class*="episodeTitle"][class*="oneline"][class*="on"], [class*="episodeTitle"][class*="on"]');
                    if (miguTitle) {
                        const ta = miguTitle.getAttribute('title');
                        if (ta) {
                            const e = this.epNum(ta.trim());
                            if (e) return e;
                        }
                    }
                    const miguOnItems = document.querySelectorAll('[data-v-50548e8b].on');
                    for (const item of miguOnItems) {
                        const spans = item.querySelectorAll('span[data-v-50548e8b]');
                        for (const sp of spans) {
                            if (/^\d+$/.test(sp.textContent.trim())) {
                                return sp.textContent.trim();
                            }
                        }
                    }
                    const miguEps = document.querySelectorAll('[data-v-50548e8b]');
                    for (const el of miguEps) {
                        if (el.classList.contains('on')) {
                            if (/^\d+$/.test(el.textContent.trim())) {
                                return el.textContent.trim();
                            }
                            const innerSpans = el.querySelectorAll('span');
                            for (const sp of innerSpans) {
                                if (/^\d+$/.test(sp.textContent.trim())) {
                                    return sp.textContent.trim();
                                }
                            }
                        }
                    }
                } catch (e) {}
            }

            const matchKey = Object.keys(CONFIG.SELECTORS.PRECISE_TITLE).find(k => hn.includes(k));
            if (matchKey) {
                const selectors = CONFIG.SELECTORS.PRECISE_TITLE[matchKey].split(',').map(s => s.trim());
                for (let i = 0; i < selectors.length; i++) {
                    try {
                        const el = document.querySelector(selectors[i]);
                        if (el) {
                            const val = el.getAttribute('title') || el.textContent;
                            const ep = this.epNum(val);
                            if (ep) return ep;
                        }
                    } catch (e) {}
                }
            }
            return this.epNum(document.title);
        },

        epNum(str) {
            if (!str) return null;
            const t = str.trim();
            if (_NUM_ONLY_RE.test(t)) return t;

            let m = t.match(_EP_PATTERN_RE);
            if (m?.[1]) return m[1];
            m = t.match(_EP_PREFIX_RE);
            if (m?.[1]) return m[1];
            m = t.match(_EP_SUFFIX_RE);
            if (m?.[1]) return m[1];
            m = t.match(_EP_EP_RE);
            if (m?.[1]) return m[1];
            m = t.match(_EP_SEASON_RE);
            if (m?.[1]) return m[1];
            m = t.match(_EP_FALLBACK_RE);
            if (m?.[1]) return m[1];

            const allDigits = t.match(/\d+/g);
            return allDigits ? allDigits[allDigits.length - 1] : null;
        },

        findPlayer() {
            const list = CONFIG.SELECTORS.PLAYER_ELEMENTS;
            for (let i = 0; i < list.length; i++) {
                const el = document.querySelector(list[i]);
                if (el && el.offsetHeight > 100) return el;
            }
            return null;
        },

        _resolveCache: new Map(),
        async resolveUrl(url) {
            if (!url || _MEDIA_EXT_RE.test(url)) return url;
            if (this._resolveCache.has(url)) return this._resolveCache.get(url);

            const result = Promise.resolve(url);
            this._resolveCache.set(url, result);
            return result;
        },

        clearCaches() {
            this._evalCache.clear();
            this._resolveCache.clear();
        }
    };

    function boot() {
        const _dnsList = [
            '360zy.com', 'iqiyizyapi.com', 'api.apibdzy.com', 'www.lovedan.net', 'ddmf.net',
            'api.xinlangapi.com', 'caiji.moduapi.cc', 'caiji.dyttzyapi.com', 'lz.118318.xyz',
            'api.maoyanapi.top', 'slapibf.com', 'www.seacms.org', 'cj.lziapi.com', 'www.lzzy.tv',
            'suoniapi.com', 'caiji.kuaichezy.org', 'api.zuidapi.com', 'api.niuniuzy.me',
            'api.okzyw.net', 'cj.yayazy.net', 'api.wujinapi.me', 'api.guangsuapi.com',
            'subocaiji.com', 'jyzyapi.com', 'cj.ffzyapi.com', 'p2100.net', 'api.1080zyku.com',
            'fastly.jsdelivr.net', 'cdn.jsdelivr.net'
        ];

        DNS_OPT.boot(_dnsList);
        setTimeout(purgeSearchCache, 500);

        let _initRetries = 0;
        const _MAX_INIT_RETRIES = 6;
        const _INIT_RETRY_DELAY = 1000;

        const tryInit = () => {
            if (document.getElementById('vip-root')) {
                handleSpaChange();
                return;
            }

            UI.init();
            setupSpaMonitor();

            if (!onVideoPage()) {
                if (State.dom.c) State.dom.c.style.display = 'none';
            }
        };

        setTimeout(tryInit, 300);

        let _debounceTimer = null;
        const triggerSpa = () => {
            if (_debounceTimer) clearTimeout(_debounceTimer);
            _debounceTimer = setTimeout(() => {
                handleSpaChange();
            }, CONFIG.SPA_DEBOUNCE);
        };

        const handleSpaChange = () => {
            const isVideo = onVideoPage();

            if (!isVideo) {
                if (State.dom.c) State.dom.c.style.display = 'none';
                if (State.playing) Player.close();
                if (State.panelOpen) hideP();
                return;
            }

            if (State.dom.c) State.dom.c.style.display = 'block';

            if (location.href !== State.curURL) {
                State.curURL = location.href;
                State.firstAuto = false;
                State.cache = { key: null, results: [] };
                State.isPageLoad = true;
                Player.close();
                hideP();
            }

            if (!document.getElementById('vip-root') && isVideo) {
                UI.init();
            }
        };

        const setupSpaMonitor = () => {
            handleSpaChange();

            document.addEventListener('click', e => {
                if (State.playing) return;
                const t = e.target;
                if (State.dom.c && State.dom.c.contains(t)) return;
                if (State.dom.ov && State.dom.ov.contains(t)) return;
                if (t.closest && t.closest('#vip-root, #vip-overlay, #vip-panel')) return;
                const link = t.closest('a[href], [role="button"], [class*="episode"], [class*="number"]');
                if (link) triggerSpa();
            }, true);

            window.addEventListener('popstate', triggerSpa, { passive: true });
            window.addEventListener('hashchange', triggerSpa, { passive: true });

            const _origPush = history.pushState;
            const _origReplace = history.replaceState;
            history.pushState = function () {
                _origPush.apply(this, arguments);
                triggerSpa();
            };
            history.replaceState = function () {
                _origReplace.apply(this, arguments);
                triggerSpa();
            };

            window.addEventListener('error', e => {
                if (e.filename && !e.filename.includes('tampermonkey') && !e.filename.includes('vip')) return;
            }, true);

            const isMobile = isMobileView();
            if (!isMobile) {
                let _mutationTimer = null;
                let _lastHostname = '';
                let _lastIsVideoSite = false;
                const observer = new MutationObserver(() => {
                    if (State.dom.c && State.dom.c.style.display !== 'none') return;
                    if (_mutationTimer) return;
                    _mutationTimer = setTimeout(() => {
                        _mutationTimer = null;
                        if (State.dom.c && State.dom.c.style.display !== 'none') return;
                        const hn = location.hostname;
                        if (hn !== _lastHostname) {
                            _lastHostname = hn;
                            _lastIsVideoSite = VIDEO_DOMAINS.some(d => hn.includes(d));
                        }
                        if (!_lastIsVideoSite) return;

                        const hasPlayer = document.querySelector('video') ||
                            document.querySelector('#tenvideo_player, .txp_player_root, #player-container, #player, #bilibili-player, .bpx-player-container, #youku-player, .iqp-player, #mgtv-player-wrap');

                        if (hasPlayer && onVideoPage()) {
                            State.dom.c.style.display = 'block';
                        }
                    }, 800);
                });

                if (document.body) {
                    observer.observe(document.body, { childList: true, subtree: true });
                }
            }
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();

