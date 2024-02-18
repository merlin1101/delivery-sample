define([
    'jquery',
    'uiComponent',
    'Merj_DeliveryTime/js/view/custom_message'
], function ($, Component, deliveryInformation) {
    'use strict';

    return function (target) {
        return target.extend({
            defaults: {
                template: 'Merj_DeliveryTime/shipping-information'
            },
            getDeliveryTimeSelected: function() {
                var option = deliveryInformation.getDeliveryTimeOption();
                return option;
            }
        });
    }
});