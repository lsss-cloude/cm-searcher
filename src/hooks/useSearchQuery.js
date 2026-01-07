import { useState } from 'react';
import { useDebounce } from './useDebounce';
import { TIMERS } from '../constants';

export function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, TIMERS.DEBOUNCE_DELAY);

  return {
    searchQuery,
    setSearchQuery,
    onlyOnSale,
    setOnlyOnSale,
    debouncedQuery
  };
}
