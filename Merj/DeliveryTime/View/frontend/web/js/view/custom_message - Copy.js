define([
	'ko',
	'jquery',
	'uiComponent',
	'Magento_Checkout/js/model/quote',
	'mage/url',
	'Magento_Customer/js/model/customer'
	], function(ko, $, Component, quote, urlFormatter, customer) {
	'use strict';

	return Component.extend({
		defaults: {
			template: 'Merj_DeliveryTime/custom_message.html'
		},

		getDeliveryTimeOption: function() {
			var quoteId = quote.getQuoteId();
			var url = urlFormatter.build('merjdt/quote/save');
			var isCustomer = customer.isLoggedIn();
			var option = this.selectedOption;
			var data = {
                   'cartId': quoteId,
                   'delivery_time': option,
                   'is_customer': isCustomer
               };
			var result = true;

			$.ajax({
				url: url,
				data: data,
				dataType: 'text',
				type: 'POST'
			}).done(function(response){
				result = true;
			});

			return option;
		},

		initialize: function() {
			this.timeOptions = ko.observableArray(["", "Any time from 8AM to 8PM", "Morning: 8AM to 12PM", "Afternoon: 12PM to 4PM", "Evening: 4PM to 8PM"]);
			this.selectedOption = ko.observable();

			this._super();
			return this;
		}
	});
});