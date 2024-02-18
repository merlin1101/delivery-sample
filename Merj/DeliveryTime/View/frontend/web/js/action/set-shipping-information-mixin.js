define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
    'Merj_DeliveryTime/js/view/custom_message'
], function ($, wrapper, quote, deliveryInformation) {
    'use strict';

    return function (setShippingInformationAction) {
        if (!window.checkoutConfig) {
            return setShippingInformationAction;
        }

        return wrapper.wrap(setShippingInformationAction, function (originalAction) {
            var shippingAddress = quote.shippingAddress();

            if (!shippingAddress.hasOwnProperty('extension_attributes')) {
                shippingAddress.extension_attributes = {};
            }

            var deliveryData = {
                delivery_time: deliveryInformation.getDeliveryTimeOption()
            };

            shippingAddress.extension_attributes = $.extend(
                shippingAddress.extension_attributes,
                deliveryData
            );

            return originalAction();
        });
    };
});