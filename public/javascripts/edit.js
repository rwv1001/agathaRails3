var open_windows = new Hash();
function div_test()
{

    
    $("div_test").onsubmit();

}



function on_load()
{
    win_load_obj = $("win_load")
    if(win_load_obj)
    win_load_obj.onsubmit();
}

function file_change()
{

    disable_div = new Element('div', {style: "position:absolute; top:0; right:0; width:100%; height: 100%; background-color: #ff0000;  opacity:0.0" });
    main_div = $("main_div");
    main_div.insert( {
            'after':disable_div
        } );
     disable_div.style.cursor = "wait";
    submit_upload_obj = $("file_upload");
    submit_upload_obj.submit();
 
}

function file_change2()
{
    submit_upload_obj = $("edit_agatha_file");
    submit_upload_obj.submit();
    x = 1;
}
function myBlur()
{
 x =1;
 y = 2;
 z = x+y;
}





function on_unload()
{

    parent_win=window.opener;
    if(parent_win!=null)
        {
            id_obj = parent_win.document.getElementById('child_unload_main_id');
            table_obj = parent_win.document.getElementById('child_unloade_main_table_name');
            attribute_obj = parent_win.document.getElementById('child_unload_main_attribute_name');

            unload_id_obj = $('unload_id_value');
            unload_table_obj = $('unload_table_name');
            id_obj.value =  unload_id_obj.value;
            table_obj.value =  unload_table_obj.value;
            
            submit_obj = parent_win.document.getElementById('child_unload_main');
            submit_obj.onsubmit();
        }

    win_unload_obj = $("win_unload")
    if(win_unload_obj)
    win_unload_obj.onsubmit();
}

function open_win()
{
my_window = window.open("http://localhost:3000/people/13/edit?table_name=Person");
}


function update_parent(table_name, attribute_name, id)
{
    parent_win=window.opener;
    if(parent_win == null)
        {
            first_parent = window.open('','main_window');
            if(first_parent != window)
            {
                    parent_win = first_parent
            }
        }
    if(parent_win!=null)
        {
            id_obj = parent_win.document.getElementById('update_main_id');
            table_obj = parent_win.document.getElementById('update_main_class_name');
            attribute_obj = parent_win.document.getElementById('update_main_attribute_name');
            update_opener_attribute_name_obj = parent_win.document.getElementById('update_opener_attribute_name');
            update_opener_id_obj = parent_win.document.getElementById('update_opener_id');
            id_obj.value = id;
            table_obj.value = table_name;
            attribute_obj.value = attribute_name;
            update_opener_attribute_name_obj.value = $('sensible_update_opener_attribute_name').value;
            update_opener_id_obj.value = $('sensible_update_opener_id').value;
            submit_obj = parent_win.document.getElementById('update_main');
            submit_obj.onsubmit();
        }
}

function on_edit( table_name,class_name,id)
{
    span_aref_obj_str = "a_edit_"+table_name +"_" + id;
    span_aref_obj = $(span_aref_obj_str );
    aref_obj = span_aref_obj.down('a');
    var  disabled_a = new Element('label', {'class': 'alabel'});
    disabled_a.innerHTML = 'Edit '
    aref_obj.remove();
    span_aref_obj.insert(disabled_a)

    attribute_opener =''
    opener_id = 1;
    open_windows.set('main', window);
    open_edit_window(attribute_opener,  opener_id, table_name, class_name, id);


    y= 2;
   
  
}
function open_edit_window(attribute_opener, opener_id, table_name,class_name,id)
{

      new_name = class_name + '_' + id;
   url = '/'+table_name +'/' + id +'/edit?table_name='+ class_name;
   new_height = screen.height-20;

    var config_window = 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+ (screen.width/2 - 16)+ ', height=' + new_height  +',left='+(screen.width/2 +17)+',top=20'

    stupid_update_opener_attribute_name_obj = $('stupid_update_opener_attribute_name');
    stupid_update_opener_attribute_name_obj.value =attribute_opener;
    stupid_update_opener_id_obj = $('stupid_update_opener_id');
    stupid_update_opener_id_obj.value = opener_id;
    
    win_ref = window.open(url,new_name, config_window);
    update_opener_attribute_name_obj = win_ref.document.getElementById('update_opener_attribute_name');
    update_opener_attribute_name_obj.value = attribute_opener;

    update_opener_id_obj = win_ref.document.getElementById('update_opener_id');
    update_opener_id_obj.value = opener_id;
    open_windows.set(new_name , win_ref );

}
function silly_update()
{
 
    parent_win=window.opener;
    if(parent_win!=null)
    {
          
         stupid_update_opener_attribute_name_obj = parent_win.document.getElementById('stupid_update_opener_attribute_name');
         stupid_update_opener_id_obj = parent_win.document.getElementById('stupid_update_opener_id');
         $('sensible_update_opener_attribute_name').value = stupid_update_opener_attribute_name_obj.value;
        
         $('sensible_update_opener_id').value = stupid_update_opener_id_obj.value;
         
       //   
    }

}

