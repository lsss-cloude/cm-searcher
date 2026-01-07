import { useState, useEffect } from 'react';
import { getSigunguList } from '../data/regionData';

export function useRegionSelection(onRegionChange) {
  const [selectedSido, setSelectedSido] = useState(null);
  const [sigunguList, setSigunguList] = useState([]);
  const [selectedSigungu, setSelectedSigungu] = useState([]);

  useEffect(() => {
    const loadSigungu = async () => {
      if (selectedSido) {
        const data = await getSigunguList(selectedSido.cd);
        setSigunguList(data);
      } else {
        setSigunguList([]);
      }
    };

    loadSigungu();
  }, [selectedSido]);

  const handleSidoClick = (sido) => {
    setSelectedSido(selectedSido?.cd === sido.cd ? null : sido);
    setSelectedSigungu([]);
    onRegionChange?.();
  };

  const handleSigunguClick = (sigungu) => {
    onRegionChange?.();
    setSelectedSigungu(prev => {
      const isSelected = prev.some(s => s.cd === sigungu.cd);
      if (isSelected) {
        return prev.filter(s => s.cd !== sigungu.cd);
      } else {
        return [...prev, sigungu];
      }
    });
  };

  return {
    selectedSido,
    sigunguList,
    selectedSigungu,
    handleSidoClick,
    handleSigunguClick
  };
}
