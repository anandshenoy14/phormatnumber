
// the html for phone_number field
// <input id="phone_number" name="phone_number" type="text" />
// the html ends

global_var = 0;
$('#phone_number').keypress(function(e)
{
    var keyPressedInString = (parseInt(e.keyCode)-48).toString();
    var existingVal = $('#phone_number').val();
    ++(window.global_var);
    if(window.global_var==1){
        e.preventDefault();
        $('#phone_number').val('(' + keyPressedInString);
        return;
    }
    if(window.global_var==3){
        e.preventDefault();
        $('#phone_number').val(existingVal+ keyPressedInString +')');
        return;
    }
    if(window.global_var==6){
        e.preventDefault();
        $('#phone_number').val(existingVal+keyPressedInString+'-');
        return;
    }
});