function OnChangeNewGroup(class_name)
{
    button_id = "create_group_button_"+class_name;
    button_elt = $(button_id );
    group_name_id = "new_group_name_" + class_name;
    group_name_elt = $(group_name_id);
    current_str = group_name_elt.value;
    new_str = current_str.replace(/^\s+/,'').replace(/\s+$/,'');
    if(new_str.length!=0)
        {
            button_elt.disabled = false;
        }
        else
            {
                 button_elt.disabled = true;
                
            }
}

function setcheck(check_id, value)
{
    check_obj = $(check_id);
    check_obj.checked = value;
}

function on_checkbox_click(row_id, type_name, class_name)
{
    check_str = class_name +'_'+ type_name +'_'+  row_id
     check_obj = $(check_str)
    if( check_obj != null && check_obj.checked)
        {
            select_box = $(class_name + "_check_"+row_id);
            select_box.checked = true;
        }
        return check_obj.checked
}

function on_select_check_click(row_id, class_name)
{
    select_box = $(class_name +"_check_"+row_id);
    
    if(select_box && !select_box.checked)
        {
            compulosry_box =  $(class_name + "_compulsorycheck_"+row_id);
            compulosry_box.checked = false;
            exam_box =  $(class_name + "_examcheck_"+row_id);
            exam_box.checked = false;
        }
        return select_box.checked
}
function on_assign(id)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });
     sent_tutor = new Element('input',{ type: 'text', name: 'id',  value: id  });
     specific_div.insert({ 'bottom': sent_tutor  });
     class_name = $("action_class").value;
     search_results_div_str = "search_results_" + class_name;
     search_results_div = $(search_results_div_str)
     search_results_div.select('.check').each(function(elt)
     {
            new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
            specific_div.insert({'bottom': new_elt  })
      });

    form_obj = $("action_form");
    form_obj.onsubmit();
}

function on_willing(id)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });
     sent_willing = new Element('input',{ type: 'text', name: 'willing_id',  value: id  });
     specific_div.insert({ 'bottom': sent_willing   });
     class_name = $("action_class").value;
     search_results_div_str = "search_results_" + class_name;
     search_results_div = $(search_results_div_str)
     search_results_div.select('.check').each(function(elt)
     {
            new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
            specific_div.insert({'bottom': new_elt  })
      });

    form_obj = $("action_form");
    form_obj.onsubmit();
}

function on_agatha_send(id,test_flag)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });

    sent_email = new Element('input',{ type: 'text', name: 'email_id',  value: id  })
    sent_test_flag = new Element('input',{ type: 'text', name: 'test_flag',  value: test_flag  })
    specific_div.insert({ 'bottom': sent_email });
     specific_div.insert({ 'bottom': sent_test_flag  });
    $("action_type").value = "send_email"
    form_obj = $("action_form");
    form_obj.onsubmit();
}

