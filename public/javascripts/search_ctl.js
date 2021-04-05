function wait()
{

    $("disable_id").show();
    $("disable_id").style.cursor = "wait";

}
function unwait()
{
    $("disable_id").hide();
    $("disable_id").style.cursor = "";

}


function deleteColumn(field_name, table_name)  
{
    wait();
    table_text_element_str = "table_selector_text_" + table_name 
    table_text_element = $(table_text_element_str );
    if(table_text_element != null)
    {             
        table_text_element.setAttribute("value", table_name);
    }
    class_name = field_name + "_" + table_name
    column_elements = $$("td." + class_name )
    column_elements.each(function(element){
        element.remove()
    });
    column_elements = $$("th." + class_name )
    column_elements.each(function(element){
        element.remove()
    });
    num_filters_obj = $("all_display_indices_"+ table_name);
    num_filters = parseInt(num_filters_obj.value) - 1;
    num_filters_obj.value =  num_filters;
    if(num_filters <=1)
    {

        search_div = $("search_results_"+table_name);
        current_div = $("current_filters_"+table_name);
        var x_elements_search = search_div.down(".remove_column");
        var x_elements_current = current_div.down(".remove_column");
        if(typeof(x_elements_search) != "undefined")
        {
            x_elements_search.remove();
        }
        if(typeof(x_elements_current) != "undefined")
        {
            x_elements_current.remove();
        }
    }

    do_search_str = "do_search_" + table_name;
    do_search_element = $(do_search_str);
    do_search_element.setAttribute("name", "do_not_search");

    form_id = "search_form_" + table_name
    $(form_id).onsubmit();
}
function searchOrder(field_name, table_name) 
{
    wait();
    order_element_str = "order_text_" + table_name;
    order_element = $(order_element_str);
  
    order_element.setAttribute("name", "order_text");
    order_element.setAttribute("value", field_name);
    disableSubmitters();

    do_search_str = "do_search_" + table_name;
    do_search_element = $(do_search_str);
    do_search_element.setAttribute("name", "do_search");

    search_form_str = "search_form_" + table_name;
    my_form = $(search_form_str);
    my_form.onsubmit();
}
function disableSubmitters()
{

    
}
function resizeX()
{
    var client_height = parseInt($('dummy_x').clientHeight);
    var a_height = $('dummy_a').clientHeight;
    var new_padding = (client_height - parseInt(a_height))/2;
    var new_height = client_height - new_padding;
    var style_str = "background: #AAAAAA;  border-left: 1px solid; border-color: #000000;  float: right; height: "    + new_height + "px; padding-top: " + new_padding +"px"
    $$('.remove_column').each(function(elt){
      //  elt.setAttribute('style',style_str)
         elt.style.height = new_height;
          elt.style.paddingTop = new_padding;
        });


    $$('.div_column_edit').each(function(elt){
        elt.style.height = new_height;
        elt.style.paddingTop = new_padding;
        });

}
function doEscapeHTML(class_id_name)
{
    sent_text_element_str = class_id_name +"_sent"
    sent_text_element = $(sent_text_element_str);
    sent_text_element_value = $(sent_text_element_str).getValue();
    sent_text_element_value_esc = sent_text_element_value.escapeHTML();
    sent_text_element.setAttribute("value", sent_text_element_value_esc);
}
function updatePostFilterStrings(class_id_name) 
{
    sent_text_element_str = class_id_name +"_sent"
    typed_text_element_str = class_id_name +"_typed"
    sent_text_element = $(sent_text_element_str);
    typed_text_element =$(typed_text_element_str);
    typed_filter_str = typed_text_element.getValue();
    typed_filter_str_esc =  typed_filter_str.escapeHTML()
    sent_text_element.setAttribute("value", typed_filter_str_esc );
}

function updatePostExternalFilter(class_id_name)
{
    sent_text_element_str = class_id_name +"_sent"
    typed_text_element_str = class_id_name +"_typed"
    sent_text_element = $(sent_text_element_str);
    typed_text_element =$(typed_text_element_str);
    typed_filter_str = parseInt(typed_text_element.getValue());
    sent_text_element.value = typed_filter_str;
    x = 1;
    
}

