import React, { useState } from 'react'
import VotingCard from './VotingCard'
import { groups } from 'config'
import votingSection from 'imgs/votingSection.png'
import search from 'imgs/search.png'
import style from './votingSection.module.scss'

export default function VotingSection({ votingList = [] }) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const handleChange = e => {
    setSearchKeyword(e.target.value)
  }

  const handleSearchClick = () => {
    searchKeyword
      ? composeRenderList(searchKeyword, 'competitionID')
      : composeRenderList('ALL', 'groups')
  }

  const [chosenGroup, setChosenGroup] = useState('ALL')
  const handleGroupsClick = e => {
    if (e.target.nodeName !== 'LI') return
    let newGroup = e.target.innerText
    setChosenGroup(newGroup)
    setSearchKeyword('')
    composeRenderList(newGroup, 'groups')
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
      <section className={style.votingSectionWrap}>
        <div className={`${style.searchingBar} flex justify-between`}>
          <div className={`${style.searchInputGroup} flex`}>
            <input
              type="text"
              className={style.searchInput}
              placeholder="請輸入參賽名稱或編號"
              value={searchKeyword}
              onChange={handleChange}
            />
            <button
              className={`${style.searchBtn} flex justify-around items-center`}
              onClick={handleSearchClick}
            >
              <img src={search} alt="Search Keyword" width="20" height="20" />
              <span>搜尋</span>
            </button>
          </div>
          <ul className={`${style.groupBtnWrap} flex items-center`} onClick={handleGroupsClick}>
            {['ALL', ...groups].map(item => (
              <li
                key={item}
                value={item}
                className={`${style.groupBtn} ${chosenGroup === item ? 'active' : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${style.votingCardWrap} flex flex-col`}>
          {renderList.length
            ? renderList.map(item => <VotingCard competitor={item} key={item.id} />)
            : null}
        </div>
      </section>
    </>
  )
}
