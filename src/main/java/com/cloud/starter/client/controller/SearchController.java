package com.cloud.starter.client.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloud.starter.client.models.JobSearchReponse;
import com.cloud.starter.client.models.MultiColumnSearch;
import com.cloud.starter.client.models.SalesDetails;

@Controller
@RequestMapping("/search")
public class SearchController {

	@RequestMapping(value="/products/{hint}", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody JobSearchReponse productSearch(@PathVariable String hint) {
		return new JobSearchReponse(populateData(hint));
	}

	private List<MultiColumnSearch> populateData(String hint) {
		List<MultiColumnSearch> suggestions = new ArrayList<>();
		List<SalesDetails> products = new ArrayList<SalesDetails>();
		SalesDetails product = new SalesDetails();
		product.setCode("2018-22-33");
		product.setName("Doi");
		product.setPrice(new BigDecimal(200.00));
		products.add(product);
		
		SalesDetails product1 = new SalesDetails();
		product1.setCode("2018-22-11");
		product1.setName("Misty");
		product1.setPrice(new BigDecimal(100.00));
		products.add(product1);
		
		SalesDetails product2 = new SalesDetails();
		product2.setCode("2018-22-22");
		product2.setName("Doi");
		product2.setPrice(new BigDecimal(500.00));
		products.add(product2);
		
		for (SalesDetails list : products) {
			MultiColumnSearch multiColumn = new MultiColumnSearch();
			String[] columns = new String[3]; // for job search list
			String[] lines = new String[2];
			
			columns[0] = list.getCode();
			columns[1] = list.getName();
			columns[2] = String.valueOf(list.getPrice());
			multiColumn.setKey(list.getCode());
			multiColumn.setValue(columns);
			suggestions.add(multiColumn);
		}
		return suggestions;
	}
}