function Search(table_name)
{
    wait();
    resizeFilters();
    //   $('person_id_Person_x').hasAttribute('style')
    // $('person_first_name_Person_x').setAttribute('style','float:right; height: 190px');

    current_filter_str = "current_filters_" +table_name;
    current_filter_element =$(current_filter_str);
    current_filter_element.hide();
    do_search_str = "do_search_" + table_name;
    do_search_element = $(do_search_str);
    do_search_element.setAttribute("name", "do_search");

    form_id = "search_form_" + table_name
    form_element = $(form_id);
    form_element.onsubmit();
    
}
function AddField(table_name)
{
    wait();
    text_element_id = "add_filter_value_" +table_name
    select_id = "possible_filters_"+table_name
    selected_val =  $(select_id).value;

    if(selected_val == "do_nothing")
    {
        return;
    }

    current_filter_str = "current_filters_" +table_name;
    current_filter_element =$(current_filter_str);
    no_results = current_filter_element.visible();
    do_search_str = "do_search_" + table_name;
    do_search_element = $(do_search_str);
    if(no_results)
    {
        do_search_element.setAttribute("name", "do_not_search");
    }
    else
    {
        do_search_element.setAttribute("name", "do_search");
    }

    text_element = $(text_element_id);
    text_element.setAttribute("name", selected_val);
    text_element.setAttribute("value", "%" );
    form_id = "search_form_" + table_name
    form_element = $(form_id);
    form_element.onsubmit();  
}
function AddFilter(table_name)
{
    wait();
    select_elt_str = "possible_external_filters_"+table_name;
    select_elt = $(select_elt_str);
    selected_val= select_elt.value;

    

    if(selected_val == "do_nothing")
    {
        return;
    }

    option_id = "possible_external_filters_"+table_name+"_"+selected_val;
    option_elt= $(option_id);
    option_elt.remove();
    
    text_element_str= "add_external_filter_id_" + table_name;
    text_elt = $(text_element_str);
    text_elt.setAttribute("value",selected_val);

    text_num_filters_str = "number_of_external_filters_" + table_name;
    text_num_filters_elt = $(text_num_filters_str);
    current_num_filters = parseInt(text_num_filters_elt.value);
    if(current_num_filters == 0)
        {
            header_str = "external_filters_header_" + table_name;
            header_elt = $(header_str);
            header_elt.innerHTML = "<label>Search Filters </label>"
        }
    new_num_filters = current_num_filters+1;
    text_num_filters_elt.setAttribute("value", new_num_filters);

    form_id = "add_external_filter_"+ table_name;
    form_element = $(form_id);
    form_element.onsubmit();
}

function onUpdateExternalFilterGroup(class_name, filter_id,  elt_id)
{
    filter_id_str = "update_external_filter_id_"+ class_name;
    elt_id_str = "update_external_elt_index_"+ class_name;
    member_id_str = "update_external_member_id_"+ class_name;
    group_id_str = "update_external_group_id_"+ class_name;

    filter_id_elt = $(filter_id_str);
    elt_id_elt = $(elt_id_str);
    member_id_elt = $(member_id_str);
    group_id_elt  = $(group_id_str);

    group_select_id_str = "group_selection_" + class_name + "_" + filter_id + "_" + elt_id;
    member_select_id_str = "argument_selection_" + class_name + "_" + filter_id + "_" + elt_id;
    group_select_elt = $(group_select_id_str);
    member_select_elt = $(member_select_id_str);
    group_id= group_select_elt.value;
    member_id = member_select_elt.value;

    filter_id_elt.setAttribute("value",filter_id );
    elt_id_elt.setAttribute("value", elt_id);

    member_id_elt.setAttribute("value",member_id);
    group_id_elt.setAttribute("value", group_id);

    form_str = "update_external_filter_"+ class_name;
    form_elt =$(form_str);
    form_elt.onsubmit();
    
}
function addExternalFilterElement(class_name, filter_id)
{
    num_elts_str = "number_of_filter_elements_" + class_name + "_" + filter_id;
    num_elts_elt = $(num_elts_str);
    current_num_elts = parseInt(num_elts_elt.value);
    new_elt_id = current_num_elts;
    new_current_num = current_num_elts+1;
    num_elts_elt.setAttribute("value", new_current_num);

    prev_elt_id = new_elt_id -1;
    prev_elt_str = "external_filter_selection_" + class_name + "_" + filter_id +"_" + prev_elt_id;

    prev_elt =  $(prev_elt_str);
    new_elt = prev_elt.cloneNode(true);

    
    new_elt.id = "external_filter_selection_"+ class_name + "_" + filter_id +"_" + new_elt_id;
    external_filter_group_selection = new_elt.down('.external_filter_group_selection_'+class_name);
    if(typeof(external_filter_group_selection) != "undefined")
        {
            external_filter_group_selection.id = "group_selection_"+ class_name + "_" + filter_id +"_" + new_elt_id;

            external_filter_group_selection.writeAttribute("onchange","onUpdateExternalFilterGroup('"+class_name+"','"+filter_id+"','"+new_elt_id+"');return false");
            old_filter_group_selection = prev_elt.down('.external_filter_group_selection_'+class_name);
            old_group_selection_value = old_filter_group_selection.value;
            group_class_str = ".group_class_"+old_group_selection_value
            external_filter_group_selected =  external_filter_group_selection.down(group_class_str);
            external_filter_group_selected.selected = true;

    }
    external_filter_argument_span_element = new_elt.down('.external_filter_argument_span');
    external_filter_argument_span_element.id = "external_filter_argument_span_"+ class_name + "_" + filter_id +"_" + new_elt_id;
    argument_selection_element = new_elt.down('.external_filter_argument_selection');
    argument_selection_element.id = "argument_selection_"+class_name + "_" + filter_id +"_" + new_elt_id;
    argument_selection_element.name = "argument_selection_"+ filter_id +"_" + new_elt_id;
    filter_element_field= new_elt.down('.remove_filter_element_field');
    filter_element_field_a = filter_element_field.down("a");
    filter_element_field_a.writeAttribute('onclick', "deleteExternalFilterElement('"+class_name+"','"+filter_id+"','"+new_elt_id+"');return false");

    var new_space = new Element('div', { style: 'float: left' });
        new_space.innerHTML = "&nbsp"
    prev_elt.insert({'after':new_space});
    next_space = prev_elt.next('div');
    next_space.insert({'after':new_elt});
}