function on_sends(test_flag)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });

   
     search_results_div_str = "search_results_AgathaEmail" ;
     search_results_div = $(search_results_div_str)
     search_results_div.select('.check').each(function(elt)
     {
            new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
            specific_div.insert({'bottom': new_elt  })
      });
     sent_test_flag = new Element('input',{ type: 'text', name: 'test_flag',  value: test_flag  })
     specific_div.insert({ 'bottom': sent_test_flag  });
    $("action_type").value = "send_emails"
    form_obj = $("action_form");
    form_obj.onsubmit();
}
function on_create_send(id)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });
    $("action_type").value =  "create_send_email_from_template";
             class_name = $("action_class").value;
            action_div = $(class_name +'_action_div');
            email_template_div = action_div.down('email_template_div');

            term_elt = $("email_template_term");
            term_id = term_elt.value;
            course_elt = $("email_template_course");
            course_id = course_elt.value;
            sent_template = new Element('input',{ type: 'text', name: 'email_template_id',  value: id  })
            sent_term = new Element('input',{ type: 'text',  name: 'term_id', value: term_id });
            sent_course = new Element('input',{ type: 'text',  name: 'course_id', value: course_id });
            specific_div.insert({  'bottom': sent_template});
            specific_div.insert({  'bottom': sent_term});
            specific_div.insert({  'bottom': sent_course});
            class_name2 = $("action_class2").value;
            search_results_div_str = "search_results_" + class_name2;
            search_results_div = $(search_results_div_str)
            search_results_div.select('.check').each(function(elt)
            {
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
                specific_div.insert({'bottom': new_elt  })
            });

        form_obj = $("action_form");
        form_obj.onsubmit();
}

