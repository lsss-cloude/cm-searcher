import * as styles from '../styles/commonStyles';

const ScriptViewer = ({ title, script, id }) => {
  const handleSelectAll = (scriptId) => {
    const element = document.getElementById(scriptId);
    if (element) {
      const range = document.createRange();
      range.selectNodeContents(element);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopy = async (scriptId) => {
    const element = document.getElementById(scriptId);
    if (element) {
      try {
        await navigator.clipboard.writeText(element.textContent);
        alert('복사되었습니다!');
      } catch (err) {
        console.error('복사 실패:', err);
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.text.sectionTitle}>{title}</h2>
        <div>
          <button
            onClick={() => handleSelectAll(id)}
            style={{ ...styles.button.base, ...styles.button.secondary, marginRight: '0.5rem' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
          >
            전체선택
          </button>
          <button
            onClick={() => handleCopy(id)}
            style={{ ...styles.button.base, ...styles.button.primary }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            복사
          </button>
        </div>
      </div>
      <pre style={styles.codeBlock.container}>
        <code id={id} style={styles.codeBlock.text}>
          {script}
        </code>
      </pre>
    </section>
  );
};

export default ScriptViewer;
