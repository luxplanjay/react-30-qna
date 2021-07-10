const formatLanguages = langs => {
  return langs.map(lang => lang.name).join(', ');
};

export const CountryInfo = ({ country }) => {
  const { flag, name, capital, population, languages } = country;

  return (
    <div>
      <h1>
        <img src={flag} alt={name} width="40" height="40" />
        {name}
      </h1>

      <p>
        <b>Capital:</b> {capital}
      </p>
      <p>
        <b>Population:</b> {population}
      </p>
      <p>
        <b>Languages:</b> {formatLanguages(languages)}
      </p>
    </div>
  );
};
