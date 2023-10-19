'use client'

import { Tile, Button, SkeletonPlaceholder, ToastNotification } from '@carbon/react'
import { RainDrop, Hourglass, CalendarHeatMap, Meter, Enterprise, Floorplan } from '@carbon/icons-react'

import { Grid, Column, TextInput } from '@carbon/react';

import styles from './leak-details-screen.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { LeakDetailsService } from '@/services/leakDetails';
import { useEffect, useState } from 'react';
import { QueryKeyConst } from '@/constants/query-key';

export const LeakDetailsScreen = ({ mallId, leakId }: any) => {

  const { mallScreenContainer, leakHeading, leakItems, leakDetailsContainer, metreDetailsContainer, leakDetails, itemLabel, itemValue, itemContainer, tileTitle, resolveButton, gridContainer, iconContainer, skeletonLoader, toast } = styles


  const queryClient = useQueryClient()
  const [leakDetailsData, setLeakDetailsData] = useState<any[]>([])
  const [sensorLocationData, setSensorLocationData] = useState<any[]>([])
  const [isLeakResolved, setIsLeakResolved] = useState(false)

  const { data: leakData, isSuccess: isLeakDetailsSuccess, isFetching: leakDetailsIsFetching, isLoading: leakDetailsIsLoading } = useQuery([QueryKeyConst.GET_LEAK_DATA, leakId, mallId],
    () => LeakDetailsService.getLeakData(leakId, mallId));

  useEffect(() => {
    if (leakData && isLeakDetailsSuccess) {
      const data: any[] = []
      const sensorData: any[] = []
      data.push(

        {
          label: "Sensor ID",
          value: leakData.sensor_id
        },
        {
          label: "Leak Start Date",
          value: leakData.timestamp
        })

      if (leakData.resolution_date !== undefined) {
        const d1 = new Date(leakData.timestamp)
        const d2 = new Date(leakData.resolution_date)
        const leakDuration = Math.trunc((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24))

        data.push({
          label: "Leak Duration",
          value: `${leakDuration} days`
        },
          {
            label: "Leak Resolution Date",
            value: d2.toDateString()
          })
        setIsLeakResolved(false)
      }
      data.push({
        label: "Water Lost",
        value: `${leakData.excess_water} L/hr`
      })
      sensorData.push(
        {
          label: "Floor No.",
          value: leakData.floor_no
        },
        {
          label: "Block No.",
          value: leakData.block_no
        }
      )
      setLeakDetailsData(data)
      setSensorLocationData(sensorData)
    }


  }, [leakData, isLeakDetailsSuccess])

  const resolveLeak = useMutation(LeakDetailsService.resolveLeak, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeyConst.GET_LEAK_DATA] })
      setIsLeakResolved(true)
    }
  })


  const onResolveButtonClick = () => {
    const dateObj = new Date();
    resolveLeak.mutateAsync({ resolution_date: dateObj.toUTCString(), leakId: leakId })
  }

  return (
    <div className={mallScreenContainer}>

      {resolveLeak.isSuccess && <ToastNotification
        className={toast}
        id='dte-success-toast'
        key={"Success Toast"}
        caption=""
        hideCloseButton={false}
        iconDescription="close"
        kind="success"
        notificationType="toast"
        role="alert"
        subtitle="Leak resolved successfully"
        timeout={7000}
        title="Success"
      // onCloseButtonClick={onNotificationClose}
      />}

      {resolveLeak.isError && <ToastNotification
        className={toast}
        id='dte-success-toast'
        key={"Success Toast"}
        caption=""
        hideCloseButton={false}
        iconDescription="close"
        kind="error"
        notificationType="toast"
        role="alert"
        subtitle="Error"
        timeout={7000}
        title="Error"
      />}

      <Tile id="tile-1"
      >
        {leakDetailsIsLoading ? <SkeletonPlaceholder className={skeletonLoader} /> : <div className={leakHeading}>
          {!isLeakResolved ? <div className={leakItems}>
            <h4>
              Ongoing Leak </h4> </div> :
            <h4 className={leakItems}> Leak Resolved! </h4>}
          <h5 className={leakItems}>{leakData?.excess_water} L/hr</h5>
          <div className={resolveButton}>
            {!isLeakResolved && <Button size='md'
              onClick={onResolveButtonClick}>
              Resolve Leak
            </Button>}
          </div>
        </div>}
        <br />
        <br />
      </Tile>


      <div className={leakDetailsContainer} >
        <Tile id="tile-1"
          className={metreDetailsContainer}
        >

          {leakDetailsIsLoading ? <SkeletonPlaceholder className={skeletonLoader} /> :
            <div>
              <h5 className={tileTitle}>Sensor Location</h5>
              <Grid>
                {sensorLocationData?.map((item, index) => (<Column key={`${item.label}-${item.value}-${index}`} sm={4} lg={8} md={4} as="article">
                  <div className={gridContainer}>
                    <div className={iconContainer}>
                      {item.label == 'Floor No.' ? <Floorplan /> :
                        item.label == 'Block No.' ? <Enterprise /> : <Hourglass />}
                    </div>
                    <div className={leakDetails}>
                      <div className={itemContainer}>
                        <p className={itemLabel}>{item.label}</p>
                        <p className={itemValue}>{item.value}</p>
                      </div>
                    </div>
                  </div>
                </Column>))}
              </Grid>
              <br />
              <br />
            </div>}
        </Tile>
        <Tile id="tile-1"
          className={metreDetailsContainer}
        >
          {leakDetailsIsLoading ? <SkeletonPlaceholder className={skeletonLoader} /> :
            <div>
              <h5 className={tileTitle}>Leak Details</h5>

              <Grid>

                {leakDetailsData?.map((item, index) => (<Column key={`${item.label}-${item.value}-${index}`} sm={4} lg={8} md={4} as="article">
                  <div className={gridContainer}>
                    <div className={iconContainer}>
                      {item.label == 'Water Lost' ? <RainDrop /> :
                        item.label == 'Leak Duration' ? <Hourglass /> :
                          (item.label == 'Leak Start Date' || item.label == 'Leak Resolution Date') ? <CalendarHeatMap /> :
                            item.label == 'Sensor ID' ? <Meter /> : <Hourglass />}
                    </div>
                    <div className={leakDetails}> <div className={itemContainer}><p className={itemLabel}>{item.label}</p>
                      <p className={itemValue}>{item.value}</p>
                    </div>
                    </div>
                  </div>
                </Column>))}
              </Grid>
            </div>}
          <br />
          <br />
        </Tile>
      </div>
    </div>
  )
}
