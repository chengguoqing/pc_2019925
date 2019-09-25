import Mock from 'mockjs';
let url_eer = "http://www.duxinggj_xs.com/"


/**
 * @api {post} get_details 动态详情
 * @apiGroup duxing
 *
 * @apiParam {Number} id 动态的id  
 * 
 * @apiSuccess {String} touxiag 角色头像
 * @apiSuccess {String} name 姓名
 * @apiSuccess {String} du_max 一度
 * @apiSuccess {String} site 香港 | 建银国际
 * @apiSuccess {String} fabutime 发布时间
 * @apiSuccess {String} xiangmufang 项目方（或其股东）
 * @apiSuccess {String} tian_gbi 14天
* @apiSuccess {String} zhuti 主体
* @apiSuccess {String} leixing 类型
* @apiSuccess {String} shangshidi 上 市 地
* @apiSuccess {String} gupiaodaima 股票代码
* @apiSuccess {String} diqu 地       区
* @apiSuccess {String} hangye 行       业
* @apiSuccess {String} jiner 金       额
* @apiSuccess {String} leibie 类别

* @apiSuccess {String} nzchengben 融资成本
* @apiSuccess {String} qixian 期       限
* @apiSuccess {String} zhenghxin 增       信
* @apiSuccess {String} gaishu 概述
* @apiSuccess {array} guanjianci 关键词
* @apiSuccess {array} lunbotu 轮播图
* @apiSuccess {object} liuyan 留言

 */


exports.tets_s = Mock.mock(url_eer + 'get_details', function (options) {
    return Mock.mock({
        touxiag: "./static/img/touxiag.jpg",
        name: "丁秉臣",
        du_max: "一度",
        site: "香港 | 建银国际",
        fabutime: "12-15 13:59",
        xiangmufang: "项目方（或其股东）",
        tian_gbi: "14天",
        zhuti: "广东猛狮新能源科技股份有限公司",
        leixing: "上市公司",
        shangshidi: "沪深",
        gupiaodaima: "002684",
        diqu: "广东省-广州市",
        hangye: "电器行业",
        jiner: "不少于10000万元",
        leibie: "债权",
        nzchengben: "每年8%以上",
        qixian: "12-36个月",
        zhenghxin: "抵质押+担保+回购",
        gaishu: "    证监会批文已下，公告已出，定增项目，前端兜底8%，后端超额收益50％",
        guanjianci: ['定向增发', '分级基金', '夹层融资', '明股实债', '契约型基金'],
        lunbotu: ['./static/img/lunbo.jpg', './static/img/lunbo.jpg', './static/img/lunbo.jpg'],
        liuyan: [
            {
                user_icon: "./static/img/touxiag.jpg",
                user_name: "陈宇飞",
                fa_time: "14小时前",
                msg: "怎么合作？",
                huifu: [
                    {
                        user_icon: "./static/img/touxiag.jpg",
                        user_name: "丁秉臣",
                        fa_time: "14小时前",
                        msg: ":按投资的比例进行分红",
                    }
                ]
            }
        ]

    })
});
