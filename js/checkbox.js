$(document).ready(function() {
    $.each($('.modal__checkbox'), function(index, val) {
        if($(this).find('input').prop('chekced')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.modal__checkbox', function(event) {
        if($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        }else{
            $(this).find('input').prop('checked', true);
        }

        $(this).toggleClass('active')

        return false;
    });

    $.each($('.card__checkbox'), function(index, val) {
        if($(this).find('input').prop('chekced')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.card__checkbox', function(event) {
        if($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        }else{
            $(this).find('input').prop('checked', true);
        }

        $(this).toggleClass('active')

        return false;
    });

    $.each($('.verif-block__checkbox'), function(index, val) {
        if($(this).find('input').prop('chekced')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.verif-block__checkbox', function(event) {
        $(this).parents('.verif-block__checkboxes-inner').find('.verif-block__checkbox').removeClass('active');
        $(this).parents('.verif-block__checkboxes-inner').find('.verif-block__checkbox input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });
});