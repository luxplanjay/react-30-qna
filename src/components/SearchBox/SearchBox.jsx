import { DebounceInput } from 'react-debounce-input';

export const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <DebounceInput
        autoComplete="off"
        minLength={1}
        debounceTimeout={300}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};
