	function del_from_cart(element)
	{
		console.log(element);
		
		var Product_Code = $(element).children().closest('[name=p_code]').val();
		console.log(Product_Code);
		
		var my_cart = localStorage.getItem("my_cart");
		console.log(my_cart);
		
		//var new_cart = $(my_cart).children('td a [value='+Product_Code+']').remove();
		//console.log(new_cart);
		//console.log(my_cart);
		//console.log($(my_cart).parents('td a [value='+Product_Code+']'));
		
		$(my_cart).find('input[value='+Product_Code+']').each(function() 
		{
			$(this).parents().remove();
		});
		console.log(my_cart);
	}