import regionsData from './regions.json';

// 시도 목록 조회
export const getSidoList = () => {
  return regionsData.result || [];
};

// 시도 코드로 시도 조회
export const getSidoByCode = (code) => {
  return regionsData.result?.find(sido => sido.cd === code);
};

// 시도 이름으로 시도 조회
export const getSidoByName = (name) => {
  return regionsData.result?.find(sido => sido.addr_name.includes(name));
};

// 특정 시도의 시군구 목록 조회 (개별 파일에서 로드)
export const getSigunguList = async (sidoCode) => {
  try {
    const sigunguData = await import(`./${sidoCode}.json`);
    return sigunguData.result || [];
  } catch (error) {
    console.error(`시군구 데이터 로드 실패: ${sidoCode}`, error);
    return [];
  }
};

// 시군구 코드로 시군구 조회
export const getSigunguByCode = async (sigunguCode) => {
  // 시군구 코드에서 시도 코드 추출 (앞 2자리)
  const sidoCode = sigunguCode.substring(0, 2);
  const sigunguList = await getSigunguList(sidoCode);
  return sigunguList.find(sg => sg.cd === sigunguCode) || null;
};

// 전체 지역 데이터 조회
export const getAllRegions = () => {
  return regionsData;
};

export default regionsData;