function on_create(id)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
        });
    action_type = $("action_type").value;
    switch (action_type)
    {
        case 'create_lecture_from_course':
            
            class_name = $("action_class").value;
            action_div = $(class_name +'_action_div');
            schedule_div = action_div.down('.schedule_div');
            lecturer_elt = $("new_lecturer");
            person_id = lecturer_elt .value;
            term_elt = $("lecture_term")
            term_id = term_elt.value;
            day_elt = $("lecture_day")
            day_id = day_elt.value;
            time_elt = $("lecture_time")
            lecture_time = time_elt.value;
            num_lectures_elt = $("number_of_lectures");
            number_of_lectures = num_lectures_elt.value;
            num_classes_elt = $("number_of_classes");
            number_of_classes = num_classes_elt.value;

            previous_suggestion_elt = $("previous_lecture_suggestions")
            previous_suggestions = previous_suggestion_elt.value;

            sent_course = new Element('input',{ type: 'text', name: 'course_id',  value: id  })
            sent_lecturer = new Element('input',{type: 'text',name: 'person_id',  value: person_id })
            sent_term = new Element('input',{ type: 'text',  name: 'term_id', value: term_id })
            sent_day = new Element('input',{ type: 'text', name: 'day_id', value: day_id  })
            sent_time = new Element('input',{ type: 'text', name: 'lecture_time', value: lecture_time });
            sent_num_lectures = new Element('input',{ type: 'text',   name: 'number_of_lectures',  value: number_of_lectures   })
            sent_num_classes = new Element('input',{  type: 'text',  name: 'number_of_classes',  value: number_of_classes })
            sent_previous_suggestions =  new Element('input',{ type: 'text',  name: 'previous_suggestions', value: previous_suggestions  })

            specific_div.insert({ 'bottom': sent_course  });
            specific_div.insert({  'bottom': sent_lecturer   });
            specific_div.insert({  'bottom': sent_term});
            specific_div.insert({  'bottom': sent_day  });
            specific_div.insert({  'bottom': sent_time  });
            specific_div.insert({  'bottom': sent_num_lectures });
            specific_div.insert({  'bottom': sent_num_classes});
            specific_div.insert({   'bottom': sent_previous_suggestions });
            break;
        case 'create_tutorials_from_course':
            class_name = $("action_class").value;
            action_div = $(class_name +'_action_div');
            tutorial_schedule_div = action_div.down('.tutorial_schedule_div');
            tutor_elt = $("new_tutor");
            tutor_id = tutor_elt .value;
            term_elt = $("tutorial_schedule_term")
            term_id = term_elt.value;

            num_tutorials_elt = $("number_of_tutorials");
            number_of_tutorials = num_tutorials_elt.value;

            collection_required_elt = $("collection_required");
            if(collection_required_elt.checked)
            {
                collection_required = "1"
            }
            else
            {
                collection_required = "0";
            }
            previous_suggestion_elt = $("previous_tutorial_schedule_suggestions")
            previous_suggestions = previous_suggestion_elt.value;

            sent_course = new Element('input',{ type: 'text', name: 'course_id',  value: id  })
            sent_tutor = new Element('input',{type: 'text',name: 'tutor_id',  value: tutor_id })
            sent_term = new Element('input',{ type: 'text',  name: 'term_id', value: term_id })
            sent_num_tutorials = new Element('input',{ type: 'text',   name: 'number_of_tutorials',  value: number_of_tutorials   })
            sent_collection_required =  new Element('input',{ type: 'text',   name: 'collection_required',  value: collection_required   })
            sent_previous_suggestions =  new Element('input',{ type: 'text',  name: 'previous_suggestions', value: previous_suggestions  })

            specific_div.insert({ 'bottom': sent_course  });
            specific_div.insert({  'bottom': sent_tutor   });
            specific_div.insert({  'bottom': sent_term});
            specific_div.insert({  'bottom': sent_num_tutorials });
            specific_div.insert({  'bottom': sent_collection_required });
            specific_div.insert({   'bottom': sent_previous_suggestions });

            class_name2 = $("action_class2").value;
            search_results_div_str = "search_results_" + class_name2;
            search_results_div = $(search_results_div_str)
            search_results_div.select('.check').each(function(elt)
            {
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
                specific_div.insert({'bottom': new_elt  })
            });
            break;
          case 'create_email_from_template':
             class_name = $("action_class").value;
            action_div = $(class_name +'_action_div');
            email_template_div = action_div.down('email_template_div');

            term_elt = $("email_template_term");
            term_id = term_elt.value;
            course_elt = $("email_template_course");
            course_id = course_elt.value;
            sent_template = new Element('input',{ type: 'text', name: 'email_template_id',  value: id  })
            sent_term = new Element('input',{ type: 'text',  name: 'term_id', value: term_id });
            sent_course = new Element('input',{ type: 'text',  name: 'course_id', value: course_id });
            specific_div.insert({  'bottom': sent_template});
            specific_div.insert({  'bottom': sent_term});
            specific_div.insert({  'bottom': sent_course});
            class_name2 = $("action_class2").value;
            search_results_div_str = "search_results_" + class_name2;
            search_results_div = $(search_results_div_str)
            search_results_div.select('.check').each(function(elt)
            {
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
                specific_div.insert({'bottom': new_elt  })
            });
            break;
        }
        form_obj = $("action_form");
        form_obj.onsubmit();


}
function on_add_attendees(lecture_id)
{

}

function on_action( id)
{
    wait();
    action_type = $("action_type").value;
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){
        elt.remove()
    });

    id_elt = new Element('input',{
        type: 'text',
        name: 'id',
        value: id
    });
    specific_div.insert({
        'bottom': id_elt
    });
    switch (action_type)
    {
        case 'add_to_group': case 'remove_from_group': case 'add_to_groups': case 'remove_from_groups': case 'attach_files': case 'attach_to_emails':
            class_name2 = $("action_class2").value;
            search_results_div_str = "search_results_" + class_name2;
            search_results_div = $(search_results_div_str)
            search_results_div.select('.check').each(function(elt){
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');
                specific_div.insert({
                    'bottom': new_elt
                })
            });
            break;

        case 'add_to_lectures':
            class_name2 = $("action_class2").value;
            search_results_div_str = "search_results_" + class_name2;
            search_results_div = $(search_results_div_str)
            search_results_div.select('.check').each(function(elt){
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id'); specific_div.insert({
                    'bottom': new_elt
                })
            });
            search_results_div.select('.examcheck').each(function(elt){
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');specific_div.insert({
                    'bottom': new_elt
                })
            });
            search_results_div.select('.compulsorycheck').each(function(elt){
                new_elt = elt.cloneNode(true); new_elt.removeAttribute('id');specific_div.insert({
                    'bottom': new_elt
                })
            });
            break;

    }
    form_obj = $("action_form");
    form_obj.onsubmit(); 
}
function set_suggestion_class(suggest_type_str, suggestion_class)
{
    suggest_obj = $("suggest_type")
    suggest_obj.value = suggest_type_str;
    suggest_class_obj = $("suggest_class")
    suggest_class_obj.value = suggestion_class;

}
function set_action_class(class_name, class_name2, action_type)
{
    action_obj = $("action_type");

    action_table = $("action_class");
    action_class2= $("action_class2");
    action_class2.value = class_name2;
    action_table.value = class_name;

    action_obj.value =  action_type;
}

