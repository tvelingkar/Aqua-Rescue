import { EnvUtil } from '@/utils/env'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import useBookingApiNotification from '@/store/booking-notification'

const createBooking = async (bookingData: any) => {
  console.log(bookingData)
  const response = await axios.post(`${EnvUtil.API_BASE_URL}/booking`, bookingData)
  return response.data
}

export const useCreateBooking = () => {
  const {
    showApiResponseNotification,
    apiResponseNotificationTitle,
    responseStatus,
    setShowApiResponseNotification,
    setApiResponseNotificationTitle,
    setResponseStatus,
  } = useBookingApiNotification()
  return useMutation(createBooking, {
    onSuccess: (data) => {
      if (data.status === 'Success') {
        setShowApiResponseNotification(true)
        setApiResponseNotificationTitle('Booked Successfully')
        setResponseStatus('success')
      }
    },
    onError: () => {
      setShowApiResponseNotification(true)
      setApiResponseNotificationTitle('Booking failed. Please try after some time')
      setResponseStatus('error')
    },
  })
}
