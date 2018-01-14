package com.cloud.starter.client.models;

import java.math.BigDecimal;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;;

public class Product {

	private String code;
	private String name;
	private String group;
	private String category;
	
	@Digits(integer=5, fraction=2)
	private BigDecimal costPrice;
	
	@Digits(integer=5, fraction=2)
	private BigDecimal salesPrice;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public BigDecimal getCostPrice() {
		return costPrice;
	}
	public void setCostPrice(BigDecimal costPrice) {
		this.costPrice = costPrice;
	}
	public BigDecimal getSalesPrice() {
		return salesPrice;
	}
	public void setSalesPrice(BigDecimal salesPrice) {
		this.salesPrice = salesPrice;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Product [code=");
		builder.append(code);
		builder.append(", name=");
		builder.append(name);
		builder.append(", group=");
		builder.append(group);
		builder.append(", category=");
		builder.append(category);
		builder.append(", costPrice=");
		builder.append(costPrice);
		builder.append(", salesPrice=");
		builder.append(salesPrice);
		builder.append("]");
		return builder.toString();
	}
	
}
