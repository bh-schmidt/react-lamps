import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

export function configureToastr() {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-bottom-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: 300,
        hideDuration: 1000,
        timeOut: 5000,
        extendedTimeOut: 1000,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }
}

export default class ToastrHandler {
    static error(message) {
        toastr.error(message)
    }
}