function deleteExternalFilterElement(class_name, filter_id,  elt_id)
{


    filter_selection_str = "external_filter_selection_" + class_name + "_" + filter_id + "_" + elt_id;
    filter_selection_elt = $(filter_selection_str);
    div_space = filter_selection_elt.next('div');
    filter_selection_elt.remove();
    div_space.remove();

    num_elts_str = "number_of_filter_elements_" + class_name + "_" + filter_id;
    num_elts_elt = $(num_elts_str);

    current_num_elts = parseInt(num_elts_elt.value);
    new_current_num = current_num_elts-1;
    if(new_current_num == 0)
    {

            header_str = "external_filters_header_" + class_name;
            header_elt = $(header_str);
            

        header_container_str = "external_filter_header_" + class_name + "_" + filter_id;
        header_container = $(header_container_str);
       header_str = header_container.innerHTML;
        extended_filter_str = "external_filter_" + class_name + "_" + filter_id;
        extended_filter_elt = $(extended_filter_str);
        extended_filter_elt.remove();
        num_filters_str = "number_of_external_filters_" + class_name;
        num_filters_elt =$(num_filters_str);
        current_num_filters = parseInt(num_filters_elt.value);
        new_num_filters = current_num_filters - 1;
        num_filters_elt.setAttribute("value",new_num_filters);
        if(new_num_filters == 0)
            {
                header_elt.innerHTML = ""
            }



        possible_select_str = "possible_external_filters_" + class_name;
        possible_select_elt = $(possible_select_str);
        not_set_option = possible_select_elt.down('option')
        first_option = not_set_option.next();

        var new_option = new Element('option', {
            id: 'possible_external_filters_' + class_name + '_' +  filter_id,
            value: filter_id
        });
        new_option.innerHTML = header_str
        if(first_option== null)
        {
            not_set_option.insert({
                'after':new_option
            });
        }
        else
        {
            current_elt = first_option;
            current_value = parseInt(current_elt.value);
            if(current_value > filter_id)
            {
                not_set_option.insert({'after':new_option});
            }
            else
            {
                next_elt = current_elt.next();
                while (next_elt != null && parseInt(next_elt.value) < filter_id)
                {
                    current_elt = next_elt;
                    next_elt = current_elt.next();
                }
                current_elt.insert({'after':new_option});
            }
        }
    }
    else
    {
        num_elts_elt.setAttribute("value", new_current_num);
    }
    
}
function resizeExternalFilters(class_name)
{
    var client_height = $('dummy_x').clientHeight;
    var height_str = "" +  client_height+"px"
    $$('.external_filter_group_selection_'+class_name).each(function(elt){
        elt.setStyle({ 
            height: height_str
        });
    });
    $$('.external_filter_argument_selection').each(function(elt){
        elt.setStyle({ 
            height: height_str
        });
    });
    $$('.external_filter_element').each(function(elt){
        elt.setStyle({ 
            height: height_str
        });
    });

    var a_height = $('dummy_a').clientHeight;
    var new_padding = ((client_height - parseInt(a_height))/2);
    var new_height_str = "height: "+(client_height - new_padding);
    var new_padding_str =   "padding-top:" + new_padding


    $$('.add_external_filter_element').each(function(elt){
        old_style = elt.getAttribute("style");
        new_style = old_style;
        if(/height: \d+/.test(new_style))
        {
            new_style = new_style.replace(/height: \d+/,new_height_str  );
        }
        else
        {
            new_style = new_style + new_height_str + "px";
        }
        if(/height: \d+/.test(new_style))
        {
            new_style = new_style.replace(/padding-top: \d+/, new_padding_str);
        }
        else
        {
            new_style = new_style + new_padding_str + "px";
        }
        
        elt.setAttribute("style", new_style);
    });
    $$('.remove_filter_element_field').each(function(elt){
        old_style = elt.getAttribute("style");
        new_style = old_style;
        if(/height: \d+/.test(new_style))
        {
            new_style = new_style.replace(/height: \d+/,new_height_str  );
        }
        else
        {
            new_style = new_style + new_height_str + "px";
        }
        if(/height: \d+/.test(new_style))
        {
            new_style = new_style.replace(/padding-top: \d+/, new_padding_str);
        }
        else
        {
            new_style = new_style + new_padding_str + "px";
        }

        elt.setAttribute("style", new_style);
    });
}


