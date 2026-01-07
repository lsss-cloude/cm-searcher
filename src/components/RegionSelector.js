import { memo } from 'react';
import * as styles from '../styles/commonStyles';

/**
 * 지역 선택 컴포넌트
 * @param {Object} props
 * @param {Array} props.sidoList - 시도 목록
 * @param {Object|null} props.selectedSido - 선택된 시도
 * @param {Array} props.sigunguList - 시군구 목록
 * @param {Array} props.selectedSigungu - 선택된 시군구 목록
 * @param {Function} props.onSidoClick - 시도 클릭 핸들러
 * @param {Function} props.onSigunguClick - 시군구 클릭 핸들러
 */
const RegionSelector = ({
  sidoList,
  selectedSido,
  sigunguList,
  selectedSigungu,
  onSidoClick,
  onSigunguClick
}) => {
  return (
    <div style={styles.layout.leftPanel}>
      <h1 style={styles.heading.h1}>지역 목록</h1>
      <p style={styles.paragraph.info}>
        전체 {sidoList.length}개 시도
      </p>

      <h2 style={styles.heading.h2}>시도</h2>
      <div style={styles.grid.sido}>
        {sidoList.map((sido) => {
          const isSelected = selectedSido?.cd === sido.cd;
          return (
            <div
              key={sido.cd}
              onClick={() => onSidoClick(sido)}
              style={isSelected ? styles.sidoCard.selected : styles.sidoCard.unselected}
            >
              <div style={styles.text.title}>{sido.addr_name}</div>
            </div>
          );
        })}
      </div>

      {selectedSido && (
        <div>
          <h3 style={styles.heading.h3}>
            {selectedSido.addr_name} 시군구
          </h3>
          <p style={styles.paragraph.small}>
            총 {sigunguList.length}개 (선택: {selectedSigungu.length}개)
          </p>
          <div style={styles.grid.sigungu}>
            {sigunguList.map((sigungu) => {
              const isSelected = selectedSigungu.some(s => s.cd === sigungu.cd);
              return (
                <div
                  key={sigungu.cd}
                  onClick={() => onSigunguClick(sigungu)}
                  style={isSelected ? styles.sigunguCard.selected : styles.sigunguCard.unselected}
                >
                  {sigungu.addr_name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(RegionSelector);
