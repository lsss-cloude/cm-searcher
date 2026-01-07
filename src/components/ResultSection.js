import { memo } from 'react';
import * as styles from '../styles/commonStyles';
import { PLACEHOLDERS, BORDER_COLORS } from '../constants';

/**
 * 지역 코드 조회 결과 섹션
 * @param {Object} props
 * @param {string} props.locationResult - 지역 코드 조회 결과 JSON
 * @param {Function} props.onLocationResultChange - 결과 변경 핸들러
 * @param {Function} props.onPaste - 붙여넣기 핸들러
 * @param {Function} props.onClear - 지우기 핸들러
 */
const ResultSection = ({
  locationResult,
  onLocationResultChange,
  onPaste,
  onClear
}) => {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.text.sectionTitle}>2. 지역 코드 조회 결과</h2>
        <div>
          <button
            onClick={onPaste}
            style={{ ...styles.button.base, ...styles.button.info, marginRight: '0.5rem' }}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.hoverColors.info}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.hoverColors.infoDefault}
          >
            붙여넣기
          </button>
          <button
            onClick={onClear}
            style={{ ...styles.button.base, ...styles.button.danger }}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.hoverColors.danger}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.hoverColors.dangerDefault}
          >
            지우기
          </button>
        </div>
      </div>
      <textarea
        value={locationResult}
        onChange={(e) => onLocationResultChange(e.target.value)}
        placeholder={PLACEHOLDERS.LOCATION_RESULT}
        style={styles.input.textarea}
        onFocus={(e) => e.target.style.borderColor = BORDER_COLORS.FOCUS}
        onBlur={(e) => e.target.style.borderColor = BORDER_COLORS.DEFAULT}
      />
    </div>
  );
};

export default memo(ResultSection);
