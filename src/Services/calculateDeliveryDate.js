// Services/calculateDeliveryDate.js
import moment from 'moment';

/**
 * Calculates the estimated delivery date based on provider and stock availability.
 * @param {string} provider - The logistics provider's name.
 * @param {boolean} inStock - Whether the item is in stock or not.
 * @returns {string} - The estimated delivery date or "Out of Stock" message.
 */
const calculateDeliveryDate = (provider, inStock) => {
  if (inStock === 'false') {
    return "Out of Stock";
  }

  const currentTime = moment();
  let estimatedDate;

  // Determine estimated delivery date based on provider
  switch (provider) {
    case 'Provider A':
      estimatedDate = currentTime.hour() < 17 ? currentTime : currentTime.add(1, 'days');
      break;
    case 'Provider B':
      estimatedDate = currentTime.hour() < 9 ? currentTime : currentTime.add(1, 'days');
      break;
    default:
      estimatedDate = currentTime.add(Math.floor(Math.random() * 4) + 2, 'days');
  }

  return estimatedDate.format('DD MMM YYYY');
};

export default calculateDeliveryDate;
