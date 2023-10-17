
import documenthub from 'documenthub8'

import { AppService } from './app'

describe('App Service', () => {
  it('when getAppMetaData has response', async () => {
    const catalog = {
      title: 'Aqua Rescue',
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
