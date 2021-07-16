import { useState, useEffect, useRef, forwardRef, Component } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { SearchForm } from 'components/SearchForm/SearchForm';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { CountryList } from 'components/CountryList/CountryList';
// import { CountryInfo } from 'components/CountryInfo/CountryInfo';
// import { Spinner } from 'components/Spinner/Spinner';
// import { fetchCountries } from 'services/api';

export const App = () => {
  const mounted = useRef(false);
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    console.log('A: ', a);
  }, [a]);

  useEffect(() => console.log('B: ', b), [b]);

  useEffect(() => console.log('C: ', c), [c]);

  return (
    <div>
      <button onClick={() => setA(state => state + 1)}>A {a}</button>

      <button onClick={() => setB(state => state + 1)}>B {b}</button>

      <button onClick={() => setC(state => state + 1)}>C {c}</button>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     countryName: null,
//     countries: [],
//     reqStatus: 'idle',
//   };

//   // handleFormSubmit = countryName => {
//   //   this.setState({ countryName });
//   // };

//   handleNameChange = countryName => {
//     this.setState({ countryName });
//   };

//   async componentDidUpdate(_, prevState) {
//     const { countryName } = this.state;
//     const shouldFetch =
//       prevState.countryName !== countryName && countryName !== '';

//     if (shouldFetch) {
//       try {
//         this.setState({ reqStatus: 'pending', countries: [] });
//         const countries = await fetchCountries(countryName);
//         this.setState({ reqStatus: 'resolved' });

//         if (countries.length > 10) {
//           return toast(
//             'Too many matches found. Please enter a more specific name.',
//             { icon: '⚠️' },
//           );
//         }

//         this.setState({ countries });
//       } catch (error) {
//         this.setState({ reqStatus: 'rejected' });
//         toast.error('Oops, there is no country with that name');
//       }
//     }
//   }

//   render() {
//     const { countries, reqStatus } = this.state;
//     const showCountryList = countries.length >= 2 && countries.length < 10;
//     const showCountryInfo = countries.length === 1;

//     return (
//       <div>
//         <SearchBox onSearch={this.handleNameChange} />
//         {/* <SearchForm onSearch={this.handleFormSubmit} /> */}
//         {reqStatus === 'pending' && <Spinner size="40" />}
//         {showCountryList && <CountryList countries={countries} />}
//         {showCountryInfo && <CountryInfo country={countries[0]} />}
//         <Toaster position="top-right" />
//       </div>
//     );
//   }
// }
