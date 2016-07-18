/**
 * Created by tranxuanduc on 7/13/16.
 */

(function () {
    /////////////////////
    ///Function Load ///
    ///////////////////
    /**
     * Function Load Side Nav
     */
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    /**
     * Trigger Modal
     */
    $('.modal-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            ready: function () {
                $('ul.tabs').tabs();
            }, // Callback for Modal open
            complete: function () {
                $('ul.tabs').tabs();
            } // Callback for Modal close
        }
    );

    /**
     * Trigger Tabs
     */
    $(document).ready(function () {
        $('ul.tabs').tabs();

        $('select').material_select();

        $('.materialboxed').materialbox();
    });
    ////////////////////////
    //End Function Load ///
    //////////////////////
    /**
     * Function
     * @param options
     */
    $.fn.uploadImage = function (options) {
        var check = this.val();

        console.log(this.attr('id'));
    };

    /**
     * Hiện thị xem thêm dạng collection
     */
    $.fn.showCollection = function () {
        var element = this;

        var hide = element.find('.hide').each(function () {
            $(this).css('opacity', '0');
            $(this).removeClass('hide');

        });

        Materialize.showStaggeredList("#" + element.attr('id'));
    }

    $(document).ready(function(){
        $('.collapsible').collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    });
})(jQuery);