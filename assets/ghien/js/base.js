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
    $(document).ready(function(){
        $('ul.tabs').tabs();
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


})(jQuery);