window.onload = initPage;
            
function initPage() {

    var exampleValues = {},
        parsedTemplate = "",
        templateText = $('#popupTemplate').html(),
        demoTemplate = _.template(templateText);

    $.ajax({
        url: "rezervacija.json", 
        async: false, 
        dataType: "json", 
        success: function(json) {
            exampleValues = json;
        }
    });
    parsedTemplate = demoTemplate(exampleValues);
    $(".popup-inner").html(parsedTemplate);

}