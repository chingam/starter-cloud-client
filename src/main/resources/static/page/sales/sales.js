$(document).ready(function() {
	sales.init();
	sales.addItems();
	sales.searchProduct();
	sales.saveDefault();
	sales.addButton();
	var formAlert = "#mess";
	
	
	
});

var sales = {
		init : function () {
			sales.pageLoad();
			$("#mainform").validate();
			$("#products").blur(function(){
				$("#qty").focus();
			});
			// the enter key code
			$('#products').keypress(function(e) {
			var key = e.which;
			if (key == 13) {
				$("#qty").focus();
				return false;
				}
			});
		},
		
		addItems : function(){
			$('#qty').keypress(function (e) {
				var key = e.which;
				// the enter key code
				if(key == 13) {
					sales.addBucket();
					return false;
				 }
			});
		},
		addBucket : function () {
			var validator = $( "#mainform" ).validate();

			if(validator.form()) {
				
			
				var len = $("#itemTable tr").length;
				len++;
				var qtyField = $('#qty');
				var qty = qtyField.val();
				var salesPrice = $(".product-price").val();
				var productCode = $(".multicolumn-val").val();
				var tprice = qty * salesPrice;
				var subTotal = 0;
				var item = "<tr>"
						+"<td><input name='products["+len+"].code' type='hidden' value='"+productCode+"'/><input name='products["+len+"].name' type='hidden' value='"+$(".multicolumn-desc").val()+"'/><span>"+ $(".multicolumn-desc").val() +"</span></td>"
						+ "<td><input data-rule-number='true' data-rule-minlength='1' data-rule-required='true' name='products["+len+"].quantity' class='noOfqty' type='text' value='"+qty+"'/></td>"
						+ "<td><input name='products["+len+"].price' type='hidden' value='"+salesPrice+"'/><input id='tprice' disabled='disabled' value='"+salesPrice+"'/></td>"
						+ "<td><input name='products["+len+"].totalPrice' type='hidden' value='"+tprice+"'/><input class='tprice' disabled='disabled' value='"+tprice+"'/></td>"
						+"<td style='text-align: right'>" +
								"<button type='button' class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash'></span></button></td>"
						+ "</tr>";
				 		var aa=$(item);
				 		$('#example > tbody:last-child').append(aa);
				 		$("#products").focus();
				 		sales.changeQty();
				 		sales.setSubTotal();
				 		$(".btn-danger").click(function(){
							$(this).parents("tr").remove();
							sales.setSubTotal()
						});
			}
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
		},
		searchProduct : function () {
			var searchField = $( ".multicolumn-search" );
			searchField.autocomplete({
				source: function(responseData1, response) {
					$.ajax({
						url: searchField.data("search-url") + searchField.val(),
						delay: 500,
						dataType: "json",
						success: function(responseData) {
							console.log(responseData);
							var resultsList = [];
							var headerrecord = {};
							if (responseData.headings) {
								headerrecord.headings = responseData.headings;
								resultsList.push(headerrecord);
							}
							if ($.isArray(responseData.values)) {
								responseData = responseData.values;
							}
							for (var i = 0; i < responseData.length; i++) {
								record = {};
								record.key = responseData[i].key;
								record.multiColumn = false;
								if ($.isArray(responseData[i].value)) {
									record.multiColumn = true;
									record.value = [];
									for (var j = 0; j < responseData[i].value.length; j++) {
										record.value[j] = responseData[i].value[j];
									}
								} else {
									record.value = responseData[i].value;
								}
								record.data = responseData[i].data;
								resultsList.push(record);
							}
							
							setTimeout(function() {
								response(resultsList);
								$(".multicolumn-search").parents('.input-group').find('span.input-group-addon i.fa').removeClass('fa-repeat autocompletesearching').addClass('fa-search');
							}, 1000);
						}
					});
				},
				create: function () {
					$(this).data('ui-autocomplete')._renderItem = function (ul, data) {
					console.log("Call product search");
					if(data.multiColumn || data.headings){
						if (data.headings) {
							var headingHTML = "";
							for(var i = 0; i < data.headings.length; i++){
								if(data.headings[i]){
									headingHTML = headingHTML + "<div class='heading'>" + data.headings[i] + "</div>";
								}
							}
							return $("<li class='columnautocomplete ui-menu-item disabled'></li>")
							.data("item.autocomplete", data)
							.append(headingHTML)
							.appendTo(ul);//li.columnautocomplete
						}
						else {
							var content = "<a>";
							var dataLines = data.value;
							for(var i = 0; i < dataLines.length; i++){
								var value = (dataLines[i] !== '' || dataLines[i] !== undefined) ? dataLines[i]: "-";
								content = content + "<div class='col cell"+ i+ "'>" + value + "</div>";
							}
							content = content + "</a>";
							var el = $("<li class='columnautocomplete'></li>").data("item.autocomplete", data)							
							.append(content)
							.appendTo(ul);
							$(ul).find("li:odd").addClass("odd");
							return el; 
						}
					}else{
						return $( "<li>" )
						.attr( "data-value", data.value )
						.append( $( "<a>" ).text( data.label ) )
						.appendTo( ul );
					}
		};
				},
				select: function(event, ui){
					setTimeout(function() {
						$( ".multicolumn-search" ).val(ui.item.value[1]);
						$( ".multicolumn-val" ).val(ui.item.key);
						$( ".multicolumn-desc" ).val(ui.item.value[1]);
						$( ".product-price" ).val(ui.item.value[2]);
					}, 10);
					console.log(ui.item.value[0]);
		},
				search: function(event, ui) {
					$(this).parents('.input-group').find('span.input-group-addon i.fa').removeClass('fa-search').addClass('fa-repeat autocompletesearching');
				}
				});
		},
		addButton : function () {
			$("#addBtn").on("click", function(){
				sales.addBucket();
			});
		},
		saveDefault : function (){
			$(".btn-success").on("click", function() {
				var validator = $( "#mainform" ).validate();
				if(!validator.form()) {
					return;
				}
				var jsonData = {};
				var formData = $('form#mainform').serializeArray();
				
				$.ajax({
					url: "/sales",
					type: "POST",
					delay: 500,
					data: formData,
					success: function(responseData) {
						if (responseData.status === "fail") {
							sales.showAlert("#mess", "body", responseData.tag, responseData.message);
							return;
						} else if (responseData.redirect !== ""){
							window.location.href=responseData.redirect;
						}
					}
				});
				
//				$.each(formData, function() {
//					if (jsonData[this.name]) {
//						if (!jsonData[this.name].push) {
//							jsonData[this.name] = [jsonData[this.name]];
//						}
//						jsonData[this.name].push(this.value || '');
//					} else {
//						jsonData[this.name] = this.value || '';
//					}
//				});
//				console.log(jsonData);
//				console.log(formData);
			});
		},
		showAlert : function (target, des, tag, message) {
			var cs, ic, posi;
			if ($("#success-alert") != null) {
				$("#success-alert").remove();
			}
			if (tag == "error"){
				cs = "alert-danger";
				ic = "glyphicon glyphicon-exclamation-sign";
			} else if (tag == "success") {
				cs = "alert-success";
				ic = "glyphicon glyphicon-ok";
			} else if (tag == "info") {
				cs = "alert-info";
				ic = "glyphicon glyphicon-info-sign";
			} else {
				cs = "alert-warning";
				ic = "glyphicon glyphicon-info-sign";
			}
			if (des == "modal") {
				posi = "absolute";
			} else {
				posi = "relative";
			}
			
			var html = "<div class='col-md-12 col-sm-12 alert "+cs+" fade in' id='success-alert'"
			+ "style='display:none; position: "+posi+";  padding: .3%; margin-bottom: 0px; z-index: 122;margin-top: -8.8px;'>"
			+"<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"
			+ "<span class='"+ic+"'></span><span> <strong>"+message+" </strong></span></div>";
			
			$(target).prepend(html);
			$("#success-alert").show(500);
			$("#success-alert").fadeTo(5000, 1000).slideUp(1000, function(){$("#success-alert").slideUp(10000);$("#success-alert").remove();});
		},
		pageLoad : function () {
			if ($("#loadingmask2").length > 0) {
				$("#loadingmask2").css("display", "none");
			}
		}
}