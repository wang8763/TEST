
  
function  ddd(data){
    if(data !=null){
        // console.log(data.listcont)
        // console.log(data.zhulist)
        // console.log(data.zhecont)
        // console.log(data.sell_biao)
        // alert(data)
        shu=data.listcont
        zhulist=data.zhulist
        zhecont=data.zhecont
        huancont=data.huancont
        sell_biao=data.sell_biao
    }
}
var shu
var zhulist
var zhecont
var huancont
var sell_biao
$(function(){
    map()
    map_bar()
    map_liner()
    map_huan()
   
    sss()
    // setMap()
});
//三种产品今年销售占比
function map(){
    // // 基于准备好的dom，初始化echarts实例
  
var myChart = echarts.init(document.getElementById('pie'));

// // 指定图表的配置项和数据
var option1 = {
    title:{
        text:'三种产品今年销售占比',
        left:'center'
    },
    legend:{
        orient:"vertical", //布局朝向
        left:"left",    //图例组件离容器左侧的距离
        data:['水果','茶叶','稻米']
    },
    tooltip:{
        trigger:'item',  //触发类型，AXIS(柱状图，折线图),item(散点图，饼图)坐标轴触发，鼠标移动到图表上会显示数据
    },
    series:[{
        type:'pie',
        data:shu,
        
        width:'29%',
        height:"50%",
        avoidLabelOverlap: true,
    }],
};
//   myChart.showLoading();
    
 myChart.setOption(option1)
}
        

//柱图 三种产品12个月销售金额
function map_bar(){

    var myChart2=echarts.init(document.getElementById('bar'))
    var option2={
        title:{
            text: '三种产品12个月销售金额',
            left:'left',      
        },
        legend:{
            data:['水果','茶叶','稻米'],
            left:'right',
            orient:"vertical",
            top:'-5'
        },
        tooltip:{
                axisPointer:{
                    type:'shadow'
                },
                trigger:'axis',
            },
        
        feature:{
                magicType: {show: true, type: ['line', 'bar', 'stack']},
            },
        xAxis:[{
            data:["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"],
            // data:['茶叶','稻米','水果']
            name:"月份",
            nameLocation: "end",
            nameTextStyle:{
                align:'center',
                vertical:'bottom',
                fontSize: 10,
            }
        }],
        yAxis:{
            type:'value',
            // data:['茶叶','稻米','水果']
            // data:["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"]
            name:'元',
        },
        series:zhulist
            

        ,
    }
    myChart2.setOption(option2)
}     

//三种产品12个月市场价格
function map_liner(){
var myChart3=echarts.init(document.getElementById('line'));
var option3={
    title:{
        text:'三种产品12个月市场价格',
                left:'10%'
    },
    legend:{
          data:['茶叶','水果','稻米'],
          left:'right',
          orient:'vertical',
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'shadow'
        },
    },
    xAxis:{
            data:["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"],
            name:'月份',
            nameTextStyle:{
                fontSize:10,
                align:'center'
            }
        },
    yAxis:{
            type:"value",
            data:['茶叶','稻米','水果'],
            name:'斤/元',
            
        },
    series:zhecont ,   
}
    myChart3.setOption(option3)
}

function map_huan(){

// //  环形图 销售地区占比
    var myChart4=echarts.init(document.getElementById("huanxing"));
      var option4={
          title:{
              text:'销售地区占比',
              left:'center',
              
            },
            geo:{
                top:200,
            },
            tooltip:{
                trigger:"item"
            },
            legend:{
                data:['梅县','大埔','蕉岭','兴宁','丰顺'],
                top:"80%",
            },
          series:[{
              name:'销售地区占比',
              type:'pie',
              radius:['50%','30%'],
              avoideLadbelOverlap:'false',
              color:['#D1FBEF','#F9D858','#4CD0DD','#DF86F0','#F5A7C1'],
        
            
               label:{},
               labelLine:{
                   normal:{
                       show:false
                   }
               },
               data:
                     huancont
            }
       ]
    } ;
              myChart4.setOption(option4);
}
//销售滚动列表
function sss(){
    // console.log(sell_biao)
    var se='';
    for(i in sell_biao){
    //    console.log(sell_biao[i].dan)
       se += "<tr class=tr_two>"+"<td>"+sell_biao[i].dan+ "</td>"+
                "<td>"+sell_biao[i].chan+ "</td>"+
                "<td>"+sell_biao[i].zhong+ "</td>"+
                "<td>"+sell_biao[i].money+ "</td>"+
                "<td>"+sell_biao[i].time+ "</td>"+ "</tr>" 
    }
    $(".ta2").after(se);
    
}


