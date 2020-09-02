$( document ).ready(function() {

    $("#copyToClipboardBtn").click(function(){
        copyToClipboard();
    });

    function copyToClipboard() {
        console.log("copyToClipboard");
        var copyText = document.getElementById("copiedCoupon");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Texto copiado: " + copyText.value);
    }
});
