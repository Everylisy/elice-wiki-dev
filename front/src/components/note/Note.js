import { Link } from "react-router-dom";
import Writer from "./Editor";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: right;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #12b886;
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;

const Title = styled.input`
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: black;
`;

const Line = styled.div`
  background: rgb(73, 80, 87);
  height: 5px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const TagInput = styled.input`
  background: transparent;
  display: inline-flex;
  outline: none;
  cursor: text;
  font-size: 1.125rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  min-width: 8rem;
  border: none;
  color: black;
`;

const HashOuter = styled.div`
  display: flex;
  flex-wrap: wrap;
  .HashWrapInner {
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    height: 2rem;
    border-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #f8f9fa;
    color: #12b886;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
  }
`;

function Note() {
  // onChange로 관리할 문자열
  const [hashtag, setHashtag] = useState("");
  // 해시태그를 담을 배열
  const [hashArr, setHashArr] = useState([]);

  const onChangeHashtag = (e) => {
    setHashtag(e.target.value);
  };

  const onKeyUp = (e) => {
    const $HashWrapOuter = document.querySelector(".HashWrapOuter");
    const $HashWrapInner = document.createElement("div");
    $HashWrapInner.className = "HashWrapInner";

    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      console.log("태그 생성됨: ", e.target.value, hashArr);
      $HashWrapInner.innerHTML = e.target.value;
      $HashWrapOuter.appendChild($HashWrapInner);
      setHashArr((hashArr) => [...hashArr, hashtag]);
      setHashtag("");
    }

    $HashWrapInner.addEventListener("click", () => {
      $HashWrapOuter?.removeChild($HashWrapInner);
      console.log($HashWrapInner.innerHTML);
      setHashArr(hashArr.filter((hashtag) => hashtag));
    });
  };

  return (
    <>
      <Wrapper>
        <Title type="text" placeholder="제목을 입력하세요" />
        <Line></Line>
        <div className="HashWrap">
          <HashOuter className="HashWrapOuter"></HashOuter>
          <TagInput
            className="HashInput"
            type="text"
            value={hashtag}
            onChange={onChangeHashtag}
            onKeyUp={onKeyUp}
            placeholder="태그를 입력하세요"
          />
        </div>
        <Writer />
      </Wrapper>
    </>
  );
}

export default Note;