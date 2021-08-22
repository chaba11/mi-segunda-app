class CountrySerializer {
  static deSerialize(country) {
    return {
      name: country.name,
      capital: country.capital,
      region: country.region,
    };
  }
}

export default CountrySerializer;
