$(document).ready(() => {

    $('.change-devoured').on('click', (event) => {
        const id = $(this).data('id');
        const oneDevoured = $(this).data('onedevoured');
        const devouredState = {
            devoured: oneDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(data => {
            console.log("This one has just been ", oneDevoured);
            location.reload();
        });
    });

    $('.create-form').on('submit', event => {
        event.preventDefault();

        const newBurger = {
            name: $('#burger').val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        
        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(data => {
            console.log(`Newest addition: ${data}`);
            location.reload();
        })
    });

    $('.delete-burger').on('click', (event) => {
        var id = $(this).data('id');

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(data => {
            console.log(`No need for: ${id} any longer.`);
            console.log(`delete data: ${data}`);
            location.reload();
        });
    })

});