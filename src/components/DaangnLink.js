import { memo } from 'react';
import * as styles from '../styles/commonStyles';
import { URLS } from '../constants';

/**
 * 당근마켓 링크 컴포넌트
 */
const DaangnLink = memo(() => {
  return (
    <div style={styles.section}>
      <a
        href={URLS.DAANGN}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button.daangn}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.hoverColors.daangn}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.hoverColors.daangnDefault}
      >
        당근마켓 열기
      </a>
    </div>
  );
});

DaangnLink.displayName = 'DaangnLink';

export default DaangnLink;
