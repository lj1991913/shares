/**
 *
 * cityPicker.js
 * cityPicker is made by Framework picker component which effects like iOS native select.
 *
 * nzb329@163.com
 *
 * 2017-10-28
 *
 */
;
(function(window, $, undefined) {

    /**
     * [getProvince 获取省]
     * @param  {[Object]} regions [省市区数据]
     * @return {[Array]}          [省数组]
     */
    function getProvince(regions) {

        return regions['provincesArr'];
    }

    /**
     * [getCity 获取市]
     * @param  {[Object]} regions      [省市区数据]
     * @param  {[String]} provinceName [省名]
     * @return {[Array]}               [市数组]
     */
    function getCity(regions, provinceName) {

        return regions['provinces'][provinceName]['citiesArr'];
    }

    /**
     * [getArea 获取区]
     * @param  {[Object]} regions      [省市区数据]
     * @param  {[String]} provinceName [省名]
     * @param  {[String]} cityName     [市名]
     * @return {[Array]}               [区数组]
     */
    function getArea(regions, provinceName, cityName) {

        return regions['provinces'][provinceName]['cities'][cityName]['areasArr'];

    }
    var fromData = new Object();
    var s1, s2;
    fromData.realName = "";
    fromData.phone = "";
    fromData.address = "";
    fromData.province = "";
    fromData.city = "";
    $(document).on('input propertychange', 'input', function(e) {
        fromData[e.target.id] = trimStr(e.target.value);
        fromData.address = trimStr($('#address').val());
        //判断是否显示提交
        isShowSub();
    });
    $(document).on('click', '#city', function() {
        var val = $(this).val(),
            array;
        if (val == "北京市 北京市 ") {
            array = val.split(" ");
            fromData.province = array[0];
            fromData.city =array[1];
        }
    });

   

    function trimStr(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    // 初始化 Framework7
    var myApp = new Framework7();

    // 初始化省市区

    var province = getProvince(regions),
        city = getCity(regions, '北京市'),
        area = getArea(regions, '北京市', '北京市');

    // 保存 picker 选择的省
    var provinceSelect = '';

    // 省市区联动 / Framework7 picker
    var pickerLocation = myApp.picker({
        input: '#city',
        rotateEffect: false,
        toolbarTemplate: '<div class="toolbar">\
                            <div class="toolbar-inner">\
                                <div class="left">\
                                    <a href="#" class="link close-picker">取消</a>\
                                </div>\
                                <div class="right">\
                                    <a href="#" class="link close-picker">完成</a>\
                                </div>\
                            </div>\
                        </div>',
        cols: [{
            cssClass: '',
            width: '50%',
            textAlign: 'left',
            values: province,
            onChange: function(picker, province) {
                if (picker.cols[1].replaceValues) {
                    provinceSelect = province;
                    city = getCity(regions, province);
                    area = getArea(regions, province, city[0]);
                    picker.cols[1].replaceValues(city);
                    fromData.province = province;
                    fromData.city = city[0];
                    isShowSub();
                }
            }
        }, {
            cssClass: '',
            width: '50%',
            textAlign: 'center',
            values: city,
            onChange: function(picker, city) {
                fromData.city = city;
                isShowSub();

            }
        }, {
            cssClass: 'f-s-14',
            width: '0%',
            textAlign: 'right',
            values: [''],
        }]
    });


    function isShowSub() {
        if (fromData.realName != "" && fromData.phone != "" && fromData.phone.substring(0, 1) == 1 && trimStr(fromData.phone).length == 11 && fromData.province != "" && fromData.city != "" && fromData.address != "") {
            $('#subH').hide();
            $('#subA').show();
            $('#subA').attr('json',JSON.stringify(fromData));
        } else {
            $('#subH').show();
            $('#subA').hide();
             $('#subA').attr('json','');
        }
    }

})(window, jQuery);