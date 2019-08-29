$(function () {

    // Проверка поля телефон на правильность ввода

    $('#formUserPhone').on('blur', function () {
        $(this).css('background', 'rgb(232, 240, 254)');
        if ($(this).val().length < 17) {
            alert('Введите телефон полностью');
            $(this).css('background', '#f5d2d5');
            return false
        }
    });

    // Запись данных в localStorage

    $('.nav__user__link').on('click', function getUserData() {

        var formUserFirstName = $('#formUserFirstName').val();
        var formUserLastName = $('#formUserLastName').val();
        var formUserFamily = $('#formUserFamily').val();
        var formUserPhone = $('#formUserPhone').val();
        var formUserEmail = $('#formUserEmail').val();


        if (formUserFirstName != '' && formUserLastName != '' && formUserFamily != '' && formUserPhone != undefined && formUserEmail != '') {

            localStorage.clear(); // очистка localStorage

            localStorage.setItem("UserFirstName", formUserFirstName);
            localStorage.setItem("UserLastName", formUserLastName);
            localStorage.setItem("UserFamily", formUserFamily);
            localStorage.setItem("UserPhone", formUserPhone);
            localStorage.setItem("UserEmail", formUserEmail);

        } else {
            $('.form-control').each(function () {
                $(this).css('background', 'rgb(232, 240, 254)');
                if ($(this).val() == "") {
                    $(this).css('background', '#f5d2d5');
                }
            })

            alert('заполните все поля');
            return false
        }

    });

// Вывод данных на страницу


        var firstName = localStorage.getItem("UserFirstName");
        var lastName = localStorage.getItem("UserLastName");
        var userFamily = localStorage.getItem("UserFamily");
        var userPhone = localStorage.getItem("UserPhone");
        var userEmail = localStorage.getItem("UserEmail");

        $('.firstName__user__data').text(firstName);
        $('.lastName__user__data').text(lastName);
        $('.family__user__data').text(userFamily);
        $('.phone__user__data').text(userPhone);
        $('.email__user__data').text(userEmail);



});