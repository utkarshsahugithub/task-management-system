$(document).ready(function() {
    var arrayIncompltedTask = [];
    var arrayCompletedTask = [];
    
    function addContent() {
        var taskValue = $("#inputBox").val();

        var singleTaskContainer = $("<div></div>");

        var singleTaskValue = $("<p></p>").text("Text.");
        var editButton = $("<button></button>").text("Edit");
        var deleteButton = $("<button></button>").text("Delete");

        singleTaskContainer.append(singleTaskValue, editButton, deleteButton);
        console.log(singleTaskContainer.text());

        var singleTaskList = $("<li></li>");
    }

    $("#addTaskBtn").on("click", function(e) {
        e.preventDefault();
        addContent();
    })
    
});