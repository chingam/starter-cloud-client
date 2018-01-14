package com.cloud.starter.client.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloud.starter.client.models.Sales;
import com.cloud.starter.client.models.SalesDetails;

@Controller
@RequestMapping("/sales")
public class SalesController {
	private static final Logger LOG = LoggerFactory.getLogger(SalesController.class);
	private final static SimpleDateFormat DATE_FORMATE = new SimpleDateFormat("YYYYMMDDHHmmssSSS");
	List<Sales> cache = new ArrayList<Sales>();
	
	@RequestMapping(method=RequestMethod.GET)
	public String sales(final ModelMap model) {
//		model.addAttribute("sales", new Sales());
		return "sales/sales";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Map<String, String> add(@Valid Sales sales, BindingResult binding, final ModelMap model) {
		LOG.info("Call sales request");
		Map<String, String> result = new HashMap<>();
		String salesRef = getSalesCode();
		if (binding.hasErrors()) {
			result.put("tag", "error");
			result.put("status", "fail");
			result.put("message", binding.getFieldError().getField() +" : "+ binding.getFieldError().getDefaultMessage());
			return result;
		}
		
		// call service to save 
		sales.setCode(salesRef);
		List<SalesDetails> products = sales.getProducts().stream().filter(p -> StringUtils.isNotEmpty(p.getCode())).collect(Collectors.toList());
		sales.setProducts(products);
		cache.add(sales);
		result.put("tag", "success");
		result.put("status", "success");
		result.put("message", "successfuly done!");
		result.put("redirect", "/sales/confirmation/" + salesRef);
		return result;
	}
	
	private String getSalesCode() {
		return "S-" + DATE_FORMATE.format(new Date());
	}
	
	@RequestMapping(value="/confirmation/{ref}", method=RequestMethod.GET)
	public String confirm(@PathVariable String ref, final ModelMap model) {
//		List<Sales> s = cache.stream().filter(p -> p.getCode().equals(ref)).collect(Collectors.toList());
//		Sales ss = cache.stream().filter(p -> p.getCode().equals(ref)).findFirst().orElse(new Sales());
		Sales sales = cache.stream().filter(p -> p.getCode().equals(ref)).findFirst().orElse(new Sales());
//			System.out.println(sales.getCode());
			System.out.println(sales.getProducts().size());
		
		
		model.addAttribute("sales", sales);
		return "sales/confirmation";
	}
}