function on_remove(class_name, id)
{
    on_action(class_name, id, "remove_from_group")
}

function on_add(class_name, id)
{
    on_action(class_name, id,  "add_to_group")
}
function on_suggest(course_id)
{
    wait();
    action_type = $("action_type").value;
    suggest_div = $("specific_suggest_variables");
    suggest_div.remove();
    new_suggest_div = new Element('div',{id: 'specific_suggest_variables'});
    $("make_suggestion_div").insert({'bottom':new_suggest_div});
    suggest_div = $("specific_suggest_variables"); 
    //suggest_div.descendants().each(function(elt)
    //{
      //  elt.remove()
    //});
    suggest_id = $("suggest_id");
    suggest_id.value = course_id
    class_name = $("action_class").value;
    action_div = $(class_name +'_action_div');
    switch(action_type)
    {
        case 'create_lecture_from_course':
            schedule_div = action_div.down('.schedule_div');
            lecturer_elt = $("new_lecturer");
            person_id = lecturer_elt .value;
            term_elt = $("lecture_term")
            term_id = term_elt.value;
            day_elt = $("lecture_day")
            day_id = day_elt.value;
            time_elt = $("lecture_time")
            lecture_time = time_elt.value;
            num_lectures_elt = $("number_of_lectures");
            number_of_lectures = num_lectures_elt.value;
            num_classes_elt = $("number_of_classes");
            number_of_classes = num_classes_elt.value;

            previous_suggestion_elt = $("previous_lecture_suggestions")
            previous_suggestions = previous_suggestion_elt.value;


            sent_lecturer = new Element('input',{type: 'text', name: 'person_id', value: person_id})
            sent_term = new Element('input',{type: 'text', name: 'term_id', value: term_id})
            sent_day = new Element('input',{type: 'text', name: 'day_id', value: day_id})
             sent_time = new Element('input',{ type: 'text', name: 'lecture_time', value: lecture_time });
            sent_num_lectures = new Element('input',{type: 'text', name: 'number_of_lectures', value: number_of_lectures})
            sent_num_classes = new Element('input',{type: 'text', name: 'number_of_classes', value: number_of_classes})
            sent_previous_suggestions =  new Element('input',{type: 'text', name: 'previous_suggestions', value: previous_suggestions})
            suggest_div.insert({'bottom': sent_lecturer});
            suggest_div.insert({'bottom': sent_term});
            suggest_div.insert({'bottom': sent_day});
            suggest_div.insert({'bottom': sent_time});
            suggest_div.insert({'bottom': sent_num_lectures});
            suggest_div.insert({'bottom': sent_num_classes});
            suggest_div.insert({'bottom': sent_previous_suggestions});
            break;
     case 'create_tutorials_from_course':
            tutorial_schedule_div = action_div.down('.tutorial_schedule_div');
            tutor_elt = $("new_tutor");
            tutor_id = tutor_elt .value;
            term_elt = $("tutorial_schedule_term")
            term_id = term_elt.value;
            num_tutorials_elt = $("number_of_tutorials");
            number_of_tutorials = num_tutorials_elt.value;
            previous_suggestion_elt = $("previous_tutorial_schedule_suggestions")
            previous_suggestions = previous_suggestion_elt.value;
            
            sent_tutor = new Element('input',{type: 'text', name: 'person_id', value: tutor_id})
            sent_term = new Element('input',{type: 'text', name: 'term_id', value: term_id})
            sent_num_tutorials = new Element('input',{type: 'text', name: 'number_of_lectures', value: number_of_tutorials})
            sent_previous_suggestions =  new Element('input',{type: 'text', name: 'previous_suggestions', value: previous_suggestions})
            suggest_div.insert({'bottom': sent_tutor});
            suggest_div.insert({'bottom': sent_term});
            suggest_div.insert({'bottom': sent_num_tutorials});
            suggest_div.insert({'bottom': sent_previous_suggestions});
            break;
    }
    
//    descended_elt = schedule_div.firstDescendant();
//    while(descended_elt != null)
//        {
 //           insert_elt = descended_elt.cloneNode(true);
 ///           suggest_div.insert({'bottom': insert_elt });
  //          descended_elt = descended_elt.next();
  //      }
        make_suggestion_form = $("make_suggestion")
        make_suggestion_form.onsubmit();    
}



