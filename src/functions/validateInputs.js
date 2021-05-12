export default ({amount, description}) => {
  if (!amount) {
    alert('Please enter amount.');
    return false;
  }

  if (isNaN(Number(amount))) {
    alert('Amount should be a number');
    return false;
  }

  if (!description) {
    alert('Please enter a description.');
    return false;
  }

  return true;
};
