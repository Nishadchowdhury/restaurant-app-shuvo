export default function useCartToLocalStorage(item, job) {
  let items = [
    ...(JSON.parse(localStorage.getItem("userCart")) || []),
  ];

  if (items.length === 0) {
    return localStorage.setItem(
      "userCart",
      JSON.stringify([
        {
          ...item,
          quantity: 1,
        },
      ])
    );
  }

  let newArray = [...items];

  items.forEach((cuisine, i) => {
    if (
      item.name === cuisine.name &&
      item.availableAt === cuisine.availableAt &&
      item.price === cuisine.price
    ) {
      newArray.splice(i, 1);

      if (job === "up") {
        // console.log(cuisine);
        newArray.push({ ...cuisine, quantity: cuisine.quantity + 1 });
      }

      if (job === "down") {
        // console.log(job);
        newArray.push({ ...cuisine, quantity: cuisine.quantity - 1 });
      }
    }

    const exist = items.some(cuisine => {
      return (
        item.name === cuisine.name &&
        item.availableAt === cuisine.availableAt &&
        item.price === cuisine.price
      );
    });

    if (exist) {
      return;
    }

    if (
      item.name !== cuisine.name ||
      item.availableAt !== cuisine.availableAt ||
      item.price !== cuisine.price
    ) {
      newArray.push({ ...item, quantity: 1 });
      // console.log("new add");
    }
  });

  return localStorage.setItem(
    "userCart",
    JSON.stringify([...newArray])
  );
}
