/**

* IBM Confidential

*

* OCO Source Materials

* Copyright IBM Corp.  2022

*

* The source code for this program is not published or otherwise

* divested of its trade secrets, irrespective of what has been

* deposited with the U.S. Copyright Office.

*

*/

'use client'

import React, { useEffect, useState } from 'react'

import {  Tile } from '@carbon/react'

import { BookingsListService } from '@/services/bookingsList'

import { QueryKeyConst } from '@/constants/query-key'

import { useQuery } from '@tanstack/react-query'

import styles from './booking-listing.module.scss'

 

const {bookingItemHeading, bookingDetails, bookingValues, bookingsPageHeading} = styles

const timestampToTimeString = (timestamp: any) => {

    if (isNaN(timestamp)) {

      return '00:00'

    }
    const date = new Date(Number(timestamp)*1000)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return ` ${hours}:${minutes}`
  }
  const getDate = (bookingDate:any) =>{

    if (isNaN(bookingDate)|| !bookingDate) {

        return '-'

      }
      const date = new Date(Number(bookingDate))
      return date.toDateString()

  }

 

export const BookingListing = () => {

    const [bookings, setBookings] = useState<any>([])

    const { data: bookingsList, isSuccess: isBookingsListSuccess, isLoading: bookingsListIsLoading } = useQuery([QueryKeyConst],

        () => BookingsListService.getBookingsList());

    useEffect(() => {

        if (bookingsList && isBookingsListSuccess) {

            const data: any[] = bookingsList.data.reverse()

            setBookings(data)

        }

    }, [bookingsList, isBookingsListSuccess])

    return (

        <>

            <div className="dataTable">

                <Tile style={{ borderBottom: '1px solid #eff1f3' }}>

                    <div>

                        <p className={bookingsPageHeading}>Bookings</p>

                    </div>

                </Tile>
                {bookings?.map((booking:any) => {
                    const {mall_id, booking_contact_name, amount_booked, collection_end_time, collection_start_time, _id, booking_date} = booking
                    return (
                        <Tile
                            className="sourcesList"
                            key={_id}
                        >
                            <p className={bookingItemHeading}> Mall: {mall_id} </p>

                            <div className={bookingDetails}>

                            <p > Booked by: <span className={bookingValues}>{booking_contact_name}</span> |  Amount Booked: <span className={bookingValues}>{amount_booked}L</span></p>

                            <p > Scheduled Time: <span className={bookingValues}>{getDate(booking_date)} | {timestampToTimeString(collection_start_time)}-{timestampToTimeString(collection_end_time)}</span>  </p>

                            </div>

                        </Tile>
                    )
                })}
            </div>
        </>

    )

}