$("#content").append("<img src='Sasquatch.jpg' alt='Sasquatch Coffee'>")
$("#content").append("<h1>Welcome to Sasquatch Coffee Company</h1>")
$("#content").append("<p>We are located in the deep deep forrest.</p>")

var list = '<ul id="tabMenu">'
            + '<li><a class=""'
            + 'id="tabOne">Menu</a></li>'
            + '<li><a class=""'
            + 'id="tabTwo">Map</a></li>'
            + '<li><a class=""'
            + 'id="tabThree">Contact</a></li>'
            + '</ul>'
            + '<div id="page"></div>'
$("#content").append(list);

$("#page").html("<p>Here is our menu: </p>");
$("#tabOne").addClass("active");

bindTabClickToSetPageContent("#tabOne", "<p>Here is our menu: Dirt, Mud, Bean Juice, Joe </p>");
bindTabClickToSetPageContent("#tabTwo", "<p>We are located in the deep deep forrest. </p>");
bindTabClickToSetPageContent("#tabThree", "<p>We can be reached at: (555)555-5555 </p>");

function bindTabClickToSetPageContent(selector,content) {
    $(selector).click(function() {
       $("#page").html(content);
        $("#a").removeClass("active");
        $(this).addClass("active");
    });
}
           