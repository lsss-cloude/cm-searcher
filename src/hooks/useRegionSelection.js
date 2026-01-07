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
    const willSelect = selectedSido?.cd !== sido.cd;
    setSelectedSido(selectedSido?.cd === sido.cd ? null : sido);
    setSelectedSigungu([]);
    onRegionChange?.();

    // 시도 선택 시 시군구 영역으로 스크롤 (모바일에서만)
    if (willSelect && window.innerWidth <= 768) {
      setTimeout(() => {
        const sigunguSection = document.querySelector('.sigungu-section');
        if (sigunguSection) {
          sigunguSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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
