import axios from 'axios';
import Country from '../../models/country';
import { generateURL, ROUTES } from '../routes';

class CountryController {
  static async getCountries() {
    try {
      const response = await axios.get(generateURL(ROUTES.ALL));
      const countries = response.data.map((country) => new Country(country));
      return countries;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CountryController;
