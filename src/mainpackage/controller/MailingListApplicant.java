package mainpackage.controller;

public class MailingListApplicant {
	private String first_name;
	private String last_name;
	private String email;
	private String comments;
	
	public MailingListApplicant(String first_name, String last_name, String email, String comments) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.comments = comments;
	}
}