// function scrollNews(){
//     // alert(2)
//     var $news=$('#tab');
//     var $lineHeight= $news.find('tr').eq(1).height();
//     $news.animate({'marginTop':-$lineHeight+ 'px'},1000,function(){$news.css({margin:0}).find('tr:first').append($news)});

//     var scrollTimer=null;
//     var delay=2000;
//     scrollTimer=setInterval(function(){
//         scrollNews();
//     },delay);
// }
//城市销售排行
var myChart5=echarts.init(document.getElementById('city'));
var option6={
    title:{
        text:'城市销售统计排行榜',
        left:'left',
    },
    tooltip:{
        trigger:'axis',//开启
        axisPointer:{
            type:'shadow', //为选中的图表添加阴影
        }
    },
    legend:{
        data:['水果','茶叶','稻米'], 
        left:'right',
        orient:'vertical',
      
    },
    grid:{},
    xAxis:{
        type:'value',
        data:["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"],
        name:'万斤',
        nameTextStyle:{
            // align:'left',
            fontSize:10,
            padding: [0, 10, 0, 0],
            align:'right',
        }
    },
    yAxis:{
        type:'category',
        data:["梅县","大埔","蕉岭","兴宁","丰顺","五华","梅江区"],
        // position:'right',
        axisLabel:{
            rotate:75,
        }
        
    },
    series:[
        {
            name:'水果',
            type:'bar',
            data:['3','5','2','2','3','9','7']
        },
        {
            name:'茶叶',
            type:'bar',
            data:['1','0.25','3','1.5','2.4','5','9']
        },
        {
            name:'稻米',
            type:'bar',
            data:['2','3','8','10','4','9','6']
        }

    ]
}
myChart5.setOption(option6);
// $(function(){
//     // alert(12)
//     $.ajax({
//         type:"GET",
//         url:"data.json",
//         dataType:'json',
//         // async:false,
//         success:function(sell_biao){
            
//             console.log(sellcont)
//             $.each(sell_biao,function(i,sell_biao){
//                 str += "<tr>"+"<td>"+sell_biao["dan"]+ "</td>"+
//                         "<td>"+sell_biao.chan+ "</td>"+
//                         "<td>"+sell_biao.zhong+ "</td>"+
//                         "<td>"+sell_biao.money+ "</td>"+
//                         "<td>"+sell_biao.time+ "</td>"+ "</tr>"
//                     })
//                     $(".trHead").after(str);
//         },
//         error:function(){
//             console.log('失败')
//         }
//     })
// })

var calldata
 function mmm(data){
     if(data!=null){

         calldata=data
     }
 }
 var mz='梅州';
