import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Swiper from './components/Swiper'
import { update_storage } from 'page/Home/formSlice'
import goBack from 'imgs/goBack.png'
import style from './competitorDetail.module.scss'

export default function CompetitorDetail() {
  const { competitorId } = useParams()
  const [counter, setCounter] = useState(0)
  const [competitorData, setCompetitorData] = useState({})
  const { groups, competitionID, id, selfIntro, votes, photo1, photo2, photo3 } = competitorData
  const votingList = useSelector(state => state.storageList)
  useEffect(() => {
    const votingCounts = JSON.parse(localStorage.getItem('counterRecord')) || {}
    if (votingCounts[today]) {
      const counts = parseInt(votingCounts[today].voting)
      setCounter(counts)
    }
    const data = votingList.filter(item => item.id === parseInt(competitorId))
    setCompetitorData(...data)
  }, [])

  const handleVotes = () => {
    const dailyVotingLimit = 2
    if (counter < dailyVotingLimit) {
      const { votes } = competitorData
      const tempData = { ...competitorData, votes: votes + 1 }
      setCompetitorData(tempData)

      const tempCounter = counter + 1
      setCounter(tempCounter)

      updateStorage(tempData, tempCounter)
    }
  }

  const dispatch = useDispatch()
  const updateStorage = (tempData, tempCounter) => {
    const tempList = [...votingList]
    tempList.splice(tempData.id - 1, 1, tempData)
    dispatch(update_storage(tempList))
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
    <section className="w-full">
      <div className={`${style.competitorDetailWrap} flex justify-center`}>
        <Swiper photoGroup={[photo1, photo2, photo3]} groups={groups} />
        <div className={`w-full ${style[renderClass(competitorData)]}`}>
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
          <div className="h-full flex flex-col justify-around">
            <div className={style.competitorHeader}>
              <p className={style.competitonID}>{competitionID}</p>
              <p className={style.competitorOrder}>NO.{id}</p>
            </div>
            <div>
              <p className={style.introTitle}>介紹</p>
              <p className={style.introContent}>{selfIntro}</p>
            </div>
            <p className={style.currentVotes}>
              目前票數 <strong>{votes}</strong> 票
            </p>
            <div className={`${style.btnWrap} flex flex-col items-center`}>
              <button
                className={`${style.getingVotes} ${
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
          </div>
        </div>
      </div>
      <Link
        to="/votingActive"
        className={`${style.goBackBtn} ${style.web} justify-center items-center`}
      >
        <img src={goBack} alt="Go Back arrow" width="24" height="24" />
        <span>返回列表</span>
      </Link>
    </section>
  )
}
