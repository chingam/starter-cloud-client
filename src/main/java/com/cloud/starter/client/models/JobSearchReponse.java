package com.cloud.starter.client.models;

import java.util.List;

public class JobSearchReponse {
//	String[] headings = {"Job number", "Booking date", "Client name", "Country", "Post code"};
	String[] headings = {"Product code", "Product name", "price"};

	List<MultiColumnSearch> values;

	public JobSearchReponse() {
		super();
	}

	public JobSearchReponse(List<MultiColumnSearch> values) {
		this.values = values;
	}

	public String[] getHeadings() {
		return headings;
	}

	public void setHeadings(String[] headings) {
		this.headings = headings;
	}

	public List<MultiColumnSearch> getValues() {
		return values;
	}

	public void setValues(List<MultiColumnSearch> values) {
		this.values = values;
	}

	public JobSearchReponse(String[] headings, List<MultiColumnSearch> values) {
		super();
		this.headings = headings;
		this.values = values;
	}	
}
