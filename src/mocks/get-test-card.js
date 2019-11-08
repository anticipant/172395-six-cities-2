export const getTestCard = (name, number, bool) => ({
  id: number,
  city: {
    name,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  title: `Title-${name}`,
  isPremium: bool,
  previewImage: `img/apartment-${number}.jpg`,
  price: number,
  rating: number,
  type: `Apartment 3`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
  isFavorite: !bool,
  bedrooms: 3,
  maxAdults: 4,
  goods: [`Heating-${name}`, `Kitchen-${name}`, `Cable TV -${name}`, `Washing machine-${name}`, `Coffee machine-${name}`, `Dishwasher-${name}`],
  host: {
    id: 3,
    isPro: bool,
    name: `Angelina-${name}`,
    avatarUrl: `img/${number}.png`
  },
  description: `${name} A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
});
