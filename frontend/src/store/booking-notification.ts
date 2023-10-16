import { create } from 'zustand'

const useBookingApiNotification = create((set) => ({
  showApiResponseNotification: false,
  apiResponseNotificationTitle: '',
  responseStatus: '',
  setShowApiResponseNotification: (show: boolean) => set({ showApiResponseNotification: show }),
  setApiResponseNotificationTitle: (title: string) => set({ apiResponseNotificationTitle: title }),
  setResponseStatus: (status: string) => set({ responseStatus: status }),
}))

export default useBookingApiNotification