function SetMaxTutorials()
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){elt.remove()});
    term_elt = $("max_tutorials_term")
    term_id = term_elt.value;
    sent_term = new Element('input',{type: 'text', name: 'term_id', value: term_id})
    specific_div.insert({'bottom': sent_term});

    max_tutorials_elt = $("max_tutorials")
    max_tutorials = max_tutorials_elt.value;
    sent_max_tutorials = new Element('input',{type: 'text', name: 'max_tutorials', value: max_tutorials})
    specific_div.insert({'bottom': sent_max_tutorials});

    search_results_div_str = "search_results_Person";
    search_results_div = $(search_results_div_str)
    search_results_div.select('.check').each(function(elt){new_elt = elt.cloneNode(true); specific_div.insert({'bottom': new_elt})});

  

    action_obj = $("action_type")
    action_obj.value = "max_tutorials"
    action_table = $("action_class");
    action_table.value = "Person";

    form_obj = $("action_form");
    form_obj.onsubmit();

}

function CreateGroup(class_name)
{
    wait();
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){elt.remove()});
    group_name_id = "new_group_name_" + class_name;
    group_name_elt = $(group_name_id);
    cloned_group_name_elt = new Element('input',{type: 'text', name: 'new_group_name', value: group_name_elt.value})
    group_name_elt.value = "";
    specific_div.insert({'bottom': cloned_group_name_elt});
    search_results_div_str = "search_results_" + class_name;
    search_results_div = $(search_results_div_str)
    search_results_div.select('.check').each(function(elt){new_elt = elt.cloneNode(true); specific_div.insert({'bottom': new_elt})});

    action_div = $(class_name +'_action_div');
    action_div.select('.group_privacy').each(function(elt){new_elt = elt.cloneNode(true); specific_div.insert({'bottom': new_elt})});


    action_obj = $("action_type")
    action_obj.value = "group"
    action_table = $("action_class");
    action_table.value = class_name;

    form_obj = $("action_form");
    form_obj.onsubmit();
}

function GetRadioValue(radio_list)
{
    default_ret_val = radio_list[0].value;
    length = radio_list.length;
    for(i=0;i<length; i++)
    {
        if(radio_list[i].checked == true)
        {
            return radio_list[i].value;
        }
    }
    return default_ret_val;
}
function UpdateCollectionStatus()
{
    wait();
    class_name = "Tutorial"
    specific_div = $("specific_action_variables");
    specific_div.descendants().each(function(elt){elt.remove()});

    search_results_div_str = "search_results_" + class_name;
    search_results_div = $(search_results_div_str)
    search_results_div.select('.check').each(function(elt){new_elt = elt.cloneNode(true); specific_div.insert({'bottom': new_elt})});


    action_div = $(class_name +'_action_div');
    radio_list = action_div.select('.collection_status');
    collection_status = GetRadioValue(radio_list);
    cloned_collection_status_elt = new Element('input',{type: 'text', name: 'collection_status', value: collection_status});
    specific_div.insert({'bottom': cloned_collection_status_elt});


    action_obj = $("action_type")
    action_obj.value = "update_collection_status"
    action_table = $("action_class");
    action_table.value = class_name;

    form_obj = $("action_form");
    form_obj.onsubmit();




}

