import { useState, useMemo } from 'react';

export function useLocationResult() {
  const [locationResult, setLocationResult] = useState('');

  // JSON 검증 및 파싱
  const parsedLocations = useMemo(() => {
    try {
      const parsed = JSON.parse(locationResult);
      return parsed.locations ?? [];
    } catch {
      return [];
    }
  }, [locationResult]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setLocationResult(text);
    } catch (err) {
      console.error('붙여넣기 실패:', err);
      alert('붙여넣기 권한이 필요합니다.');
    }
  };

  const clearLocationResult = () => {
    setLocationResult('');
  };

  return {
    locationResult,
    setLocationResult,
    parsedLocations,
    handlePaste,
    clearLocationResult
  };
}
