import { inputMock, outputMock, testWhenImplemented, uppgift3 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks()
})

testWhenImplemented('[Uppgift 3] Stockholm Sverige', uppgift3, async () => {
  inputMock
    .mockResolvedValueOnce('Stockholm')
    .mockResolvedValueOnce('Sverige')

  await uppgift3();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Rom är huvudstad i Italien.');
  expect(outputMock).toHaveBeenCalledWith('Paris är huvudstad i Frankrike.');
  expect(outputMock).toHaveBeenCalledWith('Berlin är huvudstad i Tyskland.');
  expect(outputMock).toHaveBeenCalledWith('Moskva är huvudstad i Ryssland.');
  expect(outputMock).toHaveBeenCalledWith('Stockholm är huvudstad i Sverige.');
});