function add_group(class_name, group_name, new_group_id)
{
   external_filter_group_selection_class =  ".external_filter_group_selection_"+class_name;
   external_filter_group_selection_classes = $$(external_filter_group_selection_class)
   external_filter_group_selection_classes.each(function(select_elt)
   {
       insert_option(select_elt, group_name, new_group_id);
   });
   argument_selection_group_span_class = ".argument_selection_group_" + class_name;
   $$(argument_selection_group_span_class).each(function(span_sibling)
   {
       select_elt = span_sibling.next('select');
       if(select_elt !=null)
           {
       insert_option(select_elt, group_name, new_group_id);
           }
   });   
}

function insert_option(select_elt, group_name, new_group_id)
{
    first_option = select_elt.down('option');

    current_option = first_option;
    next_option = first_option.next('option');
    while(next_option != null && next_option.text.toLowerCase() < group_name.toLowerCase())
        {
            current_option = next_option;
            next_option = current_option.next('option');
        }
        var new_option = new Element('option', {'value': new_group_id, 'class': 'group_class_' + new_group_id })
        new_option.text = group_name;
        current_option.insert({'after': new_option});
}
function any_selected(class_name)
{
    var ret_val = false

    search_results_div_str = "search_results_" + class_name;
    search_results_div = $(search_results_div_str)
    search_results_div.select('.check').each(function(elt){
        if(elt.checked)
        {
            ret_val = true;
            throw $break;
        }
        else
            {
                x = 1;
            }
    });
    return ret_val;
}

function DeleteMembers(class_name)
{

    if(!any_selected(class_name))
        {
            alert('You have not selected any items for deletion!');
            return;
        }
        wait();

        confirm_str = "Are you sure you want to delete selected members from " + class_name + " table?";
    var answer = confirm (confirm_str)
if (!answer)
    {
        unwait();

 return;
    }
    specific_div = $(specific_action_variables);
    specific_div.descendants().each(function(elt){elt.remove()});
    search_results_div_str = "search_results_" + class_name;
    search_results_div = $(search_results_div_str)
    search_results_div.select('.check').each(function(elt){new_elt = elt.cloneNode(true); elt.removeAttribute('id'); specific_div.insert({'bottom': new_elt})});

    action_obj = $("action_type")
    action_obj.value = "delete"
    action_table = $("action_class");
    action_table.value = class_name;
   
    form_obj = $("action_form");
    form_obj.onsubmit();

   
}


function on_delete(table_name,id)
{
    confirm_str = "Are you sure you want to delete " + table_name + " with id = " + id +"?";
    var answer = confirm (confirm_str)
    wait();
if (!answer)
    {
        unwait();

 return;
    }


   table_obj_str = "delete_table_name"
   table_obj = $(table_obj_str);
   id_obj_str = "delete_id"
   id_obj = $(id_obj_str);
   form_obj_str = "form_delete";
   form_obj = $(form_obj_str);
   table_obj.value = table_name;
   id_obj.value = id;
   ids = new Array;
   ids[0] = id;
   
   form_obj.onsubmit();
}

var row_count = 0;

function recolour(table_name)
{
    row_objs_str = ".row_" + table_name
    row_count = 0;
    $$(row_objs_str).each(function(row){
        if( row_count  % 2 == 0)
        {
            row.setStyle({
                background:'#CCCCCC'
            });
        }
        else
        {
            row.setStyle({
                background:'#EEEEEE'
            });
        }
        row_count  = row_count +1;
    });

}
function on_del(table_name, ids)
{
//    alert_str = "table = " + table_name + ", ids = ";
//   ids.each(function(id){alert_str = alert_str + id + ", "});
//    alert(alert_str);
    ids.each(function(id){
        name = table_name + '_' + id;
        win_ref = open_windows.get(name);
        if(win_ref!=null && !win_ref.closed)
        {
            win_ref.close();
        }
        open_windows.unset(name);
        row_obj_str = ""+ id +"_"+ table_name;
        row_obj = $(row_obj_str);
        if(row_obj != null)
        {
            row_obj.remove();
        }
    });
    row_objs_str = ".row_" + table_name
    row_count = 0;
    $$(row_objs_str).each(function(row){
        if( row_count  % 2 == 0)
        {
            row.setStyle({
                background:'#CCCCCC'
            });
        }
        else
        {
            row.setStyle({
                background:'#EEEEEE'
            });
        }
        row_count  = row_count +1;
    });



  //  action_obj_str = "action_" + table_name
  //  action_obj = $(action_obj_str)
  //  action_obj.value = "delete"

  //  form_obj = $(form_obj_str);
  //  form_obj.onsubmit();
}






