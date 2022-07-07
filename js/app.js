document
  .getElementById("Email")
  .setAttribute(
    "pattern",
    "^[a-zA-Z0-9._%+-]+@(?!redberry.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
  ).setAttribute(
    "oninvalid",
    "setCustomValidity('Please enter business email')"
  ).setAttribute("onchange", "try{setCustomValidity('')}catch(e){}')");



//   function custom_template(obj){
//     var data = $(obj.element).data();
//     var text = $(obj.element).text();
//     if(data && data['../img/Rectangle 6.png']){
//         img_src = data['../img/Rectangle 6.png'];
//         template = $("<div><img src=\"" + img_src + "\" style=\"width:100%;height:150px;\"/><p style=\"font-weight: 700;font-size:14pt;text-align:center;\">" + text + "</p></div>");
//         return template;
//     }
// }
// var options = {
// 'templateSelection': custom_template,
// 'templateResult': custom_template,
// }
// $('#id_select2_example').select2(options);
// $('.select2-container--default .select2-selection--single').css({'height': '220px'});


$("#opimg").ddslick({
  width: '100%',
  imagePosition: 'right',
  selectText: "select your chess",
  onSelected: function(data){
    
  }

})