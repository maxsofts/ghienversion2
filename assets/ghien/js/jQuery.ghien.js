/**
 * Created by tranxuanduc on 7/18/16.
 */
/**
 * Function Upload Image
 * @param options
 */

$.fn.formUpload = function (options) {
    var defaults = {
        'class': 'ghien-form-status-create',
        'types': ["image/jpeg", "image/png", "image/jpg"]
    };

    options = $.extend(options, defaults);

    $("." + options.class).each(function () {
        var thisElement = $(this);
        var file = $(this).find('input:file');

        /*
         * Sự kiện file đã chọn
         */
        file.change(function () {
            var fileInput = $(this)[0].files; // for multiple files
            console.log(fileInput);

            $.each(fileInput,function(k,imageFile){
                var imageType = fileInput.type;
                //Kiểm tra định dạng ảnh có phù hợp không
                if (-1 == $.inArray(imageType, options.types)) {
                    file.replaceWith(file.val('').clone(true));//Clear ảnh trong input
                    var ext = imageType.split("/")[1];
                    var errorContent = $('<span>Không hỗ trợ định dạng file ' + ext + '</span>');
                    var noteContent = $('<span>Chỉ hỗ trợ các dịnh dạng <span class="red-text">jpg</span>,<span class="yellow-text">png</span>,<span class="amber-text">jpeg</span></span>');
                    Materialize.toast(errorContent, 5000, 'rounded', function () {
                        Materialize.toast(noteContent, 5000, 'rounded')
                    });
                    return false;
                }
            });

            fileInput = fileInput[0];





            ////ẩn button chọn file -- hiển thị loading + ảnh đã load
            //var preview = $("#" + file.attr('data-preview'));
            //if (preview) {
            //    var labelImage = $("label[for='" + file.attr('id') + "']");
            //    labelImage.addClass('hide');
            //    preview.removeClass('hide');
            //
            //    //Hiển thị ảnh preview
            //    var imagePreview = preview.find('.image-preview img')[0];
            //
            //    var reader = new FileReader();
            //    reader.onload = function image_render(e) {
            //        $(imagePreview).attr('src', e.target.result);
            //    };
            //    reader.readAsDataURL(fileInput);
            //
            //    var loading = preview.find('.loading');
            //
            //    //Giả thời gian upload thành công
            //    setTimeout(function() {
            //        loading.addClass('hide');
            //    }, 2000);
            //
            //    /*
            //     * Bắt sự kiện nhấn nút close
            //     */
            //    var close = preview.find('a.close');
            //
            //    close.click(function(){
            //        preview.addClass('hide');
            //        labelImage.removeClass('hide');
            //        loading.removeClass('hide');
            //        file.replaceWith(file.val('').clone(true));//Clear ảnh trong input
            //        $(imagePreview).attr('src', ""); //Xoá ảnh
            //    });
            //
            //}
        });


    });

};