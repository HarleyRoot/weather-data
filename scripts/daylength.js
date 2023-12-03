var symptomName = last_month_day();

$(function () {


    init();
    $("#el-dialog").addClass("hide");
    $(".close").click(function (event) {
        $("#el-dialog").addClass("hide");
    });

    var date = new Date();
    var numble = date.getDate();
    var today = getFormatMonth(new Date());
    $("#date1").html(today);
    $("#date2").html(today);
    $("#date3").html(today);
    $("#date4").html(today);


    lay('.demo-input').each(function () {
        laydate.render({
            type: 'month',
            elem: this,
            trigger: 'click',
            theme: '#95d7fb',
            calendar: true,
            showBottom: true,
            done: function () {
                console.log($("#startDate").val())

            }
        })
    });

})

function init() {

    // 热力图
    const heatChart = echarts.init(document.getElementById('heatChart'));

    //数据
    const durationVal = [{'province': '上海', 'month': 1, 'duration': 622}, {'province': '上海', 'month': 2, 'duration': 664}, {'province': '上海', 'month': 3, 'duration': 719}, {'province': '上海', 'month': 4, 'duration': 776}, {'province': '上海', 'month': 5, 'duration': 824}, {'province': '上海', 'month': 6, 'duration': 848}, {'province': '上海', 'month': 7, 'duration': 837}, {'province': '上海', 'month': 8, 'duration': 796}, {'province': '上海', 'month': 9, 'duration': 741}, {'province': '上海', 'month': 10, 'duration': 685}, {'province': '上海', 'month': 11, 'duration': 635}, {'province': '云南', 'month': 1, 'duration': 646}, {'province': '云南', 'month': 2, 'duration': 679}, {'province': '云南', 'month': 3, 'duration': 720}, {'province': '云南', 'month': 4, 'duration': 764}, {'province': '云南', 'month': 5, 'duration': 801}, {'province': '云南', 'month': 6, 'duration': 820}, {'province': '云南', 'month': 7, 'duration': 811}, {'province': '云南', 'month': 8, 'duration': 779}, {'province': '云南', 'month': 9, 'duration': 738}, {'province': '云南', 'month': 10, 'duration': 694}, {'province': '云南', 'month': 11, 'duration': 656}, {'province': '内蒙古', 'month': 1, 'duration': 577}, {'province': '内蒙古', 'month': 2, 'duration': 638}, {'province': '内蒙古', 'month': 3, 'duration': 716}, {'province': '内蒙古', 'month': 4, 'duration': 798}, {'province': '内蒙古', 'month': 5, 'duration': 867}, {'province': '内蒙古', 'month': 6, 'duration': 903}, {'province': '内蒙古', 'month': 7, 'duration': 886}, {'province': '内蒙古', 'month': 8, 'duration': 826}, {'province': '内蒙古', 'month': 9, 'duration': 748}, {'province': '内蒙古', 'month': 10, 'duration': 667}, {'province': '内蒙古', 'month': 11, 'duration': 596}, {'province': '北京', 'month': 1, 'duration': 582}, {'province': '北京', 'month': 2, 'duration': 641}, {'province': '北京', 'month': 3, 'duration': 716}, {'province': '北京', 'month': 4, 'duration': 795}, {'province': '北京', 'month': 5, 'duration': 862}, {'province': '北京', 'month': 6, 'duration': 897}, {'province': '北京', 'month': 7, 'duration': 881}, {'province': '北京', 'month': 8, 'duration': 823}, {'province': '北京', 'month': 9, 'duration': 748}, {'province': '北京', 'month': 10, 'duration': 669}, {'province': '北京', 'month': 11, 'duration': 600}, {'province': '台湾', 'month': 1, 'duration': 651}, {'province': '台湾', 'month': 2, 'duration': 681}, {'province': '台湾', 'month': 3, 'duration': 721}, {'province': '台湾', 'month': 4, 'duration': 762}, {'province': '台湾', 'month': 5, 'duration': 796}, {'province': '台湾', 'month': 6, 'duration': 814}, {'province': '台湾', 'month': 7, 'duration': 806}, {'province': '台湾', 'month': 8, 'duration': 776}, {'province': '台湾', 'month': 9, 'duration': 737}, {'province': '台湾', 'month': 10, 'duration': 696}, {'province': '台湾', 'month': 11, 'duration': 660}, {'province': '吉林', 'month': 1, 'duration': 560}, {'province': '吉林', 'month': 2, 'duration': 628}, {'province': '吉林', 'month': 3, 'duration': 715}, {'province': '吉林', 'month': 4, 'duration': 806}, {'province': '吉林', 'month': 5, 'duration': 884}, {'province': '吉林', 'month': 6, 'duration': 924}, {'province': '吉林', 'month': 7, 'duration': 905}, {'province': '吉林', 'month': 8, 'duration': 838}, {'province': '吉林', 'month': 9, 'duration': 751}, {'province': '吉林', 'month': 10, 'duration': 661}, {'province': '吉林', 'month': 11, 'duration': 581}, {'province': '四川', 'month': 1, 'duration': 625}, {'province': '四川', 'month': 2, 'duration': 666}, {'province': '四川', 'month': 3, 'duration': 719}, {'province': '四川', 'month': 4, 'duration': 775}, {'province': '四川', 'month': 5, 'duration': 822}, {'province': '四川', 'month': 6, 'duration': 845}, {'province': '四川', 'month': 7, 'duration': 834}, {'province': '四川', 'month': 8, 'duration': 794}, {'province': '四川', 'month': 9, 'duration': 741}, {'province': '四川', 'month': 10, 'duration': 685}, {'province': '四川', 'month': 11, 'duration': 637}, {'province': '天津', 'month': 1, 'duration': 586}, {'province': '天津', 'month': 2, 'duration': 643}, {'province': '天津', 'month': 3, 'duration': 717}, {'province': '天津', 'month': 4, 'duration': 793}, {'province': '天津', 'month': 5, 'duration': 858}, {'province': '天津', 'month': 6, 'duration': 892}, {'province': '天津', 'month': 7, 'duration': 876}, {'province': '天津', 'month': 8, 'duration': 820}, {'province': '天津', 'month': 9, 'duration': 747}, {'province': '天津', 'month': 10, 'duration': 671}, {'province': '天津', 'month': 11, 'duration': 604}, {'province': '宁夏', 'month': 1, 'duration': 589}, {'province': '宁夏', 'month': 2, 'duration': 645}, {'province': '宁夏', 'month': 3, 'duration': 717}, {'province': '宁夏', 'month': 4, 'duration': 792}, {'province': '宁夏', 'month': 5, 'duration': 855}, {'province': '宁夏', 'month': 6, 'duration': 888}, {'province': '宁夏', 'month': 7, 'duration': 873}, {'province': '宁夏', 'month': 8, 'duration': 818}, {'province': '宁夏', 'month': 9, 'duration': 746}, {'province': '宁夏', 'month': 10, 'duration': 672}, {'province': '宁夏', 'month': 11, 'duration': 606}, {'province': '安徽', 'month': 1, 'duration': 620}, {'province': '安徽', 'month': 2, 'duration': 663}, {'province': '安徽', 'month': 3, 'duration': 719}, {'province': '安徽', 'month': 4, 'duration': 777}, {'province': '安徽', 'month': 5, 'duration': 826}, {'province': '安徽', 'month': 6, 'duration': 851}, {'province': '安徽', 'month': 7, 'duration': 840}, {'province': '安徽', 'month': 8, 'duration': 797}, {'province': '安徽', 'month': 9, 'duration': 742}, {'province': '安徽', 'month': 10, 'duration': 684}, {'province': '安徽', 'month': 11, 'duration': 633}, {'province': '山东', 'month': 1, 'duration': 598}, {'province': '山东', 'month': 2, 'duration': 650}, {'province': '山东', 'month': 3, 'duration': 717}, {'province': '山东', 'month': 4, 'duration': 788}, {'province': '山东', 'month': 5, 'duration': 847}, {'province': '山东', 'month': 6, 'duration': 877}, {'province': '山东', 'month': 7, 'duration': 863}, {'province': '山东', 'month': 8, 'duration': 812}, {'province': '山东', 'month': 9, 'duration': 745}, {'province': '山东', 'month': 10, 'duration': 675}, {'province': '山东', 'month': 11, 'duration': 614}, {'province': '山西', 'month': 1, 'duration': 592}, {'province': '山西', 'month': 2, 'duration': 647}, {'province': '山西', 'month': 3, 'duration': 717}, {'province': '山西', 'month': 4, 'duration': 790}, {'province': '山西', 'month': 5, 'duration': 852}, {'province': '山西', 'month': 6, 'duration': 884}, {'province': '山西', 'month': 7, 'duration': 869}, {'province': '山西', 'month': 8, 'duration': 816}, {'province': '山西', 'month': 9, 'duration': 746}, {'province': '山西', 'month': 10, 'duration': 673}, {'province': '山西', 'month': 11, 'duration': 609}, {'province': '广东', 'month': 1, 'duration': 653}, {'province': '广东', 'month': 2, 'duration': 683}, {'province': '广东', 'month': 3, 'duration': 721}, {'province': '广东', 'month': 4, 'duration': 761}, {'province': '广东', 'month': 5, 'duration': 795}, {'province': '广东', 'month': 6, 'duration': 812}, {'province': '广东', 'month': 7, 'duration': 804}, {'province': '广东', 'month': 8, 'duration': 775}, {'province': '广东', 'month': 9, 'duration': 737}, {'province': '广东', 'month': 10, 'duration': 697}, {'province': '广东', 'month': 11, 'duration': 662}, {'province': '广西', 'month': 1, 'duration': 654}, {'province': '广西', 'month': 2, 'duration': 683}, {'province': '广西', 'month': 3, 'duration': 721}, {'province': '广西', 'month': 4, 'duration': 760}, {'province': '广西', 'month': 5, 'duration': 794}, {'province': '广西', 'month': 6, 'duration': 810}, {'province': '广西', 'month': 7, 'duration': 802}, {'province': '广西', 'month': 8, 'duration': 774}, {'province': '广西', 'month': 9, 'duration': 736}, {'province': '广西', 'month': 10, 'duration': 697}, {'province': '广西', 'month': 11, 'duration': 663}, {'province': '新疆', 'month': 1, 'duration': 560}, {'province': '新疆', 'month': 2, 'duration': 629}, {'province': '新疆', 'month': 3, 'duration': 715}, {'province': '新疆', 'month': 4, 'duration': 806}, {'province': '新疆', 'month': 5, 'duration': 883}, {'province': '新疆', 'month': 6, 'duration': 924}, {'province': '新疆', 'month': 7, 'duration': 905}, {'province': '新疆', 'month': 8, 'duration': 837}, {'province': '新疆', 'month': 9, 'duration': 751}, {'province': '新疆', 'month': 10, 'duration': 661}, {'province': '新疆', 'month': 11, 'duration': 581}, {'province': '江苏', 'month': 1, 'duration': 619}, {'province': '江苏', 'month': 2, 'duration': 662}, {'province': '江苏', 'month': 3, 'duration': 719}, {'province': '江苏', 'month': 4, 'duration': 778}, {'province': '江苏', 'month': 5, 'duration': 827}, {'province': '江苏', 'month': 6, 'duration': 852}, {'province': '江苏', 'month': 7, 'duration': 841}, {'province': '江苏', 'month': 8, 'duration': 798}, {'province': '江苏', 'month': 9, 'duration': 742}, {'province': '江苏', 'month': 10, 'duration': 683}, {'province': '江苏', 'month': 11, 'duration': 632}, {'province': '江西', 'month': 1, 'duration': 633}, {'province': '江西', 'month': 2, 'duration': 670}, {'province': '江西', 'month': 3, 'duration': 719}, {'province': '江西', 'month': 4, 'duration': 771}, {'province': '江西', 'month': 5, 'duration': 814}, {'province': '江西', 'month': 6, 'duration': 836}, {'province': '江西', 'month': 7, 'duration': 826}, {'province': '江西', 'month': 8, 'duration': 789}, {'province': '江西', 'month': 9, 'duration': 740}, {'province': '江西', 'month': 10, 'duration': 689}, {'province': '江西', 'month': 11, 'duration': 644}, {'province': '河北', 'month': 1, 'duration': 592}, {'province': '河北', 'month': 2, 'duration': 647}, {'province': '河北', 'month': 3, 'duration': 717}, {'province': '河北', 'month': 4, 'duration': 791}, {'province': '河北', 'month': 5, 'duration': 853}, {'province': '河北', 'month': 6, 'duration': 885}, {'province': '河北', 'month': 7, 'duration': 870}, {'province': '河北', 'month': 8, 'duration': 816}, {'province': '河北', 'month': 9, 'duration': 746}, {'province': '河北', 'month': 10, 'duration': 673}, {'province': '河北', 'month': 11, 'duration': 608}, {'province': '河南', 'month': 1, 'duration': 607}, {'province': '河南', 'month': 2, 'duration': 655}, {'province': '河南', 'month': 3, 'duration': 718}, {'province': '河南', 'month': 4, 'duration': 783}, {'province': '河南', 'month': 5, 'duration': 838}, {'province': '河南', 'month': 6, 'duration': 866}, {'province': '河南', 'month': 7, 'duration': 853}, {'province': '河南', 'month': 8, 'duration': 806}, {'province': '河南', 'month': 9, 'duration': 744}, {'province': '河南', 'month': 10, 'duration': 679}, {'province': '河南', 'month': 11, 'duration': 622}, {'province': '浙江', 'month': 1, 'duration': 626}, {'province': '浙江', 'month': 2, 'duration': 667}, {'province': '浙江', 'month': 3, 'duration': 719}, {'province': '浙江', 'month': 4, 'duration': 774}, {'province': '浙江', 'month': 5, 'duration': 820}, {'province': '浙江', 'month': 6, 'duration': 843}, {'province': '浙江', 'month': 7, 'duration': 833}, {'province': '浙江', 'month': 8, 'duration': 793}, {'province': '浙江', 'month': 9, 'duration': 741}, {'province': '浙江', 'month': 10, 'duration': 686}, {'province': '浙江', 'month': 11, 'duration': 638}, {'province': '海南', 'month': 1, 'duration': 664}, {'province': '海南', 'month': 2, 'duration': 689}, {'province': '海南', 'month': 3, 'duration': 722}, {'province': '海南', 'month': 4, 'duration': 756}, {'province': '海南', 'month': 5, 'duration': 784}, {'province': '海南', 'month': 6, 'duration': 799}, {'province': '海南', 'month': 7, 'duration': 792}, {'province': '海南', 'month': 8, 'duration': 768}, {'province': '海南', 'month': 9, 'duration': 735}, {'province': '海南', 'month': 10, 'duration': 701}, {'province': '海南', 'month': 11, 'duration': 672}, {'province': '湖北', 'month': 1, 'duration': 625}, {'province': '湖北', 'month': 2, 'duration': 666}, {'province': '湖北', 'month': 3, 'duration': 719}, {'province': '湖北', 'month': 4, 'duration': 775}, {'province': '湖北', 'month': 5, 'duration': 821}, {'province': '湖北', 'month': 6, 'duration': 845}, {'province': '湖北', 'month': 7, 'duration': 834}, {'province': '湖北', 'month': 8, 'duration': 794}, {'province': '湖北', 'month': 9, 'duration': 741}, {'province': '湖北', 'month': 10, 'duration': 686}, {'province': '湖北', 'month': 11, 'duration': 637}, {'province': '湖南', 'month': 1, 'duration': 635}, {'province': '湖南', 'month': 2, 'duration': 672}, {'province': '湖南', 'month': 3, 'duration': 720}, {'province': '湖南', 'month': 4, 'duration': 770}, {'province': '湖南', 'month': 5, 'duration': 812}, {'province': '湖南', 'month': 6, 'duration': 833}, {'province': '湖南', 'month': 7, 'duration': 823}, {'province': '湖南', 'month': 8, 'duration': 787}, {'province': '湖南', 'month': 9, 'duration': 739}, {'province': '湖南', 'month': 10, 'duration': 689}, {'province': '湖南', 'month': 11, 'duration': 646}, {'province': '澳门', 'month': 1, 'duration': 656}, {'province': '澳门', 'month': 2, 'duration': 685}, {'province': '澳门', 'month': 3, 'duration': 721}, {'province': '澳门', 'month': 4, 'duration': 759}, {'province': '澳门', 'month': 5, 'duration': 792}, {'province': '澳门', 'month': 6, 'duration': 808}, {'province': '澳门', 'month': 7, 'duration': 800}, {'province': '澳门', 'month': 8, 'duration': 773}, {'province': '澳门', 'month': 9, 'duration': 736}, {'province': '澳门', 'month': 10, 'duration': 698}, {'province': '澳门', 'month': 11, 'duration': 665}, {'province': '甘肃', 'month': 1, 'duration': 601}, {'province': '甘肃', 'month': 2, 'duration': 652}, {'province': '甘肃', 'month': 3, 'duration': 718}, {'province': '甘肃', 'month': 4, 'duration': 786}, {'province': '甘肃', 'month': 5, 'duration': 844}, {'province': '甘肃', 'month': 6, 'duration': 874}, {'province': '甘肃', 'month': 7, 'duration': 860}, {'province': '甘肃', 'month': 8, 'duration': 810}, {'province': '甘肃', 'month': 9, 'duration': 745}, {'province': '甘肃', 'month': 10, 'duration': 676}, {'province': '甘肃', 'month': 11, 'duration': 616}, {'province': '福建', 'month': 1, 'duration': 642}, {'province': '福建', 'month': 2, 'duration': 676}, {'province': '福建', 'month': 3, 'duration': 720}, {'province': '福建', 'month': 4, 'duration': 766}, {'province': '福建', 'month': 5, 'duration': 805}, {'province': '福建', 'month': 6, 'duration': 824}, {'province': '福建', 'month': 7, 'duration': 815}, {'province': '福建', 'month': 8, 'duration': 782}, {'province': '福建', 'month': 9, 'duration': 738}, {'province': '福建', 'month': 10, 'duration': 692}, {'province': '福建', 'month': 11, 'duration': 653}, {'province': '西藏', 'month': 1, 'duration': 629}, {'province': '西藏', 'month': 2, 'duration': 668}, {'province': '西藏', 'month': 3, 'duration': 719}, {'province': '西藏', 'month': 4, 'duration': 773}, {'province': '西藏', 'month': 5, 'duration': 818}, {'province': '西藏', 'month': 6, 'duration': 840}, {'province': '西藏', 'month': 7, 'duration': 830}, {'province': '西藏', 'month': 8, 'duration': 791}, {'province': '西藏', 'month': 9, 'duration': 740}, {'province': '西藏', 'month': 10, 'duration': 687}, {'province': '西藏', 'month': 11, 'duration': 641}, {'province': '贵州', 'month': 1, 'duration': 641}, {'province': '贵州', 'month': 2, 'duration': 675}, {'province': '贵州', 'month': 3, 'duration': 720}, {'province': '贵州', 'month': 4, 'duration': 767}, {'province': '贵州', 'month': 5, 'duration': 807}, {'province': '贵州', 'month': 6, 'duration': 826}, {'province': '贵州', 'month': 7, 'duration': 817}, {'province': '贵州', 'month': 8, 'duration': 783}, {'province': '贵州', 'month': 9, 'duration': 739}, {'province': '贵州', 'month': 10, 'duration': 692}, {'province': '贵州', 'month': 11, 'duration': 651}, {'province': '辽宁', 'month': 1, 'duration': 572}, {'province': '辽宁', 'month': 2, 'duration': 635}, {'province': '辽宁', 'month': 3, 'duration': 716}, {'province': '辽宁', 'month': 4, 'duration': 800}, {'province': '辽宁', 'month': 5, 'duration': 872}, {'province': '辽宁', 'month': 6, 'duration': 910}, {'province': '辽宁', 'month': 7, 'duration': 892}, {'province': '辽宁', 'month': 8, 'duration': 830}, {'province': '辽宁', 'month': 9, 'duration': 749}, {'province': '辽宁', 'month': 10, 'duration': 665}, {'province': '辽宁', 'month': 11, 'duration': 591}, {'province': '重庆', 'month': 1, 'duration': 629}, {'province': '重庆', 'month': 2, 'duration': 668}, {'province': '重庆', 'month': 3, 'duration': 719}, {'province': '重庆', 'month': 4, 'duration': 773}, {'province': '重庆', 'month': 5, 'duration': 817}, {'province': '重庆', 'month': 6, 'duration': 840}, {'province': '重庆', 'month': 7, 'duration': 829}, {'province': '重庆', 'month': 8, 'duration': 791}, {'province': '重庆', 'month': 9, 'duration': 740}, {'province': '重庆', 'month': 10, 'duration': 687}, {'province': '重庆', 'month': 11, 'duration': 641}, {'province': '陕西', 'month': 1, 'duration': 609}, {'province': '陕西', 'month': 2, 'duration': 657}, {'province': '陕西', 'month': 3, 'duration': 718}, {'province': '陕西', 'month': 4, 'duration': 782}, {'province': '陕西', 'month': 5, 'duration': 836}, {'province': '陕西', 'month': 6, 'duration': 864}, {'province': '陕西', 'month': 7, 'duration': 851}, {'province': '陕西', 'month': 8, 'duration': 804}, {'province': '陕西', 'month': 9, 'duration': 743}, {'province': '陕西', 'month': 10, 'duration': 679}, {'province': '陕西', 'month': 11, 'duration': 624}, {'province': '青海', 'month': 1, 'duration': 598}, {'province': '青海', 'month': 2, 'duration': 651}, {'province': '青海', 'month': 3, 'duration': 717}, {'province': '青海', 'month': 4, 'duration': 787}, {'province': '青海', 'month': 5, 'duration': 847}, {'province': '青海', 'month': 6, 'duration': 877}, {'province': '青海', 'month': 7, 'duration': 863}, {'province': '青海', 'month': 8, 'duration': 812}, {'province': '青海', 'month': 9, 'duration': 745}, {'province': '青海', 'month': 10, 'duration': 675}, {'province': '青海', 'month': 11, 'duration': 614}, {'province': '香港', 'month': 1, 'duration': 656}, {'province': '香港', 'month': 2, 'duration': 684}, {'province': '香港', 'month': 3, 'duration': 721}, {'province': '香港', 'month': 4, 'duration': 760}, {'province': '香港', 'month': 5, 'duration': 792}, {'province': '香港', 'month': 6, 'duration': 808}, {'province': '香港', 'month': 7, 'duration': 801}, {'province': '香港', 'month': 8, 'duration': 773}, {'province': '香港', 'month': 9, 'duration': 736}, {'province': '香港', 'month': 10, 'duration': 698}, {'province': '香港', 'month': 11, 'duration': 664}, {'province': '黑龙江', 'month': 1, 'duration': 548}, {'province': '黑龙江', 'month': 2, 'duration': 622}, {'province': '黑龙江', 'month': 3, 'duration': 714}, {'province': '黑龙江', 'month': 4, 'duration': 812}, {'province': '黑龙江', 'month': 5, 'duration': 895}, {'province': '黑龙江', 'month': 6, 'duration': 939}, {'province': '黑龙江', 'month': 7, 'duration': 918}, {'province': '黑龙江', 'month': 8, 'duration': 846}, {'province': '黑龙江', 'month': 9, 'duration': 753}, {'province': '黑龙江', 'month': 10, 'duration': 657}, {'province': '黑龙江', 'month': 11, 'duration': 571}]

    //默认热力图月份为1
    var heatMonth = 5;

    function convertDurationData(data, month) {
        let res = [];
        for(let i=0;i<data.length;i++) {
            if(data[i].month===month) {
                res.push({
                    name: data[i].province,
                    value: data[i].duration
                });
            }
        }
        console.log(res);
        return res;
    };
    //生成数据
    function generateHeatData(month){
        dataMap = convertDurationData(durationVal, month);
        var heatVal = [];
        // 对dataMap进行处理，使其可以直接在页面上展示
        for (var i = 0; i < heatVal.length; i++) {
            for (var j = 0; j < dataMap.length; j++) {
                if (heatVal[i] == dataMap[j].provice) {
                    dataMap[j].selected = true;
                    break;
                }
            }
        }
        return dataMap
    }

    function updateHeatChart(){

        heatChart.setOption(
            {
                series: [
                    {
                        data: generateHeatData(heatMonth)
                    }
                ]
            }
        )
    }

    var heatOption={
        // title: {
        //     text: "中国各省光照时长",
        //     x: 'center',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        tooltip: {
            formatter: function (params) {
                var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">' + parseInt(params.value/60)+'h'+parseInt(params.value%60)+'mins';
                return info;
            },
            textStyle: { color: "#fff" } //提示标签字体颜色

        },
        visualMap: {
            formatter: function(value){
                return parseInt(value/60)+'h'+parseInt(value%60)+'mins';
            },
            min: 540,
            max: 960,
            show : true,
            x: 'left',
            y: 'bottom',
            text: ['16h', '9h'],
            textStyle: {
                color: '#fff',
            },
            inRange: {
                // color: ['#e0ffff', '#ff7f50'],//white to red
                // color: ['#e0ffff', '#006edd'],//white to blue
                color: ['#50a3ba', '#eac736', '#d94e5d']
            }
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                zoom: 1.2,
                label: {
                    normal: {
                        show: false,//显示省份标签
                    },
                    emphasis: {
                        show: true,//对应的鼠标悬浮效果
                    },
                },
                itemStyle: {
                    normal: {
                        // 边界
                        borderWidth: 1.1,
                        borderColor: '#fff'
                    },
                    emphasis: {
                        // 鼠标悬停区域颜色
                        areaColor: '#069'
                    }
                },
                data: generateHeatData(heatMonth)
            }
        ]
    }
    heatChart.setOption(heatOption);

    //根据选择的月份重新绘制
    document.getElementById('heatSelect').addEventListener('change', function(){
        heatMonth = parseInt(this.value);
        updateHeatChart();
    });

    var pieChart = echarts.init(document.getElementById('pieChart'));

    //默认饼图月份为1
    var pieMonth = 5;

    function generatePieData(month){

        let res = [{name:'9-11h',value:0},{name:'11h-14h',value:0},{name:'14h-16h',value:0}];

        //data=[{name: province, value: duration}]
        var data = convertDurationData(durationVal,month);
        console.log(data)
        for(var i = 0; i < data.length; i++) {
            if(data[i].value<660){
                res[0].value += 1
            }else if(data[i].value<840){
                res[1].value += 1
            }else if(data[i].value<960){
                res[2].value += 1
            }
        }
        console.log(res);
        return res
    }

    function updatePieData() {
        pieChart.setOption(
            {
                series: [
                    {
                        data: generatePieData(pieMonth)
                    }
                ]
            }
        )
    }

    let pieOption = {

        color: ["#87cefa", "#ff7f50", "#da70d6"],

        legend: {
            y: '260',
            x: 'center',
            itemWidth: 20,
            textStyle: {
                color: '#ffffff',
            },
            data: ['9h-11h', '11h-14h', '14h-16h'],
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}:  {d}%"
        },
        calculable: true,
        series: [
            {
                name: '日照时长',
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: false,
                            color: '#fff',
                            // position: 'inside',
                            textStyle: {
                                fontSize: 10,
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: generatePieData(pieMonth)
            }
        ]
    };
    pieChart.setOption(pieOption)

    //根据选择的月份重新绘制
    document.getElementById('pieSelect').addEventListener('change', function(){
        pieMonth = parseInt(this.value);
        updatePieData();
    });


    // 雷达图
    var radarChart = echarts.init(document.getElementById('radarChart'));

    //默认雷达图省份
    var radarProvince1 = '上海';
    var radarProvince2 = '北京';

    function generateRadarData(province1,province2){
        let res = [
            {
                name: province1,
                value: [],
                itemStyle: {
                    normal: {
                        color: '#f82626',
                        lineStyle: {
                            width: 1,
                            color: '#f82626',
                        },
                    },
                },
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff',
                        fontSize: 10,
                        formatter: function (params) {
                            return parseInt(params.value/60)+'h'+parseInt(params.value%60);
                        }
                    }
                },
            },
            {
                name: province2,
                value: [],
                itemStyle: {
                    normal: {
                        color: '#75e695',
                        lineStyle: {
                            width: 1,
                            color: '#75e695',
                        },
                    },
                },
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff',
                        fontSize: 10,
                        formatter: function (params) {
                            return parseInt(params.value/60)+'h'+parseInt(params.value%60);
                        }
                    }
                },
            }
        ]

        for(let i=0;i<durationVal.length;i++) {
            if(durationVal[i].province===province1){
                res[0].value.push(durationVal[i].duration)
            }
            if(durationVal[i].province===province2){
                res[1].value.push(durationVal[i].duration)
            }
        }
        console.log(res)
        return res
    }

    function updateRadarChart() {
        radarChart.setOption(
            {
                legend: {
                    data: [radarProvince1, radarProvince2],
                },
                series: [
                    {
                        data: generateRadarData(radarProvince1, radarProvince2)
                    }
                ]
            }
        )
    }
    const allmax = 960;
    const allmin = 540;
    var dataMax = [
        {
            name: '一月',
            min: allmin,
            max: allmax,
        },
        {
            name: '二月',
            min: allmin,
            max: allmax,
        },
        {
            name: '三月',
            min: allmin,
            max: allmax,
        },
        {
            name: '四月',
            min: allmin,
            max: allmax,
        },
        {
            name: '五月',
            min: allmin,
            max: allmax,
        },
        {
            name: '六月',
            min: allmin,
            max: allmax,
        },
        {
            name: '七月',
            min: allmin,
            max: allmax,
        },
        {
            name: '八月',
            min: allmin,
            max: allmax,
        },
        {
            name: '九月',
            min: allmin,
            max: allmax,
        },
        {
            name: '十月',
            min: allmin,
            max: allmax,
        },
        {
            name: '十一月',
            min: allmin,
            max: allmax,
        },
    ]
    var radarOption ={
        radar: {
            shape: 'circle',
            indicator: dataMax,  // 配置各个维度的最大值
            splitNumber: 3,
            splitArea: {
                show: false,
                areaStyle: {
                    color: 'rgba(255, 0, 0, 0)',
                }
            }
        },
        // tooltip: {
        //     show: true,
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //     },
        //     formatter: function (params) {
        //         console.log(params)
        //         return params[0].value;
        //     }
        // },
        legend: {
            show: true,
            icon: "rect", //长方形
            textStyle :{
                color: "#fff",
            },
            data: [radarProvince1, radarProvince2]
        },
        series: [
            {
                type: 'radar',
                symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
                symbolSize: 8, // 拐点的大小
                label: {
                    normal: {
                        show: false,//显示数据
                    },
                    emphasis: {
                        show: true,//对应的鼠标悬浮效果
                    },
                },
                data: generateRadarData(radarProvince1, radarProvince2),
            }
        ]
    }
    radarChart.setOption(radarOption);

    //根据选择的省份重新绘制
    document.getElementById('provinceSelect1').addEventListener('change', function(){
        radarProvince1 = this.value;
        updateRadarChart();
    });
    document.getElementById('provinceSelect2').addEventListener('change', function(){
        radarProvince2 = this.value;
        updateRadarChart();
    });

}
