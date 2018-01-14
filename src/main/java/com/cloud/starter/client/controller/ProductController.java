package com.cloud.starter.client.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.cloud.starter.client.models.Product;

@Controller
@RequestMapping("/product")
public class ProductController {
	private static final Logger LOG = LoggerFactory.getLogger(ProductController.class);
	private final static SimpleDateFormat DATE_FORMATE = new SimpleDateFormat("YYYYMMDDHHmmssSSS");
	private final static String SUCCESS_MESSAGE = " Saved successfully";
	private final static String UPDATE_MESSAGE = " Updated successfully";
	private final static String DELETE_MESSAGE = " Deleted successfully";
	
	List<Product> products = new ArrayList<Product>();
	@RequestMapping(method=RequestMethod.GET)
	public String productTmpl(final ModelMap model) {
		model.addAttribute("product", new Product());
		model.addAttribute("products", products);
		model.addAttribute("brand", "Product setup");
		model.addAttribute("page", "product");
		return "template";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Map<String, String> add(@Valid Product product, BindingResult binding, final ModelMap model) {
		LOG.info("Call product request");
		Map<String, String> result = new HashMap<>();
		if (binding.hasErrors()) {
			result.put("tag", "error");
			result.put("status", "fail");
			result.put("message", binding.getFieldError().getField() +" : "+ binding.getFieldError().getDefaultMessage());
			return result;
		}
		
		
		String mess = SUCCESS_MESSAGE;
		if (StringUtils.isNotBlank(product.getCode())){
			Product pr = products.stream().filter(p -> p.getCode().equals(product.getCode())).findFirst().orElse(null);
			products.remove(pr);
			mess  = UPDATE_MESSAGE;
		}
		// call service to save 
		product.setCode(getProductCode());
		products.add(product);
		result.put("tag", "success");
		result.put("status", "success");
		result.put("message", product.getName() + mess);
		return result;
	}
	
	@RequestMapping(value="/{productCode}", method=RequestMethod.GET)
	public String edit(@PathVariable String productCode, final ModelMap model) {
		model.addAttribute("product", products.stream().filter(p -> p.getCode().equals(productCode)).findFirst().orElse(new Product()));
		return "product/product :: productModal";
	}
	
	@RequestMapping(value="/{productCode}", method=RequestMethod.DELETE)
	@ResponseBody
	public Map<String, String> delete(@PathVariable String productCode) {
		Map<String, String> result = new HashMap<>();
		Product pr = products.stream().filter(p -> p.getCode().equals(productCode)).findFirst().orElse(null);
		if (pr != null){
			products.remove(pr);
			result.put("tag", "info");
			result.put("status", "success");
			result.put("message", productCode + DELETE_MESSAGE);
		}
		return result;
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public String getAllData(final ModelMap model) {
		model.addAttribute("products", products);
		return "product/product :: datas";
	}
	
	private String getProductCode() {
		return "P" + DATE_FORMATE.format(new Date());
	}
}
