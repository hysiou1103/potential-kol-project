import React, { useState, useEffect, useRef } from 'react'
import VotingCard from './VotingCard'
import { groups } from 'config'
import votingSection from 'imgs/votingSection.png'
import search from 'imgs/search.png'

export default function VotingSection({ votingList = [] }) {
  const inputRef = useRef()
  const handleSearchClick = () => {
    if (inputRef.current) {
      let newKeyword = inputRef.current.value
      newKeyword
        ? composeRenderList(newKeyword, 'competitionID')
        : composeRenderList('ALL', 'groups')
    }
  }

  const [chosenGroup, setChosenGroup] = useState('ALL')
  const handleGroupsClick = e => {
    if (e.target.nodeName !== 'LI') return
    let newGroup = e.target.innerText
    setChosenGroup(newGroup)
    composeRenderList(newGroup, 'groups')
    inputRef.current.value = ''
  }

  const [renderList, setRenderList] = useState([...votingList])
  const composeRenderList = (filterText, filterTarget) => {
    let tempList = []
    filterText === 'ALL' && filterTarget === 'groups'
      ? (tempList = [...votingList])
      : (tempList = votingList.filter(item => item[filterTarget].includes(filterText)))
    setRenderList(tempList)
  }

  return (
    <>
      <img src={votingSection} alt="voting section" />
      <section className="votingSectionWrap">
        <div className="searchingBar">
          <div className="searchInputGroup">
            <input
              type="text"
              ref={inputRef}
              className="searchInput"
              placeholder="請輸入參賽名稱或編號"
            />
            <button className="searchBtn" onClick={handleSearchClick}>
              <img src={search} alt="Search Keyword" width="20" height="20" />
              <span>搜尋</span>
            </button>
          </div>
          <ul className="groupBtnWrap" onClick={handleGroupsClick}>
            {['ALL', ...groups].map(item => (
              <li
                key={item}
                value={item}
                className={`groupBtn ${chosenGroup === item ? 'active' : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="votingCardWrap">
          {renderList.length
            ? renderList.map((item, index) => (
                <VotingCard competitor={item} key={item.id} index={index} />
              ))
            : null}
        </div>
      </section>
    </>
  )
}
