import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';
import styles from './Modify.module.scss';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL as BASE, USER } from '../../../config/host-config';
import swal from 'sweetalert';

const { daum } = window;

const Modify = () => {
  const redirection = useNavigate();
  const API_BASE_URL = BASE + USER;

  // 상태변수로 회원정보수정 입력값 관리 (비밀번호 주소)
  const [userValue, setUserValue] = useState({
    userName: '',
    password: '',
    passwordCheck: '',
    email: '',
    address: '',
  });

  // 검증 완료 체크에 대한 상태변수를 관리
  const [correct, setCorrect] = useState({
    password: '',
    passwordCheck: '',
    address: true,
  });

  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const saveInputState = ({ key, inputValue, msg, flag }) => {
    // setMessage((prev) => ({ ...prev, [key]: msg }));
    setCorrect((prev) => ({ ...prev, [key]: flag }));

    if (inputValue !== 'pass') {
      setUserValue((prev) => ({ ...prev, [key]: inputValue }));
    }
  };

  // 패스워드 입력창 체인지 이벤트 핸들러
  const passwordHandler = (e) => {
    // 패스워드가 변경됬다? -> 패스워드 확인란 비우고 시작하자
    setCorrect({ ...correct, passwordCheck: false });
    document.getElementById('passwordCheck').value = '';

    const inputValue = e.target.value;
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    let msg = '';
    let flag = false;

    if (!inputValue) {
      msg = '비밀번호는 필수입니다.';
    } else if (!pwRegex.test(inputValue)) {
      msg = '8글자 이상의 영문, 숫자, 특수문자를 포함해 주세요.';
    } else {
      msg = '사용 가능한 비밀번호입니다.';
      flag = true;
    }

    saveInputState({
      key: 'password',
      inputValue,
      msg,
      flag,
    });
  };

  // 비밀번호 확인란 체인지 이벤트 핸들러
  const pwCheckHandler = (e) => {
    let msg = '';
    let flag = false;

    if (!e.target.value) {
      msg = '비밀번호 확인란은 필수입니다.';
    } else if (userValue.password !== e.target.value) {
      msg = '패스워드가 일치하지 않습니다.';
    } else {
      msg = '패스워드가 일치합니다.';
      flag = true;
    }

    saveInputState({
      key: 'passwordCheck',
      inputValue: '',
      msg,
      flag,
    });
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'GET',
        headers: requestHeader,
      });
      if (response.ok) {
        const userData = await response.json();
        setUserValue({
          userName: userData.name,
          email: userData.email,
        });
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onClickAddress = (e) => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        const roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraRoadAddr = ''; // 참고 항목 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += `(${data.bname})`;
        }
        console.log(roadAddr, extraRoadAddr);
        saveInputState({
          key: 'address',
          inputValue: `${roadAddr} ${extraRoadAddr}`,
          msg: '',
          flag: true,
        });
      },
    }).open();
  };

  const updateUserInfo = async (e) => {
    e.preventDefault();

    if (isValid()) {
      try {
        const response = await fetch(`${API_BASE_URL}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
          },
          body: JSON.stringify(userValue),
        });
        if (response.ok) {
          alert('회원정보가 성공적으로 수정되었습니다.');
        } else {
          throw new Error('회원정보 설정을 다시 해주세요.');
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('정보 입력이 제대로 되지 않았습니다.');
    }
  };

  // 입력란이 모두 검증에 통과했는지 여부를 검사
  const isValid = () => {
    console.log('Password:', userValue.password);
    console.log('Password Check:', correct.passwordCheck);

    if (!correct.passwordCheck) {
      alert('Passwords do not match');
      return false;
    }
    for (const key in correct) {
      // const flag = correct[key];
      // if (!flag)
      if (!correct[key]) {
        return false;
      }
    }
    return true;
  };

  return (
    <Container className={styles['update-container']}>
      <Row>
        <Col>
          <Card className={styles['update-card']}>
            <CardBody className={styles['update-cardbody']}>
              <form
                noValidate
                onSubmit={updateUserInfo}
              >
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='email'
                    className='mr-sm-2'
                  >
                    *이메일
                  </Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    value={userValue.email}
                    readOnly
                    disabled
                  />
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='password'
                    className='mr-sm-2'
                  >
                    *새로운 비밀번호
                  </Label>
                  <Input
                    type='password'
                    id='password'
                    placeholder='새로운 비밀번호 확인'
                    required
                    onChange={passwordHandler}
                    invalid={
                      correct.passwordCheck === undefined
                        ? undefined
                        : !correct.passwordCheck
                    }
                    valid={correct.passwordCheck}
                  />
                  {/* {correct.passwordCheck || (
                    // <span>{message.passwordCheck}</span>
                  )} */}
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='passwordCheck'
                    className='mr-sm-2'
                  >
                    *비밀번호 확인
                  </Label>
                  <Input
                    type='password'
                    id='passwordCheck'
                    placeholder='비밀번호 확인'
                    required
                    onChange={pwCheckHandler}
                    invalid={
                      correct.passwordCheck === undefined
                        ? undefined
                        : !correct.passwordCheck
                    }
                    valid={correct.passwordCheck}
                  />
                  {/* <span>
                    {correct.passwordCheck || (
                      <span>{message.passwordCheck}</span>
                    )}
                  </span> */}
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='name'
                    className='mr-sm-2'
                  >
                    *이름
                  </Label>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    value={userValue.userName}
                    readOnly
                    disabled
                  />
                </FormGroup>{' '}
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'></FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='address'
                    className='mr-sm-2'
                  >
                    &nbsp;집 주소
                  </Label>
                  <Row>
                    <Col className='col-9'>
                      <Input
                        type='text'
                        name='address'
                        id='address'
                        readOnly
                        value={userValue.address}
                      />
                    </Col>
                    <Col className='col-3'>
                      <Button
                        type='button'
                        className={styles['primary-button']}
                        onClick={onClickAddress}
                      >
                        주소검색
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
                <Container>
                  <Row className={styles['join-rows']}>
                    <Col>
                      <Button
                        type='submit'
                        className={styles['primary-button']}
                        style={{ width: '100%' }}
                      >
                        회원정보저장
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Modify;
