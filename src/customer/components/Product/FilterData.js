export const color = [
  "white",
  "black",
  "red",
  "marun",
  "Being",
  "Pink",
  "green",
  "yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "beige", label: "beige" },
      { value: "blue", label: "blue" },
      { value: "Brown", label: "Brown" },
      { value: "green", label: "green" },
      { value: "Purple", label: "Purple" },
      { value: "Yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "149-399", label: "₹149 To ₹399" },
      { value: "399-599", label: "₹399 To ₹599" },
      { value: "599-799", label: "₹599 To ₹799" },
      { value: "799-999", label: "₹799 To ₹999" },
      { value: "999-1199", label: "₹999 To ₹1199" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% and Above",
      },
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "70", label: "70% and Above" },
      { value: "80", label: "80% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "In Stock", label: "In Stock" },
      { value: "Out of Stock", label: "Out of Stock" },
    ],
  },
];
