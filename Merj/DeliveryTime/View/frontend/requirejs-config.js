var config = {
	map: {
		'*': {
			'Magento_Checkout/template/shipping' : 'Merj_DeliveryTime/template/shipping',
			'Magento_Checkout/template/shipping-information' : 'Merj_DeliveryTime/template/shipping-information'
		}
	},

	mixins: {
        	'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
            'Merj_DeliveryTime/js/model/shipping-save-processor/payload-extender-mixin': true
        },
            'Magento_Checkout/js/action/set-shipping-information': {
            'Merj_DeliveryTime/js/action/set-shipping-information-mixin': true
        },
            'Magento_Checkout/js/view/shipping-information': {
            'Merj_DeliveryTime/js/view/shipping-information-mixin': true
        }
	}
};