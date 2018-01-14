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
   var responseData3 = {
		   "headings":[
			      "Job number",
			      "Booking date",
			      "Client name",
			      "Country",
			      "Post code"
			   ],
			   "values":[
			      {
			         "value":[
			            "EX100000012511",
			            "08-Apr-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012511",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX1000015237",
			            "02-Nov-2015",
			            "Test Client 01",
			            "United Kingdom",
			            "Manchester"
			         ],
			         "key":"EX1000015237",
			         "data":[
			            "duke.hstu@gmail.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX1000015234",
			            "02-Nov-2015",
			            "Test Client 01",
			            "United Kingdom",
			            "Manchester"
			         ],
			         "key":"EX1000015234",
			         "data":[
			            "duke.hstu@gmail.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX1000015244",
			            "03-Nov-2015",
			            "Test Client 01",
			            "United States",
			            "JFK"
			         ],
			         "key":"EX1000015244",
			         "data":[
			            "duke.hstu@gmail.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000005722",
			            "17-Sep-2009",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000005722",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011741",
			            "03-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011741",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011751",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011751",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011753",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011753",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011756",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011756",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011757",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011757",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011758",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011758",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011759",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011759",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011761",
			            "06-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011761",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000011782",
			            "13-Jun-2011",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000011782",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX1000109077",
			            "05-Jun-2017",
			            "TESCA UK Ltd",
			            "United Kingdom",
			            "LHR"
			         ],
			         "key":"EX1000109077",
			         "data":[
			            "sanjoy.roy@metafour.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX01000122497",
			            "17-Nov-2017",
			            "TESCA UK Ltd",
			            "United Kingdom",
			            "LHR"
			         ],
			         "key":"EX01000122497",
			         "data":[
			            "sanjoy.roy@metafour.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012498",
			            "04-Apr-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012498",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012501",
			            "04-Apr-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012501",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012506",
			            "08-Apr-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012506",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX01000128663",
			            "18-Dec-2017",
			            "TESCA UK Ltd",
			            "United Kingdom",
			            "LHR"
			         ],
			         "key":"EX01000128663",
			         "data":[
			            "sanjoy.roy@metafour.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012518",
			            "11-Apr-2013",
			            "Dummy Client",
			            "",
			            ""
			         ],
			         "key":"EX100000012518",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012530",
			            "01-May-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012530",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX1000087929",
			            "23-Sep-2016",
			            "Unipart Groups",
			            "United Kingdom",
			            "W14"
			         ],
			         "key":"EX1000087929",
			         "data":[
			            "sanjoy.roy@metafour.com",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012161",
			            "19-Jul-2012",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012161",
			         "data":[
			            "",
			            null
			         ]
			      },
			      {
			         "value":[
			            "EX100000012508",
			            "08-Apr-2013",
			            "",
			            "",
			            ""
			         ],
			         "key":"EX100000012508",
			         "data":[
			            "",
			            null
			         ]
			      }
			   ]
			}
    
    $( "#products" ).autocomplete({
        source: function(responseData1, response) {
        	$.ajax({
                url: "search",
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
                        console.log($("#tags").parents('.input-group').find('span.input-group-addon i.fa').removeClass('fa-repeat autocompletesearching').addClass('fa-search'));
                    }, 1000);
                }
            });
        	
        	
			
			
			
//            response(resultsList);
},
        create: function () {
            $(this).data('ui-autocomplete')._renderItem = function (ul, data) {
            	console.log("Call job search");
			
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
					//ul.css('min-width', 150 * 3);
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
			/*populating the search field with the selected values */
//			if(ui.item.value !== undefined ) $("#addressform [name=placeName]").val(ui.item.value);
        	setTimeout(function() {
        		$( "#tags" ).val(ui.item.value[0]);
        		
            }, 10);
        
        	
        	console.log(ui.item.value[0]);
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