//梅州地图
// var loadmz="map/MeiZhou.json";
$(function(){  //在DOM加载完成后就可以对DOM进行操作
   var Meichart=echarts.init(document.getElementById('mzmap'));
   echarts.registerMap(mz,calldata);
   var mzoption={
        title:{
            text:'梅州各县区销售数据',
            left:"right",
            // top:
        },
        tooltip:{
            trigger:'item',
            // formatter:'{b}<br/>{c} (个)',
        },
        toolbox:{
            show:true,
            orient:'vertical',
            left:"right",
            top:'center',
            feature:{
                dataView:{readOnly:false},
                restore:{},
                saveAsImage:{}
            }
        },
        geo:{
            show:true,
            map:mz,
            aspectScale:1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "#3559ad",
                    borderColor: "#fff",
                    borderWidth: 2
                },
                emphasis: {
                    areaColor: "green"
                }
            },
            zoom: 1.15
        },
        visualMap:{ //视觉映射组件，用于进行视觉编码，将数据映射到视觉元素
            min:0,
            // type:'map',
            max:1500,
            realtime:false, //拖拽时，是否实时更新，true为过程中更新，false为拖拽结束
            calculable:true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
            inRange:{
                color:['red','yellow','orangered']
            }
        },
        series:[
            {
                name:'水果 茶叶 稻米销售总额(万元)',
                type: 'map',//type必须声明为 map 说明该图标为echarts 中map类型
           	 		map: '梅州', //这里需要特别注意。如果是中国地图，map值为china，如果为各省市则为中文。这里用北京
           	 		aspectScale: 1, //长宽比. default: 0.75
           	 		zoom: 1.2,
           	 		//roam: true,
	                itemStyle:{ 
	                    normal:{label:{show:true}},
	                    emphasis:{label:{show:true}}
	                },//round（）:是给定数字的值四舍五入到最近的整数，属于静态方法
        			data: [
        				// {name:'水果', value: 1000},
        				// {name:'水果', value: 1800},
        				// {name:'水果', value: 1600},
        				// {name:'水果', value: 1700},
        				// {name:'水果', value: 1200},
        				// {name:'水果', value: 1100},
        				// {name:'水果', value: 1300},
        				// {name:'水果', value: 1400},
        				{name:'梅县区', value: 1200},
        				{name:'梅江区', value: 1800},
        				{name:'五华县', value: 1100},
        				{name:'兴宁市', value: 1300},
        				{name:'平远县', value: 900},
        				{name:'蕉岭县', value: 1600},
        				{name:'大埔县', value: 1000},
        				{name:'丰顺县', value: 1200},
        			]
            },
            // {
            //     name: '梅州各县',
            //     type: 'map',//type必须声明为 map 说明该图标为echarts 中map类型
           	//  		map: '梅州', //这里需要特别注意。如果是中国地图，map值为china，如果为各省市则为中文。这里用北京
           	//  		aspectScale: 1, //长宽比. default: 0.75
           	//  		zoom: 1.2,
           	//  		//roam: true,
	        //         itemStyle:{ 
	        //             normal:{label:{show:true}},
	        //             emphasis:{label:{show:true}}
	        //         },
        	// 		data: [
        	// 			{name:'茶叶', value: 1000},
        	// 			{name:'茶叶', value: 1800},
        	// 			{name:'茶叶', value: 1600},
        	// 			{name:'茶叶', value: 1700},
        	// 			{name:'茶叶', value: 1200},
        	// 			{name:'茶叶', value: 1100},
        	// 			{name:'茶叶', value: 1300},
        	// 			{name:'茶叶', value: 1400},
        	// 		]
            // },
            // {
            //     name: '梅州各县',
            //     type: 'map',//type必须声明为 map 说明该图标为echarts 中map类型
           	//  		map: '梅州', //这里需要特别注意。如果是中国地图，map值为china，如果为各省市则为中文。这里用北京
           	//  		aspectScale: 1, //长宽比. default: 0.75
           	//  		zoom: 1.2,
           	//  		//roam: true,
	        //         itemStyle:{ 
	        //             normal:{label:{show:true}},
	        //             emphasis:{label:{show:true}}
	        //         },
        	// 		data: [
        	// 			{name:'稻米', value: 1000},
        	// 			{name:'稻米', value: 1800},
        	// 			{name:'稻米', value: 1600},
        	// 			{name:'稻米', value: 1700},
        	// 			{name:'稻米', value: 1200},
        	// 			{name:'稻米', value: 1100},
        	// 			{name:'稻米', value: 1300},
        	// 			{name:'稻米', value: 1400},
        	// 		]
            // }
        ]
   }

   Meichart.setOption(mzoption);
})
      



//中国地图
var mapCharta=echarts.init(document.getElementById('chinamap'));
var $canvas=$('#chinamap').find('canvas');
$canvas.height(300);

