// 레이아웃 스타일
export const layout = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden'
  },
  leftPanel: {
    width: '50%',
    backgroundColor: '#f5f5f5',
    color: '#333',
    overflowY: 'auto',
    padding: '2rem',
    boxSizing: 'border-box',
    borderRight: '1px solid #ddd'
  },
  rightPanel: {
    width: '50%',
    backgroundColor: '#fafafa',
    color: '#333',
    overflowY: 'auto',
    padding: '2rem',
    boxSizing: 'border-box'
  }
};

// 카드 기본 스타일
export const cardBase = {
  padding: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s'
};

// 시도 카드 스타일
export const sidoCard = {
  unselected: {
    ...cardBase,
    background: '#fff',
    border: '2px solid',
    borderColor: '#e0e0e0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  selected: {
    ...cardBase,
    background: '#FFB84D',
    border: '2px solid',
    borderColor: '#FFA726',
    boxShadow: '0 2px 8px rgba(255, 184, 77, 0.3)'
  }
};

// 시군구 카드 스타일
export const sigunguCard = {
  unselected: {
    padding: '0.5rem',
    background: '#fff',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: '#555',
    border: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: 'normal'
  },
  selected: {
    padding: 'calc(0.5rem - 1px)',
    background: '#FFB84D',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: '#555',
    border: '2px solid #FFA726',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: 'bold'
  }
};

// 텍스트 스타일
export const text = {
  title: {
    fontWeight: 'bold',
    fontSize: '0.95rem',
    color: '#333'
  },
  subtitle: {
    fontSize: '0.75rem',
    color: '#999',
    marginTop: '0.3rem'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#222',
    margin: 0
  }
};

// 버튼 스타일
export const button = {
  base: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem'
  },
  primary: {
    backgroundColor: '#4CAF50',
    color: '#fff'
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ddd'
  },
  info: {
    backgroundColor: '#2196F3',
    color: '#fff'
  },
  danger: {
    backgroundColor: '#f44336',
    color: '#fff'
  },
  daangn: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#FF6F0F',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  }
};

// 입력 필드 스타일
export const input = {
  textarea: {
    width: '100%',
    height: '200px',
    padding: '1rem',
    fontSize: '0.9rem',
    backgroundColor: '#fff',
    color: '#333',
    border: '2px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'monospace',
    resize: 'vertical'
  },
  text: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#333',
    border: '2px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    marginRight: '0.5rem',
    cursor: 'pointer'
  }
};

// 코드 블록 스타일
export const codeBlock = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    fontSize: '0.7rem',
    lineHeight: '1.6',
    overflow: 'auto',
    border: '1px solid #dee2e6',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    maxHeight: '300px'
  },
  text: {
    color: '#212529'
  }
};

// 섹션 헤더 스타일
export const sectionHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem'
};

// 그리드 스타일
export const grid = {
  sido: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '0.8rem',
    marginBottom: '2rem'
  },
  sigungu: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: '0.5rem'
  }
};

// 섹션 스타일
export const section = {
  marginBottom: '2rem'
};

// 체크박스 라벨 스타일
export const checkboxLabel = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: '0.95rem',
  color: '#333',
  whiteSpace: 'nowrap'
};

// 헤딩 스타일
export const heading = {
  h1: {
    color: '#222',
    fontSize: '2rem',
    margin: 0
  },
  h2: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333'
  },
  h3: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#333'
  }
};

// 단락 스타일
export const paragraph = {
  info: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '2rem'
  },
  small: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem'
  }
};

// Hover 색상 상수
export const hoverColors = {
  daangn: '#E65100',
  daangnDefault: '#FF6F0F',
  info: '#1976D2',
  infoDefault: '#2196F3',
  danger: '#d32f2f',
  dangerDefault: '#f44336',
  primary: '#45a049',
  primaryDefault: '#4CAF50',
  secondary: '#f0f0f0',
  secondaryDefault: '#fff'
};
