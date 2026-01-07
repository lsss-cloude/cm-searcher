import { useState, useEffect } from 'react';

/**
 * 값의 변경을 지연시키는 디바운스 훅
 * @param {any} value - 디바운스할 값
 * @param {number} delay - 지연 시간 (밀리초)
 * @returns {any} - 디바운스된 값
 */
export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 값이 변경되면 타이머 설정
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 클린업: 다음 effect 실행 전에 이전 타이머 제거
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
