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

import { PageWrapper } from '@/components/PageWrapper/page-wrapper'

import { BookingListing as Listing } from '@/components/BookingListing/booking-listing'

 

const BookingListing = async () => {

    return (

        <PageWrapper>

            <Listing/>

        </PageWrapper>

    )

}

export default BookingListing