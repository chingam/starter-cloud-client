$(document).ready(function() {
	sales.init();
	sales.addItems();
	
	
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
    $( "#tags" ).autocomplete({
        source: availableTags,
        create: function () {
            $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                return $('<li>')
                    .append('<a>' + item.label + '<br>' + item.value + '</a>')
                    .appendTo(ul);
            };
        },
        search: function(event, ui) {
        	console.log($(this).parents());
            $(this).parents('.input-group').find('span.input-group-addon i.fa').removeClass('fa-search').addClass('fa-repeat autocompletesearching');
        }
      });
	
	
} );

var sales = {
		init : function () {
			$("#productForm").validate();
			
			
			$("#products").blur(function(){
				$("#qty").focus();
			});
			
			$('#products').keypress(function (e) {
				 var key = e.which;
				 if(key == 13)  // the enter key code
				  {
					 console.log("ttttt");
					 $("#qty").focus();
				    return false;  
				  }
				});
			
			
			
			
		},
		
		addItems : function(){
			
			$('#qty').keypress(function (e) {
				 var key = e.which;
				 if(key == 13)  // the enter key code
				  {
					 var qty = $(this).val();
					 var salesPrice = 10;
					 var tprice = qty * salesPrice;
					 var subTotal = 0;
					 var item = "<tr>"
							+"<td>Tiger Nixon</td>"
							+ "<td><input class='noOfqty' type='text' value='"+qty+"'/></td>"
							+ "<td><input id='tprice' disabled='disabled' value='"+salesPrice+"'/></td>"
							+ "<td><input class='tprice' disabled='disabled' value='"+tprice+"'/></td>"
							+"<td style='text-align: right'>" +
									"<button type='button' class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash'></span></button></td>"
							+ "</tr>";
					 		var aa=$(item);
					 		$('#example > tbody:last-child').append(aa);
					 		$("#products").focus();
					 		sales.changeQty();
					 		sales.setSubTotal();
					 		$(".btn-danger").click(function(){
								console.log("rrrrr");
								$(this).parents("tr").remove();
							});
					 		
				    return false;
				  }
				});
			
			
		},
		
		changeQty : function (){
			$(".noOfqty").change(function(){
				var quantity = $(this).val();
				var parent = $(this).parent().parent();
				var aa = parent.find("td").eq(2).html();
				var total = parent.find("td").eq(3).html();
				parent.find(".tprice").val(quantity * parseInt($(aa).val()));
			    sales.setSubTotal();
			}); 
		},
		
		setSubTotal : function () {
			var subTotal = 0;
			$('#example tbody tr').each(function() {
	 			var spric = $(this).find(".tprice").val();
	 			var spric = parseInt($(this).find(".tprice").val());
	 			subTotal = subTotal + spric;
	 			});
	 		console.log(subTotal);
	 		$("#stotal").val(subTotal);
		}
}