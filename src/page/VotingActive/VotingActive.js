import React, { useState, useEffect } from 'react'
import CountDown from './components/CountDown'
import TakeLeadCard from './components/TakeLeadCard'
import VotingCard from './components/VotingCard'
import EmptyPage from './components/EmptyPage'
import { groups } from 'config'
import competitiveSituation from 'imgs/competitiveSituation.png'
import votingSection from 'imgs/votingSection.png'
import search from 'imgs/search.png'
import style from './votingActive.module.scss'

export default function VotingActive() {
  const [reorderList, setReorderList] = useState([])
  useEffect(() => {
    const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
    const reorderListWithHigherVotes = votingList.sort((a, b) => {
      return b.votes - a.votes
    })
    setReorderList(reorderListWithHigherVotes)
    setRenderList(reorderListWithHigherVotes)
  }, [])

  const searchTeamLeader = (filterList, filterText) => {
    let leader = []
    leader = filterList.filter(item => item.groups === filterText).slice(0, 1)
    return leader
  }

  const takeLeadGroup = [
    ...searchTeamLeader(reorderList, '汪汪組'),
    ...searchTeamLeader(reorderList, '喵喵組')
  ]

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
    if (e.target.nodeName == 'LI') {
      let newGroup = e.target.innerText
      setChosenGroup(newGroup)
      setSearchKeyword('')
      composeRenderList(newGroup, 'groups')
    }
  }

  const [renderList, setRenderList] = useState([...reorderList])
  const composeRenderList = (filterText, filterTarget) => {
    let tempList = []
    filterText === 'ALL' && filterTarget === 'groups'
      ? (tempList = [...reorderList])
      : (tempList = reorderList.filter(item => item[filterTarget].includes(filterText)))
    setRenderList(tempList)
  }
  const totalVotes = reorderList.reduce((acc, cur) => acc + cur.votes, 0)
  return (
    <>
      {reorderList.length ? (
        <>
          <div className={`${style.totalVotes} flex justify-center items-center w-full`}>
            目前總投票數：<strong>{totalVotes}</strong>票
          </div>
          <img src={competitiveSituation} alt="Competitive Situation" width={620} height={155} />
          <CountDown />
          <section className={`${style.takeLeadSection} flex justify-center items-center`}>
            {takeLeadGroup.map(competitor => (
              <TakeLeadCard key={competitor.id} competitor={competitor} />
            ))}
          </section>
          <img src={votingSection} alt="voting section" width={620} height={155} />
          <section className={`${style.votingSectionWrap} w-full`}>
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
                    className={`${style.groupBtn} ${chosenGroup === item ? style.active : ''}`}
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
      ) : (
        <EmptyPage />
      )}
    </>
  )
}
