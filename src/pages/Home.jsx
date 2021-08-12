import { useState } from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemon';
import { Spinner } from 'components/Spinner/Spinner';

export const HomePage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    {
      skip: pokemonName === '',
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const showPokemonData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>

      {isFetching && <Spinner />}

      {showNotFoundError && (
        <p>
          Упс, покемона с имененем <b>{pokemonName}</b> нет
        </p>
      )}

      {showPokemonData && <h1>{data.name}</h1>}
    </>
  );
};
