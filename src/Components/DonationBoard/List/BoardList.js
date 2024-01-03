import React from 'react';
import './BoardList.scss';

const BoardList = ({ name, title, src, url, date, content, count }) => {
  
  function truncateContent(content, maxLines = 5, maxCharsPerLine = 50, ellipsis = '...') {
    if (typeof content !== 'string') {
      throw new Error('content는 문자열이어야 합니다.');
    }
    
    const lines = content.split('\n'); // 줄 단위로 나누기
    const truncatedLines = lines.slice(0, maxLines); // 최대 줄 수까지 자르기
  
    let truncatedContent = truncatedLines.join('\n'); // 줄을 다시 합치기
    if (lines.length > maxLines) {
      // 전체 줄 수가 최대 줄 수보다 많을 때
      const lastLine = truncatedLines[maxLines - 1];
      if (lastLine.length > maxCharsPerLine) {
        // 마지막 줄의 문자 수가 최대 문자 수보다 클 때
        const truncatedLastLine = lastLine.slice(0, maxCharsPerLine - ellipsis.length) + ellipsis;
        truncatedContent = truncatedLines.slice(0, maxLines - 1).join('\n') + '\n' + truncatedLastLine;
      } else {
        // 마지막 줄의 문자 수가 최대 문자 수보다 작을 때
        const lastLineWithEllipsis = lastLine.slice(0, maxCharsPerLine - ellipsis.length) + ellipsis;
        truncatedContent = truncatedLines.slice(0, maxLines - 1).join('\n') + '\n' + lastLineWithEllipsis;
      }
    }
  
    return truncatedContent;
  }

  function truncateTitle(content, maxLines = 1, maxCharsPerLine = 10, ellipsis = '...') {
    if (typeof content !== 'string') {
      throw new Error('content는 문자열이어야 합니다.');
    }
    
    const lines = content.split('\n'); // 줄 단위로 나누기
    const truncatedLines = lines.slice(0, maxLines); // 최대 줄 수까지 자르기
  
    let truncatedContent = truncatedLines.join('\n'); // 줄을 다시 합치기
    if (lines.length > maxLines) {
      // 전체 줄 수가 최대 줄 수보다 많을 때
      const lastLine = truncatedLines[maxLines - 1];
      if (lastLine.length > maxCharsPerLine) {
        // 마지막 줄의 문자 수가 최대 문자 수보다 클 때
        const truncatedLastLine = lastLine.slice(0, maxCharsPerLine - ellipsis.length) + ellipsis;
        truncatedContent = truncatedLines.slice(0, maxLines - 1).join('\n') + '\n' + truncatedLastLine;
      } else {
        // 마지막 줄의 문자 수가 최대 문자 수보다 작을 때
        const lastLineWithEllipsis = lastLine.slice(0, maxCharsPerLine - ellipsis.length) + ellipsis;
        truncatedContent = truncatedLines.slice(0, maxLines - 1).join('\n') + '\n' + lastLineWithEllipsis;
      }
    }
  
    return truncatedContent;
  }


  return (
    <div className='boardContent'>
      <a href={url}>
        <img src={src} />
        <p>
          {truncateTitle(title)}
          <span>댓글 {count}</span>
        </p>
        <p>{truncateContent(content)}</p>
        <p>
          <span>{name}</span>
          <span>{date}</span>
        </p>
      </a>
    </div>
  );
};

export default BoardList;
