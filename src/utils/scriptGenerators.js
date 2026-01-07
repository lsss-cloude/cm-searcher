export function generateLocationScript({ selectedSigungu, sigunguList }) {
  const regionsArray =
    selectedSigungu.length > 0
      ? selectedSigungu.map(s => `"${s.full_addr}"`).join(', ')
      : sigunguList.length > 0
      ? sigunguList.map(s => `"${s.full_addr}"`).join(', ')
      : '"서울특별시 강남구"';

  return `// 지역명 목록
let regions = [${regionsArray}];

// 지연 함수
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 메인 실행 함수
async function fetchAllLocations() {
  console.log("지역 데이터 수집 시작...\\n");

  const allLocations = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    const keyword = encodeURIComponent(region);
    const url = \`/v1/api/search/kr/location?keyword=\${keyword}\`;

    try {
      console.log(\`[\${i + 1}/\${regions.length}] 요청 중: \${region}\`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }

      const data = await response.json();

      if (data.locations && Array.isArray(data.locations)) {
        console.log(\`✅ 성공: \${region} (\${data.locations.length}개 지역)\`);
        allLocations.push(...data.locations);
        successCount++;
      } else {
        console.warn(\`⚠️  데이터 없음: \${region}\`);
      }

      // 서버 부하 방지를 위한 대기 (200ms)
      await delay(200);

    } catch (error) {
      console.error(\`❌ 오류: \${region} - \${error.message}\`);
      failCount++;
    }
  }

  // 결과 출력
  console.log("\\n========== 수집 완료 ==========");
  console.log(\`성공: \${successCount}개\`);
  console.log(\`실패: \${failCount}개\`);
  console.log(\`총 수집된 지역: \${allLocations.length}개\\n\`);

  const filteredLocations = allLocations.map(location => ({
      id: location.id,
      name: location.name
  }));

  // Minify된 JSON 출력
  console.log("========== Minified JSON ==========");
  const minified = JSON.stringify({ locations: filteredLocations });
  console.log(minified);

  // 클립보드에 복사 시도
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(minified).then(() => {
      console.log("✅ JSON이 클립보드에 복사되었습니다!");
    }).catch(err => {
      console.error("❌ 클립보드 복사 실패:", err);
      console.log("\\n💡 수동 복사: 위의 JSON 문자열을 직접 복사하세요.");
    });
  } else {
    console.log("\\n💡 클립보드 API를 사용할 수 없습니다. 위의 JSON 문자열을 직접 복사하세요.");
  }

  return filteredLocations;
}

// 실행
fetchAllLocations();`;
}

export function generatePropertyScript({ parsedLocations, debouncedQuery }) {
  const locationsArray = parsedLocations.length > 0
    ? JSON.stringify(parsedLocations)
    : '[{"id":6035,"name":"역삼동"},{"id":6032,"name":"대치동"}]';

  const searchQueryValue = debouncedQuery || "";

  return `// 조회 지역 목록
const locations = ${locationsArray};

// 검색어
const searchQuery = "${searchQueryValue}";

// 지연 함수 (요청 간 간격을 두기 위해)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 메인 실행 함수
async function searchLocations() {
  console.log("지역별 검색 시작...");
  const foundLocations = [];

  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];

    // URL 파라미터 생성
    const params = new URLSearchParams({
      in: \`\${location.name}-\${location.id}\`,
      search: searchQuery,
      _data: 'routes/kr.buy-sell._index'
    });

    const url = \`/kr/buy-sell/?\${params.toString()}\`;

    try {
      console.log(\`[\${i + 1}/\${locations.length}] 검색 중: \${location.name}\`);

      // API 요청
      const response = await fetch(url);
      const data = await response.json();

      // fleamarketArticles의 length가 1 이상인지 확인
      if (data.allPage && data.allPage.fleamarketArticles && data.allPage.fleamarketArticles.length > 0) {
        const locationInfo = \`\${location.name}\`;
        console.log(\`✅ 발견: \${locationInfo} (게시글 \${data.allPage.fleamarketArticles.length}개)\`);
        foundLocations.push({
          location: locationInfo,
          count: data.allPage.fleamarketArticles.length,
          url: url
        });
      }

      // 서버 부하 방지를 위한 대기 (200ms)
      await delay(200);

    } catch (error) {
      console.error(\`❌ 오류 발생 (\${location.name}):\`, error);
    }
  }

  // 최종 결과 출력
  console.log("\\n========== 검색 완료 ==========");
  if (foundLocations.length > 0) {
    console.log(\`\\n총 \${foundLocations.length}개 지역에서 발견:\`);
    foundLocations.forEach((item, idx) => {
      console.log(\`\${idx + 1}. \${item.location} - \${item.count}개 게시글\`);
    });
  } else {
    console.log("검색 결과가 있는 지역이 없습니다.");
  }

  return foundLocations;
}

// 실행
searchLocations();`;
}
