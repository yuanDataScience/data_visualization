function print(firstName) {
  alert(`Hello ${firstName}`);
}

print("Jenny");

function createEmail(firstName, price) {
  let shipping = 5.95;
  alert(`Hi ${firstName}! Thanks!
      Total: $${price}
      Shipping: $${shipping}
      Grand Total: $${price + shipping}
    `);
}

createEmail("Guy", 100);
