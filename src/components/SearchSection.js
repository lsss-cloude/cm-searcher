import { memo } from 'react';
import * as styles from '../styles/commonStyles';
import { PLACEHOLDERS, BORDER_COLORS } from '../constants';

/**
 * 검색 섹션
 * @param {Object} props
 * @param {string} props.searchQuery - 검색어
 * @param {Function} props.onSearchQueryChange - 검색어 변경 핸들러
 * @param {boolean} props.onlyOnSale - 거래 가능만 보기 여부
 * @param {Function} props.onOnlyOnSaleChange - 체크박스 변경 핸들러
 */
const SearchSection = ({
  searchQuery,
  onSearchQueryChange,
  onlyOnSale,
  onOnlyOnSaleChange
}) => {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.text.sectionTitle}>3. 검색</h2>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={onlyOnSale}
            onChange={(e) => onOnlyOnSaleChange(e.target.checked)}
            style={styles.input.checkbox}
          />
          거래 가능만 보기
        </label>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value)}
        placeholder={PLACEHOLDERS.SEARCH_QUERY}
        style={styles.input.text}
        onFocus={(e) => e.target.style.borderColor = BORDER_COLORS.FOCUS}
        onBlur={(e) => e.target.style.borderColor = BORDER_COLORS.DEFAULT}
      />
    </div>
  );
};

export default memo(SearchSection);
