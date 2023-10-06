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
import documenthub from 'documenthub8'

import { AppService } from './app'

describe('App Service', () => {
  it('when getAppMetaData has response', async () => {
    const catalog = {
      title: 'Next Starter',
    }

    jest.spyOn(documenthub, 'getCatalogFile').mockResolvedValue(catalog)
    expect(() => {
      AppService.getAppMetaData()
    }).not.toThrow()
  })

  it('When getAppMetaData doesnt have response', async () => {
    jest.spyOn(documenthub, 'getCatalogFile').mockResolvedValue(undefined)
    expect(await AppService.getAppMetaData()).toBe(undefined)
  })
})
