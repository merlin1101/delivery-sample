<?php
namespace Merj\DeliveryTime\Observer;
class SaveToOrder implements \Magento\Framework\Event\ObserverInterface
{   
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $event = $observer->getEvent();
        $quote = $event->getQuote();
        $order = $event->getOrder();
        $order->setData('delivery_time', $quote->getData('delivery_time'));
    }
}