var option={
    title:{text:'各城市销售',
    left:'center',
  
 },
   tooltip:{ //提示框组件
       trigger:'item', //数据项图形触发，主要在散点图，饼图  axis:坐标轴触发，主要在柱状图 折线图触发
   },
   legend:{  //图例，一般默认在左下边或左上
        orient:"vertical",
        x:'left',
        data:['水果','茶叶','稻米'],
   },
   dataRange:{ //值域的选择
        min:10,
        max:2000,
        x:'left',
        y:'50%',
        text:['高(万元)','低(万元)'],
        calculable:'false' //显示是否拖拽用的手柄（能拖拽调整选中范围）
   },
   grid:{
    left: "3%",
    right: "4%",
    bottom: "3%",
    width: "820px",
    height: "280px",
    containLabel: true
   },
   toolbox:{ //工具栏，内置导出图片，数据视图，动态类型切换，数据区域缩放，重置
        show:true,
        orient:'vertical', //默认水平布局
        x:'right',
        y:'',
        feature:{ //各工具配置项，可自定义工具
            mark:{show:true}, //这里是可以选择是否关闭工具栏里的数据视图
            dataView:{show:true,readOnly:false}, //数据视图工具，展现当前图标所用的数据，可动态更新，是否显示工具 是否不可编辑
            restore:{show:true},  //配置项还原 是否显示该工具
            saveAsImage:{show:true} //保存为图片 
        }
   },
    roamController:{ //缩放漫游组件
        show:true,
        x:'right',
        mapTypeControl:{ //必须，指定漫游组件可控地图类型
            'china':true,
        }
    },   
    geo:{
        show:true,
        map:'china',
        // aspectScale:1,
        // zoom:1.2,
    },
    series:[ //通用，驱动图标生成的数据内容数组，数组中每一项为一个系列的选项及数据，个别选项仅在部分图表类型中有效 
        {
           name:'水果',
        //    zoom:0.5,
        // left:'left',
           type:'map',
        roam:true,
           mapType:'china',
           itemStyle:{ //地图区域的多边形图形样式
               normal:{label:{show:true}}, //正常状态下    label：坐标轴指示器文本标签
               emphasis:{label:{show:true}}  //高亮状态下
           },
           data:[
            {name: '北京',value: Math.round(Math.random()*1000)},
            {name: '天津',value: Math.round(Math.random()*1000)},
            {name: '上海',value: Math.round(Math.random()*1000)},
            {name: '重庆',value: Math.round(Math.random()*1000)},
            {name: '河北',value: Math.round(Math.random()*1000)},
            {name: '河南',value: Math.round(Math.random()*1000)},
            {name: '云南',value: Math.round(Math.random()*1000)},
            {name: '辽宁',value: Math.round(Math.random()*1000)},
            {name: '黑龙江',value: Math.round(Math.random()*1000)},
            {name: '湖南',value: Math.round(Math.random()*1000)},
            {name: '安徽',value: Math.round(Math.random()*1000)},
            {name: '山东',value: Math.round(Math.random()*1000)},
            {name: '新疆',value: Math.round(Math.random()*1000)},
            {name: '江苏',value: Math.round(Math.random()*1000)},
            {name: '浙江',value: Math.round(Math.random()*1000)},
            {name: '江西',value: Math.round(Math.random()*1000)},
            {name: '湖北',value: Math.round(Math.random()*1000)},
            {name: '广西',value: Math.round(Math.random()*1000)},
            {name: '甘肃',value: Math.round(Math.random()*1000)},
            {name: '山西',value: Math.round(Math.random()*1000)},
            {name: '内蒙古',value: Math.round(Math.random()*1000)},
            {name: '陕西',value: Math.round(Math.random()*1000)},
            {name: '吉林',value: Math.round(Math.random()*1000)},
            {name: '福建',value: Math.round(Math.random()*1000)},
            {name: '贵州',value: Math.round(Math.random()*1000)},
            {name: '广东',value: Math.round(Math.random()*1000)},
            {name: '青海',value: Math.round(Math.random()*1000)},
            {name: '西藏',value: Math.round(Math.random()*1000)},
            {name: '四川',value: Math.round(Math.random()*1000)},
            {name: '宁夏',value: Math.round(Math.random()*1000)},
            {name: '海南',value: Math.round(Math.random()*1000)},
            {name: '台湾',value: Math.round(Math.random()*1000)},
            {name: '香港',value: Math.round(Math.random()*1000)},
            {name: '澳门',value: Math.round(Math.random()*1000)}
           ]
        },
        {
            name:'茶叶',
            type:'map',
            // roam:true,
            mapType:'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '重庆',value: Math.round(Math.random()*1000)},
                {name: '河北',value: Math.round(Math.random()*1000)},
                {name: '河南',value: Math.round(Math.random()*1000)},
                {name: '云南',value: Math.round(Math.random()*1000)},
                {name: '辽宁',value: Math.round(Math.random()*1000)},
                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                {name: '湖南',value: Math.round(Math.random()*1000)},
                {name: '安徽',value: Math.round(Math.random()*1000)},
                {name: '山东',value: Math.round(Math.random()*1000)},
                {name: '新疆',value: Math.round(Math.random()*1000)},
                {name: '江苏',value: Math.round(Math.random()*1000)},
                {name: '浙江',value: Math.round(Math.random()*1000)},
                {name: '江西',value: Math.round(Math.random()*1000)},
                {name: '湖北',value: Math.round(Math.random()*1000)},
                {name: '广西',value: Math.round(Math.random()*1000)},
                {name: '甘肃',value: Math.round(Math.random()*1000)},
                {name: '山西',value: Math.round(Math.random()*1000)},
                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                {name: '陕西',value: Math.round(Math.random()*1000)},
                {name: '吉林',value: Math.round(Math.random()*1000)},
                {name: '福建',value: Math.round(Math.random()*1000)},
                {name: '贵州',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '青海',value: Math.round(Math.random()*1000)},
                {name: '西藏',value: Math.round(Math.random()*1000)},
                {name: '四川',value: Math.round(Math.random()*1000)},
                {name: '宁夏',value: Math.round(Math.random()*1000)},
                {name: '海南',value: Math.round(Math.random()*1000)},
                {name: '台湾',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
        },
        {
            name:'稻米',
            type:'map',
            mapType:'china',
            // roam:true,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
            {name: '天津',value: Math.round(Math.random()*1000)},
            {name: '上海',value: Math.round(Math.random()*1000)},
            {name: '重庆',value: Math.round(Math.random()*1000)},
            {name: '河北',value: Math.round(Math.random()*1000)},
            {name: '河南',value: Math.round(Math.random()*1000)},
            {name: '云南',value: Math.round(Math.random()*1000)},
            {name: '辽宁',value: Math.round(Math.random()*1000)},
            {name: '黑龙江',value: Math.round(Math.random()*1000)},
            {name: '湖南',value: Math.round(Math.random()*1000)},
            {name: '安徽',value: Math.round(Math.random()*1000)},
            {name: '山东',value: Math.round(Math.random()*1000)},
            {name: '新疆',value: Math.round(Math.random()*1000)},
            {name: '江苏',value: Math.round(Math.random()*1000)},
            {name: '浙江',value: Math.round(Math.random()*1000)},
            {name: '江西',value: Math.round(Math.random()*1000)},
            {name: '湖北',value: Math.round(Math.random()*1000)},
            {name: '广西',value: Math.round(Math.random()*1000)},
            {name: '甘肃',value: Math.round(Math.random()*1000)},
            {name: '山西',value: Math.round(Math.random()*1000)},
            {name: '内蒙古',value: Math.round(Math.random()*1000)},
            {name: '陕西',value: Math.round(Math.random()*1000)},
            {name: '吉林',value: Math.round(Math.random()*1000)},
            {name: '福建',value: Math.round(Math.random()*1000)},
            {name: '贵州',value: Math.round(Math.random()*1000)},
            {name: '广东',value: Math.round(Math.random()*1000)},
            {name: '青海',value: Math.round(Math.random()*1000)},
            {name: '西藏',value: Math.round(Math.random()*1000)},
            {name: '四川',value: Math.round(Math.random()*1000)},
            {name: '宁夏',value: Math.round(Math.random()*1000)},
            {name: '海南',value: Math.round(Math.random()*1000)},
            {name: '台湾',value: Math.round(Math.random()*1000)},
            {name: '香港',value: Math.round(Math.random()*1000)},
            {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
        }
    ]

}

mapCharta.setOption(option);
//echarts 设置地图外边框以及多个geo实现缩放拖曳同步
// mapCharta.on('georoam', function(params) {
//     var option7 = mapCharta.getOption(); //获得option对象
//     if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
//         option7.geo[0].zoom = option7.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
//         option7.geo[0].center = option7.series[0].center; //下层的geo的中心位置随着上层geo一起改变
//     } else { //捕捉到拖曳时
//         option7.geo[0].center = option7.series[0].center; //下层的geo的中心位置随着上层geo一起改变
//     }
//     // optionmap.setOption(option); //设置option
// });
// optionmap.setOption(option7);