
window.ToDoList = {
    apiurl: "http://localhost:8071/to-do-items",

    addItem: function () {
       var description = $("input[title='Description']").val();
       var deadline = $("input[title='Deadline']").val();
        var data = {
            'description': description,
            'deadline': deadline
        };


        $.ajax({
            url: ToDoList.apiurl,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)
        }).done(function (response) {
            console.log(response);
            //reload items table

        });
},
binEvents: function () {

        $("#to-do-items").submit(function (event) {
            event.preventDefault();

            ToDoList.addItem();
return false;
        })

}

    }

};

ToDoList.binEvents();