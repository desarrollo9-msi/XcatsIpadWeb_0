
var modalSpinner = new bootstrap.Modal(document.getElementById('loadingModal'));

function ajaxActualizarPostData(url_, dato_, ResponseExito, ResponseError) {
    //debugger;
    var token = $('input[name="__RequestVerificationToken"]').val();
    $.ajax({
        url: url_,
        xhrFields: { withCredentials: true },
        type: 'POST',
        data: { dato: dato_, __RequestVerificationToken: token },
        beforeSend: function () {
            modalSpinner.show();
        },
        success: function (result) {
            if (result.status == true) {
                ResponseExito(result);
            } else {
                ResponseError(result);
            }
        },
        error: function (ex) {
            alert("Error en la petición");
        },
        complete: function () {
            modalSpinner.hide();
        }
    })
}
//Se agrega para limitar carcateres 
function LimitText(text, long) {
    var maxlength = new Number(long);
    if (text.value.length > maxlength) {
        text.value = text.value.substring(0, maxlength);
    }
}
//Se agrega para limitar carcateres en el modelo  "A8"
function LimiteTexto(text, long, idSpan) {
    var maxlength = new Number(long);
    if (text.value.length > maxlength) {
        text.value = text.value.substring(0, maxlength);
    }
    var caracterReal = maxlength - text.value.length;
    $("#"+idSpan).text(caracterReal + " Caracteres");
}
