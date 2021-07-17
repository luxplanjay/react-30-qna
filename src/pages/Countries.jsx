import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { CountryList } from 'components/CountryList/CountryList';
import { CountryInfo } from 'components/CountryInfo/CountryInfo';
import { Spinner } from 'components/Spinner/Spinner';
import { fetchCountries } from 'services/api';

export const CountriesPage = () => {
  const [countryName, setCountryName] = useState('');
  const [countries, setCountries] = useState([]);
  const [reqStatus, setReqStatus] = useState('idle');

  const handleNameChange = countryName => {
    setCountryName(countryName);
  };

  useEffect(() => {
    if (countries.length > 10) {
      toast('Too many matches found. Please enter a more specific name.', {
        icon: '⚠️',
      });
    }
  }, [countries.length]);

  useEffect(() => {
    if (reqStatus === 'rejected') {
      toast.error('Oops, there is no country with that name');
    }
  }, [reqStatus]);

  useEffect(() => {
    if (countryName === '') return;

    async function getCountries() {
      try {
        setReqStatus('pending');
        setCountries([]);
        const countries = await fetchCountries(countryName);
        setReqStatus('resolved');
        setCountries(countries);
      } catch (error) {
        setReqStatus('rejected');
      }
    }

    getCountries();
  }, [countryName]);

  const showCountryList = countries.length >= 2 && countries.length < 10;
  const showCountryInfo = countries.length === 1;

  return (
    <div>
      <SearchBox onSearch={handleNameChange} />
      {reqStatus === 'pending' && <Spinner size="40" />}
      {showCountryList && <CountryList countries={countries} />}
      {showCountryInfo && <CountryInfo country={countries[0]} />}
      {/* <Toaster position="top-right" /> */}
    </div>
  );
};
