$(function () {
    //search-list
    $('form.search input.search').each(function () {
        if ($(this).attr('data-list')) {
            $(this).keyup(function () {
                var value = $(this).val();
                var list = "." + $(this).attr('data-list');
                if (value.length < 3) {
                    $(list).children().show();
                } else {
                    $(list).children().hide();
                    $(list).children().each(function () {
                        var tags = $(this).attr('data-tags');
                        if (tags.indexOf(value) > -1) {
                            $(this).show();
                        }
                    });
                }
            });
        }
    });
});