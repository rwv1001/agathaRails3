function deleteElement(table, count)
{
    count = parseInt(count);
    current_elts_str = "display_format_count_"+ table;
    current_elts_obj = $(current_elts_str);
    current_elts = parseInt(current_elts_obj.value);
    if( current_elts == 1)
        {
            return;
        }
    field_names = new Array();
    insert_strings = new Array();

    for(i=count+1;i<current_elts;i++)
    {
        field_name_str = "display_format_field_"+table + "_"+i
        field_name_obj = $(field_name_str);
        field_name = field_name_obj.value;
        field_names.push( field_name);

        insert_string_str ="display_format_string_"+table + "_"+i
        insert_string_obj = $(insert_string_str);
        insert_string = insert_string_obj.value;
        insert_strings.push( insert_string);
    }
    current_elts = current_elts - 1;
    

    for(i=count;i<current_elts;i++)
    {
        field_name_str = "display_format_field_"+table + "_"+i
        field_name_obj = $(field_name_str);
        field_name_obj.value = field_names[i-count];

        insert_string_str ="display_format_string_"+table + "_"+i
        insert_string_obj = $(insert_string_str);
        insert_string_obj.value = insert_strings[i-count];
    }
    current_elts_obj.value = current_elts;
    delete_elt_str = "display_format_" +table +"_" + current_elts;
    delete_elt = $( delete_elt_str);
    delete_elt.remove();
    if(current_elts ==1)
    {
        elt_str = "#display_format_" +table +"_0 .remove_format_field";
        a_elts = $$(elt_str);
        a_elts[0].remove();

    }
    min_width_div_str = "min_width_"+table;
    width = (current_elts )*230;
    width_str = ' '+ width +'px';

    $(min_width_div_str).setStyle('min-width: '+ width_str );
}


