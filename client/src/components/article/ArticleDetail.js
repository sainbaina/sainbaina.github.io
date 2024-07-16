import React from 'react';
import { useParams } from 'react-router-dom';
import "../article/style.css"
import backArrow from "../../images/other/backarrow.svg"

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles[id];

  return (
    <div>
      <div style={{justifyContent: "flex-start", display: "flex", paddingTop: "5rem"}}>
        <a href= { '/#Articles'}>
          <img src={backArrow} style={{marginLeft: "1.3rem",width: "1.5rem", marginRight: "1.3rem", marginTop: "2rem"}}/>
        </a>
        <div className='article_title'>{article.title}</div>
      </div>
      <div className='article_container'>
        <div className='article_text'>
          {article.text.split('\n').map((paragraph, index) => (
            <p key={index} className='article_paragraph'>{paragraph.trim()}</p>
          ))}  
        </div>
      </div>
      {article.links.length == 0? <div/> : 
      <div className='article_links_container'>
        <div className='links_title'>Источники</div>
        {article.links.map((link, index) => (
          <p>
            <a className='article_link' href={link} key={index}>{link}</a>
          </p>
        ))} 
      </div>}
    </div>
  );
};

export default ArticleDetail;