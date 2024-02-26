export {};

// EXAMPLE 1 - Omit values from an Enum in TypeScript

// ✅ For Numeric Enums
enum Sizes {
  Small,
  Medium,
  Large,
  ExtraLarge,
}

// 👇️ type WithoutSmall = Sizes.Medium | Sizes.Large | Sizes.ExtraLarge
type WithoutSmall = Exclude<Sizes, Sizes.Small>;

// 👇️ type WithoutMultiple = Sizes.Large | Sizes.ExtraLarge
type WithoutMultiple = Exclude<Sizes, Sizes.Small | Sizes.Medium>;

// ---------------------------------------------------

// // EXAMPLE 2 - Omit values from a String Enum in TypeScript

// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
//   ExtraLarge = 'XL',
// }

// // 👇️ type WithoutSmall = Sizes.Medium | Sizes.Large | Sizes.ExtraLarge
// type WithoutSmall = Exclude<Sizes, Sizes.Small>;

// // 👇️ type WithoutMultiple = Sizes.Large | Sizes.ExtraLarge
// type WithoutMultiple = Exclude<Sizes, Sizes.Small | Sizes.Medium>;