function addElement(table, count)
{
    count = parseInt(count);
    current_elts_str = "display_format_count_"+ table;
    current_elts_obj = $(current_elts_str);
    current_elts = parseInt(current_elts_obj.value);
    if(current_elts ==1)
    {
        first_textbox_str = "display_format_string_div_" + table+"_0";
        first_textbox = $(first_textbox_str);
        parent_textbox = first_textbox.getOffsetParent();

     //   $(element).wrap('div').setStyle({backgroundImage: 'url(images/rounded-corner-top-left.png) top left'});
        var new_a = new Element('a', { href: '#', onclick: "deleteElement('"+table+"','0');return false" });
        new_a.innerHTML = "X"
        var new_a_div = new_a.wrap('div',{ 'class': 'remove_format_field' })
        new_a_div.id = "remove_format_"+ table+"_0";
       // var new_x = new Element( 'i' );
       // new_x.update("<div class=\"remove_format_field\"><a href =\"#\">X</a> </div>");
       // new_x.writeAttribute("onclick","deleteElement('"+table+"','0');return false");
       // new_x.id =  "remove_format_"+ table+"_0";
        first_textbox.insert( {
            'after':new_a_div
        } );
    }

    

    for(i=current_elts-1;  i>=count; i--)
    {
       
        div_obj = $("display_format_" + table+"_"+i);
        display_format_string_div = $("display_format_string_div_"+ table+"_"+i);
        display_format_field = $("display_format_field_"+ table+"_"+i);
        display_format_string = $("display_format_string_"+ table+"_"+i);
        remove_format =$("remove_format_"+ table+"_"+i);
        aref_remove_format = remove_format.down('a');
        add_format = $("add_format_"+ table+"_"+i);
        aref_add_format = add_format.down('a');

        new_count = i+1;

        div_obj.id = "display_format_" + table+"_"+new_count;
        display_format_string_div.id = "display_format_string_div_"+ table+"_"+new_count;
        display_format_field.id = "display_format_field_"+ table+"_"+new_count;
        display_format_field.name= "display_format_field_"+ table+"_"+new_count;
        display_format_string.id = "display_format_string_"+ table+"_"+new_count;
        display_format_string.name = "display_format_string_"+ table+"_"+new_count;
        aref_remove_format.writeAttribute("onclick","deleteElement('"+table+"','"+new_count+"');return false");
        remove_format.id = "remove_format_"+ table+"_"+new_count;
        add_format.id = "add_format_"+ table+"_"+new_count;
        aref_add_format.writeAttribute("onclick", "addElement('"+table+"','"+(new_count+1)+"');return false");
    }

    if(count ==current_elts)
    {
        pos_str = 'after';
        div_str = "display_format_" + table+"_"+(count-1);

    }
    else
    {
        pos_str = 'before';
        div_str = "display_format_" + table+"_" +(count+1);
    }
    
    first_div_obj = $(div_str);
    div_obj =  first_div_obj.cloneNode(true);
   
    display_format_string = div_obj.down('input');
    display_format_string_div = div_obj.down('.display_format_string_div');
    display_format_field = div_obj.down('select');
    remove_format = div_obj.down('.remove_format_field');
    aref_remove_format = remove_format.down('a');
    add_format = div_obj.down('.add_format_field');
    aref_add_format = add_format.down('a');

    new_count = count;
    div_obj.id = "display_format_" + table+"_"+new_count;
    display_format_string_div.id = "display_format_string_div_"+ table+"_"+new_count;
    display_format_field.id = "display_format_field_"+ table+"_"+new_count;
    display_format_field.name= "display_format_field_"+ table+"_"+new_count;
    display_format_string.id = "display_format_string_"+ table+"_"+new_count;
    display_format_string.name = "display_format_string_"+ table+"_"+new_count;
    aref_remove_format.writeAttribute("onclick","deleteElement('"+table+"','"+new_count+"');return false");
    remove_format.id = "remove_format_"+ table+"_"+new_count;
    add_format.id = "add_format_"+ table+"_"+new_count;
    aref_add_format.writeAttribute("onclick", "addElement('"+table+"','"+(new_count+1)+"');return false");

    display_format_string.value ="";
    display_format_field.value = "";

    if(pos_str == 'before')
    {
        first_div_obj.insert({
            'before':div_obj
        } );
    }
    else
    {
        first_div_obj.insert({
            'after':div_obj
        } );

    }
    
    current_elts_obj.value = current_elts +1;
    min_width_div_str = "min_width_"+table;
    width = (current_elts+1)*230;
    width_str = ' '+ width +'px';

    $(min_width_div_str).setStyle('min-width: '+ width_str );


}

function resizeFormat()
{

      var client_height = parseInt($('dummy_format').clientHeight);
      var x_height = parseInt($('dummy_fx').clientHeight);
      var p_height = parseInt($('dummy_fp').clientHeight);
      var x_padding = (client_height - x_height)/2.0 ;
      var p_padding = (client_height - p_height)/2.0 ;
      var new_x_height = client_height  - x_padding;
      var new_p_height = client_height- p_padding;

      var x_style_str = "background: #AAAAAA;  border-left: 1px solid;  border-color: #000000; float:right; height: " + new_x_height + "px; padding-top: " + x_padding + "px";
      var p_style_str = "background: #AAAAAA;  border: 1px solid #000; float:left; height: " + new_p_height + "px; padding-top: " + p_padding + "px";
      var select_style_str = "border:none; background-color: transparent; overflow:hidden; height: " + client_height + "px"
      var input_style_str = "border:none; height: " + client_height + "px"
    //  var p_style_str = "background: #AAAAAA;  border: 1px solid #000; float:left; height: 60px: padding-top: " + p_padding + "px";
      $$('.add_format_field').each(function(elt){elt.setAttribute('style',p_style_str)});
      $$('.remove_format_field').each(function(elt){elt.setAttribute('style',x_style_str)});
       $$('.format_select').each(function(elt){elt.setAttribute('style',select_style_str)});
       $$('.format_input').each(function(elt){elt.setAttribute('style',input_style_str)});

}



