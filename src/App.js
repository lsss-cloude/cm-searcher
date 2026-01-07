import './App.css';
import { useMemo } from 'react';
import { getSidoList } from './data/regionData';
import * as styles from './styles/commonStyles';
import ScriptViewer from './components/ScriptViewer';
import RegionSelector from './components/RegionSelector';
import DaangnLink from './components/DaangnLink';
import ResultSection from './components/ResultSection';
import SearchSection from './components/SearchSection';
import UsageGuide from './components/UsageGuide';
import { useRegionSelection } from './hooks/useRegionSelection';
import { useSearchQuery } from './hooks/useSearchQuery';
import { useLocationResult } from './hooks/useLocationResult';
import { generateLocationScript, generatePropertyScript } from './utils/scriptGenerators';

function App() {
  const sidoList = getSidoList();

  const {
    locationResult,
    setLocationResult,
    parsedLocations,
    handlePaste,
    clearLocationResult
  } = useLocationResult();

  const {
    selectedSido,
    sigunguList,
    selectedSigungu,
    handleSidoClick,
    handleSigunguClick
  } = useRegionSelection(clearLocationResult);

  const {
    searchQuery,
    setSearchQuery,
    onlyOnSale,
    setOnlyOnSale,
    debouncedQuery
  } = useSearchQuery();

  const locationScript = useMemo(
    () => generateLocationScript({ selectedSigungu, sigunguList }),
    [selectedSigungu, sigunguList]
  );

  const propertyScript = useMemo(
    () => generatePropertyScript({ parsedLocations, debouncedQuery }),
    [parsedLocations, debouncedQuery]
  );

  return (
    <div className="App">
      <div style={styles.layout.container}>
        {/* 왼쪽: 지역 목록 */}
        <RegionSelector
          sidoList={sidoList}
          selectedSido={selectedSido}
          sigunguList={sigunguList}
          selectedSigungu={selectedSigungu}
          onSidoClick={handleSidoClick}
          onSigunguClick={handleSigunguClick}
        />

        {/* 오른쪽: 스크립트 영역 */}
        <div style={styles.layout.rightPanel}>
          {/* 0. 당근마켓으로 이동 */}
          <DaangnLink />

          {/* 사용 방법 */}
          <UsageGuide />

          {/* 1. 지역 코드 조회 스크립트 */}
          <ScriptViewer
            title="1. 지역 코드 조회"
            script={locationScript}
            id="location-script"
          />

          {/* 2. 지역 코드 조회 결과 */}
          <ResultSection
            locationResult={locationResult}
            onLocationResultChange={setLocationResult}
            onPaste={handlePaste}
            onClear={clearLocationResult}
          />

          {/* 3. 검색 영역 */}
          <SearchSection
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onlyOnSale={onlyOnSale}
            onOnlyOnSaleChange={setOnlyOnSale}
          />

          {/* 4. 매물 조회 스크립트 */}
          <ScriptViewer
            title="4. 매물 조회"
            script={propertyScript}
            id="property-script"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
