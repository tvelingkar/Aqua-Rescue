'use client'

import React, { useEffect, useState, useRef, use } from 'react'
import AppHeader from '@/components/AppHeader'
import { ClickableTile, Modal, TextInput, Tile, InlineNotification } from '@carbon/react'
import './page.css'
import Image from 'next/image'
import { useCreateBooking } from '@/services/bookingDetails'
import useBookingApiNotification from '@/store/booking-notification'

const WaterSources = () => {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState(today.getDate().toString())
  const [selectedDateTimestamp, setSelectedDateTimestamp] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [visibleStartDateIndex, setVisibleStartDateIndex] = useState(0)
  const visibleEndDateIndex = visibleStartDateIndex + 13
  const [showNotification, setShowNotification] = useState(false)
  const [notificationTitle, setNotificationTitle] = useState('Default Title')
  const [isInputEmpty1, setIsInputEmpty1] = useState(false)
  const [isInputEmpty2, setIsInputEmpty2] = useState(false)
  const [isInputEmpty3, setIsInputEmpty3] = useState(false)
  const [phoneInvalidText, setPhoneInvalidText] = useState('')
  const { showApiResponseNotification, apiResponseNotificationTitle, responseStatus } = useBookingApiNotification()

  const handleNextDates = () => {
    const newStartDateIndex = visibleStartDateIndex + 1
    if (newStartDateIndex + 13 <= dateArray.length) {
      setVisibleStartDateIndex(newStartDateIndex)
    }
  }

  const handlePrevDates = () => {
    if (visibleStartDateIndex > 0) {
      setVisibleStartDateIndex(visibleStartDateIndex - 1)
    }
  }

  let dateArray: { date: number; month: string; weekday: string }[] = []
  for (let i = 0; i <= 30; i++) {
    var date = new Date(today)
    date.setDate(today.getDate() + i)
    var month = date.toLocaleString('default', { month: 'short' })
    var weekday = date.toLocaleString('default', { weekday: 'short' })
    dateArray.push({ date: date.getDate(), month, weekday })
  }

  useEffect(() => {
    setSelectedDate(dateArray[0].date.toString())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [bookingData, setBookingData] = useState<any>({
    amount_booked: '',
    booking_contact_name: '',
    booking_contact: '',
    collection_start_time: '',
    collection_end_time: '',
    mall_id: '',
    ngo_id: '',
    booking_date: '',
  })

  const handleData = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    const data = new Date(today.getFullYear(), today.getMonth(), parseInt(selectedDate)).getTime()
    setSelectedDateTimestamp(data)
    setBookingData({
      ...bookingData,
      [name]: value,
      booking_date: selectedDateTimestamp,
      mall_id: '1',
      ngo_id: '1',
    })
  }

  const handleTime = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    const [hours, minutes] = value.split(':')
    const date = new Date()
    date.setHours(parseInt(hours, 10))
    date.setMinutes(parseInt(minutes, 10))
    date.setSeconds(0)
    setBookingData({ ...bookingData, [name]: date.getTime() })
  }

  const timestampToTimeString = (timestamp: any) => {
    if (isNaN(timestamp)) {
      return '00:00'
    }

    const date = new Date(timestamp)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${hours}:${minutes}`
  }

  const createBookingMutation = useCreateBooking()

  const submitForm = async (e: any) => {
    e.preventDefault()
    if (bookingData.amount_booked.trim() === '') {
      setIsInputEmpty1(true)
      setShowModal(true)
      return
    } else {
      setIsInputEmpty1(false)
    }

    if (bookingData.booking_contact_name.trim() === '') {
      setIsInputEmpty2(true)
      setShowModal(true)
      return
    } else {
      setIsInputEmpty2(false)
    }

    if (bookingData.booking_contact.trim() === '') {
      setIsInputEmpty3(true)
      setPhoneInvalidText('*Required')
      setShowModal(true)
      return
    } else {
      setIsInputEmpty3(false)
    }

    if (bookingData.booking_contact.length !== 10) {
      setPhoneInvalidText('Incorrect Phone Number')
      setIsInputEmpty3(true)
      setShowModal(true)
      return
    }

    if (bookingData.collection_start_time === '') {
      setNotificationTitle('Collection Start Time Required')
      setShowNotification(true)
      setShowModal(true)
      return
    }

    if (bookingData.collection_end_time === '') {
      setNotificationTitle('Collection End Time Required')
      setShowNotification(true)
      setShowModal(true)
      return
    }
    createBookingMutation.mutate(bookingData)
  }

  return (
    <div>
      <AppHeader />
      <div style={{ marginTop: '60px' }}>
        <div className="dates">
          <Image
            onClick={handlePrevDates}
            className="arrows"
            style={{ marginRight: '15px' }}
            src={require('./images/left.png')}
            alt="map"
          />
          {dateArray.slice(visibleStartDateIndex, visibleEndDateIndex).map((dateObj, index) => (
            <div
              key={index}
              onClick={() => setSelectedDate(dateObj.date.toString())}
              className={dateObj.date.toString() === selectedDate ? 'selected' : 'dateData'}
              style={{ cursor: 'pointer' }}
            >
              <div className="dateCard">
                <p>{dateObj.weekday}</p>
                <p id="white" className="dateString">
                  {dateObj.date}
                </p>
                <p>{dateObj.month}</p>
              </div>
            </div>
          ))}
          <Image
            onClick={handleNextDates}
            className="arrows"
            style={{ marginLeft: '5px' }}
            src={require('./images/right.png')}
            alt="map"
          />
        </div>
        <div className="dataTable">
          <Tile style={{ borderBottom: '1px solid #eff1f3' }}>
            <div>
              <p className="heading">List of Water Sources</p>
              <p style={{ fontSize: '18px', color: '#666' }}>Note: Click on the desired soruce for more details</p>
            </div>
          </Tile>
          <ClickableTile
            onClick={() => {
              setShowModal(true)
            }}
            className="sourcesList"
          >
            <p style={{ fontWeight: 'bold' }}>Pavillion Mall</p>
            <div className="sourceDetails">
              <p className="dateData">1500L</p>
              <div style={{ display: 'flex', color: '#666', zIndex: '9999' }}>
                <p>0.5Km</p>
                <Image className="infoIcon" src={require('./images/info.svg')} alt="map" />
              </div>
            </div>
          </ClickableTile>
          <ClickableTile
            onClick={() => {
              setShowModal(true)
            }}
            className="sourcesList"
          >
            <p style={{ fontWeight: 'bold' }}>Pavillion Mall</p>
            <div className="sourceDetails">
              <p className="dateData">1500L</p>
              <div style={{ display: 'flex', color: '#666' }}>
                <p>0.5Km</p>
                <Image className="infoIcon" src={require('./images/info.svg')} alt="map" />
              </div>
            </div>
          </ClickableTile>
          <ClickableTile
            onClick={() => {
              setShowModal(true)
            }}
            className="sourcesList"
          >
            <p style={{ fontWeight: 'bold' }}>Pavillion Mall</p>
            <div className="sourceDetails">
              <p className="dateData">1500L</p>
              <div style={{ display: 'flex', color: '#666' }}>
                <p>0.5Km</p>
                <Image className="infoIcon" src={require('./images/info.svg')} alt="map" />
              </div>
            </div>
          </ClickableTile>
        </div>

        {showModal && (
          <Modal
            open
            size="sm"
            modalHeading="Pavillion Mall"
            primaryButtonText="Book"
            secondaryButtonText="Cancel"
            onRequestClose={() => {
              setShowModal(false)
              setIsInputEmpty1(false)
              setIsInputEmpty2(false)
              setIsInputEmpty3(false)
              setBookingData({
                amount_booked: '',
                booking_contact_name: '',
                booking_contact: '',
                collection_start_time: '',
                collection_end_time: '',
              })
            }}
            onRequestSubmit={(e: any) => {
              setShowModal(false)
              submitForm(e)
            }}
          >
            <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>Available: 1500L</p>
            <div style={{ marginBottom: '30px' }}>
              <TextInput
                type="text"
                id="1"
                size="sm"
                inline
                labelText="Lts to Reserve:"
                placeholder="Enter the no.of litres to reserve"
                name="amount_booked"
                value={bookingData.amount_booked}
                onChange={handleData}
                invalid={isInputEmpty1}
                invalidText="*Required"
              />
            </div>
            <p style={{ marginTop: '15px', marginBottom: '10px' }}>Details for Collection:</p>
            <div style={{ marginBottom: '10px' }}>
              <TextInput
                type="text"
                id="2"
                size="sm"
                inline
                labelText="Name"
                name="booking_contact_name"
                value={bookingData.booking_contact_name}
                onChange={handleData}
                invalid={isInputEmpty2}
                invalidText="*Required"
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <TextInput
                type="number"
                id="3"
                size="sm"
                inline
                labelText="Contact No:"
                name="booking_contact"
                value={bookingData.booking_contact}
                onChange={handleData}
                invalid={isInputEmpty3}
                invalidText={phoneInvalidText}
              />
            </div>

            <div className="timeContainer">
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.32px', fontWeight: '400', color: '#525252' }}>
                Time:
              </span>
              <input
                type="time"
                style={{
                  border: 'none',
                  borderBottom: '1px solid black',
                  width: '180px',
                  height: '40px',
                  marginLeft: '100px',
                  marginRight: '55px',
                }}
                name="collection_start_time"
                value={timestampToTimeString(bookingData.collection_start_time)}
                onChange={handleTime}
                required
              />
              <span>TO</span>
              <input
                type="time"
                style={{
                  border: 'none',
                  borderBottom: '1px solid black',
                  width: '180px',
                  height: '40px',
                  marginLeft: '55px',
                }}
                name="collection_end_time"
                value={timestampToTimeString(bookingData.collection_end_time)}
                onChange={handleTime}
                required
              />
            </div>
            <span>Disclaimer: If not picked within given time slot, booking will be cancelled.</span>
          </Modal>
        )}
        {showNotification && (
          <InlineNotification
            actionButtonLabel="Action"
            kind="error"
            aria-label="closes notification"
            onClose={() => setShowNotification(false)}
            onCloseButtonClick={() => setShowNotification(false)}
            statusIconDescription="notification"
            title={notificationTitle}
          />
        )}
        {showApiResponseNotification && (
          <InlineNotification
            actionButtonLabel="Action"
            kind={responseStatus}
            aria-label="closes notification"
            onClose={() => setShowNotification(false)}
            onCloseButtonClick={() => setShowNotification(false)}
            statusIconDescription="notification"
            title={apiResponseNotificationTitle}
          />
        )}
      </div>
    </div>
  )
}

export default WaterSources
