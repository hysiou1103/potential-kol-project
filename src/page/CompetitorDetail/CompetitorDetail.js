import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Swiper from './components/Swiper'
import goBack from 'imgs/goBack.png'
import style from './competitorDetail.module.scss'

export default function CompetitorDetail() {
  const { competitorId } = useParams()

  const [listInBrowser, setListInBrowser] = useState([])
  const [counter, setCounter] = useState(0)
  const [competitorData, setCompetitorData] = useState({})
  const { groups, competitionID, id, selfIntro, votes, photo1, photo2, photo3 } = competitorData

  useEffect(() => {
    const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
    const votingCounts = JSON.parse(localStorage.getItem('counterRecord')) || {}
    const data = votingList.filter(item => item.id === parseInt(competitorId))
    if (votingCounts[today]) {
      const counts = parseInt(votingCounts[today].voting)
      setCounter(counts)
    }
    setListInBrowser([...votingList])
    setCompetitorData(...data)
  }, [])

  const [clickAnimation, setClickAnimation] = useState(false)
  const handleVotes = () => {
    if (counter === 2) return
    const { votes } = competitorData
    const tempData = { ...competitorData, votes: votes + 1 }
    const tempCounter = counter + 1
    setCounter(tempCounter)
    setCompetitorData(tempData)
    setClickAnimation(!clickAnimation)
    updateList(tempData, tempCounter)
  }

  useEffect(() => {
    setTimeout(() => {
      setClickAnimation(!setClickAnimation)
    }, 300)
  }, [clickAnimation])

  const updateList = (tempData, tempCounter) => {
    const tempList = [...listInBrowser]
    tempList.splice(tempData.id - 1, 1, tempData)
    setListInBrowser(tempList)
    localStorage.removeItem('registInfor')
    localStorage.setItem('registInfor', JSON.stringify(tempList))
    const tempRecord = {
      [today]: {
        voting: tempCounter
      }
    }
    localStorage.removeItem('counterRecord')
    localStorage.setItem('counterRecord', JSON.stringify(tempRecord))
  }

  const renderClass = ({ groups }) => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }

  const date = new Date()
  const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`

  return (
    <main>
      <div className={`${style.competitorDetailWrap}  container flex`}>
        <Swiper photoGroup={[photo1, photo2, photo3]} groups={groups} />
        <section className={`w-full ${style[renderClass(competitorData)]} `}>
          <Link
            to="/votingActive"
            className={`${style.goBackBtn} ${style.phone} justify-center items-center`}
          >
            <img src={goBack} alt="Go Back arrow" width="24" height="24" />
            <span>返回列表</span>
          </Link>
          <div className={style.tagWrap}>
            <div className={style.groupTag}>{groups}</div>
          </div>
          <div className={`${style.competitorContent} h-full flex flex-col`}>
            <div className={style.competitorHeader}>
              <div className={style.competitonID}>{competitionID}</div>
              <div className={style.competitorOrder}>NO.{id}</div>
            </div>
            <div className={style.introSection}>
              <p className={style.introTitle}>介紹</p>
              <p className={style.introContent}>{selfIntro}</p>
            </div>
            <div className={style.currentVotes}>
              目前票數 <strong>{votes}</strong> 票
            </div>
            <button
              className={`${style.getingVotes} ${clickAnimation ? style.active : ''} ${
                counter === 2 ? style.disabled : ''
              } relative z-0`}
              onClick={handleVotes}
            >
              投我一票
            </button>
            <p className={style.reminderText}>
              不限次數分享，分享1次加1票，最多加<strong>2</strong>票
            </p>
          </div>
        </section>
      </div>
      <Link
        to="/votingActive"
        className={`${style.goBackBtn} ${style.web} justify-center items-center`}
      >
        <img src={goBack} alt="Go Back arrow" width="24" height="24" />
        <span>返回列表</span>
      </Link>
    </main>
  )
}
