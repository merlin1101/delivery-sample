define([
    'jquery',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Checkout/js/model/sidebar',
    'Merj_DeliveryTime/js/view/custom_message'
], function ($, Component, quote, stepNavigator, sidebarModel, deliveryInformation) {
    'use strict';

    return function (target) {
        return target.extend({
            getDeliveryTimeSelected: function() {
				var option = deliveryInformation.getDeliveryTimeOption();
				return option;
			}
        });
    }
});