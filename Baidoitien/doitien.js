
function doitien() {
        var amount = document.getElementById('amount').value;
        var from = document.getElementById('from').value;
        var to = document.getElementById('to').value;

       /* Trường hợp đổi từ VND sang USD*/
        if (from == 'VND' && to == 'USD') {
            var area = amount / 23000;
            alert("Kết quả là "+ area);
        } 
        else {
        	/* Trường hợp đổi từ VND sang VND*/
            if (from=='VND' && to=='VND') {
                var area = amount;
                alert(area);
            }
            else {
            /* Trường hợp đổi từ USD sang USD*/
                if (from=='USD'&& to=='USD') {
                    var area = amount;
                    alert(area);
                }
                else {
            /* Trường hợp đổi từ USD sang VND*/
                    var area = amount * 23000;
                    alert(area);
                }
                    
             }
            
        }
    }