function resizeFilters()
{
    var client_height = parseInt($('dummy_x').clientHeight);
    var narrow_width = parseInt($('dummy_format_narrow').clientWidth);
    var wide_width = parseInt($('dummy_format').clientWidth);
    var x_height = parseInt($('dummy_fx').clientHeight);
    var p_height = parseInt($('dummy_fp').clientHeight);
    var x_padding = (client_height - x_height)/2.0 ;
    var p_padding = (client_height - p_height)/2.0 ;
    var new_x_height = client_height  - x_padding;
    var new_p_height = client_height- p_padding;

    var x_style_str = "background: #AAAAAA;  border-left: 1px solid;  border-color: #000000; float:right; height: " + new_x_height + "px; padding-top: " + x_padding + "px";
    var p_style_str = "background: #AAAAAA;  border: 1px solid #000; float:left; height: " + new_p_height + "px; padding-top: " + p_padding + "px";
    var select_style_str = "border:none; background-color: transparent; overflow:hidden; height: " + client_height*2 + "px"
    var input_style_str = "border:none; height: " + client_height + "px"
    var height_str = "" +  client_height+"px"
    var wide_width_str = "" + wide_width + "px"
    var narrow_width_str = "" + narrow_width + "px"
    //  var p_style_str = "background: #AAAAAA;  border: 1px solid #000; float:left; height: 60px: padding-top: " + p_padding + "px";
      
   
    $$('.select_filter').each(function(elt){
        elt.setStyle({
            height: height_str
        });
    //   elt_parent = elt.getOffsetParent();
    //   grand_parent = elt_parent.getOffsetParent();
    //   grand_parent.setStyle({MinWidth: '200px'})
    //    elt.setStyle({MinWidth: "200px" }); I just can't get this to '
           
    });
    
//      $$('.wide_filter').each(function(elt){
//         elt.setStyle({'min-width': '200px' });
//     });


       

}
function group_unrestriction()
{
    external_filter_Group_0 =  $("external_filter_Group_0");
    if (external_filter_Group_0  != null)
    {
        external_filter_Group_0.show();
    }

 
}
function group_restriction_timeout(table_name, do_update)
{
    external_filter_Group_0 = $("external_filter_Group_0");
    select_obj = $("argument_selection_Group_0_0");
     
    if( external_filter_Group_0 == null ||  select_obj == null)
    {
        function_str = 'group_restriction_timeout("' + table_name +'",'+  do_update+')';
 //       setTimeout("alert('hi there')", 100);
        setTimeout(function_str, 10);
    }
    else
    {
        external_filter_Group_0.hide();
        select_value = select_obj.value;
        if(select_value != table_name)
        {
            do_update = true;
            options = select_obj.select('option');
            options.each(function(elt)
            {
                x=1;
                if(elt.value == table_name)
                {

                    elt.selected = true;
                    class_name = elt.text
                    throw $break;
                }

            });

        }
        if(do_update)
        {
            Search("Group")


        }
    }
}


function group_restriction(table_name)
{ 
    select_obj = $("argument_selection_Group_0_0");
    do_update = false;
    if( select_obj == null)
    {
        select_elt_str = "possible_external_filters_Group";
        select_elt = $(select_elt_str);
        options = select_elt.select('option');
        options.each(function(elt)
        {
            x=1;
            if(elt.value == 0)
            {
                elt.selected = true;
                throw $break;
            }

        });

        AddFilter('Group');       
        do_update = true;
        

    }
    
    group_restriction_timeout(table_name, do_update)
}

