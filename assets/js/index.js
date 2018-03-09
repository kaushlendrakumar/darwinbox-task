var all_file_name = [],all_data_show_array = [];
$(document).ready(function(){
	$('#datetimepicker1').click(function(){
		$('#datetimepicker1').datepicker();
	});
    //preview_images();
    $('#upload_file').change(function(){
        var value = $(this).val().split("\\");
        value = (value[value.length-1]);
        if(value != ""){
            $('#allAttachement')
            .append('<div class="eachfileshow">'+
                        '<span class="fileNameText">'+value+'</span>'+
                        '<span class="fileNameRemove"><i class="fa fa-times" aria-hidden="true" data-value="'+value+'"></i></span>'+
                    '</div>');
            all_file_name.push(value);
        }
    });
    
    $('#submit_addExpense').click(function(){
        $('#upload_file,#datetimepicker1,#description_0,#expenses_tax,#expenses_description_1,#expenses_code,#expenses_domestiv,#expenses_oyoRoom,#expenses_domestiv_2,#expenses_oyoRoom_2,#expenses_domestiv_3,#expenses_oyoRoom_3').css({'border':'1px solid #ddd'});
        var expenses_type = $('#expenses_type').val();
        var expenses_date = $('#datetimepicker1').val();
        var expenses_night = $('#hotel_night_select').val();
        var expenses_total_expenses_amout = $('#total_expenses_amout').html();
        var expenses_rupeeType = $('#hotel_rupeeType_select').val();
        var expenses_description_0 = $('#description_0').val()
        var expenses_tax = $('#expenses_tax').val();
        var expenses_description_1 = $('#expenses_description_1').val();
        var expenses_code = $('#expenses_code').val();
        var expenses_domestic = $('#expenses_domestiv').val();
        var expenses_oyoRoom = $('#expenses_oyoRoom').val();
        var expenses_domestic_2 = $('#expenses_domestiv_2').val();
        var expenses_oyoRoom_2 = $('#expenses_oyoRoom_2').val();
        var expenses_domestic_3 = $('#expenses_domestiv_3').val();
        var expenses_oyoRoom_3 = $('#expenses_oyoRoom_3').val();
        var allAttachement = $('#allAttachement>.eachfileshow').length;
        var status = 1,expenses_night_no;
        if(expenses_night == "1 Night"){
            expenses_night_no = 1;
        }
        else if(expenses_night == "2 Night"){
            expenses_night_no = 2;
        }
        else if(expenses_night == "2 Night"){
            expenses_night_no = 3;
        }
        if(allAttachement < 1){
            $('#upload_file').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_date == ""){
            $('#datetimepicker1').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_description_0 == ""){
            $('#description_0').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_tax == ""){
            $('#expenses_tax').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_description_1 == ""){
            $('#expenses_description_1').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_code == ""){
            $('#expenses_code').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_domestic == ""){
            $('#expenses_domestiv').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_oyoRoom == ""){
            $('#expenses_oyoRoom').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_domestic_2 == ""){
            $('#expenses_domestiv_2').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_oyoRoom_2 == ""){
            $('#expenses_oyoRoom_2').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_domestic_3 == ""){
            $('#expenses_domestiv_3').css({'border':'1px solid red'});
            status = 0;
        }
        if(expenses_oyoRoom_3 == ""){
            $('#expenses_oyoRoom_3').css({'border':'1px solid red'});
            status = 0;
        }
        if(status == 1){

            all_data_show_array.push({
                'expenses_type':expenses_type,'expenses_date':expenses_date,'expenses_night':expenses_night,'expenses_night_no':expenses_night_no,'expenses_total_expenses_amout':expenses_total_expenses_amout,'expenses_description_1':expenses_description_1,'expenses_description_0':expenses_description_0,'expenses_oyoRoom':expenses_oyoRoom,'expenses_code':expenses_code,'expenses_tax':expenses_tax,'expenses_oyoRoom_2':expenses_oyoRoom_2,'file_name_show':file_name_show
            });
            localStorage
            .setItem('localStored_data',JSON.stringify(all_data_show_array));
            var file_name_show = "";
            all_file_name[0]
            for(var i=0;i<all_file_name.length;i++){
                var i_value = " ";
                if(i > 0){
                    i_value = ", ";
                }

                file_name_show = file_name_show + i_value + all_file_name[i];
            }            
            var default_data_empty = $('#all_data_append_parent>.eachForm_data_parent').length;
            if(default_data_empty == 0){
                $('#all_data_append_parent').html("");
            }
            $('#all_data_append_parent')
            .append('<div class="eachForm_data_parent col-xs-12">'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable" id="data_expensesType">'+expenses_type+'</div>'+
                            '<div class="value" id="data_expensesDate">'+expenses_date+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Nights Stayed</div>'+
                            '<div class="value" id="data_expensesNight">'+expenses_night+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Amount</div>'+
                            '<div class="value"><span id="data_expensesNight_no">'+expenses_night_no+'</span>x1200 = <span id="data_expensesNight_rupee">'+expenses_total_expenses_amout+'</span> INR</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-6">'+
                            '<div>'+
                                '<span class="lable">Description : </span>'+
                                '<span class="value" id="data_expensesDescription2">'+expenses_description_1+'</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                        '<div class="margin-top-15"></div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Description</div>'+
                            '<div class="value" id="data_expensesDescription1">'+expenses_description_0+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Merchant Name</div>'+
                            '<div class="value" id="data_expensesMarchentName1">'+expenses_oyoRoom+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Invoice No</div>'+
                            '<div class="value" id="data_expensesInvoice1">CY'+expenses_code+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Service tax</div>'+
                            '<div class="value" id="data_expenses_serviceTax">'+expenses_tax+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Billable code</div>'+
                            '<div class="value" id="data_expensesCode">'+expenses_code+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Merchant Name</div>'+
                            '<div class="value" id="data_expensesMarchentName1">'+expenses_oyoRoom_2+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Invoice No</div>'+
                            '<div class="value" id="data_expensesInvoice2">CY'+expenses_code+'</div>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                        '<div class="margin-top-15"></div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-10">'+
                            '<div>'+
                                '<span class="lable">Description : </span>'+
                                '<span class="value"> '+
                                    '<span class="icon padding-left-10"><i class="fa fa-download" aria-hidden="true"></i> Download</span>'+
                                    '<span class="value padding-left-15">'+file_name_show+'</span>'+
                                '</span>'+
                            '</div>'+                        
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<button class="btn btn-default pull-right delete_record" data-code="'+expenses_code+'"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'+
                        '</div>'+
                    '</div>');
            all_file_name = [];
            $('#Reset_full_form').click();
        }

    });

    $('#Reset_full_form').click(function(){
        $('#expenses_type').val("Hotel Expenses");
        $('#datetimepicker1').val("");
        $('#hotel_night_select').val("1 Night");
        $('#total_expenses_amout').html('1200');
        $('#hotel_rupeeType_select').val("INR");
        $('#description_0').val("")
        $('#expenses_tax').val("");
        $('#expenses_description_1').val("");
        $('#expenses_code').val("");
        $('#expenses_domestiv').val("");
        $('#expenses_oyoRoom').val("");
        $('#expenses_domestiv_2').val("");
        $('#expenses_oyoRoom_2').val("");
        $('#expenses_domestiv_3').val("");
        $('#expenses_oyoRoom_3').val("");
        $('#allAttachement').html("");
    });

    $('#hotel_night_select').change(function(){
        var value = $(this).val();
        var amount = 0;
        if(value == "1 Night"){
            amount = 1200;
        }
        else if(value == "2 Night"){
            amount = 1200*2;
        }
        else if(value == "3 Night"){
            amount = 1200*3;
        }
        $('#total_expenses_amout').html(amount);
    });

    var each_record_local = JSON.parse(localStorage.getItem('localStored_data'));
    if(each_record_local.length > 0)
    {
        for(var z=0;z<each_record_local.length;z++){
            //console.log(a[z].expenses_type)
            $('#all_data_append_parent')
            .append('<div class="eachForm_data_parent col-xs-12">'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable" id="data_expensesType">'+each_record_local[z].expenses_type+'</div>'+
                            '<div class="value" id="data_expensesDate">'+each_record_local[z].expenses_date+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Nights Stayed</div>'+
                            '<div class="value" id="data_expensesNight">'+each_record_local[z].expenses_night+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Amount</div>'+
                            '<div class="value"><span id="data_expensesNight_no">'+each_record_local[z].expenses_night_no+'</span>x1200 = <span id="data_expensesNight_rupee">'+each_record_local[z].expenses_total_expenses_amout+'</span> INR</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-6">'+
                            '<div>'+
                                '<span class="lable">Description : </span>'+
                                '<span class="value" id="data_expensesDescription2">'+each_record_local[z].expenses_description_1+'</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                        '<div class="margin-top-15"></div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Description</div>'+
                            '<div class="value" id="data_expensesDescription1">'+each_record_local[z].expenses_description_0+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Merchant Name</div>'+
                            '<div class="value" id="data_expensesMarchentName1">'+each_record_local[z].expenses_oyoRoom+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Invoice No</div>'+
                            '<div class="value" id="data_expensesInvoice1">CY'+each_record_local[z].expenses_code+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Service tax</div>'+
                            '<div class="value" id="data_expenses_serviceTax">'+each_record_local[z].expenses_tax+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Billable code</div>'+
                            '<div class="value" id="data_expensesCode">'+each_record_local[z].expenses_code+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<div class="lable">Merchant Name</div>'+
                            '<div class="value" id="data_expensesMarchentName1">'+each_record_local[z].expenses_oyoRoom_2+'</div>'+
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-1">'+
                            '<div class="lable">Invoice No</div>'+
                            '<div class="value" id="data_expensesInvoice2">CY'+each_record_local[z].expenses_code+'</div>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                        '<div class="margin-top-15"></div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-10">'+
                            '<div>'+
                                '<span class="lable">Description : </span>'+
                                '<span class="value"> '+
                                    '<span class="icon padding-left-10"><i class="fa fa-download" aria-hidden="true"></i> Download</span>'+
                                    '<span class="value padding-left-15">'+each_record_local[z].file_name_show+'</span>'+
                                '</span>'+
                            '</div>'+                        
                        '</div>'+
                        '<div class="eachfieldParent col-xs-12 col-sm-2">'+
                            '<button class="btn btn-default pull-right delete_record" data-code="'+each_record_local[z].expenses_code+'"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'+
                        '</div>'+
                    '</div>');
        }
    }
    else{
        $('#all_data_append_parent')
        .html('<div class="empty_all_data_default col-xs-12">Data Not Found</div>');
    }

})

$(document).on('click','.fileNameRemove i',function(){
    var vaule = $(this).attr('data-value');
    for(var i = all_file_name.length - 1; i >= 0; i--) {
        if(all_file_name[i] === vaule) {
           all_file_name.splice(i, 1);
        }
    }
    $(this).closest('.eachfileshow').remove();
});

$(document).on('click','.delete_record',function(){
    var value = $(this).attr('data-code');
    var items = JSON.parse(localStorage.getItem('localStored_data'));
    for (var i =0; i< items.length; i++) {
        var items_test = items[i];
        console.log(items_test)
        console.log(value)
        if (items_test.expenses_code == value) {
            items.splice(i, 1);
        }
    }
    localStorage.setItem('localStored_data',JSON.stringify(items));
    var items_check = JSON.parse(localStorage.getItem('localStored_data'));
    if(items_check.length == 0){
        $('#all_data_append_parent')
        .html('<div class="empty_all_data_default col-xs-12">Data Not Found</div>');
    }
    $(this).closest('.eachForm_data_parent').remove();
});

