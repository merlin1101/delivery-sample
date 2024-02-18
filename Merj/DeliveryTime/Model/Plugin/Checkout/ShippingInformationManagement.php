<?php

namespace Merj\DeliveryTime\Model\Plugin\Checkout;

use Magento\Checkout\Api\Data\ShippingInformationInterface;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Quote\Api\CartRepositoryInterface;

/**
 * Class ShippingInformationManagement
 * @package Merj\DeliveryTime\Model\Plugin\Checkout
 */
class ShippingInformationManagement
{
    /**
     * @var CartRepositoryInterface
     */
    private $cartRepository;

    /**
     * ShippingInformationManagement constructor.
     *
     * @param CartRepositoryInterface $cartRepository
     */
    public function __construct(
        CartRepositoryInterface $cartRepository
    ) {
        $this->cartRepository = $cartRepository;
    }

    /**
     * @param \Magento\Checkout\Model\ShippingInformationManagement $subject
     * @param int $cartId
     * @param ShippingInformationInterface $addressInformation
     *
     * @return array
     * @throws NoSuchEntityException
     */
    public function beforeSaveAddressInformation(
        \Magento\Checkout\Model\ShippingInformationManagement $subject,
        $cartId,
        ShippingInformationInterface $addressInformation
    ) {
        $extensionAttributes = $addressInformation->getShippingAddress()->getExtensionAttributes();
// exit();
        if (!$extensionAttributes) {
            return [$cartId, $addressInformation];
        }

        $deliveryInformation = $extensionAttributes->getDeliveryTime();

        $quote = $this->cartRepository->get($cartId);
        $quote->setData('delivery_time', $deliveryInformation);

        return [$cartId, $addressInformation];
    }
}
