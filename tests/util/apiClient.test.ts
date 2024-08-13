import axios from 'axios';
import { fetchData } from '../../src/util/apiClient';

// fetches data successfully from a valid URL
it('should return data when the URL is valid', async () => {
    const mockData = { data: 'test data' };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData });
    const url = 'https://valid.url';
    const result = await fetchData(url);

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(url, {});
});