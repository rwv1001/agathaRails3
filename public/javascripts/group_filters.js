function UpdateGroupFilter(table_name, foreign_key)
{

    wait();
    group_id_str = "group_filters_option_" + table_name +"_" +foreign_key;
    group_id_obj = $(group_id_str);
    group_id = group_id_obj.value;

    $(group_filters_table_name).value = table_name;
    $(group_filters_foreign_key).value = foreign_key;
    $(group_filters_group_id).value = group_id;

    
    $("group_filters_form").onsubmit();

}
function UpdateGroupFilter2(table_name, foreign_key)
{
    x = 2;


}