function updateRecord(class_name)
{

// alert('updateRecord!');
x = 1;

}
function documentBlur()
{
  //  on_unload();
}

function editClick(attribute_opener,  opener_id, table_name, class_name, current_id, e)
{
    if(e.shiftKey && current_id != 1)
    {
       open_edit_window(attribute_opener, opener_id, table_name,class_name,current_id);
      //  alert("attribute_name = " + attribute_name + ", data_type = " +data_type +", current_id = "+current_id+ ", shift_key = " + e.shiftKey);
    }
}

function editBlur(attribute_name, data_type)
{
    emailBlur();
    field_name_obj = $("field_name");
    field_value_obj = $("field_value");
    field_data_type_obj = $("field_data_type");
    field_name_obj.value = attribute_name;
    field_data_type_obj.value = data_type;
    current_attribute_obj_str ="edit_"+ attribute_name;
    if(attribute_name=="collection_status")
    {
        radio_elts = $$("input.collection_status");
        found = false;
        found_val = 0;
        num_elts=radio_elts.length;
        for(i=0;i<num_elts && !found; i++)
        {
            if(radio_elts[i].checked)
            {
               found=true;
               found_val = radio_elts[i].value;
            }
        }
        field_value_obj.value = found_val;

    }
    else if(data_type.length !=0)
    {
    if(data_type== "boolean")
        {
            current_attribute_obj_str=  current_attribute_obj_str + "_1"
        }


    current_attribute_obj = $(current_attribute_obj_str);
    if(data_type != "boolean")
        {
        field_value_obj.value = current_attribute_obj.value;
        }
    else
        {
            field_value_obj.value = current_attribute_obj.checked;
        }
    }

    form_obj = $("update_form");
    form_obj.onsubmit();
}

function editFocus(attribute_name, data_type)
{
    $("unload_attribute").value = attribute_name;
    $("unload_data_type").value = data_type;

}

function emailBlur()
{
    table_name = $("unload_table_name");
    body_id = table_name.value+"_body";
    body_obj = $(body_id);
    if(body_obj == null)
     {
         return;
    }
    my_iframes = $(body_id).select('iframe');


     my_iframe =  my_iframes[0];
     iframe_ind =1;
     while (my_iframe.className!= "yui-editor-editable" && iframe_ind < my_iframes.length)
         {
             my_iframe = my_iframes[iframe_ind];
             iframe_ind = iframe_ind + 1;

             }


  my_body = my_iframe._document().body;
  text_content = my_body.innerHTML;
  if(/&lt;/.test(text_content))
      {
          text_content = text_content.replace(/&lt;/g,'<');

          }
            if(/&gt;/.test(text_content))
      {
          text_content = text_content.replace(/&gt;/g,'>');

          }
      
    body_value_obj = $("body_value");
   
 
   
   body_value_obj.value = text_content;

    return;

}
var myEditor = null;
function add_blur_listener()
{
    myEditor.on('editorWindowBlur', function()
{
   myEditor.saveHTML();

   editBlur("","")



},myEditor, true);

    }

function  yahoo_widget()
{

    var myEditor2 = new YAHOO.widget.Editor('edit_body', {
    height: '250px',
    width: '522px',
    dompath: true, //Turns on the bar at the bottom
    animate: true //Animates the opening, closing and moving of Editor windows
});
myEditor2._defaultToolbar.titlebar = false
myEditor2._defaultToolbar.buttonType = 'advanced';
myEditor2.render();

 myEditor =myEditor2;
add_blur_listener();

x=1;



    }
