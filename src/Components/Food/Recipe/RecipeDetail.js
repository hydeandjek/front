import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SideBarItem from '../../SideBar/SideBarItem';
import './RecipeDetail.scss';
import { range } from 'lodash';

const RecipeDetail = () => {
  const {
    state: { data },
  } = useLocation();

  // console.log(location.state);
  // useEffect(() => {
  console.log(data[0]);
  // }, []);

  const [selectedCate, setSelectedCate] = useState('');
  const [dataMenu, setDataMenu] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [tagExist, setTagExist] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [steps, setSteps] = useState([]);
  const [ingredientSep, setIngredientSep] = useState([]);

  const menus = [
    { id: 1, name: ' 레시피' },
    { id: 2, name: ' 혼밥하기 좋은 맛집' },
  ];

  //SidebarItem 클릭 시 처리할 함수
  const onMenuClick = (props) => {
    // console.log('자식놈한테 데이터 받아올 함수!');
    console.log('자식놈한테 받은 데이타: ', props);
    console.log('카테고리 세팅: ', props.COOKRCP01.row[0].RCP_PAT2);
    setSelectedCate(props.COOKRCP01.row[0].RCP_PAT2);

    setDataMenu(props);
  };

  useEffect(() => {
    /*
ATT_FILE_NO_MAIN
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_2.png"
ATT_FILE_NO_MK
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_1.png"
HASH_TAG
: 
"방울토마토"
INFO_CAR 탄
: 
"9"
INFO_ENG 열량
: 
"45"
INFO_FAT 지
: 
"1"
INFO_NA 나
: 
"277"
INFO_PRO 단
: 
"2"
INFO_WGT 중량(1인분)
: 
""
MANUAL01 만드는법
: 
"1. 물기를 빼고 2cm 정도의 크기로 썰은 부추와 양파를 양념장에 섞어 양념속을 만든다."
MANUAL02
: 
"2. 깨끗이 씻은 방울토마토는 꼭지를 떼고 윗부분에 칼로 십자모양으로 칼집을 낸다."
MANUAL03
: 
"3. 칼집을 낸 방울토마토에 양념속을 사이사이에 넣어 버무린다."
MANUAL04
: 
""
MANUAL05
: 
""
MANUAL06
: 
""
MANUAL07
: 
""
MANUAL08
: 
""
MANUAL09
: 
""
MANUAL10
: 
""
MANUAL11
: 
""
MANUAL12
: 
""
MANUAL13
: 
""
MANUAL14
: 
""
MANUAL15
: 
""
MANUAL16
: 
""
MANUAL17
: 
""
MANUAL18
: 
""
MANUAL19
: 
""
MANUAL20
: 
""
MANUAL_IMG01
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_1.png"
MANUAL_IMG02
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png"
MANUAL_IMG03
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_5.png"
MANUAL_IMG04
: 
""
MANUAL_IMG05
: 
""
MANUAL_IMG06
: 
""
MANUAL_IMG07
: 
""
MANUAL_IMG08
: 
""
MANUAL_IMG09
: 
""
MANUAL_IMG10
: 
""
MANUAL_IMG11
: 
""
MANUAL_IMG12
: 
""
MANUAL_IMG13
: 
""
MANUAL_IMG14
: 
""
MANUAL_IMG15
: 
""
MANUAL_IMG16
: 
""
MANUAL_IMG17
: 
""
MANUAL_IMG18
: 
""
MANUAL_IMG19
: 
""
MANUAL_IMG20
: 
""
RCP_NA_TIP 저감 조리법 TIP
: 
"소금에 절이는 오이 대신 방울토마토를 사용하여 나트륨 섭취를 줄였어요. 토마토에는 과일에 대체로 없는 글루탐산이 풍부하여 감칠맛을 내주며, 겉절이 양념과 잘 어우러져 상큼함과 감칠맛을 내주어요."
RCP_NM 
: 
"방울토마토 소박이"
RCP_PARTS_DTLS
: 
"●방울토마토 소박이 : \n방울토마토 150g(5개), 양파 10g(3×1cm), 부추 10g(5줄기)\n●양념장 : \n고춧가루 4g(1작은술), 멸치액젓 3g(2/3작은술), 다진 마늘 2.5g(1/2쪽), 매실액 2g(1/3작은술), 설탕 2g(1/3작은술), 물 2ml(1/3작은술), 통깨 약간"
RCP_PAT2 요리종류
: 
"반찬"
RCP_SEQ
: 
"31"
RCP_WAY2 조리방법
: 
"기타"
  */
    if (data[0].HASH_TAG) {
      setTagExist(true);
    }
    // 재료
    const ingredientSep = data[0].RCP_PARTS_DTLS.split('\n');
    console.log(ingredientSep); // ●치커리 샐러드 :~ 별 로 자름.

    const menu = ingredientSep.map((ingre) => {
      return ingre.split(':'); // ["●치커리 샐러드","●올리브마늘 드레싱"]
    });
    const ingreByMenu = ingredientSep.map((ingre) => {
      return ingre.substring(ingre.indexOf(':') + 1).split(',');
    });
    console.log(menu); // [["치커리 30g(10줄기), ~"],["올리브유 10g(2작은술), ~"]]
    console.log(ingreByMenu);
    setIngredientList(data[0].RCP_PARTS_DTLS.split(', '));
    // 요리방법
    setSteps(
      Array.from(
        new Set(
          Object.keys(data[0]).filter(
            (stepKey) => stepKey.startsWith('MANUAL') && data[0][stepKey]
          )
        )
      ).sort((a, b) => {
        const aNumber = parseInt(
          a.slice(a.startsWith('MANUAL_IMG') ? 10 : 6),
          10
        );
        const bNumber = parseInt(
          b.slice(b.startsWith('MANUAL_IMG') ? 10 : 6),
          10
        );
        const aIsImage = a.startsWith('MANUAL_IMG');
        const bIsImage = b.startsWith('MANUAL_IMG');

        if (aIsImage && !bIsImage) {
          return 1;
        } else if (!aIsImage && bIsImage) {
          return -1;
        } else {
          return aNumber - bNumber;
        }
      })
    );

    console.log(steps);
  }, []);

  const stepsText = steps.filter(
    (stepKey) => !stepKey.startsWith('MANUAL_IMG')
  );
  const stepsImage = steps.filter((stepKey) =>
    stepKey.startsWith('MANUAL_IMG')
  );

  return (
    <>
      <div className='warp-side'>
        <div>
          <div className='rec_center'>
            <div>FOOD</div>
            <div className='side'>
              <div className='sidebar'>
                {menus.map((menu, index) => {
                  return (
                    <NavLink
                      style={{ textDecoration: 'none' }}
                      to={menu.path}
                      key={index}
                    >
                      <SideBarItem
                        menu={menu}
                        onMenuClick={onMenuClick}
                        pageNum={pageNum}
                      />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='recipe-page'>
          <div className='recipe-page__left'>
            <img
              className='recipe-page__image'
              src={data[0].ATT_FILE_NO_MAIN}
              alt='레시피 사진'
            />
            <h2 className='recipe-page__title'>{data[0].RCP_NM}</h2>
            {tagExist && (
              <p className='recipe-page__tag'>#{data[0].HASH_TAG}</p>
            )}
          </div>
          <div className='recipe-page__right'>
            <div className='recipe-page__section'>
              <h3 className='recipe-page__section-title'>재료</h3>
              <ul className='recipe-page__ingredient-list'>
                {ingredientSep.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className='recipe-page__section'>
              <h3 className='recipe-page__section-title'>영양소</h3>
              <li className='li'>탄수화물: {data[0].INFO_CAR}</li>
              <li className='li'>단백질: {data[0].INFO_PRO}</li>
              <li className='li'>지방: {data[0].INFO_FAT}</li>
              <li className='li'>나트륨: {data[0].INFO_NA}</li>
            </div>
            <div className='recipe-page__section'>
              <h3 className='recipe-page__section-title'>칼로리</h3>
              <li className='li'>{data[0].INFO_ENG}(Kcal)</li>
            </div>
            <div className='recipe-page__section'>
              <h3 className='recipe-page__section-title'>요리방법</h3>
              <ol className='recipe-page__instructions'>
                {steps.map((stepKey, index) => {
                  const stepId = `step_${index + 1}`;
                  const stepNumber = index + 1;
                  // const stepNumber = parseInt(
                  //   stepKey.slice(stepKey.startsWith('MANUAL_IMG') ? 10 : 6),
                  //   10
                  // );
                  const imageKey = `MANUAL_IMG${stepNumber
                    .toString()
                    .padStart(2, '0')}`;
                  const imageUrl = data[0][imageKey];

                  return (
                    <div key={stepKey}>
                      {data[0][stepKey] !== imageUrl && (
                        <h3>{data[0][stepKey]}</h3>
                      )}
                      <div>
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={`Step ${stepNumber}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
                {/* 요리방법을 동적으로 생성할 수도 있습니다. */}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
