export const getTestReview = (name, number, bool) => ({
  id: number,
  user: {
    id: number + 1,
    isPro: bool,
    name,
    avatarUrl: `img/${name}.jpg`
  },
  rating: number,
  comment: `${name} A quiet cozy ${name}  and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`
});
