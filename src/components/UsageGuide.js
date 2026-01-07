import { useState } from 'react';
import * as styles from '../styles/commonStyles';

const UsageGuide = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleGuide = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.heading.h2}>사용 방법</h2>
        <button
          onClick={toggleGuide}
          style={{
            ...styles.button.base,
            ...styles.button.secondary
          }}
        >
          {isExpanded ? '접기' : '펼치기'}
        </button>
      </div>

      {isExpanded && (
        <div style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #ddd',
          lineHeight: '1.8',
          textAlign: 'left'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              1단계: 지역 선택
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • 왼쪽 패널에서 원하는 <strong>시도</strong>를 클릭<br />
              • 해당 시도의 <strong>시군구</strong> 목록이 표시되면 검색하고 싶은 지역들을 선택<br />
              • 여러 시군구를 동시에 선택 가능
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              2단계: 지역 코드 조회 스크립트 복사
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • <strong>"1. 지역 코드 조회"</strong> 섹션의 <strong>"복사"</strong> 버튼을 클릭하여 스크립트를 복사
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              3단계: 당근마켓에서 스크립트 실행
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              1. 당근마켓 웹사이트를 엽니다 (상단 "당근마켓 열기" 버튼 클릭)<br />
              2. 개발자 도구를 실행:<br />
              &nbsp;&nbsp;&nbsp;• <strong>Windows</strong>: F12 또는 Ctrl + Shift + I<br />
              &nbsp;&nbsp;&nbsp;• <strong>Mac</strong>: Cmd + Option + I<br />
              3. <strong>콘솔(Console)</strong> 탭으로 이동<br />
              4. 복사한 스크립트를 붙여넣고 Enter 키 입력<br />
              5. 지역 조회가 완료되면 JSON 데이터가 자동으로 클립보드에 복사됨(실패시 드래그하여 복사)
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              4단계: 지역 데이터 붙여넣기
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • <strong>"2. 지역 코드 조회 결과"</strong> 섹션의 입력창에 붙여넣기 또는 <strong>"붙여넣기"</strong> 버튼을 클릭
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              5단계: 검색어 입력
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • <strong>"3. 검색"</strong> 섹션의 입력창에 찾고 싶은 상품명을 입력<br />
              &nbsp;&nbsp;&nbsp;(예: 아이폰, 노트북, 자전거, 책상 등)<br />
              • <strong>"거래 가능만 보기"</strong> 체크박스를 선택하면 판매 중인 상품만 검색
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              6단계: 매물 조회 스크립트 복사
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • <strong>"4. 매물 조회"</strong> 섹션의 <strong>"복사"</strong> 버튼을 클릭하여 스크립트를 복사
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              7단계: 당근마켓에서 매물 검색 실행
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              1. 당근마켓 웹 페이지 개발자 도구 콘솔로 이동<br />
              2. 복사한 스크립트를 붙여넣고 Enter 키 입력<br />
              3. 콘솔에 검색 진행 상황이 실시간으로 표시
            </p>
          </div>

          <div>
            <h3 style={{ ...styles.heading.h3, fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left' }}>
              8단계: 검색 결과 확인
            </h3>
            <p style={{ margin: 0, color: '#555', textAlign: 'left' }}>
              • 콘솔에 매물이 있는 지역과 게시글 수 표시<br />
              • 당근마켓 앱/웹에서 해당 지역 설정 후 검색하여 자세한 내용 확인<br />
            </p>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#fff3cd',
            borderRadius: '6px',
            border: '1px solid #ffc107',
            textAlign: 'left'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#856404', fontSize: '0.95rem', textAlign: 'left' }}>
              ⚠️ 주의사항
            </h4>
            <p style={{ margin: 0, color: '#856404', fontSize: '0.85rem', textAlign: 'left' }}>
              • 이 도구는 브라우저 개발자 도구의 콘솔을 사용합니다.<br />
              • 과도한 API 호출은 서버에 부담을 줄 수 있으니 필요한 지역만 선택하세요.<br />
              • 검색 결과는 실시간 데이터가 아닐 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsageGuide;
