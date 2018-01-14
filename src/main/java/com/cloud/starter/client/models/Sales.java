package com.cloud.starter.client.models;

import java.util.Calendar;
import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

public class Sales {
	
	private String code;
	private Calendar date;
	private String discount;
	private String tax;
	
	@NotEmpty
	private String subTotal;
	
	@NotEmpty
	private String grandTotal;
	
	private List<SalesDetails> products;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Calendar getDate() {
		return date;
	}
	public void setDate(Calendar date) {
		this.date = date;
	}
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	public String getTax() {
		return tax;
	}
	public void setTax(String tax) {
		this.tax = tax;
	}
	public String getSubTotal() {
		return subTotal;
	}
	public void setSubTotal(String subTotal) {
		this.subTotal = subTotal;
	}
	public String getGrandTotal() {
		return grandTotal;
	}
	public void setGrandTotal(String grandTotal) {
		this.grandTotal = grandTotal;
	}
	public List<SalesDetails> getProducts() {
		return products;
	}
	public void setProducts(List<SalesDetails> products) {
		this.products = products;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Sales [code=");
		builder.append(code);
		builder.append(", date=");
		builder.append(date);
		builder.append(", discount=");
		builder.append(discount);
		builder.append(", tax=");
		builder.append(tax);
		builder.append(", subTotal=");
		builder.append(subTotal);
		builder.append(", grandTotal=");
		builder.append(grandTotal);
		builder.append(", products=");
		builder.append(products);
		builder.append("]");
		return builder.toString();
	}
	
}
