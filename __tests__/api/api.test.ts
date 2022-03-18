import {
  getLocationByCity,
  getLocationByWoeId
} from '../../src/api/weather';
import { request } from '../../src/api/request';
import { locationByWoe, locationByCity } from '../../src/utils/dataMock';

const fetchMock: any = fetch;
describe('testing api', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('calls getLocationByCity', () => {
    fetchMock.mockResponse(JSON.stringify(locationByCity))
    getLocationByCity('ho chi minh');
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

  it('calls getLocationByWoeId', () => {
    fetchMock.mockResponse(JSON.stringify(locationByWoe))
    getLocationByWoeId('2487956');
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

  it('handle error response', () => {
    fetchMock.mockReject(new Error('fake error message'))
    request('http://fakeMock.abc', 'GET');
    expect(fetchMock.mock.calls.length).toEqual(1)
  })
})